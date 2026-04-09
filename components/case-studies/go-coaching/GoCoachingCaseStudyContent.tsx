import type { CSSProperties } from "react";
import Image from "next/image";
import { ExpandableImage } from "@/components/ExpandableImage";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons/ArrowIcons";
import { imagePath } from "@/lib/image-path";
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

/** Hero: `go coaching 3.mp4` / `go coaching 3.mov` en `public/images/`. */
const GO_COACHING_VIDEO_MP4 = imagePath("go coaching 3.mp4");
const GO_COACHING_VIDEO_MOV = imagePath("go coaching 3.mov");

/** `mockupcoaching 1.png` intrinsic size — overlay % must match this box. */
const MOCKUP_W = 3009;
const MOCKUP_H = 1842;

/** Dimensiones reales del stream `go coaching 3.mp4`. */
const VIDEO_W = 1444;
const VIDEO_H = 932;

/**
 * Área exacta del frame detectada dentro de `mockupcoaching 1.png` mediante
 * template-matching del sidebar del video contra el mockup (score 0.80).
 * AR screen = 2093/1351 = 1.5492 ≈ AR video 1444/932 = 1.5494 → encaje perfecto.
 * Este rect coincide con el hueco en `mockupcoaching-frame.png`.
 */
const SCREEN_RECT = {
  left: 452,
  top: 171,
  width: 2104,
  height: 1362,
} as const;

/** Radio de esquina del hueco (px). */
const SCREEN_CORNER_RADIUS_PX = 8;

function mockupScreenStyle(): CSSProperties {
  return {
    top: `${(SCREEN_RECT.top / MOCKUP_H) * 100}%`,
    left: `${(SCREEN_RECT.left / MOCKUP_W) * 100}%`,
    width: `${(SCREEN_RECT.width / MOCKUP_W) * 100}%`,
    height: `${(SCREEN_RECT.height / MOCKUP_H) * 100}%`,
  };
}

/**
 * Long-form Go! Coaching case study — content & structure from Figma
 * `FeF5ES2xRY75wBP8gFjOVr` node `4953:5639` (MCP `get_figma_data`).
 */
export function GoCoachingCaseStudyContent() {
  return (
    <CaseStudyLayout
      pageBgClassName="bg-[#E8EFFD]"
      ringOffsetClassName="focus-visible:ring-offset-[#E8EFFD]"
      intro={
        <CaseStudyProjectHero
          eyebrow="Sales Performance & Coaching Platform for Loan Officers"
          chips={["Web Responsive", "B2C"]}
          heroBg="#A7C2F6"
          lede="Go! Coaching is a sales performance platform built for loan officers — replacing 6 disconnected spreadsheets and a failed CRM with a single connected system where coaches can track student progress in real time and every logged activity updates the rest of the platform automatically."
          facts={[
            { label: "Date", value: "Q2 2025" },
            { label: "Role", value: "Product Designer" },
            { label: "Scope", value: "UX Research, Product Strategy, UX/UI Design, Design System, Prototyping" },
            { label: "Team", value: "Product, Engineering, Coaches (Stakeholders)" },
            { label: "Tools", value: "Figma, Figjam, Jira" },
            { label: "Status", value: "Productive" },
          ]}
        />
      }
    >
      <CaseStudyWideBleed className="!overflow-x-visible">
        <div className="flex w-full min-w-0 justify-center">
          {/* No `case-study-hero-band-inner` here: that class adds horizontal padding so the
              image is inset but % positioning still used the full figure — video misaligned. */}
          <figure
            className="relative isolate m-0 w-full max-w-[min(100dvw,1424px)] shrink-0 overflow-hidden rounded-2xl box-border"
            style={{
              aspectRatio: `${MOCKUP_W} / ${MOCKUP_H}`,
              background: "linear-gradient(to bottom, #F3F3F3 70%, #C8C8C8 100%)",
            }}
          >
            {/* Laptop frame (with transparent screen hole) behind the video — same pattern as Cauciones. */}
            <Image
              src={imagePath("mockupcoaching-frame.png")}
              alt=""
              fill
              className="pointer-events-none z-0 object-contain object-center select-none"
              sizes="(max-width: 1424px) 100vw, 1424px"
              priority
              aria-hidden
            />
            {/* Video on top, positioned precisely over the transparent screen hole. */}
            <div
              className="pointer-events-none absolute z-10 overflow-hidden"
              style={{
                ...mockupScreenStyle(),
                borderRadius: 0,
              }}
            >
              <video
                className="h-full w-full object-cover"
                width={VIDEO_W}
                height={VIDEO_H}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Go! Coaching product screen recording on the laptop display."
              >
                <source src={GO_COACHING_VIDEO_MP4} type="video/mp4" />
                <source src={GO_COACHING_VIDEO_MOV} type="video/quicktime" />
              </video>
            </div>
          </figure>
        </div>
      </CaseStudyWideBleed>

      {/* ── 01 The Problem ──────────────────────────────────────────────── */}
      <CaseStudySection id="the-problem" className="!mt-24 md:!mt-32">
        <CaseStudyPhaseLabel>01 — The Problem</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              Loan officers in the Go! Coaching program were running their
              entire sales operation across 6 separate spreadsheets: a
              Relationship Tracker that internally managed five categories of
              contacts (Target 300 Realtors, Focus 50 RLTRs, Focus 50 COI,
              Focus 50 VIP, and Focus 50 Clients), plus an Activity Tracker,
              Lead Tracker, Loan Tracker, Closing Deals tracker, and
              Commissions Tracker. Each one had its own logic, its own
              structure, and no connection to any of the others. Data that
              should have flowed automatically had to be copied by hand —
              every time, by every user.
            </p>
            <p>
              Beyond the spreadsheets, the existing ecosystem was already
              complex: HubSpot feeding into Zapier, Zapier triggering Circle
              account creation, students receiving access to their spreadsheets
              via email, coaches manually building Master Student Rosters from
              that data. Every new student meant a cascade of manual steps
              across multiple tools.
            </p>
            <p>
              The team had already tried SalesScreen — one of the leading SPM
              tools in the market. They abandoned it. The customization was too
              limited for their methodology, and the data presentation was
              overwhelming and poorly organized. The coaches didn&apos;t need
              more data. They needed the right data, structured around the way
              they actually coached.
            </p>
            <p>
              The ask was to build a platform. But the real problem was deeper:
              how do you replace 6 spreadsheets, a failed CRM, and a patchwork
              of automation tools — without losing the methodology that made
              the coaching program work?
            </p>

          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-12 md:!mt-16">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          <figure className="m-0 flex min-w-0 flex-1 flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6F9FE] p-3">
              <ExpandableImage
                src={imagePath("google sheets.png")}
                alt="Activity Tracker Google Sheets used by students before the platform."
                width={590}
                height={405}
                className="h-auto w-full rounded-lg"
                sizes="(max-width: 1424px) 50vw, 712px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              Previous Experience of the Students - Activity Tracker Google Sheets.
            </figcaption>
          </figure>
          <figure className="m-0 flex min-w-0 flex-1 flex-col gap-3 justify-center">
            <div className="overflow-hidden rounded-2xl bg-[#F6F9FE] p-3">
              <ExpandableImage
                src={imagePath("diagram circle.png")}
                alt="Previous and complete flow diagram from Circle platform."
                width={1256}
                height={560}
                className="h-auto w-full rounded-lg"
                sizes="(max-width: 1424px) 50vw, 712px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              Previous and complete flow from Circle.
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      {/* ── 02 Discovery & Research ─────────────────────────────────────── */}
      <CaseStudySection id="discovery">
        <CaseStudyPhaseLabel>02 — Discovery &amp; Research</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              Before opening Figma, I needed to understand how the system
              actually worked.
            </p>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Long conversations before any wireframe existed.
              </CaseStudyEmphasis>
              <p>
                Understanding the platform required extended sessions with the
                client and coaches — spreadsheet by spreadsheet, field by field,
                asking what fed into what and why. They knew their methodology
                deeply. But translating it from isolated files into a connected
                product was a completely different challenge. In a spreadsheet,
                each tracker lives on its own. In a product, every action has
                consequences somewhere else. We needed to be crystal clear on
                the data logic before touching the design — because getting it
                wrong here would have broken everything downstream.
              </p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-12 md:!mt-16">
        <div className="flex flex-col gap-4 md:flex-row md:gap-4 md:items-start">
          {/* Left box — single image, hugs content */}
          <figure className="m-0 flex min-w-0 flex-[7] flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6F9FE] p-3">
              <ExpandableImage
                src={imagePath("sessions.png")}
                alt="Working session notes — client calls documented as coach and student needs."
                width={1276}
                height={804}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1424px) 70vw, 996px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              Working session notes — each client call was documented as a breakdown of coach and student needs, turning conversations into product requirements.
            </figcaption>
          </figure>
          {/* Right box — two images inside one shared card */}
          <figure className="m-0 flex min-w-0 flex-[3] flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6F9FE] p-3 flex flex-col gap-3">
              <ExpandableImage
                src={imagePath("wireframes.png")}
                alt="Early wireframes exploring layout and hierarchy before high fidelity."
                width={498}
                height={354}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1424px) 30vw, 427px"
              />
              <ExpandableImage
                src={imagePath("wireframeeeegocoaching 1.png")}
                alt="Additional early sketches exploring hierarchy and layout."
                width={374}
                height={281}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1424px) 30vw, 427px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              Early sketches exploring layout and hierarchy before moving to high fidelity.
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudySection id="discovery-continued">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                The insight that changed everything came from reading the
                spreadsheets themselves.
              </CaseStudyEmphasis>
              <p>
                The existing Activity Tracker wasn&apos;t just a log — it was
                a cascade of calculations. Marketing Inputs fed into Sales
                Inputs, which produced Outputs, which drove Results. Each
                section was color-coded, each row had a Target and a live
                Metric percentage. The logic was solid — but entirely implicit,
                encoded in cell formulas and column order, invisible to anyone
                who hadn&apos;t built it themselves. A new loan officer opening
                this for the first time just saw rows. The methodology was
                buried under the mechanics of a spreadsheet that was never
                designed to teach anyone anything.
              </p>
              <p>
                That became the core design challenge: preserve the cascade
                logic, but make it legible.
              </p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                The product also had to work across four distinct user profiles
                — not just roles, but levels of experience and business
                maturity:
              </CaseStudyEmphasis>
              <div className="flex flex-col gap-3 rounded-2xl bg-[#A7C2F6]/20 px-5 py-5 md:px-6 md:py-6">
                {[
                  "Level 1 (Foundations): new loan officers, 0–3 deals/month, building structure and rhythm from scratch",
                  "Level 2 (Accelerator): 4–7 deals/month, establishing repeatable sales systems",
                  "Level 3 (Elite): 8+ deals/month, focused on team leadership and scaling",
                  "Level 4 (Peak+): sales leaders building and recruiting teams",
                ].map((level) => (
                  <p
                    key={level}
                    className="text-base font-medium leading-[1.56] tracking-[0.03em] text-ink md:text-lg"
                  >
                    → {level}
                  </p>
                ))}
              </div>
            </CaseStudyHeadingBlock>

            <div className="space-y-5">
              <p>
                Each level had different goals, different coaching needs, and a
                different relationship to the data. Designing one platform that
                served all four without feeling generic for any of them was a
                structural challenge that started in research, not in UI.
              </p>
              <p>
                I also reviewed existing SPM tools like SalesScreen and CRMs
                like HubSpot. The conclusion: too generic for this methodology,
                or too complex for a coaching relationship. Building from scratch
                was the right call.
              </p>
              <p>
                Working within a 13-week delivery cycle — development starting at
                week 4, prototypes delivered every two weeks — meant every
                research input had to turn into a concrete design direction
                within days, not weeks.
              </p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14 !overflow-x-visible">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(70dvw,997px)] flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6F9FE] p-3">
              <ExpandableImage
                src={imagePath("diagram.png")}
                alt="Diagram of the student experience through the Go! Coaching platform."
                width={1656}
                height={1240}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1424px) 100vw, 1424px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              Diagram of the student experience.
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>
      <CaseStudySection id="product-strategy">
        <CaseStudyPhaseLabel>03 — Product Strategy</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Replicating spreadsheets was the wrong goal.
              </CaseStudyEmphasis>
              <p>
                The real opportunity wasn&apos;t digitization — it was
                connection. The platform&apos;s core value proposition was that
                actions in one part of the system would automatically update
                everything else. Tag a referral partner in a Sales activity,
                and their last contact date updates instantly. Log a new lead
                as an Output, and it appears in the Lead Tracker already linked
                to its source. Lock a deal, and a loan gets created
                automatically. Users log once — the system does the rest. That
                was impossible in a spreadsheet. It became the reason to build
                the product at all.
              </p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                A gradual exit from spreadsheet thinking.
              </CaseStudyEmphasis>
              <p>
                The coaches and loan officers knew the spreadsheet structure
                inside out — and that familiarity was an asset, not something
                to eliminate. Rather than forcing a complete mental shift on day
                one, I designed the transition deliberately: some table-based
                views survived, column structures were preserved where they
                aided recognition, and new interactions were layered on top of
                familiar patterns. The goal wasn&apos;t to make the product feel
                nothing like a spreadsheet. It was to make it feel like a better
                version of one — until users naturally stopped thinking in
                spreadsheet terms at all.
              </p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                The Activity Tracker — the daily operating system.
              </CaseStudyEmphasis>
              <p>
                The cascade logic of the original spreadsheet — Marketing →
                Sales → Outputs → Results — became the structure of the
                Activity Tracker, but made visible and legible instead of
                hidden in cell formulas. Numeric inputs keep daily logging
                fast. Direct tagging of referral partners triggers automatic
                updates to last contact dates across the Relationship Tracker.
                The weekly progress visualization lives in a persistent panel
                so users always know where they stand without leaving the page.
                The streak indicator — small, unobtrusive — was the first
                gamification hook, present from day one.
              </p>
            </CaseStudyHeadingBlock>

            <CaseStudyWideBleed className="!overflow-x-visible">
              <div className="flex w-full min-w-0 justify-center">
                <figure className="m-0 w-full max-w-[min(100dvw,1000px)] flex flex-col gap-3">
                  <div
                    className="overflow-hidden rounded-3xl p-6 md:p-10"
                    style={{ background: "linear-gradient(to bottom, #F3F3F3 70%, #CCCCCC 100%)" }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Left: week selector + laptop + streak */}
                      <div className="flex min-w-0 flex-1 flex-col items-center gap-1">
                        <Image
                          src={imagePath("Week Selector.png")}
                          alt=""
                          width={1392}
                          height={172}
                          className="h-auto w-[68%] mb-[-12px]"
                          aria-hidden
                        />
                        <Image
                          src={imagePath("mockupcoaching 1.png")}
                          alt="Activity Tracker desktop screen showing daily logging interface."
                          width={3009}
                          height={1842}
                          className="h-auto w-full"
                          sizes="(max-width: 1424px) 75vw, 1068px"
                        />
                        <Image
                          src={imagePath("Streak2.png")}
                          alt=""
                          width={948}
                          height={150}
                          className="h-auto w-[40%]"
                          aria-hidden
                        />
                      </div>
                      {/* Right: weekly goals panels */}
                      <div className="w-[17%] flex-shrink-0 -ml-6">
                        <Image
                          src={imagePath("marketing assets.png")}
                          alt="Weekly goals panels — Marketing, Sales, Outputs and Results progress."
                          width={639}
                          height={2458}
                          className="h-auto w-full"
                          sizes="(max-width: 1424px) 20vw, 285px"
                        />
                      </div>
                    </div>
                  </div>
                  <figcaption className="text-center text-sm leading-snug text-ink/50">
                    Desktop — Student View — Activity Tracker.
                  </figcaption>
                </figure>
              </div>
            </CaseStudyWideBleed>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Mobile first, with a companion app in mind.
              </CaseStudyEmphasis>
              <p>
                Despite being a web app, I designed every screen mobile first.
                Loan officers are rarely at a desk when they need to log an
                activity or check a referral. Designing for the smallest screen
                forced better prioritization — if something didn&apos;t deserve
                space on mobile, it probably didn&apos;t deserve space at all.
                The web experience expanded from those constraints, not the
                other way around. And it positioned the product for a natural
                next step: a dedicated mobile companion app down the line.
              </p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14 !overflow-x-visible">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100dvw,1424px)] flex flex-col gap-3">
              <Image
                src={imagePath("mobile-coach view.png")}
                alt="Mobile coach view — multiple screens showing the Go! Coaching app on iPhone."
                width={3594}
                height={2687}
                className="h-auto w-full"
                sizes="(max-width: 1424px) 100vw, 1424px"
              />
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              Mobile — Coach View.
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>
      <CaseStudySection id="visual-direction">
        <CaseStudyPhaseLabel>04 — Visual Direction</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Choosing an aesthetic that felt like the product.
              </CaseStudyEmphasis>
              <p>
                Before any UI work started, I put together three moodboard
                directions for the client to evaluate. The goal wasn&apos;t to
                pick a color palette — it was to align on the emotional register
                of the product. A performance platform for competitive loan
                officers needs to feel different from a generic SaaS dashboard.
              </p>
              <p>
                They chose the spatial, high-contrast direction: dark
                backgrounds, glowing data visualizations, a sense of precision
                and ambition. It matched the competitive culture of the program
                and the aspirational identity of the users — people who track
                their numbers because they want to win.
              </p>
            </CaseStudyHeadingBlock>

            <figure className="m-0 flex flex-col gap-3 overflow-hidden rounded-2xl">
              <ExpandableImage
                src={imagePath("moodboards.png")}
                alt="Three moodboard directions; the chosen spatial, dark, high-contrast direction became the design system foundation."
                width={1824}
                height={1170}
                className="h-auto w-full rounded-2xl"
                sizes="(max-width: 1186px) 100vw, 1186px"
              />
              <figcaption className="text-center text-sm leading-relaxed text-muted-soft">
                Three visual directions were presented to the client. The chosen
                direction — spatial, dark, high-contrast — aligned with the
                competitive culture of the program and became the foundation of
                the design system.
              </figcaption>
            </figure>

            <figure className="m-0 mt-[9rem] flex flex-col gap-3">
              <Image
                src={imagePath("dashboard mobile.png")}
                alt="Mobile — Coach View Dashboard."
                width={1824}
                height={1170}
                className="h-auto w-full rounded-2xl"
                sizes="(max-width: 1186px) 100vw, 1186px"
              />
              <figcaption className="text-center text-sm leading-snug text-ink/50">
                Mobile — Coach View · Dashboard
              </figcaption>
            </figure>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 05 The Solution ─────────────────────────────────────────────── */}
      <CaseStudySection id="the-solution">
        <CaseStudyPhaseLabel>05 — The Solution</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              The platform was designed around two distinct experiences:
            </p>

            {/* Student Experience */}
            <div className="space-y-[4.5rem]">
              <div className="flex flex-col gap-4">
                <p className="text-xl font-medium leading-[1.4] tracking-[0.02em] text-ink md:text-2xl">
                  The Student Experience
                </p>
                <p className="text-xl font-medium leading-[1.4] tracking-[0.02em] text-ink md:text-2xl">
                  Everything a loan officer needs to manage their day-to-day: the
                  Activity Tracker, lead and loan management, the Relationship
                  Tracker, their profile, dashboard, and leaderboard. All of it
                  designed to help them log fast, stay accountable, and see their
                  own progress clearly.
                </p>
              </div>

              <CaseStudyHeadingBlock>
                <CaseStudyEmphasis>
                  The Activity Tracker — the daily operating system.
                </CaseStudyEmphasis>
                <p>
                  The cascade logic of the original spreadsheet — Marketing →
                  Sales → Outputs → Results — became the structure of the
                  Activity Tracker, but made visible and legible instead of
                  hidden in cell formulas. Numeric inputs keep daily logging
                  fast. Direct tagging of referral partners triggers automatic
                  updates to last contact dates across the Relationship Tracker.
                  The weekly progress visualization lives in a persistent panel
                  so users always know where they stand without leaving the
                  page. The streak indicator — small, unobtrusive — was the
                  first gamification hook, present from day one.
                </p>
              </CaseStudyHeadingBlock>

              <CaseStudyHeadingBlock>
                <CaseStudyEmphasis>
                  Automatic updates as the core product promise.
                </CaseStudyEmphasis>
                <p>
                  Every design decision in the Activity Tracker was evaluated
                  against one question: does this make the automatic update
                  trustworthy and understandable? If a number changes and the
                  user doesn&apos;t understand why, the feature backfires.
                  Designing the logic of automation was as important as
                  designing the interface around it.
                </p>
              </CaseStudyHeadingBlock>

              {/* Hardest design problem */}
              <CaseStudyHeadingBlock>
                <CaseStudyEmphasis>
                  The hardest design problem: leads and loans.
                </CaseStudyEmphasis>
                <p>
                  The most complex experience wasn&apos;t the Activity Tracker —
                  it was understanding how leads and loans actually worked and
                  how to show their relationship in the product. A lead is a
                  potential deal in progress. A loan is a committed transaction
                  with its own lifecycle. A loan doesn&apos;t exist until a lead
                  reaches a specific threshold — a locked deal. From that point,
                  the loan has its own record, its own update cycle, and its own
                  tracking completely separate from the lead that originated it.
                </p>
                <p>
                  Cancel states (Cancelled, Unqualified, Different Lender) were
                  handled separately to keep the active pipeline clean and give
                  coaches meaningful data about why deals didn&apos;t close —
                  not just that they didn&apos;t. Collapsing leads and loans into
                  a single view would&apos;ve simplified the interface but
                  destroyed the data integrity that makes coaching conversations
                  useful.
                </p>
              </CaseStudyHeadingBlock>
            </div>

            <CaseStudyWideBleed>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <figure className="m-0 flex flex-col gap-3">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={imagePath("mobile student view.png")}
                      alt="Mobile — Student View — Referral Partners."
                      width={1764}
                      height={1323}
                      className="h-auto w-full"
                      sizes="(max-width: 1424px) 50vw, 712px"
                    />
                  </div>
                  <figcaption className="text-center text-sm leading-snug text-ink/50">
                    Mobile — Student View · Referral Partners
                  </figcaption>
                </figure>
                <figure className="m-0 flex flex-col gap-3">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={imagePath("mobile lead view.png")}
                      alt="Mobile — Student View — Lead View."
                      width={1764}
                      height={1323}
                      className="h-auto w-full"
                      sizes="(max-width: 1424px) 50vw, 712px"
                    />
                  </div>
                  <figcaption className="text-center text-sm leading-snug text-ink/50">
                    Mobile — Student View · Lead View
                  </figcaption>
                </figure>
              </div>
            </CaseStudyWideBleed>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                The Relationship Tracker as an emotional CRM.
              </CaseStudyEmphasis>
              <p>
                Beyond contact details and performance metrics, the referral
                partner profile captures spouse name, kids&apos; names,
                hobbies, and a &ldquo;what&apos;s important for this
                person&rdquo; field. In the mortgage business, relationships
                are the pipeline. Designing space for that information was a
                way of encoding the coaching methodology into the product
                itself.
              </p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>Guardrails, not just inputs.</CaseStudyEmphasis>
              <p>
                Preventing retroactive data manipulation was one of the least
                visible but most important decisions. In an accountability
                product, the integrity of historical data is what makes
                coaching conversations meaningful. Building guardrails
                wasn&apos;t a technical constraint — it was a product
                principle.
              </p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>Persistent context panel.</CaseStudyEmphasis>
              <p>
                In both Lead detail and Referral Partner detail views, key
                contact information lives in a fixed right panel outside the
                editable form. The context stays visible. The form stays
                focused. Two different jobs that shouldn&apos;t compete for the
                same space.
              </p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Gamification as a layer, not a feature.
              </CaseStudyEmphasis>
              <p>
                Coaches wanted motivation hooks. Engineering wanted an MVP. I
                designed the gamification system — leaderboards, streaks,
                weekly progress visualization — as optional layers that could
                be activated progressively, without blocking the core product
                from shipping. This wasn&apos;t a compromise. It was the right
                architecture: prove the core loop first, add motivation
                mechanics once the behavior is established.
              </p>
            </CaseStudyHeadingBlock>

            <figure className="m-0 mb-[9rem] flex flex-col gap-3">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={imagePath("liam johnson.png")}
                  alt="Referral partner profile and detail views — relationship context, forms, and guardrails in the student experience."
                  width={2757}
                  height={1781}
                  className="h-auto w-full"
                  sizes="(max-width: 1186px) 100vw, 1186px"
                />
              </div>
              <figcaption className="text-center text-sm leading-snug text-ink/50">
                Referral Partner&apos;s Detail View
              </figcaption>
            </figure>

            {/* Coach Experience */}
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium leading-[1.4] tracking-[0.02em] text-ink md:text-2xl">
                The Coach Experience
              </p>
              <p className="text-xl font-medium leading-[1.4] tracking-[0.02em] text-ink md:text-2xl">
                A completely separate set of views — different design, different
                information hierarchy — built entirely around one job: tracking
                and supporting student progress.
              </p>
            </div>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                The Coach View — designed for the conversation, not the
                spreadsheet.
              </CaseStudyEmphasis>
              <p>
                The coach experience was built around preparing for a weekly
                accountability call. From their view, a coach can see at a
                glance how each student is tracking against their weekly
                targets, when they last logged data, what their call pick-up
                rate is, and what action steps are still open from the previous
                session.
              </p>
              <p>
                The most important design decision here was showing not just
                where a student stands, but whether they&apos;re moving in the
                right direction. A student at 60% of their weekly goal on
                Thursday tells a different story than a student at 60% on
                Monday. The coach view was built to surface that distinction
                without the coach having to do the math themselves.
              </p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Coach experience designed around weekly thinking.
              </CaseStudyEmphasis>
              <p>
                Coaches don&apos;t think in individual days — they think in
                weeks. Every coach view was built around that mental model:
                weekly snapshots, temporal context always visible, team and
                individual breakdowns that made it easy to spot who needed
                attention without micromanaging. Coaches can also view the
                leaderboard across all their students, filter by level —
                Foundations, Accelerator, Elite, Peak+ — and see at a glance
                who&apos;s excelling and who needs a more focused conversation
                that week.
              </p>
            </CaseStudyHeadingBlock>

            <figure className="m-0 flex flex-col gap-3">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={imagePath("mobiles.png")}
                  alt="Mobile — Student View — Referral Partners."
                  width={1824}
                  height={1170}
                  className="h-auto w-full"
                  sizes="(max-width: 1186px) 100vw, 1186px"
                />
              </div>
              <figcaption className="text-center text-sm leading-snug text-ink/50">
                Mobile — Student View · Referral Partners
              </figcaption>
            </figure>

          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 06 Closing ──────────────────────────────────────────────────── */}
      <CaseStudySection id="closing">
        <CaseStudyPhaseLabel>06 — Closing</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <div className="min-w-0 text-lg leading-[1.56] tracking-[0.03em] text-muted">
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>What&apos;s next.</CaseStudyEmphasis>
              <p>
                The 2026 roadmap reflects a product that&apos;s proven its core
                and is ready to grow: a Student Dashboard, migration of existing
                users from Circle, an enhanced Leaderboard, and expanded search
                and filtering across all views. The mobile companion app —
                designed for from the beginning through the mobile-first
                approach — is the natural next milestone. The data model,
                component architecture, and permission structure the MVP
                established make all of it buildable without starting from
                scratch.
              </p>
            </CaseStudyHeadingBlock>

            <p className="mt-9">
              The MVP shipped as a functional replacement for 6 spreadsheets
              and a failed CRM — consolidated into a single platform with a
              shared data model, automatic cross-system updates, real-time
              visibility for coaches, and a daily logging experience designed
              around the habits the methodology depends on. A product that
              replaced a system the team had already failed to replace once
              before, built in 13 weeks, actively growing into 2026.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-4">
            <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
              What I learned:
            </p>
            {[
              "Spreadsheets are design artifacts. Every column, every workaround, every manual copy-paste is a user telling you something about what they need. I learned to read them like research data, not just as things to replace.",
              "Transitions matter as much as destinations. Designing the gradual exit from spreadsheet thinking. Users need to recognize enough of the old system to trust the new one.",
              "The hardest UX problems are often data problems in disguise. The lead/loan relationship looked like a UI challenge on the surface. Underneath, it was a question about data ownership and lifecycle boundaries. Solving the data model first made the UI obvious.",
              "Mobile first forces better decisions. Every element that didn't earn its place on mobile didn't earn its place anywhere. The constraint made the product sharper.",
              "In competitive products, motivation is part of the experience. The leaderboard and streak weren't features bolted on at the end — they were in the product thinking from day one. Designing for performance means designing for the emotional experience of performance, not just the functional tracking of it.",
              "Define success metrics before the first wireframe. Not having post-launch data isn't just a measurement gap — it's a product gap. Knowing what you're optimizing for changes the decisions you make during design, not just after launch.",
            ].map((lesson) => (
              <p key={lesson}>{lesson}</p>
            ))}
          </div>
        </CaseStudyPhaseContent>

        <div className="mt-16 flex flex-col items-center gap-6 text-center md:mt-24">
          <p className="font-[family-name:var(--font-general-sans)] text-2xl font-semibold text-heading-case">
            Thank you for reading!
          </p>
          <Link href="/#card-go-coaching" className="btn-primary">
            <ArrowLeftIcon className="size-4" aria-hidden />
            Go Back
          </Link>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
