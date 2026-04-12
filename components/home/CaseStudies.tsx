"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons/ArrowIcons";
import { imagePath } from "@/lib/image-path";
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
      title: "Redesign of Transactions",
      description:
        "A unified transactions panel with full money path visibility and self-service reprocess flow for rejected payments.",
      caseStudyHref: "/case-studies/transactions",
    },
    {
      client: "IOL Inversiones (2023)",
      title: "Design of Simple Purchase",
      description:
        "A faster parallel purchase flow that let experienced users buy in two taps — driving +12% conversion and +14% approval rate improvement.",
      caseStudyHref: "/case-studies/compra-simple",
    },
    {
      client: "IOL Inversiones (2023)",
      title: "Adaption of Cauciones",
      description:
        "Bringing a web-only investment instrument to mobile, with smart defaults driven by real user behavior data.",
      caseStudyHref: "/case-studies/cauciones",
    },
    {
      client: "Rootstrap (2025)",
      title: "MVP of Go! Coaching",
      description:
        "A sales performance platform that replaced 6 spreadsheets with a single connected system for loan officers and their coaches.",
      caseStudyHref: "/case-studies/go-coaching",
    },
  ],
  es: [
    {
      client: "PAYANA (2024)",
      title: "Rediseño de Transacciones",
      description:
        "Un panel de transacciones unificado con visibilidad completa del flujo de dinero y un proceso de autogestión para reprocesar pagos rechazados.",
      caseStudyHref: "/case-studies/transactions",
    },
    {
      client: "IOL Inversiones (2023)",
      title: "Diseño de Compra Simple",
      description:
        "Un flujo de compra paralelo y más rápido que permitía a los usuarios experimentados comprar en dos toques — generando +12% de conversión y +14% de mejora en la tasa de aprobación.",
      caseStudyHref: "/case-studies/compra-simple",
    },
    {
      client: "IOL Inversiones (2023)",
      title: "Adaptación de Cauciones",
      description:
        "Llevando un instrumento de inversión exclusivo de la web al móvil, con valores predeterminados inteligentes basados en datos reales de comportamiento de los usuarios.",
      caseStudyHref: "/case-studies/cauciones",
    },
    {
      client: "Rootstrap (2025)",
      title: "MVP de Go! Coaching",
      description:
        "Una plataforma de rendimiento de ventas que reemplazó 6 planillas con un sistema conectado para asesores de crédito y sus coaches.",
      caseStudyHref: "/case-studies/go-coaching",
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
  {
    image: "Rectangle 1.png",
    imageClassName: "object-cover object-left object-top md:object-[18%_center]",
  },
  {
    image: "comprasimpleiol 1.png",
    imageClassName: "object-cover object-center",
    imageOverlay: "Frame 34809 1.png",
    textColumnClassName: "bg-card-case rounded-t-3xl md:rounded-t-none md:rounded-l-3xl",
    imageColumnClassName: "bg-lilac",
  },
  {
    caucionesCardImage: "caucioness.png",
    image: "ilustraciones_app.png",
    imageClassName: "object-cover object-bottom",
    imageVariant: "cauciones",
    textColumnClassName: "bg-card-case rounded-t-3xl md:rounded-t-none md:rounded-l-3xl",
    imageColumnClassName: "!bg-[#C4B5FD]",
  },
  {
    image: "Week Activity Panel.png",
    imageClassName: "object-contain object-top",
    imageVariant: "mvp",
    mvpStreakImage: "Streak.png",
  },
];

const T = {
  en: { sectionTitle: "Case Studies", readCaseStudy: "Read case study", productDesign: "Product Design" },
  es: { sectionTitle: "Casos de Estudio", readCaseStudy: "Leer caso", productDesign: "Diseño de Producto" },
};

export function CaseStudies() {
  const { lang } = useLanguage();
  const cases = CASES[lang];
  const t = T[lang];

  const items: CaseStudyItem[] = cases.map((c, i) => ({
    ...c,
    ...IMAGE_CONFIG[i],
    image: IMAGE_CONFIG[i].image ?? "",
  }));

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden px-4 pb-20 pt-24 md:px-8 lg:px-[131px]"
    >
      <div className="mx-auto flex max-w-[1186px] flex-col gap-12">
        <h2 className="text-[32px] font-medium leading-tight text-ink md:text-[32px]">
          {t.sectionTitle}
        </h2>
        <div className="flex flex-col gap-14">
          {items.map((item) => (
            <article
              key={item.title + item.client}
              id={item.caseStudyHref ? `card-${item.caseStudyHref.replace("/case-studies/", "")}` : undefined}
              className="flex flex-col overflow-hidden rounded-3xl bg-card-case md:h-[510px] md:min-h-[510px] md:max-h-[510px] md:flex-row md:items-stretch"
            >
              <div
                className={[
                  "flex min-h-0 flex-col justify-center gap-8 px-8 py-12 md:min-w-0 md:h-full md:w-1/2 md:shrink-0 md:basis-1/2 md:gap-8 md:overflow-y-auto md:px-10 md:py-16 lg:py-24 lg:pl-12 lg:pr-10",
                  item.textColumnClassName ?? "",
                ].join(" ")}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-chip px-3 py-1.5 text-xs font-semibold tracking-[0.025em] text-ink">
                    {t.productDesign}
                  </span>
                  <span className="text-base text-muted-soft">{item.client}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold leading-snug text-heading-case md:text-4xl md:leading-[1.33]">
                    {item.title}
                  </h3>
                  <p className="max-w-xl text-lg leading-relaxed tracking-wide text-muted-soft md:text-[18px] md:leading-[1.56]">
                    {item.description}
                  </p>
                </div>
                <a href={item.caseStudyHref ?? "#"} className="btn-tertiary">
                  {t.readCaseStudy}
                  <ArrowRightIcon className="size-4" />
                </a>
              </div>
              <div
                className={[
                  "relative flex h-[238px] w-full shrink-0 flex-col overflow-hidden bg-card-case p-0 rounded-b-3xl md:h-full md:min-h-0 md:min-w-0 md:w-1/2 md:shrink-0 md:basis-1/2 md:rounded-b-none md:rounded-r-3xl",
                  item.imageColumnClassName ?? "",
                ].join(" ")}
              >
                {item.imageOverlay ? (
                  <>
                    <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center">
                      <div className="relative mx-auto h-full w-full max-w-full min-h-[238px] overflow-hidden px-0 md:min-h-0">
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
                          <div className="origin-center scale-[1.34] translate-x-5 sm:translate-x-7 md:translate-x-12">
                            <Image
                              src={imagePath(item.imageOverlay)}
                              alt=""
                              width={880}
                              height={520}
                              className="mx-auto h-auto w-full max-w-[min(400px,82vw)] object-contain drop-shadow-2xl md:max-w-[min(420px,40vw)]"
                              sizes="(max-width: 768px) 88vw, 44vw"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : item.imageVariant === "mvp" ? (
                  <div className="relative flex h-[238px] w-full flex-col items-center justify-center gap-4 overflow-hidden px-4 py-8 md:h-full md:min-h-0 md:gap-5 md:px-8 md:py-10">
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
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : null}
                      <Image
                        src={imagePath(item.image)}
                        alt=""
                        width={814}
                        height={624}
                        className="h-auto w-full object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ) : item.imageVariant === "cauciones" ? (
                  <div className="grid h-[238px] w-full grid-rows-[1fr_auto] overflow-hidden rounded-none bg-[#C4B5FD] md:h-full md:min-h-0">
                    <div className="flex min-h-0 items-center justify-center px-4 py-6 md:px-6 md:py-8">
                      {item.caucionesCardImage ? (
                        <Image
                          src={imagePath(item.caucionesCardImage)}
                          alt=""
                          width={984}
                          height={276}
                          className="h-auto w-full max-w-[min(100%,480px)] object-contain drop-shadow-[0_8px_28px_rgba(0,0,0,0.12)]"
                          sizes="(max-width: 768px) 100vw, 50vw"
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
                    <div className="relative h-[min(44vh,289px)] w-full shrink-0 overflow-hidden md:h-[min(46%,238px)] md:min-h-[187px]">
                      <Image
                        src={imagePath(item.image)}
                        alt=""
                        fill
                        className="origin-bottom scale-[1.15] object-contain object-bottom object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.imageSrc ?? imagePath(item.image)}
                    alt=""
                    fill
                    className={item.imageClassName}
                    sizes="(max-width: 768px) 100vw, 50vw"
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
