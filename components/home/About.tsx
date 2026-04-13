"use client";

import Image from "next/image";
import { imagePath } from "@/lib/image-path";
import { useLanguage } from "@/lib/i18n";

const CARDS = {
  en: [
    {
      title: "I have two cats I absolutely adore",
      body: "I live with my two cats, Malbec and Roque, who keep me company while I work and remind me to take breaks.",
      image: "ilustraciones-06.png",
    },
    {
      title: "Traveling whenever I can",
      body: "I love traveling and discovering new places. Experiencing different cultures and cities always gives me new perspectives and inspiration.",
      image: "ilustraciones-04.png",
    },
    {
      title: "Cooking as a creative outlet",
      body: "Cooking is one of my favorite ways to disconnect. I enjoy experimenting in the kitchen and treating it as another form of creativity.",
      image: "ilustraciones-05.png",
    },
    {
      title: "Designing products used globally",
      body: "Most of the products I've worked on are built for international users. Collaborating with remote teams has shaped how I approach product design and communication.",
      image: "ilustraciones-07.png",
    },
  ],
  es: [
    {
      title: "Tengo dos gatos que adoro con toda el alma",
      body: "Vivo con mis dos gatos, Malbec y Roque, que me acompañan mientras trabajo y me recuerdan que hay que tomar pausas.",
      image: "ilustraciones-06.png",
    },
    {
      title: "Viajando siempre que puedo",
      body: "Me encanta viajar y descubrir lugares nuevos. Conocer diferentes culturas y ciudades siempre me da nuevas perspectivas e inspiración.",
      image: "ilustraciones-04.png",
    },
    {
      title: "Cocinar como salida creativa",
      body: "Cocinar es una de mis formas favoritas de desconectarme. Disfruto experimentar en la cocina y tratarlo como otra forma de creatividad.",
      image: "ilustraciones-05.png",
    },
    {
      title: "Diseñando productos usados globalmente",
      body: "La mayoría de los productos en los que trabajé están pensados para usuarios internacionales. Colaborar con equipos remotos moldeó mi forma de encarar el diseño de producto y la comunicación.",
      image: "ilustraciones-07.png",
    },
  ],
};

const T = {
  en: { sectionTitle: "About" },
  es: { sectionTitle: "Sobre mí" },
};

export function About() {
  const { lang } = useLanguage();
  const cards = CARDS[lang];
  const t = T[lang];

  return (
    <section
      id="about"
      className="bg-about-bg px-4 py-24 md:px-8 md:py-28 lg:px-[123px] lg:py-[139px]"
    >
      <div className="mx-auto flex max-w-[1186px] flex-col gap-10 md:flex-row md:items-start md:gap-16 lg:gap-[328px]">
        <h2 className="shrink-0 text-[32px] font-medium leading-tight text-ink md:pt-1">
          {t.sectionTitle}
        </h2>
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-4 rounded-2xl bg-[#FDFDFD] p-4 md:flex-row md:items-center md:gap-4 md:px-5 md:py-4"
            >
              <div className="relative mx-auto h-[90px] w-[90px] shrink-0 overflow-hidden rounded-lg md:mx-0">
                <Image
                  src={imagePath(card.image)}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="90px"
                />
              </div>
              <div className="min-w-0 space-y-1">
                <h3 className="text-xl font-medium leading-snug text-ink">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-muted md:text-[14px] md:leading-[1.71]">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
