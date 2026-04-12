"use client";

import Image from "next/image";
import linkedinSrc from "@/public/images/linkedin.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

const COPY_FEEDBACK_MS = 2000;

const T = {
  en: {
    letsChat: "Let's chat :)",
    copyEmail: "Copy my email",
    copied: "Copied!",
    letsConnect: "Let's connect",
    seeMyExperience: "See my experience",
    downloadResume: "Download Resume",
    copyright: "© 2026 Magali Solle",
    ariaLinkedIn: "LinkedIn",
    ariaCopyEmail: (email: string) => `Copy ${email} to clipboard`,
    ariaCopied: "Email copied to clipboard",
  },
  es: {
    letsChat: "¡Hablemos! :)",
    copyEmail: "Copiar mi email",
    copied: "¡Copiado!",
    letsConnect: "Conectemos",
    seeMyExperience: "Mirá mi experiencia",
    downloadResume: "Descargar CV",
    copyright: "© 2026 Magali Solle",
    ariaLinkedIn: "LinkedIn",
    ariaCopyEmail: (email: string) => `Copiar ${email} al portapapeles`,
    ariaCopied: "Email copiado al portapapeles",
  },
};

const downloadIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path
      d="M7 1v8M7 9l-3-3M7 9l3-3M1 12h12"
      stroke="#fdfdfd"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function ResumePopover({ label }: { label: string }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverWidth, setPopoverWidth] = useState<number | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setPopoverOpen(true);
    if (btnRef.current) setPopoverWidth(btnRef.current.offsetWidth);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setPopoverOpen(false), 100);
  }

  useEffect(() => {
    if (!popoverOpen) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setPopoverOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [popoverOpen]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={btnRef}
        type="button"
        onClick={() => setPopoverOpen((v) => !v)}
        className="flex items-center gap-2 font-[family-name:var(--font-general-sans)] text-sm font-semibold leading-4 tracking-[0.025em] text-[#fdfdfd] transition-opacity hover:opacity-75"
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
          className={`transition-transform duration-200 ${popoverOpen ? "rotate-180" : ""}`}
        >
          <path d="M2 4l4 4 4-4" stroke="#fdfdfd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {popoverOpen && (
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 rounded-2xl border border-white/10 bg-[#93bf80] shadow-lg overflow-hidden"
          style={popoverWidth ? { width: popoverWidth + 48 } : undefined}
        >
          <a
            href="/Magali-Solle-CV-EN.pdf"
            download
            onClick={() => setPopoverOpen(false)}
            className="flex items-center justify-between gap-3 px-4 py-3 font-[family-name:var(--font-general-sans)] text-sm font-semibold text-[#181818] transition-colors hover:bg-black/10"
          >
            Download in English
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M7 1v8M7 9l-3-3M7 9l3-3M1 12h12" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <div className="mx-4 border-t border-black/10" />
          <a
            href="/Magali-Solle-CV-ES.pdf"
            download
            onClick={() => setPopoverOpen(false)}
            className="flex items-center justify-between gap-3 px-4 py-3 font-[family-name:var(--font-general-sans)] text-sm font-semibold text-[#181818] transition-colors hover:bg-black/10"
          >
            Descargar en Español
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M7 1v8M7 9l-3-3M7 9l3-3M1 12h12" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}

export function SiteFooter() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { lang } = useLanguage();
  const t = T[lang];

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => {
        setCopied(false);
      }, COPY_FEEDBACK_MS);
    } catch {
      // ignore
    }
  }, []);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    []
  );

  return (
    <footer className="relative bg-[#3c3c3c] px-4 py-14 md:px-[57px]">
      {/* Cat image — absolute bottom-left */}
      <div className="pointer-events-none absolute bottom-0 left-8 rotate-[1.8deg] md:left-14">
        <Image
          src="/images/mycats.webp"
          alt=""
          width={115}
          height={92}
          className="h-auto w-[80px] md:w-[115px]"
          aria-hidden
        />
      </div>

      <div className="mx-auto flex max-w-[1096px] flex-col gap-10">
        {/* Three action groups */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Let's chat */}
          <div className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-general-sans)] text-base font-semibold leading-6 text-[#fffbf2]">
              {t.letsChat}
            </span>
            <span className="h-6 w-px bg-[#fffbf2]/30" aria-hidden />
            <button
              type="button"
              onClick={copyEmail}
              aria-label={
                copied
                  ? t.ariaCopied
                  : t.ariaCopyEmail(CONTACT_EMAIL)
              }
              className="rounded-full border-2 border-[#fdfdfd] px-4 py-2 font-[family-name:var(--font-general-sans)] text-sm font-semibold leading-4 tracking-[0.025em] text-[#fdfdfd] transition-opacity hover:opacity-75"
            >
              {copied ? t.copied : t.copyEmail}
            </button>
          </div>

          {/* Let's connect */}
          <div className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-general-sans)] text-base font-semibold leading-6 text-[#fffbf2]">
              {t.letsConnect}
            </span>
            <span className="h-6 w-px bg-[#fffbf2]/30" aria-hidden />
            <a
              href="https://www.linkedin.com/in/magalisolle/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.ariaLinkedIn}
              className="transition-opacity hover:opacity-75"
            >
              <Image src={linkedinSrc} alt={t.ariaLinkedIn} width={17} height={17} />
            </a>
          </div>

          {/* See my experience */}
          <div className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-general-sans)] text-base font-semibold leading-6 text-[#fffbf2]">
              {t.seeMyExperience}
            </span>
            <span className="h-6 w-px bg-[#fffbf2]/30" aria-hidden />
            <ResumePopover label={t.downloadResume} />
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-end">
          <p className="font-[family-name:var(--font-general-sans)] text-sm leading-6 text-[#fdfdfd]">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
