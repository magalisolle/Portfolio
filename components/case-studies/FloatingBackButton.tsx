"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons/ArrowIcons";
import { useLanguage } from "@/lib/i18n";

export function FloatingBackButton({ href }: { href: string }) {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();
  const label = lang === "es" ? "Volver" : "Back";

  useEffect(() => {
    function check() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <Link
      href={href}
      aria-label={label}
      className={`fixed top-[84px] left-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#181818] text-white shadow-lg transition-all duration-300 hover:bg-[#2a2a2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#181818] focus-visible:ring-offset-2 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowLeftIcon className="size-4" aria-hidden />
    </Link>
  );
}
