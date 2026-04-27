import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Phase label — Figma `Headings/Mobile/H5 Medium`: General Sans 500, 28px, #181818.
 * `mb-4` (16px) separa título de subtítulo / cuerpo que sigue.
 */
export function CaseStudyPhaseLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-8 border-b-2 border-ink/10 pb-3 font-[family-name:var(--font-general-sans)] text-2xl font-medium leading-tight tracking-tight text-ink md:text-[28px] md:leading-[1.29]">
      {children}
    </h2>
  );
}

/**
 * Wraps the first body block after `CaseStudyPhaseLabel` (subtítulo + párrafos, o `CaseStudyProse`).
 * Mantiene el mismo ritmo vertical entre el título de fase y el contenido en todos los case studies.
 */
export function CaseStudyPhaseContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-6 min-w-0 md:mt-7 ${className}`.trim()}>{children}</div>
  );
}

/**
 * Section stack — espacio amplio entre fases (`mt-32` / `md:mt-36`). La primera sección
 * conserva el margen previo al hero (`first:mt-14` / `first:md:mt-16`).
 */
export function CaseStudySection({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mt-60 flex flex-col md:mt-72 first:mt-14 first:md:mt-16 ${className}`}
    >
      {children}
    </section>
  );
}

/**
 * Body copy — Figma `Paragraph/L Regular`: 18px, 400, #555555, ~1.56 lh, ~3% tracking.
 * Espacio vertical entre bloques: el doble del base Figma (36px → 72px, `space-y-[4.5rem]`).
 */
export function CaseStudyProse({ children }: { children: ReactNode }) {
  return (
    <div className="cs-prose min-w-0 space-y-[7rem] text-lg leading-[1.56] tracking-[0.03em] text-muted">
      {children}
    </div>
  );
}

/** 16px entre título y subtítulo (o líneas que van juntas en el mismo bloque). */
export function CaseStudyHeadingBlock({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

/**
 * Rompe al ancho del contenido de la banda (container `cs-body-band`): el outer compensa
 * padding de columna + hueco de centrado de 1186px. Sin segundo hero-padding en el inner
 * (evita imagen más estrecha que el intro). Títulos: envolver en `.case-study-wide-bleed-align-text`.
 */
export function CaseStudyWideBleed({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`case-study-wide-bleed-outer ${className}`}>
      <div className="flex w-full min-w-0 flex-col gap-4">{children}</div>
    </div>
  );
}

/** Lead line — Figma `Paragraph/L Semi Bold`. */
export function CaseStudyEmphasis({ children }: { children: ReactNode }) {
  return (
    <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
      {children}
    </p>
  );
}

type FigureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

/** Media in a soft card — Figma groups use 16px radius + light fill. */
export function CaseStudyFigure({
  src,
  alt,
  width,
  height,
  className = "",
  priority,
}: FigureProps) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl bg-card-case p-4 md:p-6 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full rounded-lg object-cover"
        sizes="(max-width: 1186px) 100vw, 1186px"
        priority={priority}
      />
    </figure>
  );
}

/**
 * Figma `5126:13067` (Frame 1171275974) — project hero: row layout, padding,
 * espacio horizontal entre columnas tipo “Auto” (`justify-between`); izq. 345px
 * título + chips; der. lede + metadata (`Paragraph/M` labels #555, values #181818).
 */
export function CaseStudyProjectHero({
  eyebrow,
  eyebrowLine2,
  chips,
  lede,
  facts,
  heroBg = "#dfdcff",
}: {
  eyebrow: string;
  /** Second line of the title (e.g. “InvertirOnline”) — Figma stacks two lines in the left column. */
  eyebrowLine2?: string;
  chips: string[];
  lede: string;
  facts: { label: string; value: string }[];
  /** Background color of the hero card. Defaults to lavender `#dfdcff`. */
  heroBg?: string;
}) {
  const row1 = facts.slice(0, 3);
  const row2 = facts.slice(3, 6);

  return (
    <div className="flex w-full flex-col gap-8 rounded-3xl p-8 md:flex-row md:items-start md:justify-between md:gap-0" style={{ backgroundColor: heroBg }}>
      <div className="flex max-w-[345px] shrink-0 flex-col gap-[9px]">
        <h1 className="font-[family-name:var(--font-general-sans)] text-2xl font-semibold leading-[1.29] tracking-[0.025em] text-ink md:text-[28px]">
          {eyebrowLine2 ? (
            <>
              {eyebrow}
              <br />
              {eyebrowLine2}
            </>
          ) : (
            eyebrow
          )}
        </h1>
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-[48px] border border-[#a6a6a6] bg-[#fdfdfd] px-3 py-1 text-xs font-semibold tracking-[0.025em] text-ink"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-[34px] md:max-w-[700px]">
        <p className="text-lg font-normal leading-[1.56] tracking-[0.03em] text-ink">
          {lede}
        </p>
        <dl className="flex flex-col gap-[22px]">
          <div className="flex flex-col gap-4 md:flex-row md:gap-[43px] md:items-start">
            {row1.map(({ label, value }, i) => (
              <div
                key={label}
                className={
                  i === 0
                    ? "md:w-[134px] md:shrink-0"
                    : i === 1
                      ? "md:w-[158px] md:shrink-0"
                      : "md:min-w-0 md:flex-1"
                }
              >
                <dt className="text-base leading-normal text-muted">{label}</dt>
                <dd className="mt-1 text-base font-medium leading-normal text-ink">
                  {value}
                </dd>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-[19px] md:items-start">
            {row2.map(({ label, value }, i) => (
              <div
                key={label}
                className={
                  i < 2 ? "md:min-w-0 md:flex-1" : "md:shrink-0"
                }
              >
                <dt className="text-base leading-normal text-muted">{label}</dt>
                <dd className="mt-1 text-base font-medium leading-normal text-ink">
                  {value}
                </dd>
              </div>
            ))}
          </div>
        </dl>
      </div>
    </div>
  );
}

/** Stat cards — Figma `#F6F9FE` fill (`fill_2X8TG0`). */
export function CaseStudyStatCards({
  stats,
  caption,
}: {
  stats: { value: string; label: string }[];
  caption?: string;
}) {
  return (
    <div className="space-y-3">
      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-[#f6f9fe] px-5 py-4 md:px-6 md:py-5"
          >
            <p className="font-[family-name:var(--font-general-sans)] text-3xl font-semibold leading-tight text-heading-case md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-lg leading-[1.56] tracking-[0.03em] text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
      {caption ? (
        <p className="text-sm leading-relaxed text-muted-soft">{caption}</p>
      ) : null}
    </div>
  );
}

/** Highlight callout — Figma `02 - Conclusions` cards (`#DFDCFF`). */
export function CaseStudyHighlightCallout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-[#dfdcff] px-5 py-4 text-lg font-medium leading-[1.56] tracking-[0.03em] text-heading-case md:px-6 md:py-5">
      {children}
    </div>
  );
}

/** Small caption — Figma `Paragraph/S Regular`. */
export function CaseStudyCaption({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm leading-relaxed text-muted-soft">{children}</p>
  );
}
