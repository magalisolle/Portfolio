"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { imagePath } from "@/lib/image-path";
import { useLanguage } from "@/lib/i18n";

/** Fondo del área de imagen en las tres cards (mismo tono que Becoming) */
const SIDE_PROJECT_IMAGE_BG = "#FFEEC7";

type SideProject = {
  title: string;
  description: string;
  /** Una sola imagen (Higo, Dinksmart) */
  image?: string;
  /** Becoming: dos assets en fila */
  images?: readonly [string, string];
  /** Pequeño margen superior e izquierdo sobre el fondo crema (Higo) */
  imageInsetTopLeft?: boolean;
  /** Mismo margen superior que Higo; imagen ancho completo debajo (Dinksmart) */
  imageTopMarginOnly?: boolean;
  /** Link al case study si existe */
  href?: string;
};

const PROJECTS = {
  en: [
    {
      title: "Becoming",
      description:
        "A reading companion app to track books, highlights, and the ideas you want to remember.",
      images: ["CardInfo.png", "CardInfo2.png"] as readonly [string, string],
      href: "/case-studies/becoming",
    },
    {
      title: "Higo",
      description:
        "A receivables dashboard for SMBs to track invoices, clients, and payment status in one place.",
      image: "higoooo.png",
      imageInsetTopLeft: true,
      href: "/case-studies/higo",
    },
    {
      title: "Dinksmart",
      description:
        "A friendlier way to manage everyday money decisions and stay on top of savings goals.",
      image: "Homepagedinksmartt.png",
      imageTopMarginOnly: true,
      href: "/case-studies/dinksmart",
    },
  ] as SideProject[],
  es: [
    {
      title: "Becoming",
      description:
        "Una app de lectura para registrar libros, highlights y las ideas que querés recordar.",
      images: ["CardInfo.png", "CardInfo2.png"] as readonly [string, string],
      href: "/case-studies/becoming",
    },
    {
      title: "Higo",
      description:
        "Un dashboard de cuentas por cobrar para PYMEs: facturas, clientes y estado de pagos en un solo lugar.",
      image: "higoooo.png",
      imageInsetTopLeft: true,
      href: "/case-studies/higo",
    },
    {
      title: "Dinksmart",
      description:
        "Una forma más amigable de gestionar las decisiones financieras del día a día y estar al tanto de los objetivos de ahorro.",
      image: "Homepagedinksmartt.png",
      imageTopMarginOnly: true,
      href: "/case-studies/dinksmart",
    },
  ] as SideProject[],
};

const T = {
  en: { sectionTitle: "Side Projects" },
  es: { sectionTitle: "Proyectos Personales" },
};

export function SideProjects() {
  const { lang } = useLanguage();
  const projects = PROJECTS[lang];
  const t = T[lang];

  return (
    <section
      id="side-projects"
      className="bg-cream px-4 py-24 md:px-8 md:py-28 lg:px-[121px] lg:py-[116px]"
    >
      <div className="mx-auto flex max-w-[1197px] flex-col gap-6">
        <h2 className="text-[32px] font-medium leading-tight text-ink">
          {t.sectionTitle}
        </h2>
        <div className="grid gap-12 md:grid-cols-3 md:gap-[51px]">
          {projects.map((p) => {
            const cardId = p.href ? `card-${p.href.replace("/case-studies/", "")}` : undefined;
            const Wrapper = p.href
              ? ({ children }: { children: React.ReactNode }) => (
                  <Link id={cardId} href={p.href!} className="flex w-full flex-col gap-8 rounded-2xl p-4 transition-colors hover:bg-[#f6eef5] md:max-w-[367px]">
                    {children}
                  </Link>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <article id={cardId} className="flex w-full flex-col gap-8 md:max-w-[367px]">{children}</article>
                );
            return (
            <Wrapper key={p.title}>
              <div
                className="overflow-hidden rounded-[33px]"
                style={{ backgroundColor: SIDE_PROJECT_IMAGE_BG }}
              >
                {p.images ? (
                  <div className="relative aspect-[367/248] w-full">
                    <div className="absolute inset-0 flex items-stretch justify-center gap-2 px-4 py-4 md:gap-3 md:px-5 md:py-5">
                      {p.images.map((src) => (
                        <div
                          key={src}
                          className="relative min-h-0 w-0 min-w-0 flex-1 basis-0"
                        >
                          <Image
                            src={imagePath(src)}
                            alt=""
                            fill
                            className="object-contain object-center"
                            sizes="(max-width: 768px) 45vw, 180px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[367/248] w-full">
                    <div
                      className={
                        p.imageInsetTopLeft
                          ? "absolute bottom-0 right-0 overflow-hidden rounded-xl left-[calc(0.75rem*1.9)] top-[calc(0.75rem*1.9)] md:left-[calc(1rem*1.9)] md:top-[calc(1rem*1.9)]"
                          : p.imageTopMarginOnly
                            ? "absolute inset-x-0 bottom-0 top-[calc(0.75rem*1.9)] overflow-hidden rounded-t-3xl md:top-[calc(1rem*1.9)]"
                            : "relative h-full w-full"
                      }
                    >
                      {p.imageInsetTopLeft ? (
                        <div
                          className="absolute inset-0 bg-no-repeat"
                          style={{
                            backgroundImage: `url(${JSON.stringify(imagePath(p.image!))})`,
                            backgroundSize: "168% auto",
                            backgroundPosition: "left top",
                            backgroundRepeat: "no-repeat",
                          }}
                          aria-hidden
                        />
                      ) : p.imageTopMarginOnly ? (
                        <Image
                          src={imagePath(p.image!)}
                          alt=""
                          width={750}
                          height={1598}
                          className="block h-auto w-full max-w-full"
                          sizes="(max-width: 768px) 100vw, 367px"
                        />
                      ) : (
                        <Image
                          src={imagePath(p.image!)}
                          alt=""
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 367px"
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="text-base leading-relaxed text-muted">{p.description}</p>
              </div>
            </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
