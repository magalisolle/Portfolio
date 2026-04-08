"use client";

import Image from "next/image";
import linkedinSrc from "@/public/images/linkedin.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";

const COPY_FEEDBACK_MS = 2000;


export function SiteFooter() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    <footer className="relative overflow-hidden bg-[#3c3c3c] px-4 py-14 md:px-[57px]">
      {/* Cat image — absolute bottom-left */}
      <div className="pointer-events-none absolute bottom-0 left-8 rotate-[1.8deg] md:left-14">
        <Image
          src="/images/mycats.png"
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
              Let&apos;s chat :)
            </span>
            <span className="h-6 w-px bg-[#fffbf2]/30" aria-hidden />
            <button
              type="button"
              onClick={copyEmail}
              aria-label={
                copied
                  ? "Email copied to clipboard"
                  : `Copy ${CONTACT_EMAIL} to clipboard`
              }
              className="rounded-full border-2 border-[#fdfdfd] px-4 py-2 font-[family-name:var(--font-general-sans)] text-sm font-semibold leading-4 tracking-[0.025em] text-[#fdfdfd] transition-opacity hover:opacity-75"
            >
              {copied ? "Copied!" : "Copy my email"}
            </button>
          </div>

          {/* Let's connect */}
          <div className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-general-sans)] text-base font-semibold leading-6 text-[#fffbf2]">
              Let&apos;s connect
            </span>
            <span className="h-6 w-px bg-[#fffbf2]/30" aria-hidden />
            <a
              href="https://www.linkedin.com/in/magalisolle/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-opacity hover:opacity-75"
            >
              <Image src={linkedinSrc} alt="LinkedIn" width={17} height={17} />
            </a>
          </div>

          {/* See my experience */}
          <div className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-general-sans)] text-base font-semibold leading-6 text-[#fffbf2]">
              See my experience
            </span>
            <span className="h-6 w-px bg-[#fffbf2]/30" aria-hidden />
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 font-[family-name:var(--font-general-sans)] text-sm font-semibold leading-4 tracking-[0.025em] text-[#fdfdfd] transition-opacity hover:opacity-75"
            >
              Download Resume
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M7 1v8M7 9l-3-3M7 9l3-3M1 12h12"
                  stroke="#fdfdfd"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-end">
          <p className="font-[family-name:var(--font-general-sans)] text-sm leading-6 text-[#fdfdfd]">
            © 2026 Magali Solle
          </p>
        </div>
      </div>
    </footer>
  );
}
