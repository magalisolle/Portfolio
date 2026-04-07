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
  `/images/higo/${encodeURIComponent(file)}`;

export function HigoCaseStudyContent() {
  return (
    <CaseStudyLayout
      pageBgClassName="bg-[#e8effd]"
      ringOffsetClassName="focus-visible:ring-offset-[#e8effd]"
      intro={
        <CaseStudyProjectHero
          eyebrow="Payroll —"
          eyebrowLine2="Higo (by Payana)"
          chips={["Web Responsive", "B2B"]}
          heroBg="#bed2f8"
          lede="Higo is a B2B payments platform for Mexican businesses that centralizes supplier payments and expense management — replacing manual spreadsheets and bank layouts with a single, automated financial operations tool."
          facts={[
            { label: "Date", value: "Q3 2024" },
            { label: "Role", value: "Sr. Product Designer" },
            { label: "Scope", value: "UX Research, UX/UI Design" },
            { label: "Team", value: "PM / 1 Full Stack" },
            { label: "Tools", value: "Figma, Amplitude, Notion" },
            { label: "Status", value: "In Production" },
          ]}
        />
      }
    >
      {/* ── The Context ─────────────────────────────────────────────────── */}
      <CaseStudySection id="context">
        <CaseStudyPhaseLabel>The Context</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              In April 2024, Payana — the B2B payments platform where I worked —
              acquired Higo, a similar solution operating in Mexico. My job was
              to start aligning both products and experiences. Payroll already
              existed in Payana. Higo had the user base, but the feature needed
              to be built for their context from scratch — understanding a
              different market, different tools, and different user expectations.
            </p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── The Problem ─────────────────────────────────────────────────── */}
      <CaseStudySection id="problem">
        <CaseStudyPhaseLabel>The Problem</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              Before designing anything, we ran discovery interviews with Higo
              users to understand how they currently handled payroll. The
              findings were immediate — and they defined the scope of everything
              we built.
            </p>

            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                We interviewed 11 customers to identify the top problems
              </p>
              <div className="flex flex-col gap-3">
                <p>
                  Most users weren&apos;t looking for a full payroll management
                  platform. They already had tools for that — Runa, OSMOS,
                  ASPEL — handling the complex stuff: vacation pay, bonuses,
                  social security, tax filing. What they needed was a reliable,
                  clear, fast way to disperse the payments. That was it.
                </p>
                <p>
                  But &ldquo;just dispersing payments&rdquo; turned out to be
                  more nuanced than it sounds. The interviews surfaced specific,
                  concrete problems:
                </p>
                <p>
                  — Payments failed silently — users only found out when an
                  employee complained
                </p>
                <p>
                  — There was no way to customize the payment concept per
                  employee — the description that appeared on the
                  employee&apos;s bank statement was generic or missing,
                  creating confusion
                </p>
                <p>
                  — Payment cycles weren&apos;t clearly labeled — users needed
                  to distinguish first and second fortnightly payments without
                  ambiguity
                </p>
                <p>
                  — Layouts from their payroll software didn&apos;t map cleanly
                  to what their bank expected, creating manual reconciliation
                  work every cycle
                </p>
              </div>
            </div>

            {/* Highlight quote cards */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 rounded-2xl bg-[#fdfdfd] p-6">
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium uppercase tracking-[0.025em] text-ink">
                    Their current process
                  </p>
                  <p className="text-xl font-medium leading-[1.4] text-ink">
                    &ldquo;They upload a layout to their bank — it works, but
                    it&apos;s slow and only runs on business days before
                    1pm.&rdquo;
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  — FUNEZA, 300 employees
                </p>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl bg-[#fdfdfd] p-6">
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium uppercase tracking-[0.025em] text-ink">
                    What they value most
                  </p>
                  <p className="text-xl font-medium leading-[1.4] text-ink">
                    &ldquo;Speed and immediacy. They don&apos;t want to depend
                    on fixed bank schedules.&rdquo;
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  — Jr3 Pack &amp; Ship
                </p>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl bg-[#ffcaca] p-6">
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium uppercase tracking-[0.025em] text-ink">
                    The most repeated pain point
                  </p>
                  <p className="text-xl font-medium leading-[1.4] text-ink">
                    &ldquo;They want to keep dispersing via layout — just
                    simpler, without re-entering the account number every
                    time.&rdquo;
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  — Multiple Users
                </p>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl bg-[#fdfdfd] p-6">
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium uppercase tracking-[0.025em] text-ink">
                    The insight that defined the scope
                  </p>
                  <p className="text-xl font-medium leading-[1.4] text-ink">
                    &ldquo;They already have payroll software for calculations.
                    What they need is a better way to disperse — not a full
                    payroll tool.&rdquo;
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  — Ben and Frank, Caliza
                </p>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl bg-[#fdfdfd] p-6">
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium uppercase tracking-[0.025em] text-ink">
                    The opportunity
                  </p>
                  <p className="text-xl font-medium leading-[1.4] text-ink">
                    &ldquo;If the dispersion automatically triggered the receipt
                    stamp, that would be a game changer.&rdquo;
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  — Jr3 Pack &amp; Ship, EnviaYA
                </p>
              </div>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── The Design Challenge ─────────────────────────────────────────── */}
      <CaseStudySection id="design-challenge">
        <CaseStudyPhaseLabel>The Design Challenge</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                The hardest part of this project wasn&apos;t the UI — it was
                designing within a deliberate scope limitation without making
                the product feel half-baked.
              </p>
              <p>
                Higo wasn&apos;t going to become a payroll calculator. But
                users coming from full payroll platforms had expectations shaped
                by those tools. My approach: don&apos;t try to replicate what
                their existing tools already do well. Make the dispersal
                experience significantly better than what their bank was
                offering.
              </p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Desktop images ──────────────────────────────────────────────── */}
      <CaseStudySection id="desktop-screens">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <Image
              src={IMG("laptop 1.png")}
              alt="Desktop — Home page"
              width={1194}
              height={645}
              className="h-auto w-full rounded-3xl"
              sizes="(max-width: 1186px) 100vw, 1186px"
              priority
            />
            <p className="text-center text-sm leading-relaxed text-muted">
              Desktop — Homepage
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={IMG("laptop2.png")}
              alt="Desktop — Payroll New"
              width={1194}
              height={675}
              className="h-auto w-full rounded-3xl"
              sizes="(max-width: 1186px) 100vw, 1186px"
            />
            <p className="text-center text-sm leading-relaxed text-muted">
              Desktop — Payroll New
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* ── Key Design Decisions ─────────────────────────────────────────── */}
      <CaseStudySection id="key-design-decisions">
        <CaseStudyPhaseLabel>Key Design Decisions</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>

            {/* Decision 1: Failure visibility */}
            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                Failure visibility at the employee level.
              </p>
              <p>
                The most operationally significant call. When a batch payment
                fails for one employee out of forty, the user needs to know
                immediately — not when that employee calls. The list view shows
                a &ldquo;Falla en X pagos&rdquo; badge directly on the batch
                card. Opening the detail shows each employee&apos;s individual
                status: Processed or failed, with a download action for the
                payment receipt. Processing 50 payroll payments, you can see at
                a glance exactly which ones didn&apos;t go through — without
                opening each record individually.
              </p>
            </div>

          </CaseStudyProse>
        </CaseStudyPhaseContent>

        {/* Full-bleed: pago de nómina + detalle del pago */}
        <div className="relative mt-12 md:mt-16">
          <div
            className="absolute bottom-0 left-1/2 top-0 w-screen -translate-x-1/2 bg-[#bed2f8]"
            aria-hidden
          />
          <div className="case-study-wide-bleed-outer relative py-14 md:py-20">
            <div className="flex w-full min-w-0 flex-col gap-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={IMG("pago de nómina.png")}
                    alt="Payroll payment view"
                    width={1440}
                    height={900}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={IMG("detalle del pago.png")}
                    alt="Payment detail view"
                    width={1440}
                    height={900}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <p className="text-center text-sm leading-relaxed text-muted">
                Payroll — When a payment fails
              </p>
            </div>
          </div>
        </div>

        <CaseStudyPhaseContent className="!mt-36 md:!mt-44">
          <CaseStudyProse>

            {/* Decision 2: Editable concept */}
            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                Editable concept and period after payment.
              </p>
              <p>
                Users needed to label each payment clearly — for their own
                records and for what appeared on the employee&apos;s bank
                statement. A payment labeled &ldquo;Primer Quincena Marzo
                2024&rdquo; is immediately recognizable; a generic batch code
                is not. Inline editing for both the concept and the period,
                accessible via a simple edit icon directly from the paid list.
                No need to re-enter the payment flow — edit in place and save.
              </p>
            </div>

            {/* Cardshigo image */}
            <div className="overflow-hidden rounded-3xl bg-[#fdfdfd] p-4 md:p-6">
              <Image
                src={IMG("Cardshigo 1.png")}
                alt="Payroll batch cards with concept and period"
                width={1946}
                height={330}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1186px) 100vw, 1186px"
              />
            </div>

            {/* Decision 3: Clear batch structure */}
            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                Clear batch structure with period as a first-class field.
              </p>
              <p>
                Each batch card shows the concept name, total amount processed,
                number of employees, and the payment period (e.g. 15/05 – 30/05
                2024) as a visible, editable field. Users managing weekly and
                fortnightly payrolls simultaneously can distinguish them at a
                glance without opening the detail.
              </p>
            </div>

            {/* Decision 4: Tabs */}
            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                Tabs for active vs. paid payrolls.
              </p>
              <p>
                Active and paid payrolls in separate tabs — keeps the working
                view clean and the historical record accessible without
                cluttering the main screen.
              </p>
            </div>

            {/* Pagos de nómina image */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-3xl bg-[#fdfdfd] p-4 md:p-6">
                <Image
                  src="/images/higo/pagos-de-nomina.png"
                  alt="Payroll payments list view"
                  width={1440}
                  height={900}
                  className="h-auto w-full rounded-2xl object-cover"
                  sizes="(max-width: 1186px) 100vw, 1186px"
                />
              </div>
              <p className="text-center text-sm leading-relaxed text-muted">
                Main Payroll view
              </p>
            </div>

          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── What This Case Is Really About ──────────────────────────────── */}
      <CaseStudySection id="what-this-case-is-about">
        <CaseStudyPhaseLabel>
          What This Case Is Really About
        </CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              This project is a good example of designing at the intersection
              of business constraints and user expectations. The product had a
              defined scope — dispersal, not payroll calculation. My job
              wasn&apos;t to expand that scope. It was to make sure that within
              it, the experience was genuinely better than what users were
              getting from their banks: more visibility, more control, less
              manual reconciliation, and no silent failures.
            </p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>

        {/* detalle del pagooo — blue card */}
        <div className="mt-12 flex flex-col gap-4">
          <div className="overflow-hidden rounded-3xl bg-[#bed2f8] p-4 md:p-6">
            <Image
              src={IMG("detalle del pagooo.png")}
              alt="Payment detail view — full screen"
              width={1440}
              height={900}
              className="h-auto w-full rounded-2xl object-cover"
              sizes="(max-width: 1186px) 100vw, 1186px"
            />
          </div>
          <p className="text-center text-sm leading-relaxed text-muted">
            Payment detail view
          </p>
        </div>
      </CaseStudySection>

      {/* ── What I Learned ──────────────────────────────────────────────── */}
      <CaseStudySection id="what-i-learned">
        <CaseStudyPhaseLabel>What I Learned</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                Scope limitations are design inputs, not obstacles. Knowing
                that Higo wasn&apos;t going to be a full payroll platform
                didn&apos;t narrow the design space — it focused it. The
                question shifted from &ldquo;how do we build payroll?&rdquo; to
                &ldquo;what does a dispersal tool need to do well that banks
                consistently fail at?&rdquo;
              </p>
              <p>
                The most valuable research insight is often the most specific
                complaint. &ldquo;The CSV has scientific notation and it breaks
                every time&rdquo; is more useful than &ldquo;the process is
                complicated.&rdquo; Specificity tells you exactly where to
                focus.
              </p>
              <p>
                Silent failures are a trust problem, not just a UX problem. In
                a payroll context, a payment that fails without notification
                doesn&apos;t just create friction — it damages the relationship
                between employer and employee. Making failures visible and
                immediate was the highest-priority decision in the entire
                design.
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
            href="/#card-higo"
            className="inline-flex items-center gap-2 rounded-full bg-[#3c3c3c] px-6 py-4 text-base font-semibold leading-tight text-[#fdfdfd] transition-colors hover:bg-[#555] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8effd]"
          >
            <ArrowLeftIcon className="size-4" />
            Go Back
          </a>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
