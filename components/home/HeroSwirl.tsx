"use client";

import { motion, useReducedMotion } from "framer-motion";
import { imagePath } from "@/lib/image-path";
import type { RuloPathData, RuloSvgParsed } from "@/lib/rulo-svg-paths";

/** pathLength draw needs a visible stroke; gradients → token; missing → design cream. */
function resolveStroke(parsed: RuloPathData): string {
  const s = parsed.stroke;
  if (!s || s === "none") return "var(--color-rulo-stroke)";
  if (s.startsWith("url(")) return "var(--color-rulo-stroke)";
  return s;
}

function resolveStrokeWidth(parsed: RuloPathData): number {
  const w = parsed.strokeWidth;
  if (!w) return 3;
  const n = Number.parseFloat(String(w).replace(/px$/i, ""));
  return Number.isFinite(n) && n > 0 ? n : 3;
}

type Props = {
  rulo: RuloSvgParsed;
  /** Seconds before pathLength / clip reveal starts. */
  drawDelay?: number;
  /** pathLength animation duration (seconds). */
  drawDuration?: number;
};

/**
 * Vector swirl: `<path>` / polyline / line use `pathLength` (pen stroke).
 * If `rulo.svg` has no drawable vectors (e.g. only `<image>` / pattern), we show the raster
 * SVG as `<img>` and animate a left-to-right reveal — true stroke-draw needs vector paths in the file.
 */
export function HeroSwirl({ rulo, drawDelay = 0, drawDuration = 2.5 }: Props) {
  const { viewBox, width, height, paths } = rulo;
  const reduceMotion = useReducedMotion();

  const drawTransitionDelayed = {
    duration: drawDuration,
    ease: "easeInOut" as const,
    delay: reduceMotion ? 0 : drawDelay,
  };

  if (paths.length === 0) {
    const imgProps = {
      src: imagePath("rulo.svg"),
      alt: "",
      width,
      height,
      className: "block h-auto w-full max-w-none object-[22%_center]" as const,
      decoding: "async" as const,
      fetchPriority: "high" as const,
    };
    if (reduceMotion) {
      return <img {...imgProps} />;
    }
    return (
      <motion.img
        {...imgProps}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={drawTransitionDelayed}
      />
    );
  }

  return (
    <svg
      viewBox={viewBox}
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-auto w-full max-w-none object-[22%_center]"
    >
      {paths.map((p, i) => (
        <motion.path
          key={`${i}-${p.d.slice(0, 32)}`}
          d={p.d}
          fill="none"
          stroke={resolveStroke(p)}
          strokeWidth={resolveStrokeWidth(p)}
          strokeLinecap={
            (p.strokeLinecap as "round" | "butt" | "square" | undefined) ?? "round"
          }
          strokeLinejoin={
            (p.strokeLinejoin as "round" | "miter" | "bevel" | undefined) ?? "round"
          }
          transform={p.transform}
          fillRule={p.fillRule as "nonzero" | "evenodd" | undefined}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={drawTransitionDelayed}
        />
      ))}
    </svg>
  );
}
