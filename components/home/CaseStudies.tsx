"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons/ArrowIcons";
import { imagePath } from "@/lib/image-path";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

type CaseStudyItem = {
  client: string;
  title: string;
  description: string;
  image: string;
  imageClassName: string;
  /** Segunda imagen superpuesta (ej. tarjeta "Compra simple" sobre el teléfono) */
  imageOverlay?: string;
  /** Clases extra en la columna de texto (p. ej. fondo blanco) */
  textColumnClassName?: string;
  /** Clases extra en la columna de imagen (p. ej. fondo lila) */
  imageColumnClassName?: string;
  /** Layout especial de la columna visual */
  imageVariant?: "cauciones" | "mvp";
  /** Imagen superior (tarjeta 77,7%); `image` es la ilustración inferior */
  caucionesCardImage?: string;
  /** MVP Go! Coaching: imagen superior (streak); `image` es el panel semanal */
  mvpStreakImage?: string;
  /** Ruta del caso largo (`/case-studies/...`) cuando exista */
  caseStudyHref?: string;
  /** Full `/images/...` path override — use when image lives in a subfolder (bypasses imagePath helper) */
  imageSrc?: string;
};

const CASES = {
  en: [
    {
      client: "PAYANA (2024)",
      title: "Transaction's redesign",
      description:
        "Full transaction visibility and self-service rejected payment recovery.",
      caseStudyHref: "/case-studies/transactions",
    },
    {
      client: "Rootstrap (2025)",
      title: "MVP of Go! Coaching",
      description:
        "Replacing 6 spreadsheets with one connected platform for loan officers.",
      caseStudyHref: "/case-studies/go-coaching",
    },
    {
      client: "IOL Inversiones (2023)",
      title: "Adaption of Cauciones",
      description:
        "Mobile adaptation with behavior-driven smart defaults.",
      caseStudyHref: "/case-studies/cauciones",
    },
    {
      client: "IOL Inversiones (2023)",
      title: "Design of Simple Purchase",
      description:
        "Faster buying in two taps — +12% conversion and +14% approval rate lift.",
      caseStudyHref: "/case-studies/compra-simple",
    },
  ],
  es: [
    {
      client: "PAYANA (2024)",
      title: "Rediseño de transacciones",
      description:
        "Visibilidad completa de transacciones y recuperación de pagos rechazados en autogestión.",
      caseStudyHref: "/case-studies/transactions",
    },
    {
      client: "Rootstrap (2025)",
      title: "MVP de Go! Coaching",
      description:
        "Reemplazando 6 planillas con una plataforma conectada para asesores de crédito.",
      caseStudyHref: "/case-studies/go-coaching",
    },
    {
      client: "IOL Inversiones (2023)",
      title: "Adaptación de Cauciones",
      description:
        "Adaptación mobile con valores predeterminados inteligentes basados en comportamiento real.",
      caseStudyHref: "/case-studies/cauciones",
    },
    {
      client: "IOL Inversiones (2023)",
      title: "Diseño de Compra Simple",
      description:
        "Compra en dos toques — +12% de conversión y +14% de mejora en la tasa de aprobación.",
      caseStudyHref: "/case-studies/compra-simple",
    },
  ],
};

const IMAGE_CONFIG: Pick<
  CaseStudyItem,
  | "image"
  | "imageClassName"
  | "imageOverlay"
  | "textColumnClassName"
  | "imageColumnClassName"
  | "imageVariant"
  | "caucionesCardImage"
  | "mvpStreakImage"
>[] = [
  // 0 — Transactions
  {
    image: "Rectangle 1.jpg",
    imageClassName: "object-cover object-left-top !right-auto !bottom-auto !w-[150%] !h-[150%]",
  },
  // 1 — Go! Coaching
  {
    image: "Week Activity Panel.png",
    imageClassName: "object-contain object-top",
    imageVariant: "mvp",
    mvpStreakImage: "Streak.png",
  },
  // 2 — Cauciones
  {
    caucionesCardImage: "caucioness.png",
    image: "ilustraciones_app.png",
    imageClassName: "object-cover object-bottom",
    imageVariant: "cauciones",
    textColumnClassName: "bg-card-case rounded-t-3xl xl:rounded-t-none xl:rounded-l-3xl",
    imageColumnClassName: "!bg-[#C4B5FD]",
  },
  // 3 — Compra Simple
  {
    image: "cardcomprasimple.png",
    imageClassName: "object-contain object-center",
    textColumnClassName: "bg-card-case rounded-t-3xl xl:rounded-t-none xl:rounded-l-3xl",
    imageColumnClassName: "bg-lilac p-2 overflow-visible!",
  },
];

const T = {
  en: { sectionTitle: "Case Studies", readCaseStudy: "Read case study", productDesign: "Product Design" },
  es: { sectionTitle: "Casos de Estudio", readCaseStudy: "Leer caso", productDesign: "Diseño de Producto" },
};

const CARD_BG: Record<number, string> = {
  1: "#ededfa", // Go! Coaching
};

export function CaseStudies() {
  const { lang } = useLanguage();
  const cases = CASES[lang];
  const t = T[lang];
  const [sectionBg, setSectionBg] = useState<string>("transparent");
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<number, number>();

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visible.set(i, entry.intersectionRatio);
          let best = -1;
          let bestRatio = 0;
          visible.forEach((ratio, idx) => {
            if (ratio > bestRatio) { bestRatio = ratio; best = idx; }
          });
          setSectionBg(best >= 2 ? "#ededfa" : "transparent");
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const items: CaseStudyItem[] = cases.map((c, i) => ({
    ...c,
    ...IMAGE_CONFIG[i],
    image: IMAGE_CONFIG[i].image ?? "",
  }));

  return (
    <section
      id="case-studies"
      className="relative px-4 pb-20 pt-24 md:px-8 lg:px-[131px]"
      style={{ backgroundColor: sectionBg, transition: "background-color 0.5s ease" }}
    >
      <div className="mx-auto flex max-w-[1186px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-[215px]">
        <h2 className="shrink-0 text-[32px] font-medium leading-tight text-ink lg:sticky lg:top-[104px] lg:self-start">
          {t.sectionTitle}
        </h2>
        <div className="min-w-0 flex-1 flex flex-col gap-10">
          {items.map((item) => (
            <article
              key={item.title + item.client}
              ref={(el) => { cardRefs.current[items.indexOf(item)] = el; }}
              id={item.caseStudyHref ? `card-${item.caseStudyHref.replace("/case-studies/", "")}` : undefined}
              className="relative flex flex-col overflow-hidden rounded-3xl bg-card-case xl:flex-row xl:items-stretch xl:h-[340px]"
            >
              <div
                className={[
                  "flex min-h-0 flex-col justify-center gap-4 px-8 py-8 xl:min-w-0 xl:w-1/2 xl:shrink-0 xl:basis-1/2 md:gap-4 md:px-8 md:py-8 lg:py-10 lg:pl-10 lg:pr-8",
                  item.textColumnClassName ?? "",
                ].join(" ")}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-chip px-2 py-1 text-[11px] font-semibold tracking-[0.025em] text-ink">
                    {t.productDesign}
                  </span>
                  <span className="text-base text-muted-soft">{item.client}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-snug text-heading-case md:text-[22px] md:leading-[1.33]">
                    {item.title}
                  </h3>
                  <p className="max-w-xl text-base leading-relaxed tracking-wide text-muted-soft md:text-[16px] md:leading-[1.56]">
                    {item.description}
                  </p>
                </div>
                <a href={item.caseStudyHref ?? "#"} className="btn-tertiary mt-8 after:absolute after:inset-0 after:content-['']">
                  {t.readCaseStudy}
                  <ArrowRightIcon className="size-4" />
                </a>
              </div>
              <div
                className={[
                  "relative flex h-[320px] w-full shrink-0 flex-col overflow-hidden bg-card-case p-0 rounded-b-3xl xl:h-auto xl:min-h-[300px] xl:min-w-0 xl:w-1/2 xl:shrink-0 xl:basis-1/2 xl:rounded-b-none xl:rounded-r-3xl",
                  item.imageColumnClassName ?? "",
                ].join(" ")}
              >
                {item.imageOverlay ? (
                  <>
                    <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center">
                      <div className="relative mx-auto h-full w-full max-w-full min-h-[400px] overflow-hidden px-0 xl:min-h-0">
                        <div
                          className="absolute inset-0 z-0 bg-lilac"
                          style={{
                            backgroundImage: `url(${JSON.stringify(imagePath(item.image))})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "left center",
                          }}
                          aria-hidden
                        />
                        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center py-8 md:py-12">
                          <div className="origin-center scale-[1.34] translate-x-5 sm:translate-x-7 md:translate-x-12 md:w-full md:max-w-[min(85%,390px)]">
                            <Image
                              src={imagePath(item.imageOverlay)}
                              alt=""
                              width={880}
                              height={520}
                              className="mx-auto h-auto w-full max-w-[min(400px,82vw)] object-contain drop-shadow-2xl md:max-w-full"
                              sizes="(max-width: 768px) 88vw, 44vw"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : item.imageVariant === "mvp" ? (
                  <div className="relative flex h-[400px] w-full flex-col items-center justify-center gap-4 overflow-hidden px-4 py-5 xl:h-full xl:min-h-0 xl:gap-5 xl:px-8 xl:py-10">
                    <div
                      className="absolute inset-0 z-0 rounded-none"
                      style={{
                        background:
                          "radial-gradient(ellipse 115% 115% at 50% 45%, #565892 0%, #2D3084 100%)",
                      }}
                      aria-hidden
                    />
                    <div className="relative z-10 flex w-full max-w-[min(100%,360px)] flex-col items-center gap-4 md:max-w-[min(100%,400px)] md:gap-6">
                      {item.mvpStreakImage ? (
                        <Image
                          src={imagePath(item.mvpStreakImage)}
                          alt=""
                          width={814}
                          height={128}
                          className="h-auto w-full object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                          sizes="(max-width: 1280px) 100vw, 50vw"
                        />
                      ) : null}
                      <Image
                        src={imagePath(item.image)}
                        alt=""
                        width={814}
                        height={624}
                        className="h-auto w-full object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                        sizes="(max-width: 1280px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ) : item.imageVariant === "cauciones" ? (
                  <div className="grid h-[400px] w-full grid-rows-[1fr_auto] overflow-hidden rounded-none bg-[#C4B5FD] xl:h-full xl:min-h-0">
                    <div className="flex min-h-0 items-center justify-center px-4 py-6 md:px-6 md:py-8">
                      {item.caucionesCardImage ? (
                        <Image
                          src={imagePath(item.caucionesCardImage)}
                          alt=""
                          width={984}
                          height={276}
                          className="h-auto w-full max-w-[min(100%,480px)] object-contain drop-shadow-[0_8px_28px_rgba(0,0,0,0.12)]"
                          sizes="(max-width: 1280px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="mx-auto w-full max-w-[min(100%,440px)] rounded-2xl bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] md:p-8">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6 md:gap-8">
                            <p className="font-semibold leading-none text-[#2F5FFF] text-[clamp(2.25rem,9vw,3.5rem)]">
                              77,7%
                            </p>
                            <p className="max-w-md text-[15px] leading-relaxed text-[#2F5FFF] md:text-base">
                              {lang === "es"
                                ? "de los usuarios hacen clic en el botón 'usar todo' sin ingresar un monto específico."
                                : "of the users click on the 'use all' button without entering a specific amount."}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="relative h-[200px] w-full shrink-0 overflow-hidden xl:h-[min(46%,238px)] xl:min-h-[187px]">
                      <Image
                        src={imagePath(item.image)}
                        alt=""
                        fill
                        className="origin-bottom scale-[1.15] object-contain object-bottom object-center"
                        sizes="(max-width: 1280px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.imageSrc ?? imagePath(item.image)}
                    alt=""
                    fill
                    quality={100}
                    className={item.imageClassName}
                    sizes="(max-width: 1280px) 100vw, 50vw"
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
