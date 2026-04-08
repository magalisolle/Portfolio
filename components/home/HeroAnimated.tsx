"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownIcon } from "@/components/icons/ArrowIcons";
import type { RuloSvgParsed } from "@/lib/rulo-svg-paths";
import { HeroSwirl } from "./HeroSwirl";

/** Ancho máximo del rulo en pantalla. */
const RULO_MAX_WIDTH_PX = 991; // 1166 × 0.85 (−15%)

const headlineClass =
  "font-[family-name:var(--font-bricolage)] text-[clamp(2.25rem,8vw,5rem)] font-medium leading-[1] text-ink";

const fadeEase = "easeOut" as const;

/**
 * Hero entrance timeline — explicit `delay` + `duration` per element (no stagger).
 * Each item uses initial opacity 0 until its delay elapses.
 */
const TIMELINE = {
  line1: { delay: 0, duration: 0.8 },
  swirl: { delay: 1, duration: 2.5 },
  line2: { delay: 3.5, duration: 0.8 },
  description: { delay: 4.5, duration: 0.8 },
  cta: { delay: 5.3, duration: 0.6 },
} as const;

type Props = {
  rulo: RuloSvgParsed;
};

export function HeroAnimated({ rulo }: Props) {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number, duration: number) =>
    reduceMotion
      ? {
          initial: false as const,
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration, ease: fadeEase, delay },
        };

  return (
    <section
      id="hero"
      className="relative box-border flex h-[100dvh] min-h-[100dvh] max-h-[100dvh] flex-col justify-center overflow-visible px-4 lg:px-[142px]"
    >
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col -translate-y-[clamp(1rem,3vh,2.5rem)]">
        <div className="relative isolate z-0 mt-8 w-full overflow-visible text-[clamp(2.25rem,8vw,5rem)] sm:mt-10 md:mt-12">
          <div
            className="pointer-events-none absolute left-0 top-[0.48em] z-0 max-w-full overflow-visible"
            style={{
              width: `min(${RULO_MAX_WIDTH_PX}px, calc(100vw - 1.5rem))`,
            }}
            aria-hidden
          >
            <HeroSwirl
              rulo={rulo}
              drawDelay={TIMELINE.swirl.delay}
              drawDuration={TIMELINE.swirl.duration}
            />
          </div>

          <motion.p
            className={`${headlineClass} relative z-[2] text-left`}
            style={{ fontFeatureSettings: '"liga" 1' }}
            {...fadeUp(TIMELINE.line1.delay, TIMELINE.line1.duration)}
          >
            Hi! I’m Magali,
          </motion.p>

          <motion.p
            className={`${headlineClass} relative z-[2] mt-[136px] text-right`}
            style={{ fontFeatureSettings: '"liga" 1' }}
            {...fadeUp(TIMELINE.line2.delay, TIMELINE.line2.duration)}
          >
            A Product Designer
          </motion.p>

          <motion.p
            className="relative z-[2] ml-auto mt-5 max-w-[min(60rem,calc(100%-1rem))] text-balance text-right text-base font-medium leading-snug text-muted sm:mt-6 sm:text-lg md:text-[clamp(1.125rem,2.2vw,1.75rem)] md:leading-[1.35]"
            {...fadeUp(TIMELINE.description.delay, TIMELINE.description.duration)}
          >
            Focused on building clear and scalable digital products. Experience
            across SaaS, fintech platforms, and complex user workflows.
          </motion.p>
        </div>

        <div className="relative z-10 mt-36 flex justify-center sm:mt-44">
          <motion.a
            href="#case-studies"
            className="btn-secondary-soft"
            {...fadeUp(TIMELINE.cta.delay, TIMELINE.cta.duration)}
          >
            View selected work
            <ArrowDownIcon className="size-4 shrink-0" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
