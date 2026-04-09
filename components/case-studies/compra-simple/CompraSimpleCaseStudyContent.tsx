import Image from "next/image";
import { ExpandableImage } from "@/components/ExpandableImage";
import { ArrowLeftIcon } from "@/components/icons/ArrowIcons";
import {
  CaseStudyHighlightCallout,
  CaseStudyLayout,
  CaseStudyPhaseContent,
  CaseStudyPhaseLabel,
  CaseStudyProjectHero,
  CaseStudyProse,
  CaseStudySection,
  CaseStudyStatCards,
  CaseStudyWideBleed,
} from "@/components/case-studies";

const IMG = (file: string) =>
  `/images/Compra simple/${encodeURIComponent(file)}`;

export function CompraSimpleCaseStudyContent() {
  return (
    <CaseStudyLayout
      pageBgClassName="bg-[#ededfa]"
      ringOffsetClassName="focus-visible:ring-offset-[#ededfa]"
      intro={
        <CaseStudyProjectHero
          eyebrow="Compra Simple"
          eyebrowLine2="InvertirOnline."
          chips={["Mobile App", "B2C"]}
          heroBg="#DFDCFF"
          lede="Compra Simple is a feature I designed for InvertirOnline that added a faster purchase flow directly into the stock list — letting experienced users buy in two taps without going through the full detailed flow."
          facts={[
            { label: "Date", value: "Q3 2024" },
            { label: "Role", value: "Product Designer" },
            {
              label: "Scope",
              value:
                "User Research, Data Analysis, UX Strategy, Wireframing, UI Design, QA",
            },
            { label: "Team", value: "Product Owner, IT, QA, Data Science" },
            { label: "Tools", value: "Figma, Figjam, Jira, Analytics" },
            { label: "Status", value: "Productive" },
          ]}
        />
      }
    >
      {/* ── 01. The Problem ─────────────────────────────────────────────── */}
      <CaseStudySection id="the-problem">
        <CaseStudyPhaseLabel>01. The Problem</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                InvertirOnline is one of Argentina&apos;s leading investment
                platforms. The existing purchase flow was thorough — it walked
                users through every parameter: limit price, validity term,
                quantity, order type.
              </p>
              <p>
                For new or hesitant investors, that detail was genuinely useful.
                For experienced users who already knew exactly what they wanted
                to buy, it was just friction.
              </p>
              <p>
                When we dug into user behavior, a specific segment stood out:
                frequent buyers who never touched the advanced parameters and
                found the flow unnecessarily long. They were completing purchases
                in spite of the flow, not because of it.
              </p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 02. Research & Hypothesis ───────────────────────────────────── */}
      <CaseStudySection id="research">
        <CaseStudyPhaseLabel>02. Research &amp; Hypothesis</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>Before designing anything, we let the data speak.</p>


            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                  Quantitative finding:
                </p>
                <p>
                  More than half of all purchases were being completed without
                  ever touching the fields the flow was built around.
                </p>
              </div>

              {/* 53.4% stat */}
              <div className="rounded-2xl p-8" style={{ backgroundColor: "#DFDCFF" }}>
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-[34px]">
                  <p className="shrink-0 text-6xl font-bold leading-none text-ink">
                    53,4%
                  </p>
                  <p className="text-2xl font-medium leading-[1.29] text-ink">
                    of users who bought stocks did not modify default parameters
                    (limit or validity).
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                  Qualitative finding:
                </p>
                <p>
                  We ran interviews and usability tests with 5 frequent users.
                  Four patterns came up consistently:
                </p>
              </div>
              <div className="rounded-2xl p-6" style={{ backgroundColor: "#f6f9fe" }}>
                <div className="flex flex-col gap-3 text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                  <p>→ They valued speed and simplicity above all else</p>
                  <p>
                    → They rarely reviewed details when buying assets they
                    already knew
                  </p>
                  <p>
                    → Several users mentioned they would buy more often &ldquo;if it
                    were faster&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                The key insight:
              </p>
              <p>
                The product had two distinct user types in the same flow — one
                that valued control and detail, and another that just wanted to
                get it done. The existing flow served one of them well. The
                other was hitting unnecessary friction every single time they
                opened the app.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                The design challenge:
              </p>
              <p>
                How might we give experienced users a faster path — without
                taking anything away from users who need more detail?
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                Success metrics defined upfront:
              </p>
              <div className="rounded-2xl p-6" style={{ backgroundColor: "#f6f9fe" }}>
                <div className="flex flex-col gap-3 text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                  <p>→ Reduce time to complete a purchase</p>
                  <p>→ Increase conversion rate</p>
                  <p>→ Improve satisfaction for frequent traders</p>
                </div>
              </div>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 03. The Solution ────────────────────────────────────────────── */}
      <CaseStudySection id="the-solution">
        <CaseStudyPhaseLabel>03. The Solution — Compra Simple</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                Rather than replacing the existing flow — which would&apos;ve
                broken the experience for detail-oriented users — we designed a
                parallel path that sits alongside it.
              </p>
              <p>
                Compra Simple is a lightweight purchase flow built directly into
                the stock list. It lets users:
              </p>
            </div>

          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── New flow image ──────────────────────────────────────────────── */}
      <CaseStudySection id="new-flow" className="!mt-10 md:!mt-14">
        <CaseStudyWideBleed>
          <div className="flex w-full min-w-0 justify-center">
            <figure className="m-0 flex w-full flex-col gap-3">
              <div className="rounded-2xl p-4" style={{ backgroundColor: "#f6f9fe" }}>
                <ExpandableImage
                  src={IMG("Compra Simple 2.png")}
                  alt="New Compra Simple flow showing interaction with the older flow"
                  width={1332}
                  height={475}
                  className="h-auto w-full rounded-xl"
                  sizes="(max-width: 950px) 100vw, 950px"
                />
              </div>
              <figcaption className="text-center text-sm leading-snug text-muted-soft">
                New Flow (interaction with the older flow)
              </figcaption>
            </figure>
          </div>
        </CaseStudyWideBleed>
      </CaseStudySection>


      {/* ── Phone + Dropdown composition ────────────────────────────────── */}
      <CaseStudySection id="phone-component" className="!mt-10 md:!mt-14">
        <CaseStudyWideBleed>
          <div className="flex w-full min-w-0 justify-center">
            <figure className="m-0 flex w-full max-w-[min(100%,900px)] flex-col gap-3">
              <div
                className="flex items-center justify-center overflow-hidden rounded-2xl py-10 px-8"
                style={{ backgroundColor: "#DFDCFF" }}
              >
                <Image
                  src={IMG("phone.png")}
                  alt="Stock list screen showing Compra Simple trigger"
                  width={273}
                  height={568}
                  className="h-auto w-[280px] drop-shadow-[0px_3px_14px_rgba(62,62,62,0.25)] md:w-[380px]"
                />
              </div>
              <figcaption className="text-center text-sm leading-snug text-muted-soft">
                A dropdown component in the stock list, allowing the user to
                directly buy.
              </figcaption>
            </figure>
          </div>
        </CaseStudyWideBleed>
      </CaseStudySection>

      {/* ── Features card ───────────────────────────────────────────────── */}
      <CaseStudySection id="features" className="!mt-10 md:!mt-14">
        <CaseStudyPhaseContent>
          <div className="rounded-2xl p-6" style={{ backgroundColor: "#f6f9fe" }}>
            <div className="flex flex-col gap-3 text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
              <p>
                → Buy by amount instead of quantity (eliminating the need to
                calculate)
              </p>
              <p>→ Use quick +/− selectors to adjust the amount</p>
              <p>→ Confirm in two taps</p>
              <p>
                → Access the full purchase flow with one tap if they need more
                options
              </p>
            </div>
          </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Solution epilogue ───────────────────────────────────────────── */}
      <CaseStudySection id="solution-epilogue" className="!mt-10 md:!mt-14">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                The key call here was building an alternative, not a
                replacement. Users who wanted speed got speed. Users who wanted
                detail still had it. And users who wanted both — 6,747 used
                both flows in the analysis period — could move between them
                naturally.
              </p>
              <p>
                The solution landed as a dropdown component directly in the
                stock list, so users never had to navigate away to start a
                purchase.
              </p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Old vs New ──────────────────────────────────────────────────── */}
      <CaseStudySection id="old-new" className="!mt-10 md:!mt-14">
        <div className="relative py-12">
          {/* Full-bleed background */}
          <div
            className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2"
            style={{ backgroundColor: "#DFDCFF" }}
            aria-hidden
          />
          {/* Images on top, in normal column */}
          <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
            <figure className="m-0 flex flex-col items-center gap-3">
              <Image
                src={IMG("old.png")}
                alt="Old stock list design"
                width={337}
                height={691}
                className="h-auto w-full max-w-[280px] rounded-xl"
              />
              <figcaption className="text-center text-sm leading-snug text-muted-soft">
                Old design list
              </figcaption>
            </figure>
            <figure className="m-0 flex flex-col items-center gap-3">
              <Image
                src={IMG("new.png")}
                alt="New stock list design with Compra Simple component"
                width={338}
                height={691}
                className="h-auto w-full max-w-[280px] rounded-xl"
              />
              <figcaption className="text-center text-sm leading-snug text-muted-soft">
                New design list — New component
              </figcaption>
            </figure>
          </div>
        </div>
      </CaseStudySection>

      {/* ── Goals + phone + Early sketches ──────────────────────────────── */}
      <CaseStudySection id="goals-sketches" className="!mt-28 md:!mt-40">
        <CaseStudyPhaseContent>
          {/* Mobile: stacked. Desktop: 3 columns — goals | phone | sketches */}
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-6">

            {/* Left — Our goals */}
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-center text-lg font-medium leading-[1.4] tracking-[0.03em] text-ink">
                Our goals were:
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Keep the main decision visible (amount and ticker)",
                  "Reduce navigation levels",
                  "Offer a seamless way to access the full flow if needed",
                ].map((goal) => (
                  <div key={goal} className="rounded-2xl p-6" style={{ backgroundColor: "#f6f9fe" }}>
                    <p className="text-lg font-medium leading-[1.4] tracking-[0.03em] text-ink">{goal}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Center — Phone */}
            <div className="flex shrink-0 justify-center md:w-[240px]">
              <Image
                src={IMG("celular.png")}
                alt="Compra Simple purchase screen"
                width={231}
                height={482}
                className="h-auto w-[180px] drop-shadow-[0px_4px_18px_rgba(62,62,62,0.25)] md:w-[210px]"
              />
            </div>

            {/* Right — Early sketches */}
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-center text-lg font-medium leading-[1.4] tracking-[0.03em] text-ink">
                Early sketches included:
              </p>
              <div className="flex flex-col gap-2">
                {[
                  'A quick-purchase list view with "Buy" buttons',
                  "Inline amount selector (+ / –)",
                  'Shortcut to open "Full Flow"',
                ].map((sketch) => (
                  <div key={sketch} className="rounded-2xl p-6" style={{ backgroundColor: "#f6f9fe" }}>
                    <p className="text-lg font-medium leading-[1.4] tracking-[0.03em] text-ink">{sketch}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Solution epilogue ───────────────────────────────────────────── */}
      {/* ── 04. Outcome ─────────────────────────────────────────────────── */}
      {/* ── Stat cards ──────────────────────────────────────────────────── */}
      <CaseStudySection id="outcome">
        <div className="flex flex-col gap-1">
          <CaseStudyPhaseLabel>04. Outcome</CaseStudyPhaseLabel>
          <p className="text-lg leading-[1.56] tracking-[0.03em] text-muted">
            In one month of analysis after launch:
          </p>
        </div>
        <CaseStudyPhaseContent className="!mt-10 md:!mt-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { value: "17,881", label: "Users accessed the feature during the first weeks", shape: "Shape1" },
              { value: "13,158", label: "Used Compra Simple", shape: "Shape2" },
              { value: "6,747",  label: "Used both (suggesting users test and adopt what best fits their style)", shape: "Shape3" },
              { value: "11,594", label: "Used the traditional flow", shape: "Shape4" },
            ].map(({ value, label, shape }) => (
              <div key={value} className="flex items-center gap-5 rounded-2xl p-9" style={{ backgroundColor: "#f6f9fe" }}>
                <div className="flex flex-1 flex-col gap-2">
                  <p className="text-5xl font-bold leading-none text-ink">{value}</p>
                  <p className="text-lg font-medium leading-[1.4] text-muted">{label}</p>
                </div>
                <img alt="" src={`/images/Compra simple/${shape}.svg`} className="h-[124px] w-[134px] shrink-0" />
              </div>
            ))}
          </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Positive feedback + coexistence ─────────────────────────────── */}
      <CaseStudySection id="outcome-feedback">
        <CaseStudyPhaseContent>
          <div className="flex flex-col gap-32 md:gap-36">
            <div
              className="rounded-2xl px-6 py-5 text-center text-2xl font-semibold leading-snug text-ink"
              style={{ backgroundColor: "#c8f4b7" }}
            >
              <p>Positive feedback from frequent users:</p>
              <p>&ldquo;faster,&rdquo; &ldquo;more intuitive,&rdquo; &ldquo;saves me time.&rdquo;</p>
            </div>
            <p className="text-2xl font-medium leading-[1.4] tracking-[0.025em] text-ink md:text-[28px] md:leading-[1.29]">
              The fact that both flows coexisted also helped with retention —
              neither user type was forced into a pattern that didn&apos;t fit
              them.
            </p>
          </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Conversion + image ──────────────────────────────────────────── */}
      <CaseStudySection id="outcome-conversion">
        <CaseStudyPhaseContent>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-6">
            {/* Left — +12% / +14% stacked cards */}
            <div className="flex shrink-0 flex-col gap-4 md:w-[340px]">
              {[
                { value: "+12%", label: "increase in conversion rate." },
                { value: "+14%", label: "approval rate improvement" },
              ].map(({ value, label }) => (
                <div key={value} className="rounded-2xl px-7 py-5" style={{ backgroundColor: "#f6f9fe" }}>
                  <p className="text-4xl font-semibold leading-tight text-heading-case">{value}</p>
                  <p className="mt-1 text-lg leading-[1.56] tracking-[0.03em] text-muted">{label}</p>
                </div>
              ))}
            </div>
            {/* Right — phone screenshot */}
            <div className="min-w-0 flex-1 overflow-hidden rounded-3xl md:max-w-[480px]">
              <Image
                src={IMG("comprasimpleiol 1.png")}
                alt="Compra Simple — outcome screenshot"
                width={930}
                height={655}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 05. What I Learned ──────────────────────────────────────────── */}
      <CaseStudySection id="what-i-learned">
        <CaseStudyPhaseLabel>05. What I Learned</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                Data before design. The 53.4% finding wasn&apos;t a hypothesis
                — it was a validated behavior pattern that gave us a clear
                reason to build something new. Starting with the data made
                every decision after that easier to defend.
              </p>
              <p>
                Coexistence beats replacement. The instinct when designing a
                simplified flow is to simplify the whole product. That
                would&apos;ve served one user type while hurting the other.
                Letting both flows live together — without competition, with
                clear access to each — was the right call, and it&apos;s what
                drove the retention impact.
              </p>
              <p>
                Simple solutions can have outsized business impact. Compra
                Simple wasn&apos;t technically complex. It didn&apos;t require a
                new information architecture or a redesigned system. It required
                understanding a specific behavior pattern and removing exactly
                the friction that was getting in the way. The impact was
                disproportionate to the scope.
              </p>
              <p>
                Define success metrics before the first wireframe. We defined
                conversion rate, time to complete, and user satisfaction before
                designing anything. That made post-launch analysis clean and the
                results unambiguous.
              </p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Thank you ───────────────────────────────────────────────────── */}
      <CaseStudySection id="thank-you">
        <div className="flex flex-col items-center gap-10 py-8">
          <p className="text-3xl font-medium leading-tight text-ink">
            Thank you for reading!
          </p>
          <a href="/#card-compra-simple" className="btn-primary">
            <ArrowLeftIcon className="size-4" />
            Go Back
          </a>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
