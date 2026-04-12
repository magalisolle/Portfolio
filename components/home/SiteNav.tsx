"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

const NAV_LINKS = {
  en: [
    { href: "/#case-studies", label: "Case Studies" },
    { href: "/#side-projects", label: "Side Projects" },
    { href: "/#ai-workflow", label: "AI in my workflow" },
    { href: "/#about", label: "About" },
  ],
  es: [
    { href: "/#case-studies", label: "Casos de Estudio" },
    { href: "/#side-projects", label: "Proyectos Personales" },
    { href: "/#ai-workflow", label: "IA en mi trabajo" },
    { href: "/#about", label: "Sobre mí" },
  ],
};

const T = {
  en: {
    downloadResume: "Download Resume",
    ariaHome: "Home",
    ariaClose: "Close menu",
    ariaOpen: "Open menu",
  },
  es: {
    downloadResume: "Descargar CV",
    ariaHome: "Inicio",
    ariaClose: "Cerrar menú",
    ariaOpen: "Abrir menú",
  },
};

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const navLinks = NAV_LINKS[lang];
  const t = T[lang];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-mint/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-4 py-3 md:px-8 lg:px-[57px]"
        aria-label="Primary"
      >
        {/* Logo */}
        <Link href="/" aria-label={t.ariaHome} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Image
            src="/images/logo.png"
            alt="Magali Solle"
            width={72}
            height={38}
            className="h-auto w-[60px] md:w-[72px]"
            priority
          />
        </Link>

        {/* Nav links + Download Resume + Lang toggle — desktop only */}
        <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full bg-[#93bf80] px-3 py-2 font-[family-name:var(--font-general-sans)] text-base font-semibold leading-5 tracking-[0.025em] text-[#181818] transition-opacity hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="ml-4 shrink-0 flex items-center gap-2 font-[family-name:var(--font-general-sans)] text-base font-semibold leading-5 tracking-[0.025em] text-[#181818] transition-opacity hover:opacity-70"
          >
            {t.downloadResume}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M8 1v9M8 10l-3-3M8 10l3-3M2 13h12"
                stroke="#181818"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Language toggle */}
          <div className="ml-4 flex items-center rounded-full border border-[#181818]/20 p-0.5 text-sm font-semibold">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                lang === "en"
                  ? "bg-[#181818] text-[#fdfdfd]"
                  : "text-[#181818] hover:bg-black/5"
              }`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                lang === "es"
                  ? "bg-[#181818] text-[#fdfdfd]"
                  : "text-[#181818] hover:bg-black/5"
              }`}
              aria-pressed={lang === "es"}
            >
              ES
            </button>
          </div>
        </div>

        {/* Hamburger button — tablet/mobile only */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Lang toggle mobile */}
          <div className="flex items-center rounded-full border border-[#181818]/20 p-0.5 text-sm font-semibold">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "en"
                  ? "bg-[#181818] text-[#fdfdfd]"
                  : "text-[#181818] hover:bg-black/5"
              }`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "es"
                  ? "bg-[#181818] text-[#fdfdfd]"
                  : "text-[#181818] hover:bg-black/5"
              }`}
              aria-pressed={lang === "es"}
            >
              ES
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.ariaClose : t.ariaOpen}
            aria-expanded={open}
            className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-black/5"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M4 4l12 12M16 4L4 16" stroke="#181818" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M3 5h14M3 10h14M3 15h14" stroke="#181818" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile/tablet dropdown */}
      {open && (
        <div className="border-t border-black/5 bg-mint px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-full bg-[#93bf80] px-4 py-3 text-center font-[family-name:var(--font-general-sans)] text-base font-semibold leading-5 tracking-[0.025em] text-[#181818] transition-opacity hover:opacity-80"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full border border-[#181818]/20 px-4 py-3 font-[family-name:var(--font-general-sans)] text-base font-semibold leading-5 tracking-[0.025em] text-[#181818] transition-opacity hover:opacity-70"
            >
              {t.downloadResume}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M8 1v9M8 10l-3-3M8 10l3-3M2 13h12"
                  stroke="#181818"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
