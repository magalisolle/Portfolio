"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  containerClassName?: string;
  zoomable?: boolean;
};

type View = { zoom: number; panX: number; panY: number };
const INITIAL: View = { zoom: 1, panX: 0, panY: 0 };
const MAX_ZOOM = 4;

function zoomAt(prev: View, factor: number, cx = 0, cy = 0): View {
  const next = Math.min(MAX_ZOOM, Math.max(1, prev.zoom * factor));
  if (next <= 1) return INITIAL;
  return {
    zoom: next,
    panX: cx - (cx - prev.panX) * (next / prev.zoom),
    panY: cy - (cy - prev.panY) * (next / prev.zoom),
  };
}

export function ExpandableImage({
  src,
  alt,
  width,
  height,
  className = "",
  sizes,
  priority,
  containerClassName = "",
  zoomable = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>(INITIAL);
  const closeRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const isDragging = useRef(false);
  const dragDist = useRef(0);
  const lastMouse = useRef({ x: 0, y: 0 });
  const lastTouchDist = useRef<number | null>(null);
  const lastTouchMid = useRef({ x: 0, y: 0 });
  const touchStartPos = useRef({ x: 0, y: 0 });
  const touchStartTime = useRef(0);

  const handleClose = () => {
    setOpen(false);
    setView(INITIAL);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const getOffset = (clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return { cx: 0, cy: 0 };
    return {
      cx: clientX - rect.left - rect.width / 2,
      cy: clientY - rect.top - rect.height / 2,
    };
  };

  const clickZoom = (cx: number, cy: number) => {
    setView(prev => {
      if (prev.zoom < 1.9) return zoomAt(prev, 2 / prev.zoom, cx, cy);
      if (prev.zoom < 3.5) return zoomAt(prev, 4 / prev.zoom, cx, cy);
      return INITIAL;
    });
  };

  /* ── Mouse ─────────────────────────────────────────────────────────── */
  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    const { cx, cy } = getOffset(e.clientX, e.clientY);
    setView(prev => zoomAt(prev, e.deltaY < 0 ? 1.12 : 1 / 1.12, cx, cy));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragDist.current = 0;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    if (view.zoom > 1) e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    dragDist.current += Math.abs(dx) + Math.abs(dy);
    lastMouse.current = { x: e.clientX, y: e.clientY };
    if (view.zoom > 1 && dragDist.current > 4) {
      setView(prev => ({ ...prev, panX: prev.panX + dx, panY: prev.panY + dy }));
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const wasClick = dragDist.current < 5;
    isDragging.current = false;
    if (!wasClick) return;
    const r = imgRef.current?.getBoundingClientRect();
    const onImage = r && e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    if (!onImage) { handleClose(); return; }
    const { cx, cy } = getOffset(e.clientX, e.clientY);
    clickZoom(cx, cy);
  };

  /* ── Touch ─────────────────────────────────────────────────────────── */
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastTouchDist.current = Math.sqrt(dx * dx + dy * dy);
      lastTouchMid.current = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      };
    } else if (e.touches.length === 1) {
      touchStartTime.current = Date.now();
      touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      if (view.zoom > 1) {
        isDragging.current = true;
        lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && lastTouchDist.current !== null) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const { cx, cy } = getOffset(lastTouchMid.current.x, lastTouchMid.current.y);
      setView(prev => zoomAt(prev, dist / lastTouchDist.current!, cx, cy));
      lastTouchDist.current = dist;
    } else if (e.touches.length === 1 && isDragging.current) {
      const dx = e.touches[0].clientX - lastMouse.current.x;
      const dy = e.touches[0].clientY - lastMouse.current.y;
      lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setView(prev => ({ ...prev, panX: prev.panX + dx, panY: prev.panY + dy }));
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length === 0 && e.changedTouches.length === 1) {
      const dt = Date.now() - touchStartTime.current;
      const dx = Math.abs(e.changedTouches[0].clientX - touchStartPos.current.x);
      const dy = Math.abs(e.changedTouches[0].clientY - touchStartPos.current.y);
      if (dt < 300 && dx < 10 && dy < 10) {
        const tx = e.changedTouches[0].clientX;
        const ty = e.changedTouches[0].clientY;
        const r = imgRef.current?.getBoundingClientRect();
        const onImage = r && tx >= r.left && tx <= r.right && ty >= r.top && ty <= r.bottom;
        if (!onImage) { handleClose(); return; }
        const { cx, cy } = getOffset(tx, ty);
        clickZoom(cx, cy);
      }
    }
    isDragging.current = false;
    lastTouchDist.current = null;
  };

  const zoomCursor = !zoomable
    ? undefined
    : view.zoom >= MAX_ZOOM
      ? "zoom-out"
      : "zoom-in";

  return (
    <>
      <div
        className={`group relative cursor-zoom-in ${containerClassName}`}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          sizes={sizes}
          priority={priority}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md bg-black/40 opacity-100 backdrop-blur-sm transition-opacity md:opacity-0 md:group-hover:opacity-100"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 5V1H5M9 1H13V5M13 9V13H9M5 13H1V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={handleClose}
          >
            {/* Close */}
            <button
              ref={closeRef}
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2L14 14M14 2L2 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Zoom controls */}
            {zoomable && (
              <div
                className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setView(prev => zoomAt(prev, 1 / 1.3))}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20"
                  aria-label="Zoom out"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <span className="min-w-[3rem] text-center text-xs text-white">
                  {Math.round(view.zoom * 100)}%
                </span>
                <button
                  onClick={() => setView(prev => zoomAt(prev, 1.3))}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20"
                  aria-label="Zoom in"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2v10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                {view.zoom > 1 && (
                  <button
                    onClick={() => setView(INITIAL)}
                    className="px-1 text-xs text-white/60 transition-colors hover:text-white"
                  >
                    reset
                  </button>
                )}
              </div>
            )}

            {/* Image container — full modal space for zoomable, tight wrap for normal */}
            {zoomable ? (
              <div
                ref={containerRef}
                className="relative flex items-center justify-center overflow-hidden rounded-lg"
                style={{ width: "90vw", height: "88vh", cursor: zoomCursor }}
                onClick={e => e.stopPropagation()}
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={() => { isDragging.current = false; }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  ref={imgRef}
                  src={src}
                  alt={alt}
                  draggable={false}
                  style={{
                    maxWidth: "90vw",
                    maxHeight: "88vh",
                    width: "auto",
                    height: "auto",
                    display: "block",
                    transform: `translate(${view.panX}px, ${view.panY}px) scale(${view.zoom})`,
                    transformOrigin: "center",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                  className="select-none"
                />
                {view.zoom === 1 && (
                  <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/40 px-3 py-1 text-xs text-white/60 backdrop-blur-sm">
                    Click or scroll to zoom
                  </p>
                )}
              </div>
            ) : (
              <div
                className="relative max-h-[90vh] max-w-[90vw] overflow-auto"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{ maxHeight: "90vh", maxWidth: "90vw", width: "auto", height: "auto" }}
                  className="rounded-lg"
                />
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
