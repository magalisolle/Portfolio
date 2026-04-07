"use client";
import { useRef } from "react";

export function LoopedVideo({
  src,
  loopEnd,
  className,
  ariaLabel,
}: {
  src: string;
  loopEnd: number;
  className?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  function handleTimeUpdate() {
    const v = ref.current;
    if (v && v.currentTime >= loopEnd) {
      v.currentTime = 0;
    }
  }

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-label={ariaLabel}
      onTimeUpdate={handleTimeUpdate}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
