"use client";

import Image from "next/image";
import { imagePath } from "@/lib/image-path";
import { useLanguage } from "@/lib/i18n";

const CARDS = {
  en: [
    {
      title: "AI-Assisted Research",
      body: "I use ChatGPT as a thinking partner during discovery. It helps me understand how a product works, explore competitors, and quickly build context around new industries.",
      image: "ilustraciones-01.png",
    },
    {
      title: "Fast Prototyping",
      body: "I like moving quickly from ideas to interactive prototypes. Rapid prototyping helps test assumptions early and align teams around how the product should actually work.",
      image: "ilustraciones-02.png",
    },
    {
      title: "Designing Closer to Code",
      body: "I've started implementing my own designs to see how they behave in a real, live environment. I still use Figma, but I enjoy integrating these tools into my workflow.",
      image: "ilustraciones-03.png",
    },
  ],
  es: [
    {
      title: "Investigación asistida por IA",
      body: "Uso ChatGPT como partner de pensamiento durante el discovery. Me ayuda a entender cómo funciona un producto, explorar competidores y construir contexto rápidamente en industrias nuevas.",
      image: "ilustraciones-01.png",
    },
    {
      title: "Prototipado rápido",
      body: "Me gusta pasar rápido de ideas a prototipos interactivos. El prototipado rápido ayuda a testear supuestos desde temprano y alinear a los equipos alrededor de cómo debería funcionar realmente el producto.",
      image: "ilustraciones-02.png",
    },
    {
      title: "Diseñando más cerca del código",
      body: "Empecé a implementar mis propios diseños para ver cómo se comportan en un entorno real. Sigo usando Figma, pero disfruto integrar estas herramientas a mi flujo de trabajo.",
      image: "ilustraciones-03.png",
    },
  ],
};

const T = {
  en: { sectionTitle: "AI in my workflow" },
  es: { sectionTitle: "IA en mi trabajo" },
};

export function AIWorkflow() {
  const { lang } = useLanguage();
  const cards = CARDS[lang];
  const t = T[lang];

  return (
    <section
      id="ai-workflow"
      className="bg-lilac px-4 py-24 md:px-16 md:py-28 lg:px-[123px] lg:py-[134px]"
    >
      <div className="mx-auto flex max-w-[1186px] flex-col gap-10">
        <h2 className="text-[32px] font-medium leading-tight text-ink">
          {t.sectionTitle}
        </h2>
        <div className="grid gap-0 divide-y divide-[rgba(24,24,24,0.1)] md:grid-cols-3 md:gap-0 md:divide-x md:divide-y-0">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-4 px-0 pb-10 pt-10 last:pb-0 first:pt-0 md:px-10 md:pb-0 md:pt-0 md:first:pl-0"
            >
              <div className="relative h-[50px] w-[50px] shrink-0 overflow-hidden rounded">
                <Image
                  src={imagePath(card.image)}
                  alt=""
                  width={97}
                  height={92}
                  className="h-full w-full object-contain"
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
