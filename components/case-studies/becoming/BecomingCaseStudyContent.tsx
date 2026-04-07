"use client";
import Image from "next/image";
import { ArrowLeftIcon } from "@/components/icons/ArrowIcons";
import {
  CaseStudyLayout,
  CaseStudyPhaseContent,
  CaseStudyPhaseLabel,
  CaseStudyProjectHero,
  CaseStudyProse,
  CaseStudySection,
} from "@/components/case-studies";

const IMG = (file: string) =>
  `/images/Becoming/${encodeURIComponent(file)}`;

export function BecomingCaseStudyContent() {
  return (
    <CaseStudyLayout
      pageBgClassName="bg-[#fdfdfd]"
      ringOffsetClassName="focus-visible:ring-offset-[#fdfdfd]"
      intro={
        <CaseStudyProjectHero
          eyebrow="Becoming —"
          eyebrowLine2="Turning Reading into Action"
          chips={["Web Responsive", "B2C"]}
          heroBg="#fff7e5"
          lede="Becoming is a web app that turns your Kindle and Readwise highlights into one personalized daily insight — bridging the gap between reading and actually applying what you learn."
          facts={[
            { label: "Date", value: "Q1 2026" },
            { label: "Role", value: "Product Designer & Product Strategist" },
            {
              label: "Scope",
              value:
                "Product Strategy, UX/UI Design, Prototyping, User Testing",
            },
            { label: "Team", value: "Co-founder & CEO / Backend Developer" },
            { label: "Tools", value: "Figma, Amplitude, Jira." },
            { label: "Status", value: "MVP in development" },
          ]}
        />
      }
    >
      {/* ── Video ───────────────────────────────────────────────────────── */}
      <CaseStudySection id="video">
        <div className="overflow-hidden rounded-3xl bg-[#fff7e5]">
          <video
            className="h-auto w-full"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            aria-label="Becoming onboarding walkthrough"
          >
            <source src={IMG("onboarding becoming.mp4")} type="video/mp4" />
          </video>
        </div>
      </CaseStudySection>

      {/* ── Intro ───────────────────────────────────────────────────────── */}
      <CaseStudySection id="intro">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                Becoming started as a conversation with a developer friend who
                had a clear product idea and needed a design partner. He had the
                technical vision and the business — I came in as designer and
                product strategist.
              </p>
              <p>
                Clean split: he handled backend and CEO decisions, I handled
                design and product strategy. A two-person team making real
                decisions with limited resources and a lot still to validate.
              </p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 01. The Problem ─────────────────────────────────────────────── */}
      <CaseStudySection id="the-problem">
        <CaseStudyPhaseLabel>01. The Problem</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                Most serious readers already have a system for capturing ideas.
                They highlight in Kindle, sync to Readwise, track books in
                Goodreads. The problem isn&apos;t that they don&apos;t save
                what resonates — it&apos;s that those highlights just sit there,
                accumulating, rarely revisited and almost never acted on.
              </p>
              <p>
                The gap isn&apos;t between reading and remembering. It&apos;s
                between reading and becoming.
              </p>
              <p>
                The tools that exist today are built for storage, not
                integration. They help you keep ideas. They don&apos;t help you
                live them.
              </p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>

        {/* Full-bleed image */}
        <div className="relative mt-12 md:mt-16">
          <div
            className="absolute left-1/2 h-full w-screen -translate-x-1/2 bg-[#e6d1e2]"
            aria-hidden
          />
          <div className="relative flex items-center justify-center py-10 px-8">
            <Image
              src={IMG("choooose 1.png")}
              alt="Becoming theme chooser screen"
              width={1440}
              height={900}
              className="h-auto w-full max-w-[900px] rounded-2xl object-cover"
              sizes="(max-width: 1186px) 100vw, 900px"
            />
          </div>
        </div>
      </CaseStudySection>

      {/* ── 02. The Product Debate ──────────────────────────────────────── */}
      <CaseStudySection id="product-debate">
        <CaseStudyPhaseLabel>
          02. The Product Debate — And How We Resolved It
        </CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                Before any wireframe existed, there was a fundamental
                disagreement about what the product should do.
              </p>
              <p>
                My co-founder had a clear vision: the AI reads your highlights
                and returns actionables directly. You highlighted ideas about
                deep work, you get a concrete practice to do today. Clean,
                direct, high-value.
              </p>
              <p>I pushed back.</p>
              <p>
                Not because the vision was wrong — it was actually compelling.
                But because it was limiting. Forcing users into actionables from
                day one assumes a level of intent and readiness that not every
                reader has when they first arrive. It also cuts off users who
                want to explore, reflect, and discover patterns in their reading
                before committing to specific practices.
              </p>
              <p>
                My proposal: design a spectrum, not a single output. Start with
                themes and recommendations — lighter, more exploratory — and let
                users progress toward actionables as they build the habit.
              </p>
              <p>
                The resolution was pragmatic: anchor the product in the core of
                Readwise — highlight, revisit, integrate — and layer actionables
                on top of that foundation. This way we&apos;d cover users who
                already have the habit (Readwise users) without alienating those
                who are still building it.
              </p>
              <p>
                This is still to be validated. The approach is deliberately
                Lean: design, build, ship, and learn from real users before
                committing to a definitive direction. The question isn&apos;t
                whether the concept is good — it&apos;s whether it generates the
                behavior change it promises.
              </p>
            </div>

            {/* Discovery images: left tall + right stacked */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-6">
              {/* Left: Discovery sessions */}
              <div className="flex flex-col items-center gap-4 md:w-[55%]">
                <div className="w-full overflow-hidden rounded-3xl bg-[#fff7e5] p-4 md:p-6 md:p-6">
                  <Image
                    src={IMG("becoming discovery.png")}
                    alt="Discovery sessions"
                    width={586}
                    height={737}
                    className="h-auto w-full rounded-2xl object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <p className="text-sm leading-relaxed text-muted-soft">
                  Discovery sessions
                </p>
              </div>
              {/* Right: LLM + Prioritize stacked */}
              <div className="flex flex-col gap-4 md:flex-1">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full overflow-hidden rounded-3xl bg-[#fff7e5] p-4 md:p-6">
                    <Image
                      src={IMG("LLM.png")}
                      alt="How the LLM will work"
                      width={1317}
                      height={667}
                      className="h-auto w-full rounded-2xl object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-soft">
                    How the LLM will work
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full overflow-hidden rounded-3xl bg-[#fff7e5] p-4 md:p-6">
                    <Image
                      src={IMG("pioritize.png")}
                      alt="Features prioritization"
                      width={816}
                      height={767}
                      className="h-auto w-full rounded-2xl object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-soft">
                    Features prioritization
                  </p>
                </div>
              </div>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 03. The Onboarding ──────────────────────────────────────────── */}
      <CaseStudySection id="onboarding">
        <CaseStudyPhaseLabel>
          03. The Onboarding — Designing for Immediate Value
        </CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              The onboarding had one job: get the user to their first insight
              before they had time to doubt the product.
            </p>

            {/* Step 1 */}
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                Step 1 — Connect your sources.
              </p>
              <div className="flex flex-col gap-4">
                <p>
                  Users can connect Kindle (automatic highlight sync), Readwise
                  (aggregated highlights), or Goodreads (reading history with
                  AI-generated popular highlights). Manual book entry is also
                  available. One connection is enough to start.
                </p>
                <p>
                  The key design decision: show the data immediately after
                  connection. After linking Kindle, the user sees their exact
                  numbers — 10 books found, 459 highlights, 2 notes — and a
                  preview of actual highlights. This does two things: it makes
                  the connection feel real (these are your words, your books),
                  and it builds trust in the AI before asking the user to rely
                  on it.
                </p>
              </div>
            </div>

            {/* Step 1 visual — full-bleed bg, iPhone left + cards right */}
          </CaseStudyProse>
        </CaseStudyPhaseContent>

        <div className="relative mt-12 md:mt-16">
          <div
            className="absolute left-1/2 h-full w-screen -translate-x-1/2 bg-[#e6d1e2]"
            aria-hidden
          />
          {/* Mobile: stacked. Desktop: phone left, cards absolute right */}
          <div className="relative py-10 md:py-14">
            <div className="relative mx-auto md:max-w-[1000px]">
            {/* iPhone */}
            <Image
              src={IMG("IPHONEBECOMING 1.png")}
              alt="Becoming — connect your sources screen"
              width={961}
              height={609}
              className="h-auto w-full max-w-[640px] object-contain md:max-w-[85%] md:-translate-x-32 md:translate-y-8"
              sizes="(max-width: 768px) 90vw, 80vw"
            />
            {/* Cards — flow on mobile, absolute on desktop */}
            <div className="mt-6 flex flex-col items-end gap-4 md:absolute md:right-0 md:top-10 md:mt-0 md:w-[48%]">
              <Image
                src={IMG("CardInfo1.png")}
                alt="How to get Readwise Access token"
                width={528}
                height={200}
                className="h-auto w-full rounded-2xl drop-shadow-md"
                sizes="(max-width: 768px) 100vw, 38vw"
              />
              <Image
                src={IMG("CardInfo2.png")}
                alt="Access token privacy note"
                width={528}
                height={80}
                className="h-auto w-full rounded-2xl drop-shadow-md"
                sizes="(max-width: 768px) 100vw, 38vw"
              />
              <Image
                src={IMG("_Dialog_.png")}
                alt="Token error dialog"
                width={334}
                height={180}
                className="h-auto w-[63%] translate-x-3 rounded-xl drop-shadow-lg"
                sizes="(max-width: 768px) 63vw, 28vw"
              />
            </div>
            </div>
          </div>
        </div>

        <CaseStudyPhaseContent className="!mt-32 md:!mt-40">
          <CaseStudyProse>

            {/* Step 2 */}
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                Step 2 — AI generates themes.
              </p>
              <div className="flex flex-col gap-4">
                <p>
                  Rather than asking users to set goals, the system analyzes
                  their highlights and generates themes — areas of interest that
                  emerge from what they&apos;ve already been reading. Leadership,
                  deep work, negotiation, habits. The user didn&apos;t have to
                  think of these. The AI found them in their own library.
                </p>
                <p>
                  This was the most important product decision in the
                  onboarding: replacing goals with themes. Goals carry pressure
                  and imply failure. Themes carry curiosity and imply
                  exploration. For a product asking people to build a daily
                  habit around reflection, that distinction matters enormously.
                </p>
                <p>
                  Each theme card shows which books it came from — grounding the
                  AI&apos;s interpretation in the user&apos;s actual reading. The
                  user can also generate more themes if none of the initial ones
                  resonate.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                Step 3 — Preview the experience before committing.
              </p>
              <p>
                When a user selects a theme, the right panel shows example
                insights for that theme — what kind of practices and reflections
                they&apos;d actually receive. This came directly from user
                testing: people needed to understand what they were choosing
                before choosing it. The preview makes the abstract concrete.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                Step 4 — Configure the cadence.
              </p>
              <p>
                Users define where they&apos;ll apply their insights (work,
                personal, both), what type of interaction they prefer (practice,
                reflection, or balanced), and when they want to receive their
                daily prompt. This isn&apos;t just personalization — it&apos;s
                the user making a commitment to the habit, on their own terms.
              </p>
            </div>

            {/* Setup prompts full-width image */}
            <div className="overflow-hidden rounded-3xl bg-[#fff7e5] p-4 md:p-6">
              <Image
                src={IMG("setupprompts 1.png")}
                alt="Prompt setup and cadence configuration"
                width={2880}
                height={1800}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1186px) 100vw, 1186px"
              />
            </div>

            {/* Step 5 */}
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                Step 5 — First insight, immediately.
              </p>
              <p>
                The onboarding ends with the user&apos;s first insight already
                generated, grounded in a real highlight from their library. They
                don&apos;t leave onboarding wondering what the product will feel
                like. They already know.
              </p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>

        {/* Full-bleed: laptop mockup + stat cards */}
        <div className="relative mt-12 md:mt-16">
          <div
            className="absolute bottom-0 left-1/2 top-0 w-screen -translate-x-1/2 bg-[#dfdcff]"
            aria-hidden
          />
          <div className="relative flex flex-col items-center pt-6 pb-20 md:pt-8 md:pb-24">
            <Image
              src={IMG("onboardingbecomingmockup 1.png")}
              alt="First insight screen — Your first Prompt"
              width={1220}
              height={832}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1186px) 100vw, 1186px"
            />
            <Image
              src={IMG("insightss.png")}
              alt="Books read, currently reading, want to read stats"
              width={528}
              height={120}
              className="-mt-8 h-auto w-full max-w-[528px] object-contain"
              sizes="(max-width: 768px) 100vw, 528px"
            />
          </div>
        </div>
      </CaseStudySection>

      {/* ── 04. The Core Experience ─────────────────────────────────────── */}
      <CaseStudySection id="core-experience">
        <CaseStudyPhaseLabel>04. The Core Experience</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>The home screen is built around one thing: today&apos;s insight.</p>
              <p>
                Each insight has three components: the practice or reflection
                (generated by AI based on the active theme), the highlight it
                came from (the user&apos;s own words, attributed to the book),
                and a clear action — Mark as done or Dismiss. Week and day
                context is always visible so users know where they are in the
                4-week theme cycle.
              </p>
              <p>
                Below the daily insight: the Daily Review (a 5-minute session
                revisiting recent highlights) and Suggestions (related articles
                and reflections). The streak indicator is present but never
                dominant — it supports the habit without making the product feel
                like a fitness app.
              </p>
              <p>
                The Timeline gives users a weekly view of their insights,
                organized by theme. It&apos;s the product&apos;s memory — proof
                that the habit is building, and a way to revisit insights that
                landed.
              </p>
              <p>
                The Library is the user&apos;s full highlight collection —
                filterable by books, saved from browser, or Notion. Every
                highlight that feeds the AI is visible and searchable. This
                transparency was deliberate: users should always be able to see
                where their insights come from.
              </p>
            </div>

          </CaseStudyProse>
        </CaseStudyPhaseContent>

        {/* Home screens — wide bleed */}
        <div className="case-study-wide-bleed-outer mt-12 md:mt-14">
          <div className="overflow-hidden rounded-3xl bg-[#fff7e5] p-4 md:p-6">
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
              <Image
                src={IMG("Home empty state.png")}
                alt="Home screen empty state"
                width={543}
                height={337}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1186px) 100vw, 50vw"
              />
              <Image
                src={IMG("home 2.png")}
                alt="Home screen with content"
                width={543}
                height={337}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1186px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

      </CaseStudySection>

      {/* ── 05. What We Learned ─────────────────────────────────────────── */}
      <CaseStudySection id="what-we-learned">
        <CaseStudyPhaseLabel>
          05. What We Learned from Early Testing
        </CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                We ran initial tests with a small group of users to validate the
                flow and catch friction. The results were useful — but came with
                an important caveat.
              </p>
              <p>
                The users we tested weren&apos;t the right users. They read,
                but they didn&apos;t have a clear intention of applying what
                they read to their lives. For a product built around
                integration, that distinction matters. The ideal test user is
                someone already using Readwise — a person who has already
                demonstrated that they care about doing something with their
                highlights, not just collecting them.
              </p>
              <p>
                That said, the feedback was directionally useful. The
                theme-based approach resonated — users understood and
                appreciated exploring an area of their reading rather than being
                assigned tasks. Several users clicked in unexpected places or
                didn&apos;t immediately recognize that the highlighted content
                was coming from their own library — a limitation of the
                prototype, not the concept, since we were using placeholder data
                instead of their real highlights.
              </p>
              <p>
                The most important learning: the product needs to be tested with
                real data. The next phase is a functional prototype — not just a
                design prototype — connected to real user libraries, generating
                real AI insights. Only then will we understand whether the core
                loop actually creates the behavior change the product is
                designed for.
              </p>
            </div>

            {/* Mobile screens side by side */}
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-start sm:justify-center">
              <Image
                src={IMG("MOBILEBECOMING 1.png")}
                alt="Becoming mobile experience"
                width={227}
                height={685}
                className="h-auto w-full rounded-2xl object-cover sm:w-[22%]"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              <Image
                src={IMG("MOBILE BECOMING2 1.png")}
                alt="Becoming mobile experience 2"
                width={227}
                height={491}
                className="h-auto w-full rounded-2xl object-cover sm:w-[22%]"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </div>

          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 06. What's Next ─────────────────────────────────────────────── */}
      <CaseStudySection id="whats-next">
        <CaseStudyPhaseLabel>06. What&apos;s Next</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                The current focus is the MVP experiment: a functional version
                of the onboarding and daily experience, connected to real data,
                tested with users who have demonstrated intent — active Readwise
                users and Kindle highlighters who already believe in the value
                of their reading but haven&apos;t found a way to act on it.
              </p>
              <p>
                The key question the experiment is designed to answer: does
                receiving a daily insight grounded in your own highlights
                actually change how you engage with what you read?
              </p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 07. What I Learned ──────────────────────────────────────────── */}
      <CaseStudySection id="what-i-learned">
        <CaseStudyPhaseLabel>07. What I Learned</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                Questioning the vision early is the most valuable thing a
                designer can do. The original concept — AI returns actionables
                directly — was good. The expanded concept — a spectrum from
                exploration to action, anchored in the Readwise core — is
                better. That shift happened because I didn&apos;t just execute
                the brief.
              </p>
              <p>
                Themes are a better design pattern than goals for habit-forming
                products. Goals imply failure. Themes imply curiosity. When the
                stakes feel lower, users engage more honestly.
              </p>
              <p>
                Test with the right users or don&apos;t draw conclusions. Early
                testing with users who don&apos;t share the intent your product
                is designed for gives you UX feedback but not product
                validation. Those are two different things, and conflating them
                leads to wrong decisions.
              </p>
              <p>
                The AI&apos;s output is only as trustworthy as its transparency.
                Every insight in Becoming is grounded in a real highlight,
                attributed to a real book. That&apos;s not just a design detail —
                it&apos;s what makes users trust the AI enough to act on what it
                tells them.
              </p>
              <p>
                Lean doesn&apos;t mean skipping validation — it means
                validating faster. Shipping early with the intention of learning
                is only valuable if you&apos;re honest about what you don&apos;t
                yet know. We have a strong hypothesis. We don&apos;t have proof
                yet.
              </p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Thank You ───────────────────────────────────────────────────── */}
      <CaseStudySection id="thank-you">
        <div className="flex flex-col items-center gap-12 py-8 text-center">
          <p className="font-[family-name:var(--font-general-sans)] text-3xl font-medium leading-tight text-ink md:text-[32px] md:leading-[1.25]">
            Thank you for reading!
          </p>
          <a
            href="/#card-becoming"
            className="inline-flex items-center gap-2 rounded-full bg-[#3c3c3c] px-6 py-4 text-base font-semibold leading-tight text-[#fdfdfd] transition-colors hover:bg-[#555] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfdfd]"
          >
            <ArrowLeftIcon className="size-4" />
            Go Back
          </a>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
