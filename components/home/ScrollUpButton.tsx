"use client";
import { useEffect, useState } from "react";

export function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function check() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setVisible(scrolled >= total - 400);
    }
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#181818] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#2a2a2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#181818] focus-visible:ring-offset-2 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M8 12V4M8 4L4 8M8 4l4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Scroll up
    </button>
  );
}
