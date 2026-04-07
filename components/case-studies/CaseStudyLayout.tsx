import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteNav } from "@/components/home/SiteNav";
import { ArrowLeftIcon } from "@/components/icons/ArrowIcons";

export type CaseStudyMeta = {
  title: string;
  /** e.g. "PAYANA" */
  client: string;
  /** e.g. "2024" */
  year: string;
  /** Chip label — e.g. "Product Design" */
  chip?: string;
  /** Short intro under the title (optional). */
  lede?: string;
};

type Props = {
  /** When omitted and `intro` is set, only the custom intro is shown (Figma long-form hero). */
  meta?: CaseStudyMeta;
  /** Replaces the default title block — use for Figma “project hero” (eyebrow, chips, facts). */
  intro?: ReactNode;
  children: ReactNode;
  /** Defaults to home case-studies anchor. */
  backHref?: string;
  /** Page background (default `bg-case-study-bg` / `#EDEDFA`). */
  pageBgClassName?: string;
  /** Focus ring offset color — should match page background (default `ring-offset-case-study-bg`). */
  ringOffsetClassName?: string;
};

/**
 * Long-form case study shell — matches Figma frame “Web” (node `4845:2308`):
 * background `#EDEDFA`, max content width, back control, nav + footer.
 * Reuse for cauciones, simple-purchase, go-coaching, etc.
 */
export function CaseStudyLayout({
  meta,
  intro,
  children,
  backHref = "/#case-studies",
  pageBgClassName = "bg-case-study-bg",
  ringOffsetClassName = "focus-visible:ring-offset-case-study-bg",
}: Props) {
  return (
    <div className={`min-h-screen text-ink ${pageBgClassName}`.trim()}>
      <SiteNav />
      <article className="overflow-x-clip pb-24 pt-6 md:pt-8">
        {intro ? (
          <>
            {/* Figma: back + hero card sit in a wider band than the article column */}
            <div className="case-study-hero-band-inner mx-auto w-full max-w-[min(100%,1424px)]">
              <Link
                href={backHref}
                className={`-ml-1 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-fg)] transition-colors hover:bg-[var(--color-button-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 ${ringOffsetClassName} sm:-ml-2 md:-ml-3`.trim()}
                aria-label="Back to case studies"
              >
                <ArrowLeftIcon className="size-4" />
              </Link>
              <div className="mt-10 md:mt-14">{intro}</div>
            </div>
            {/* Outer band matches hero (`max-w` + `px`); inner column keeps body copy measure (same 1186 + body padding as before). */}
            <div className="case-study-body-band case-study-hero-band-inner mx-auto mt-12 w-full max-w-[min(100%,1424px)] md:mt-16">
              <div className="case-study-body-inner mx-auto w-full max-w-[1186px]">
                {children}
              </div>
            </div>
          </>
        ) : (
          <div className="case-study-body-inner mx-auto max-w-[1186px]">
            <Link
              href={backHref}
              className={`inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-fg)] transition-colors hover:bg-[var(--color-button-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 ${ringOffsetClassName}`.trim()}
              aria-label="Back to case studies"
            >
              <ArrowLeftIcon className="size-4" />
            </Link>

            {meta ? (
              <header className="mt-10 space-y-4 md:mt-14">
                <div className="flex flex-wrap items-center gap-3">
                  {meta.chip ? (
                    <span className="rounded-full bg-chip px-3 py-1.5 text-xs font-semibold tracking-[0.025em] text-ink">
                      {meta.chip}
                    </span>
                  ) : null}
                  <span className="text-base text-muted-soft">
                    {meta.client} ({meta.year})
                  </span>
                </div>
                <h1 className="font-[family-name:var(--font-general-sans)] text-3xl font-medium leading-tight tracking-tight text-heading-case md:text-4xl md:leading-[1.33]">
                  {meta.title}
                </h1>
                {meta.lede ? (
                  <p className="max-w-3xl text-lg leading-relaxed tracking-[0.03em] text-muted md:text-[18px] md:leading-[1.56]">
                    {meta.lede}
                  </p>
                ) : null}
              </header>
            ) : null}

            <div className="mt-12 md:mt-16">{children}</div>
          </div>
        )}
      </article>
      <SiteFooter />
    </div>
  );
}
