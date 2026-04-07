import Image from "next/image";
import { imagePath } from "@/lib/image-path";

const cards = [
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
    body: "I’ve started implementing my own designs to see how they behave in a real, live environment. I still use Figma, but I enjoy integrating these tools into my workflow.",
    image: "ilustraciones-03.png",
  },
];

export function AIWorkflow() {
  return (
    <section
      id="ai-workflow"
      className="bg-lilac px-16 py-24 md:px-16 md:py-28 lg:px-[123px] lg:py-[134px]"
    >
      <div className="mx-auto flex max-w-[1186px] flex-col gap-10">
        <h2 className="text-[32px] font-semibold leading-tight text-ink">
          AI in my workflow
        </h2>
        <div className="grid gap-0 divide-y divide-[rgba(52,52,52,0.07)] md:grid-cols-3 md:gap-0 md:divide-x md:divide-y-0">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-4 px-0 pb-8 pt-8 last:pb-0 first:pt-0 md:px-6 md:pb-0 md:pt-0 md:first:pl-0"
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
