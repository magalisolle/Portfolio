#!/usr/bin/env node
/**
 * Downloads Go! Coaching case study PNGs from the Figma REST API into
 * `public/images/case-studies/go-coaching/`.
 *
 * Requires a personal access token: https://www.figma.com/developers/api#access-tokens
 *
 * Usage:
 *   FIGMA_TOKEN=your_token node scripts/download-go-coaching-figma-images.mjs
 */

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public/images/case-studies/go-coaching");

const FILE_KEY = "FeF5ES2xRY75wBP8gFjOVr";

/** Node id → output filename (same names as `GoCoachingCaseStudyContent.tsx`). */
const NODES = [
  ["5032:3157", "moodboard-1.png"],
  ["5225:15589", "research-artifacts.png"],
  ["5229:15608", "desktop-student-view.png"],
  ["5229:15606", "design-decisions.png"],
  ["5040:3160", "leads-loans-section.png"],
  ["5229:15610", "coach-experience.png"],
];

const token = process.env.FIGMA_TOKEN;
if (!token) {
  console.error(
    "Missing FIGMA_TOKEN. Create a token in Figma → Settings → Security → Personal access tokens, then run:\n" +
      "  FIGMA_TOKEN=... node scripts/download-go-coaching-figma-images.mjs",
  );
  process.exit(1);
}

const ids = NODES.map(([id]) => id).join(",");
const url = new URL(`https://api.figma.com/v1/images/${FILE_KEY}`);
url.searchParams.set("ids", ids);
url.searchParams.set("format", "png");
url.searchParams.set("scale", "2");

const res = await fetch(url, {
  headers: { "X-Figma-Token": token },
});

if (!res.ok) {
  const text = await res.text();
  console.error("Figma API error:", res.status, text);
  process.exit(1);
}

const data = await res.json();
const images = data.images ?? {};
if (data.err) {
  console.error("Figma API:", data.err);
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });

for (const [nodeId, fileName] of NODES) {
  const imageUrl = images[nodeId];
  if (!imageUrl) {
    console.warn("No URL for node", nodeId);
    continue;
  }
  const imgRes = await fetch(imageUrl);
  if (!imgRes.ok) {
    console.warn("Failed to download", fileName, imgRes.status);
    continue;
  }
  const buf = Buffer.from(await imgRes.arrayBuffer());
  await writeFile(join(OUT_DIR, fileName), buf);
  console.log("Wrote", fileName, `(${buf.length} bytes)`);
}

console.log("Done →", OUT_DIR);
