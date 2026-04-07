#!/usr/bin/env python3
"""Genera `public/images/mockupcoaching-frame.png`: mismo mockup con pantalla transparente.
   Debe mantenerse alineado con SCREEN_* y VIDEO_* en GoCoachingCaseStudyContent.tsx."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public/images/mockupcoaching 1.png"
OUT = ROOT / "public/images/mockupcoaching-frame.png"

MOCKUP_W = 3009
MOCKUP_H = 1842
SCREEN_LEFT = 972
SCREEN_TOP = 365
SCREEN_WIDTH = 1560
SCREEN_HEIGHT = 1007
RADIUS = 14


def main() -> None:
    left = SCREEN_LEFT
    top = SCREEN_TOP
    right = left + SCREEN_WIDTH
    bottom = top + SCREEN_HEIGHT

    im = Image.open(SRC).convert("RGBA")
    mask = Image.new("L", (MOCKUP_W, MOCKUP_H), 255)
    dr = ImageDraw.Draw(mask)
    dr.rounded_rectangle([left, top, right, bottom], radius=RADIUS, fill=0)

    r, g, b, a = im.split()
    ma = np.array(mask)
    aa = np.array(a)
    new_a = np.where(ma == 0, 0, aa).astype(np.uint8)
    out = Image.merge("RGBA", (r, g, b, Image.fromarray(new_a)))
    out.save(OUT, optimize=True)
    print(f"Wrote {OUT} (hole {left:.1f},{top:.1f}–{right:.1f},{bottom:.1f}, r={RADIUS})")


if __name__ == "__main__":
    main()
