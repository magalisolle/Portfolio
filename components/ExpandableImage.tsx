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
};

export function ExpandableImage({
  src,
  alt,
  width,
  height,
  className = "",
  sizes,
  priority,
  containerClassName = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className={`group relative cursor-zoom-in ${containerClassName}`} onClick={() => setOpen(true)}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          sizes={sizes}
          priority={priority}
        />
        {/* Expand icon — visible on hover */}
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
            onClick={() => setOpen(false)}
          >
            {/* Close button */}
            <button
              ref={closeRef}
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2L14 14M14 2L2 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Image — stops propagation so clicking on it doesn't close */}
            <div
              className="relative max-h-[90vh] max-w-[90vw] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={src}
                alt={alt}
                style={{ maxHeight: "90vh", maxWidth: "90vw", width: "auto", height: "auto" }}
                className="rounded-lg"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
