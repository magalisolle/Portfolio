import "server-only";

import fs from "fs";
import path from "path";

export type RuloPathData = {
  d: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  transform?: string;
  opacity?: string;
  fillRule?: string;
};

export type RuloSvgParsed = {
  viewBox: string;
  width: number;
  height: number;
  paths: RuloPathData[];
};

/**
 * Extract attribute value from a tag attribute string (double-quoted).
 */
function attr(attrStr: string, name: string): string | undefined {
  const re = new RegExp(`\\b${name}="([^"]*)"`, "i");
  return attrStr.match(re)?.[1];
}

function parseAllAttrs(attrStr: string): Record<string, string> {
  const out: Record<string, string> = {};
  const re = /([a-zA-Z][a-zA-Z0-9:-]*)\s*=\s*"([^"]*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(attrStr))) {
    out[m[1].toLowerCase()] = m[2];
  }
  return out;
}

function combineTransforms(stack: string[]): string | undefined {
  const parts = stack.filter(Boolean);
  if (parts.length === 0) return undefined;
  return parts.join(" ");
}

/** Parse `points` (comma/whitespace-separated numbers) into `M L L …` path data. */
function polylinePointsToD(points: string): string | undefined {
  const nums = points
    .trim()
    .split(/[\s,]+/)
    .filter(Boolean)
    .map((x) => Number.parseFloat(x));
  const valid = nums.filter((n) => Number.isFinite(n));
  if (valid.length < 2) return undefined;
  if (valid.length % 2 !== 0) valid.pop();
  if (valid.length < 2) return undefined;
  const parts: string[] = [`M ${valid[0]} ${valid[1]}`];
  for (let i = 2; i < valid.length; i += 2) {
    parts.push(`L ${valid[i]} ${valid[i + 1]}`);
  }
  return parts.join(" ");
}

function polygonPointsToD(points: string): string | undefined {
  const open = polylinePointsToD(points);
  if (!open) return undefined;
  return `${open} Z`;
}

function lineToD(attrs: Record<string, string>): string | undefined {
  const x1 = Number.parseFloat(attrs.x1 ?? "0");
  const y1 = Number.parseFloat(attrs.y1 ?? "0");
  const x2 = Number.parseFloat(attrs.x2 ?? "0");
  const y2 = Number.parseFloat(attrs.y2 ?? "0");
  if (![x1, y1, x2, y2].every(Number.isFinite)) return undefined;
  return `M ${x1} ${y1} L ${x2} ${y2}`;
}

/** Presentation props from embedded `<style>.class { … }</style>` (Illustrator/Figma exports). */
type ClassPresentation = {
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
};

function parseCssBlockDeclarations(body: string): ClassPresentation {
  const out: ClassPresentation = {};
  const prop = (name: string): string | undefined => {
    const re = new RegExp(`\\b${name}\\s*:\\s*([^;]+?)(?:;|$)`, "i");
    const m = body.match(re);
    return m ? m[1].trim() : undefined;
  };
  const fill = prop("fill");
  const stroke = prop("stroke");
  const strokeWidth = prop("stroke-width");
  const strokeLinecap = prop("stroke-linecap");
  const strokeLinejoin = prop("stroke-linejoin");
  if (fill) out.fill = fill;
  if (stroke) out.stroke = stroke;
  if (strokeWidth) out.strokeWidth = strokeWidth;
  if (strokeLinecap) out.strokeLinecap = strokeLinecap;
  if (strokeLinejoin) out.strokeLinejoin = strokeLinejoin;
  return out;
}

/** Map class name → stroke/fill from all `<style>` blocks in the file (paths often use `class="cls-1"`). */
function parseSvgStyleClassMap(svgContent: string): Record<string, ClassPresentation> {
  const map: Record<string, ClassPresentation> = {};
  const styleRe = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m: RegExpExecArray | null;
  while ((m = styleRe.exec(svgContent))) {
    const css = m[1];
    const ruleRe = /\.([a-zA-Z_][a-zA-Z0-9_-]*)\s*\{([^}]*)\}/g;
    let r: RegExpExecArray | null;
    while ((r = ruleRe.exec(css))) {
      const className = r[1];
      const body = r[2];
      map[className] = { ...map[className], ...parseCssBlockDeclarations(body) };
    }
  }
  return map;
}

function mergeClassPresentation(
  attrs: Record<string, string>,
  classStyles: Record<string, ClassPresentation>,
): ClassPresentation {
  let merged: ClassPresentation = {};
  const classAttr = attrs.class;
  if (!classAttr) return merged;
  for (const c of classAttr.trim().split(/\s+/)) {
    if (classStyles[c]) merged = { ...merged, ...classStyles[c] };
  }
  return merged;
}

function attrsToRuloPath(
  d: string,
  attrs: Record<string, string>,
  transformStack: string[],
  classStyles: Record<string, ClassPresentation>,
): RuloPathData {
  const local = attrs.transform;
  const stack = local
    ? [...transformStack, local]
    : [...transformStack];
  const transform = combineTransforms(stack);
  const fromClass = mergeClassPresentation(attrs, classStyles);
  return {
    d,
    fill: attrs.fill ?? fromClass.fill,
    stroke: attrs.stroke ?? fromClass.stroke,
    strokeWidth: attrs["stroke-width"] ?? fromClass.strokeWidth,
    strokeLinecap: attrs["stroke-linecap"] ?? fromClass.strokeLinecap,
    strokeLinejoin: attrs["stroke-linejoin"] ?? fromClass.strokeLinejoin,
    transform,
    opacity: attrs.opacity,
    fillRule: attrs["fill-rule"],
  };
}

function parseOpeningTag(
  s: string,
  i: number,
): { name: string; attrStr: string; selfClosing: boolean; end: number } | null {
  if (s[i] !== "<") return null;
  const gt = s.indexOf(">", i);
  if (gt === -1) return null;
  const selfClosing = s[gt - 1] === "/";
  const innerEnd = selfClosing ? gt - 1 : gt;
  const inner = s.slice(i + 1, innerEnd).trim();
  const nameMatch = inner.match(/^([a-zA-Z][a-zA-Z0-9:-]*)\s*([\s\S]*)$/);
  if (!nameMatch) return null;
  return {
    name: nameMatch[1].toLowerCase(),
    attrStr: nameMatch[2].trim(),
    selfClosing,
    end: gt + 1,
  };
}

function isTagOpen(s: string, pos: number, tagName: string): boolean {
  if (!s.startsWith(`<${tagName}`, pos)) return false;
  const after = pos + 1 + tagName.length;
  const c = s[after];
  return c === " " || c === "\t" || c === "\n" || c === "/" || c === ">";
}

function isGOpen(s: string, pos: number): boolean {
  if (!s.startsWith("<g", pos)) return false;
  const after = pos + 2;
  const c = s[after];
  return c === " " || c === "\t" || c === "\n" || c === "/" || c === ">";
}

/**
 * Find index after matching `</tagName>` for nested same-named tags.
 */
function findMatchingClose(s: string, tagName: string, innerStart: number): number {
  let depth = 1;
  let i = innerStart;
  const closeStr = `</${tagName}>`;
  while (i < s.length && depth > 0) {
    const next = s.indexOf("<", i);
    if (next === -1) break;
    if (s.startsWith(closeStr, next)) {
      depth--;
      if (depth === 0) return next + closeStr.length;
      i = next + closeStr.length;
      continue;
    }
    if (s[next + 1] === "/") {
      const gt = s.indexOf(">", next);
      i = gt === -1 ? s.length : gt + 1;
      continue;
    }
    if (tagName === "g") {
      if (isGOpen(s, next)) {
        depth++;
        const gt = s.indexOf(">", next);
        i = gt === -1 ? s.length : gt + 1;
      } else {
        const gt = s.indexOf(">", next);
        i = gt === -1 ? s.length : gt + 1;
      }
      continue;
    }
    if (isTagOpen(s, next, tagName)) {
      depth++;
      const gt = s.indexOf(">", next);
      i = gt === -1 ? s.length : gt + 1;
      continue;
    }
    const gt = s.indexOf(">", next);
    i = gt === -1 ? s.length : gt + 1;
  }
  return innerStart;
}

const SKIP_CONTAINER_TAGS = new Set([
  "defs",
  "clippath",
  "mask",
  "style",
  "metadata",
  "title",
  "desc",
  "pattern",
  "marker",
  "symbol",
  "svg",
]);

function pushDrawableFromAttrs(
  name: string,
  attrs: Record<string, string>,
  transformStack: string[],
  classStyles: Record<string, ClassPresentation>,
  out: RuloPathData[],
): void {
  let d: string | undefined;
  if (name === "path") {
    d = attrs.d;
  } else if (name === "polyline") {
    const pts = attrs.points;
    if (pts) d = polylinePointsToD(pts);
  } else if (name === "polygon") {
    const pts = attrs.points;
    if (pts) d = polygonPointsToD(pts);
  } else if (name === "line") {
    d = lineToD(attrs);
  }
  if (!d) return;
  out.push(attrsToRuloPath(d, attrs, transformStack, classStyles));
}

function parseFragment(
  fragment: string,
  transformStack: string[],
  classStyles: Record<string, ClassPresentation>,
): RuloPathData[] {
  const out: RuloPathData[] = [];
  let i = 0;
  while (i < fragment.length) {
    const lt = fragment.indexOf("<", i);
    if (lt === -1) break;
    if (fragment.startsWith("<!--", lt)) {
      const end = fragment.indexOf("-->", lt + 4);
      i = end === -1 ? fragment.length : end + 3;
      continue;
    }
    if (fragment.startsWith("<?", lt)) {
      const end = fragment.indexOf("?>", lt + 2);
      i = end === -1 ? fragment.length : end + 2;
      continue;
    }
    if (fragment.startsWith("<![CDATA[", lt)) {
      const end = fragment.indexOf("]]>", lt + 9);
      i = end === -1 ? fragment.length : end + 3;
      continue;
    }

    const open = parseOpeningTag(fragment, lt);
    if (!open) {
      i = lt + 1;
      continue;
    }
    const { name, attrStr, selfClosing, end } = open;

    if (SKIP_CONTAINER_TAGS.has(name)) {
      if (!selfClosing) {
        const closeEnd = findMatchingClose(fragment, name, end);
        i = closeEnd;
        continue;
      }
      i = end;
      continue;
    }

    if (name === "g") {
      const attrs = parseAllAttrs(attrStr);
      const t = attrs.transform;
      const childStack = t ? [...transformStack, t] : [...transformStack];
      if (selfClosing) {
        i = end;
        continue;
      }
      const closeEnd = findMatchingClose(fragment, "g", end);
      const innerEnd = closeEnd - "</g>".length;
      const inner = fragment.slice(end, innerEnd);
      out.push(...parseFragment(inner, childStack, classStyles));
      i = closeEnd;
      continue;
    }

    if (name === "path" || name === "polyline" || name === "polygon" || name === "line") {
      const attrs = parseAllAttrs(attrStr);
      let iNext = end;
      if (!selfClosing) {
        iNext = findMatchingClose(fragment, name, end);
      }
      pushDrawableFromAttrs(name, attrs, transformStack, classStyles, out);
      i = iNext;
      continue;
    }

    i = end;
  }
  return out;
}

function extractSvgInner(svgContent: string): string {
  const openIdx = svgContent.search(/<svg\s/i);
  if (openIdx === -1) return "";
  const afterOpen = svgContent.indexOf(">", openIdx);
  if (afterOpen === -1) return "";
  const closeIdx = svgContent.lastIndexOf("</svg>");
  if (closeIdx === -1 || closeIdx <= afterOpen) return svgContent.slice(afterOpen + 1);
  return svgContent.slice(afterOpen + 1, closeIdx);
}

function dimensionsFromViewBox(viewBoxStr: string): { w: number; h: number } | undefined {
  const parts = viewBoxStr
    .trim()
    .split(/[\s,]+/)
    .map((x) => Number.parseFloat(x));
  if (parts.length >= 4 && parts.slice(0, 4).every((n) => Number.isFinite(n))) {
    return { w: parts[2], h: parts[3] };
  }
  return undefined;
}

/** Unique opening tag names in the raw markup (excludes `</…>`, `<!--`, `<!`, `<?`). */
function collectSvgElementTypeNames(svgContent: string): string[] {
  const seen = new Set<string>();
  const re = /<(?![/!?])([a-zA-Z][a-zA-Z0-9:-]*)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(svgContent))) {
    seen.add(m[1].toLowerCase());
  }
  return [...seen].sort();
}

/**
 * Parse SVG markup: collect drawable strokes as path `d` strings from `<path>`,
 * `<polyline>` / `<polygon>` (converted to `d`), `<line>`, including nested `<g>`.
 */
export function parseRuloSvgPaths(svgContent: string): RuloSvgParsed {
  const viewBox = attr(svgContent, "viewBox") ?? "0 0 1013 684";
  const widthAttr = attr(svgContent, "width");
  const heightAttr = attr(svgContent, "height");
  let w = Number.parseFloat(widthAttr ?? "");
  let h = Number.parseFloat(heightAttr ?? "");
  if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) {
    const vb = dimensionsFromViewBox(viewBox);
    if (vb) {
      w = vb.w;
      h = vb.h;
    } else {
      w = 1013;
      h = 684;
    }
  }

  const classStyles = parseSvgStyleClassMap(svgContent);
  const inner = extractSvgInner(svgContent);
  const paths = parseFragment(inner, [], classStyles);

  if (process.env.NODE_ENV === "development") {
    const elementTypes = collectSvgElementTypeNames(svgContent);
    console.log(
      "[rulo-svg-paths] drawable paths collected:",
      paths.length,
      paths.length === 0 ? "(paths.length is 0)" : "(paths.length > 0)",
    );
    console.log("[rulo-svg-paths] SVG element types in file:", elementTypes.join(", "));
  }

  return { viewBox, width: w, height: h, paths };
}

/** Read `/public/images/rulo.svg` and extract path data (server-only). */
export function getRuloSvgPathsFromFile(): RuloSvgParsed {
  const filePath = path.join(process.cwd(), "public/images/rulo.svg");
  const svgContent = fs.readFileSync(filePath, "utf8");
  return parseRuloSvgPaths(svgContent);
}
