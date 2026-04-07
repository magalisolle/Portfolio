import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons/ArrowIcons";
import {
  CaseStudyEmphasis,
  CaseStudyHeadingBlock,
  CaseStudyHighlightCallout,
  CaseStudyLayout,
  CaseStudyPhaseContent,
  CaseStudyPhaseLabel,
  CaseStudyProjectHero,
  CaseStudyProse,
  CaseStudySection,
  CaseStudyWideBleed,
} from "@/components/case-studies";

/** Exported assets from Figma frame `4845:2308` (MCP `download_figma_images`). */
const IMG = "/images/case-studies/cauciones";

/** Device frame — `public/images/iPhone 13 mini Thin.png` */
const IPHONE_13_MINI_THIN_FRAME =
  "/images/iPhone%2013%20mini%20Thin.png";

/** Screen recording — `public/images/estimado.mp4` */
const ESTIMADO_VIDEO = "/images/estimado.mp4";

/** Screen recording — flujo hacer caución — `public/images/hacercaucion.mp4` */
const HACER_CAUCION_VIDEO = "/images/hacercaucion.mp4";

/** Display insets in `iPhone 13 mini Thin.png` (540×1096): screen bbox from bezel scan. */
const IPHONE_THIN = { w: 540, h: 1096 } as const;
/** Inset 1–2px más “adentro” que el bisel en el PNG para que el video tape halos de subpíxel. */
const SCREEN_INSET_STYLE = {
  top: `${(11 / IPHONE_THIN.h) * 100}%`,
  right: `${(21 / IPHONE_THIN.w) * 100}%`,
  bottom: `${(11 / IPHONE_THIN.h) * 100}%`,
  left: `${(21 / IPHONE_THIN.w) * 100}%`,
} as const;

/**
 * Long-form Cauciones case study — content & structure from Figma
 * `FeF5ES2xRY75wBP8gFjOVr` node `4845:2308` (MCP `get_figma_data`).
 */
export function CaucionesCaseStudyContent() {
  return (
    <CaseStudyLayout
      intro={
        <CaseStudyProjectHero
          eyebrow="Flow Cauciones -"
          eyebrowLine2="InvertirOnline"
          chips={["Mobile App", "B2C"]}
          lede="A financial product available on web for years — but invisible in the app. We redesigned the caución flow from scratch to make it work where users already were: mobile."
          facts={[
            { label: "Date", value: "Q3 2023" },
            { label: "Role", value: "Product Designer" },
            { label: "Scope", value: "UX Research, UX/UI Design" },
            { label: "Team", value: "1 Designer, 4 engineers, 1 PM" },
            { label: "Tools", value: "Figma, Figjam, Jira, HotJar" },
            { label: "Status", value: "Productive" },
          ]}
        />
      }
    >
      <CaseStudySection id="research">
        <CaseStudyPhaseLabel>01 — Research</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
        <CaseStudyProse>
          <p>
            Stakeholders flagged that cauciones — one of the platform&apos;s
            core investment instruments — only existed on the web. Users who
            worked exclusively through the app had no way to access it. The ask
            was simple: bring it to mobile. But before designing anything, we
            needed to understand how users actually used the web flow — and
            whether just replicating it would be enough.
          </p>
          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>
              We started where the behavior was already happening.
            </CaseStudyEmphasis>
            <p>
              We analyzed the existing web product and ran a survey with
              open-ended questions targeting users who had already made a
              caución on the web. Two things stood out immediately.

            </p>
          </CaseStudyHeadingBlock>

          <div id="survey" className="scroll-mt-24 flex flex-col gap-[4.5rem]">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl bg-[#dfdcff] px-5 py-5 md:px-6 md:py-6">
                <p className="text-sm leading-relaxed text-muted">
                  Survey finding 1 — The &quot;use all&quot; button is load-bearing.
                </p>
                <p className="mt-3 font-[family-name:var(--font-general-sans)] text-2xl font-medium leading-tight text-ink md:text-3xl md:leading-tight">
                  85% of 208 respondents rated the &quot;usar todo&quot; button
                  as very useful
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  (4–5 out of 5).
                </p>
              </div>
              <div className="rounded-2xl bg-[#dfdcff] px-5 py-5 md:px-6 md:py-6">
                <p className="text-sm leading-relaxed text-muted">
                  Survey finding 2 — The flow felt easy. But that&apos;s the web.
                </p>
                <p className="mt-3 font-[family-name:var(--font-general-sans)] text-2xl font-medium leading-tight text-ink md:text-3xl md:leading-tight">
                  74% of 218 respondents rated the ease of making a caución as
                  very easy
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  (5 out of 5) on desktop.
                </p>
              </div>
            </div>

            <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
              The question we needed to answer: would that translate to mobile?
            </p>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                What users were actually asking for:
              </CaseStudyEmphasis>
              <div className="flex flex-col gap-4">
                {[
                  `"They should add the option to make cauciones directly from the app."`,
                  `"It would be great to -caucionar- from the app."`,
                  `"The 'use all' action is excellent."`,
                  `"The rates are very small — much smaller than the rest of the pages."`,
                ].map((q) => (
                  <div
                    key={q}
                    className="rounded-2xl bg-white px-5 py-4 text-base font-normal leading-relaxed tracking-[0.02em] text-ink md:px-6 md:py-5 md:text-lg"
                  >
                    {q}
                  </div>
                ))}
              </div>
            </CaseStudyHeadingBlock>
          </div>

          <p>
            These weren&apos;t feature requests. They were signals about where
            friction would show up on mobile.
          </p>
          <p>Then we looked at the data.</p>

          <p className="text-[28px] font-medium leading-tight text-ink md:text-[28px]">
            We analyzed heatmaps and quantitative behavior across 732 screens
            over 1 month on desktop, and 134 screens on the responsive version.
          </p>

          <div className="flex flex-col gap-4">
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>Desktop insights:</CaseStudyEmphasis>
            </CaseStudyHeadingBlock>
            <figure className="relative left-1/2 -translate-x-1/2 flex w-[calc(100vw-1.5rem)] flex-col gap-2 overflow-hidden rounded-2xl md:w-[calc(100vw-4rem)] lg:w-[min(calc(100vw-5rem),1344px)] xl:w-[min(calc(100vw-6rem),1328px)]">
              <Image
                src="/images/desktop%20hotjar.png"
                alt="Desktop Hotjar heatmap with stat cards and caption: Previous and complete flow from Circle."
                width={2534}
                height={1198}
                className="block h-auto w-full"
                sizes="(max-width: 1186px) 100vw, 1186px"
              />
              <figcaption className="text-center text-sm leading-relaxed text-muted">
                Desktop heatmap data from Hotjar.
              </figcaption>
            </figure>
          </div>

          <figure className="mx-auto mt-[200px] mb-[120px] w-full max-w-[min(100%,800px)] overflow-hidden rounded-2xl">
            <Image
              src={`${IMG}/mobile-insights-section.png`}
              alt="Mobile responsive Hotjar insights with stat cards and phone mockup. Caption: Analyzed Hotjar Heatmap in Responsive Size."
              width={1650}
              height={1294}
              className="h-auto w-full"
              sizes="(max-width: 1186px) 100vw, 800px"
            />
          </figure>

          <p>
            The pattern was the same across platforms: users don&apos;t want to
            configure — they want to confirm. The default behavior was the
            dominant behavior. That became our design principle.
          </p>
          <p>
            To add qualitative context, we ran 3 short interviews with active
            web users. Not statistically significant, but they consistently
            reinforced what the heatmaps already showed: users wanted speed,
            &apos;use all&apos; was essential, and the app felt like a gap in
            their workflow.
          </p>
          <p className="text-[28px] font-medium leading-tight text-ink md:text-[28px]">
            We also audited 3 competing apps (Cocos, PPI, Taurus) to understand
            how the market structured the same flow — and set a benchmark for
            step reduction.
          </p>

          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>
              We also consulted the data team to understand term behavior.
            </CaseStudyEmphasis>
            <p>
              Beyond the heatmaps, we dug one level deeper: we asked the data
              team which term users were actually selecting most often. The
              answer was consistent — the majority were caucionando at 1 day.
              Not because it was the path of least resistance, but because it
              was the most financially effective strategy: daily reinvestment
              compounds significantly more than locking in a longer term
              upfront. A 15-day caución looks simpler on the surface, but daily
              reinvestment consistently outperforms it.
            </p>
          </CaseStudyHeadingBlock>
          <p>
            That finding reinforced the decision to pre-select 1 day as the
            default — not because it was the minimum, but because the data
            confirmed it was the optimal behavior for most users. Removing that
            decision from the flow meant users got the best outcome without
            needing to understand the math behind it.
          </p>
          <p>
            It also surfaced a future opportunity we flagged during the project:
            an automatic daily caución feature that would reinvest returns on
            the user&apos;s behalf every day. The smart default was the first
            step toward that vision.
          </p>
        </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudySection id="conclusions">
        <CaseStudyPhaseLabel>02 — Conclusions</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
        <CaseStudyProse>
          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>
              What the data told us, and what we decided.
            </CaseStudyEmphasis>
            <p>
              The research didn&apos;t just validate assumptions — it sharpened
              the decisions we had to make.
            </p>
          </CaseStudyHeadingBlock>
        </CaseStudyProse>
        <div className="mt-9 flex flex-col gap-4">
          <CaseStudyHighlightCallout>
            Keep &quot;use all&quot; as a primary action, not a secondary one.
            With 68–77% of users defaulting to it, hiding it or treating it as an
            edge case would actively hurt conversion.
          </CaseStudyHighlightCallout>
          <CaseStudyHighlightCallout>
            Don&apos;t ask users to configure what they don&apos;t touch. 84%+
            operate with TNA Mercado and never modify the limit rate. Exposing
            those fields upfront adds cognitive load without adding value. The
            solution: smart defaults with the option to edit — not the other
            way around.
          </CaseStudyHighlightCallout>
          <CaseStudyHighlightCallout>
            Show the estimated return the moment the user enters an amount. In
            a financial flow, uncertainty kills confidence. If a user
            doesn&apos;t know what they&apos;re going to earn before confirming,
            they hesitate — or they leave. Making the return visible in real
            time, on the same screen, removes that friction entirely.
          </CaseStudyHighlightCallout>
          <CaseStudyHighlightCallout>
            Speed is a trust signal in financial apps. Users praised the web for
            being fast. The app had to match or exceed that — fewer steps, no
            context switching, everything in view.
          </CaseStudyHighlightCallout>
          <CaseStudyHighlightCallout>
            Set 1 day as the default term. It&apos;s the minimum and the most
            common starting point. Pre-selecting it removes a decision that most
            users never needed to make.
          </CaseStudyHighlightCallout>
        </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudySection id="proposal">
        <CaseStudyPhaseLabel>03 — Proposal</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
        <CaseStudyProse>
          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>What we designed — and why</CaseStudyEmphasis>
            <p>
              <strong>User Flow</strong>
              <br />
              We mapped the complete flow from app open to order confirmation,
              including registration states and error handling.
            </p>
          </CaseStudyHeadingBlock>

          <div className="rounded-2xl border border-ink/10 bg-white p-5 md:p-6">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-heading-case">
                The happy path:
              </p>
              <p className="text-lg font-medium text-heading-case">
                Overview → Mercado → Cauciones → Make a caución → Enter amount
                &amp; term → Confirm order.
              </p>
            </div>
          </div>

          {/* 1) Bloque copy #A092FF 2) Móviles + corte violeta/blanco; debajo siguen los párrafos en CaseStudyProse */}
          <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-clip">
            <div className="w-full bg-[#A092FF] pt-10 pb-12 md:pt-14 md:pb-16 lg:pb-20">
              <div className="case-study-wide-bleed-align-text">
                <div className="mx-auto mt-12 w-full max-w-[min(100%,800px)] px-4 text-left md:mt-16 lg:mt-20">
                  <div className="flex flex-col gap-3 md:gap-4">
                    <p className="font-[family-name:var(--font-general-sans)] text-base font-medium leading-snug text-ink md:text-lg md:leading-snug">
                      Working within real constraints
                    </p>
                    <p className="text-balance font-[family-name:var(--font-general-sans)] text-xl font-medium leading-[1.3] tracking-tight text-ink md:text-2xl md:leading-[1.35] lg:text-[28px] lg:leading-[1.38]">
                      This project involved constant back-and-forth with the dev
                      team to figure out what was actually feasible — and those
                      conversations directly shaped some of the design decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full min-h-[min(46vh,420px)] pb-10 pt-0 md:min-h-[min(48vh,460px)] md:pb-14">
              <div
                className="absolute inset-x-0 top-0 bottom-1/2 bg-[#A092FF]"
                aria-hidden
              />
              <div
                className="absolute inset-x-0 bottom-0 top-1/2 bg-case-study-bg"
                aria-hidden
              />

              <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,560px)] justify-center gap-4 px-4 pb-8 pt-8 md:gap-6 md:pt-12">
                <div className="min-w-0 flex-1 overflow-hidden">
                  <Image
                    src={`${IMG}/proposal-term-selector-phones.png`}
                    alt="Design proposed: calendar term selector."
                    width={572}
                    height={590}
                    className="h-auto w-[200%] max-w-none shadow-none ring-0"
                    sizes="(max-width: 560px) 45vw, 272px"
                  />
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <Image
                    src={`${IMG}/proposal-term-selector-phones.png`}
                    alt="Design agreed: list-style term selector."
                    width={572}
                    height={590}
                    className="h-auto w-[200%] max-w-none -translate-x-1/2 shadow-none ring-0"
                    sizes="(max-width: 560px) 45vw, 272px"
                  />
                </div>
              </div>
            </div>
          </div>

          <p>
            The clearest example: the term selector. My initial proposal was a
            calendar picker — more intuitive, clearer visual mapping between
            dates and days. Dev flagged it as significantly more expensive:
            it would&apos;ve required a brand-new component. The more pragmatic
            path was to reuse an existing dropdown already in use across the
            product. We negotiated. The result was that existing dropdown —
            cheaper to build, no new component — but with one key addition I
            pushed for: the day of the week shown alongside each date.
          </p>
          <p>
            This wasn&apos;t just an aesthetic preference. In a financial
            product with market hours, the date you think you&apos;re investing
            isn&apos;t always the date that counts. If you initiate a caución
            after market close on Thursday, the operation executes on Friday —
            so &quot;3 days&quot; becomes ambiguous. Showing &quot;3 days —
            Sunday&quot; gives the user the information that actually matters:
            not an abstract number, but a concrete moment in time. A small
            addition that resolved a real point of confusion without requiring
            any new infrastructure.
          </p>
          <p>
            That tradeoff taught me something I apply consistently now: the goal
            isn&apos;t to win every design decision — it&apos;s to identify
            which details actually matter for the user and hold the line on
            those, while being flexible on everything else.
          </p>
          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>Real-time return calculation</CaseStudyEmphasis>
            <p>
              One of the most impactful decisions in the flow was showing the
              estimated return the moment the user enters an amount — no screen
              change, no confirmation step. Right there: &quot;If I cauciono
              $10,000 for 3 days, I receive $X.&quot;
            </p>
          </CaseStudyHeadingBlock>

          <figure className="mx-auto flex w-full justify-center pb-12 md:pb-16 lg:pb-20">
            <div className="relative w-full max-w-[280px]">
              <div className="relative isolate aspect-[540/1096] w-full [container-type:inline-size]">
                <Image
                  src={IPHONE_13_MINI_THIN_FRAME}
                  alt=""
                  fill
                  className="pointer-events-none z-0 object-contain object-center"
                  sizes="280px"
                  aria-hidden
                  draggable={false}
                />
                <div
                  className="absolute z-10 overflow-hidden rounded-[min(1.65rem,9.5cqw)]"
                  style={SCREEN_INSET_STYLE}
                >
                  <video
                    className="h-full w-full origin-center scale-[1.012] object-cover object-center"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="Estimated return updating on screen as the user enters an amount."
                  >
                    <source src={ESTIMADO_VIDEO} type="video/mp4" />
                  </video>
                  {/* Tapa la zona del notch sin mask-image (el SVG #fragment suele dejar el video invisible en WebKit). */}
                  <div
                    className="pointer-events-none absolute left-1/2 top-0 z-[11] h-[2.8%] w-[38%] -translate-x-1/2 rounded-b-[min(0.85rem,2.8cqw)] bg-[#0a0a0a]"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </figure>

          <p>
            In a financial product, that visibility directly affects whether the
            user actually completes the transaction. Uncertainty at the
            amount-entry step is where hesitation happens. Removing it before
            the confirm button reduces the cognitive cost of committing.
          </p>

          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>Design System</CaseStudyEmphasis>
            <p>
              We worked within the existing InvertirOnline component library.
              Consistency in a financial product isn&apos;t a constraint —
              it&apos;s a feature. Introducing unfamiliar patterns creates
              distrust at exactly the wrong moment. We extended the system where
              mobile required it, without breaking the established visual
              language.
            </p>
          </CaseStudyHeadingBlock>

          <div className="rounded-2xl bg-[#f6f9fe] p-5 md:p-6">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-heading-case">
                The final design addressed every insight from research:
              </p>
              <ul className="list-inside list-disc space-y-2 text-lg font-medium leading-[1.56] tracking-[0.03em] text-heading-case">
                <li>
                  Amount input defaults to &quot;use all&quot; — the most common
                  action is the first action
                </li>
                <li>
                  TNA Mercado pre-selected — edit if you want to, ignore if you
                  don&apos;t
                </li>
                <li>
                  Estimated return visible in real time, same screen — no
                  navigation to see what you&apos;re earning
                </li>
                <li>Term selector with day-of-week label</li>
                <li>
                  Full order summary before confirming — trust at the critical
                  moment
                </li>
                <li>
                  Clear success state — users know the operation went through
                </li>
              </ul>
            </div>
          </div>

          <figure className="mx-auto flex w-full justify-center pb-12 md:pb-16 lg:pb-20">
            <div className="relative w-full max-w-[280px]">
              <div className="relative isolate aspect-[540/1096] w-full [container-type:inline-size]">
                <Image
                  src={IPHONE_13_MINI_THIN_FRAME}
                  alt=""
                  fill
                  className="pointer-events-none z-0 object-contain object-center"
                  sizes="280px"
                  aria-hidden
                  draggable={false}
                />
                <div
                  className="absolute z-10 overflow-hidden rounded-[min(1.65rem,9.5cqw)]"
                  style={SCREEN_INSET_STYLE}
                >
                  <video
                    className="h-full w-full origin-center scale-[1.012] object-cover object-center"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="Hacer caución: recorrido del flujo en la app."
                  >
                    <source src={HACER_CAUCION_VIDEO} type="video/mp4" />
                  </video>
                  <div
                    className="pointer-events-none absolute left-1/2 top-0 z-[11] h-[2.8%] w-[38%] -translate-x-1/2 rounded-b-[min(0.85rem,2.8cqw)] bg-[#0a0a0a]"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </figure>
        </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudySection id="closing">
        <CaseStudyPhaseLabel>04 — Closing</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
        <div className="min-w-0 text-lg leading-[1.56] tracking-[0.03em] text-muted">
          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>What this project was really about</CaseStudyEmphasis>
            <p>
              Bringing a financial instrument from web to mobile isn&apos;t a
              replication exercise. The behavior data showed us that users
              already had a clear mental model around cauciones — our job was to
              design an experience that respected that model while removing every
              unnecessary point of friction.
            </p>
          </CaseStudyHeadingBlock>
          <p className="mt-9">
            Not every decision was ideal in isolation. Some were shaped by dev
            constraints, timelines, and negotiation. But the ones that mattered
            most for the user — real-time feedback, smart defaults,
            human-readable dates — made it in.
          </p>
        </div>
        </CaseStudyPhaseContent>

        <div className="mt-16 flex flex-col items-center gap-6 text-center md:mt-24">
          <p className="font-[family-name:var(--font-general-sans)] text-2xl font-semibold text-heading-case">
            Thank you for reading!
          </p>
          <Link href="/#card-cauciones" className="btn-primary">
            <ArrowLeftIcon className="size-4" aria-hidden />
            Go Back
          </Link>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
