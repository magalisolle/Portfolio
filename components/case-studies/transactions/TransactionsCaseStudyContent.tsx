import Image from "next/image";
import { LoopedVideo } from "./LoopedVideo";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons/ArrowIcons";
import {
  CaseStudyEmphasis,
  CaseStudyHeadingBlock,
  CaseStudyLayout,
  CaseStudyPhaseContent,
  CaseStudyPhaseLabel,
  CaseStudyProjectHero,
  CaseStudyProse,
  CaseStudySection,
  CaseStudyWideBleed,
} from "@/components/case-studies";

const IMG = (file: string) => `/images/Transactions/${encodeURIComponent(file)}`;

export function TransactionsCaseStudyContent() {
  return (
    <CaseStudyLayout
      pageBgClassName="bg-[#FBF8FB]"
      ringOffsetClassName="focus-visible:ring-offset-[#FBF8FB]"
      intro={
        <CaseStudyProjectHero
          eyebrow="Transactions Redesign"
          eyebrowLine2="Payana"
          chips={["B2B", "Web"]}
          heroBg="#EDDEEA"
          lede="Payana is a B2B payments platform that centralizes supplier payments, payroll, and collections for Latin American businesses — and this is the story of how we redesigned the transactions experience from the ground up."
          facts={[
            { label: "Date", value: "Q3 2024" },
            { label: "Role", value: "Sr. Product Designer" },
            { label: "Scope", value: "UX Research, Concept Development, UX/UI Design, Usability Testing, Post-launch Analysis" },
            { label: "Team", value: "PM, 2 backends, 1 frontend" },
          ]}
        />
      }
    >

      {/* ── Hero video ─────────────────────────────────────────────────── */}
      <CaseStudyWideBleed className="!overflow-x-visible">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100dvw,1035px)] flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl">
              <video
                className="block w-[102%] max-w-none -mt-[4px]"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Payana transactions experience walkthrough."
              >
                <source src={IMG("paaayana (1).mp4")} type="video/mp4" />
              </video>
            </div>
          </figure>
        </div>
      </CaseStudyWideBleed>

      {/* ── 01 The Problem ─────────────────────────────────────────────── */}
      <CaseStudySection id="the-problem">
        <CaseStudyPhaseLabel>01 — The Problem</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              Payana handles supplier payments, payroll, and collections for
              businesses. Transactions — the record of every payment made or
              received — were scattered across different modules, with no unified
              view. And if a payment got rejected, users had zero way to fix it
              themselves. Someone at the back office had to step in.
            </p>
            <p>
              The result: nobody was using the transactions panel. Not because
              they didn&apos;t need it. Because they didn&apos;t know it was
              there.
            </p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <figure className="m-0 flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6EEF5] p-3">
              <Image
                src={IMG("transaccion vieja1.png")}
                alt="Old transactions experience — first screen."
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 50vw, 593px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              Previous experience — Transactions list.
            </figcaption>
          </figure>
          <figure className="m-0 flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6EEF5] p-3">
              <Image
                src={IMG("transaccion vieja 2.png")}
                alt="Old transactions experience — second screen."
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 50vw, 593px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              Previous experience — Transaction detail.
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100%,900px)] flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#FFCACA] px-8 py-10 flex items-center justify-center">
              <p className="text-center text-2xl font-medium leading-snug tracking-tight text-[#3c3c3c] md:text-3xl">
                &ldquo;Are there transactions? I didn&apos;t know.&rdquo;
              </p>
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              A real user interview quote that redefined the scope of the entire project.
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      {/* ── 02 Research & Discovery ─────────────────────────────────────── */}
      <CaseStudySection id="research">
        <CaseStudyPhaseLabel>02 — Research &amp; Discovery</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              Two rounds of interviews, same 4 users — some on the paying side,
              some on the receiving side, all with at least 6 months on the
              platform. The two-round structure was intentional: first session
              to understand the pain, second to validate we were solving the
              right thing.
            </p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100dvw,1424px)] flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl p-6" style={{ backgroundColor: "#F6EEF5" }}>
              <Image
                src={IMG("research.png")}
                alt="Research synthesis — user interview insights and product analysis."
                width={1600}
                height={900}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1424px) 100vw, 1424px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              Research synthesis — pain points and product analysis.
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudySection id="research-continued">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Round 1 — Understanding the current experience.
              </CaseStudyEmphasis>
              <p>
                Open questions about how they were actually using transactions,
                and what they expected from it. The pain points that came back
                were consistent — and pretty damning.
              </p>
            </CaseStudyHeadingBlock>

            <div className="rounded-2xl bg-[#FFCACA] px-5 py-5 md:px-6 md:py-6 flex flex-col gap-4">
              {[
                "&ldquo;As it is currently, I never open it because I think all the details of the TRX are too far away.&rdquo;",
                "&ldquo;Currently, you lose if a payment is rejected.&rdquo;",
                "&ldquo;I don&apos;t always find the information I need quickly.&rdquo;",
              ].map((quote) => (
                <p
                  key={quote}
                  className="text-base font-medium leading-[1.56] tracking-[0.03em] text-ink md:text-lg"
                  dangerouslySetInnerHTML={{ __html: quote }}
                />
              ))}
            </div>

            <p>
              Three things kept coming up: you couldn&apos;t see everything in
              one place, you had no control when a payment failed, and finding
              specific transactions was a pain. None of it was about missing
              features — the information existed. It just wasn&apos;t surfaced.
            </p>

            <CaseStudyHeadingBlock>
              <p className="text-xl font-medium leading-[1.4] tracking-[0.02em] text-ink md:text-2xl">
                The interviews told us what users felt. The product analysis
                told us why.
              </p>
              <p>
                Alongside the interviews, I mapped the transaction model from
                scratch — how a single payment action generates multiple bank
                disbursements, how pay-ins and pay-outs relate, how a rejection
                propagates through the system. You can&apos;t design something
                legible without first understanding what it actually is. This
                step wasn&apos;t optional.
              </p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Round 2 — Validating the direction.
              </CaseStudyEmphasis>
              <p>
                Before touching high fidelity, I showed those same users two
                rough mockups of a unified view. The reaction was fast.
              </p>
            </CaseStudyHeadingBlock>

            <div className="rounded-2xl bg-[#C8F4B7] px-5 py-5 md:px-6 md:py-6 flex flex-col gap-4">
              {[
                "&ldquo;It&apos;s super intuitive.&rdquo;",
                "&ldquo;It is more condensed and seeing them in one place seems better to me.&rdquo;",
                "&ldquo;I think it is very good, the information is clear, showing what is in process and what has been paid.&rdquo;",
              ].map((quote) => (
                <p
                  key={quote}
                  className="text-base font-medium leading-[1.56] tracking-[0.03em] text-ink md:text-lg"
                  dangerouslySetInnerHTML={{ __html: quote }}
                />
              ))}
            </div>

            <p>
              Testing the concept before the design meant we went into the
              build phase with actual signal, not gut feel.
            </p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 02b Transaction Model ───────────────────────────────────────── */}
      <CaseStudySection id="transaction-model">
        <CaseStudyPhaseLabel>02b — The Real Design Challenge</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Understanding the transaction model.
              </CaseStudyEmphasis>
              <p>
                Payana&apos;s payment model isn&apos;t like a standard bank
                transfer. Users don&apos;t pay one supplier at a time — they
                batch invoices from multiple suppliers into a single payment
                action. Payana handles the disbursements. One click from the
                user kicks off a whole cascade of individual bank transfers in
                the background.
              </p>
              <p>
                That created the core visibility problem: what you saw in
                Payana bore no obvious relationship to what your bank statement
                showed. A single $90 lote in Payana could be five separate
                movements at the bank — and your accounting team had no way to
                reconcile them without picking up the phone.
              </p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                We mapped three possible transaction models before deciding on
                the structure.
              </CaseStudyEmphasis>
              <p>
                This wasn&apos;t just a visual problem — it was an
                architectural one. How do you represent a transaction that
                contains invoices from multiple suppliers?
              </p>
            </CaseStudyHeadingBlock>

            <p>
              <strong>Option 1:</strong> Group by supplier — one transaction
              per supplier. Cleaner at a glance, but Payana lets you mix
              suppliers in a single batch, so retroactive grouping breaks down
              fast.
            </p>
            <p>
              <strong>Option 2:</strong> One transaction per invoice — maximum
              granularity, closest to how accounting systems think. But it
              fragments a single payment action into dozens of rows and loses
              the thread entirely.
            </p>
            <p>
              <strong>Option 3 (chosen):</strong> A lote consolidates
              everything from a single payment action into one parent
              transaction, with each supplier&apos;s individual pay-out visible
              underneath. This keeps the user&apos;s mental model intact
              (&ldquo;I made one payment&rdquo;) while giving them the full
              breakdown when they need it.
            </p>

          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100dvw,1424px)] flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6EEF5] p-6">
              <Image
                src={IMG("opciones.png")}
                alt="Three transaction model options mapped before the final decision."
                width={1600}
                height={900}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 100vw, 900px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              Three transaction model options — the architecture decision that shaped the entire design.
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudySection id="option3-rationale" className="!mt-4">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              We went with Option 3 — not because it was the simplest, but
              because it was the most honest. The lote is what the user did.
              The pay-outs are what the bank saw. The goal was to make both
              visible and make them match.
            </p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Rejection Flow ──────────────────────────────────────────────── */}
      <CaseStudySection id="rejection-flow">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                The rejection flow was the most operationally significant
                problem.
              </CaseStudyEmphasis>
              <p>
                When a pay-out got rejected — at the Cobre level or the bank
                level — the whole resolution was manual: support got a WhatsApp
                notification, copied the transaction code, edited data in a
                back-office tool, and reprocessed the payment. The user had no
                idea what happened or why.
              </p>
              <p>
                The redesign flipped that entirely. Rejection reason right
                there in the transaction detail. Users can edit beneficiary data
                and reprocess on their own. If they need a refund instead of a
                retry, that path is there too — no support call needed. Every
                reprocess a user completes is a ticket that never got opened.
              </p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100dvw,1424px)] flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl p-6" style={{ backgroundColor: "#F6EEF5" }}>
              <div className="overflow-hidden rounded-xl">
              <LoopedVideo
                src={IMG("rechazo.mp4")}
                loopEnd={25}
                className="block w-[101%] max-w-none -mt-[2px]"
                ariaLabel="Rejection flow — self-service reprocess walkthrough."
              />
              </div>
            </div>
          </figure>
        </div>
      </CaseStudyWideBleed>

      {/* ── 03 Feature Prioritization ───────────────────────────────────── */}
      <CaseStudySection id="prioritization">
        <CaseStudyPhaseLabel>03 — Concept Development &amp; Feature Prioritization</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              Before wireframing, I ran a value vs. effort exercise with
              stakeholders — mapping user needs against what was actually
              realistic to build.
            </p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* Prioritization matrix */}
      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100dvw,700px)] flex flex-col gap-3">
              <Image
                src={IMG("diagramapriorizacion.png")}
                alt="Value vs. effort prioritization matrix."
                width={1424}
                height={900}
                className="h-auto w-full"
                sizes="(max-width: 900px) 100vw, 900px"
              />
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudySection id="prioritization-2" className="!mt-10 md:!mt-14">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              This kept scope manageable and gave the team a shared picture of
              what had to ship well in v1 versus what could come later.
            </p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 04 Design Execution ─────────────────────────────────────────── */}
      <CaseStudySection id="design-execution">
        <CaseStudyPhaseLabel>04 — Design Execution</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                First approach: close to the existing, but unified.
              </CaseStudyEmphasis>
              <p>
                My first wireframe stayed close to the existing experience —
                deliberately. I wanted a baseline before adding anything. The
                unified list already solved the core problem: everything in one
                place, grouped by date, parent transactions expandable to show
                what was underneath.
              </p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <figure className="m-0 flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6EEF5] p-3">
              <Image
                src={IMG("first approach1.png")}
                alt="First wireframe approach — unified transactions list."
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 50vw, 593px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              First approach — unified list.
            </figcaption>
          </figure>
          <figure className="m-0 flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6EEF5] p-3">
              <Image
                src={IMG("first approach2.png")}
                alt="First wireframe approach — transaction detail exploration."
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 50vw, 593px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              First approach — detail exploration.
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudySection id="design-execution-iterations" className="!mt-10 md:!mt-14">
        <CaseStudyPhaseContent>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-medium leading-[1.4] tracking-[0.03em] text-muted">
              Usability testing surfaced four key iterations:
            </p>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#F6EEF5" }}>
              <div className="flex flex-col gap-3 text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                <p>— Transaction codes were given too much visual prominence — important but not primary</p>
                <p>— Invoice detail needed more space for clearer information distribution</p>
                <p>— Users needed to see the complete money path, not just the final status</p>
                <p>— Rejected payments needed to be actionable directly from the panel — not a back-office call</p>
              </div>
            </div>
          </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudySection id="design-execution-2">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Dev constraints can improve design.
              </CaseStudyEmphasis>
              <p>
                My first instinct was a dropdown to expand sub-transactions
                inline. After testing and talking with engineering, we ran into
                a performance constraint — dropdowns don&apos;t scale at the
                volume Payana handles. That limitation pushed us toward a
                panel-based detail view, which honestly worked out better: more
                space, cleaner list, no performance issues.
              </p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full justify-center">
          <div className="w-full max-w-[min(100dvw,700px)]">
            <div className="overflow-hidden rounded-2xl p-6 flex flex-col gap-4" style={{ backgroundColor: "#F6EEF5" }}>
              {[
                { file: "dropdown1.png", label: "Dropdown — option A." },
                { file: "dropdown2.png", label: "Dropdown — option B." },
                { file: "dropdown3.png", label: "Dropdown — option C." },
              ].map(({ file, label }) => (
                <figure key={file} className="m-0 flex flex-col gap-2">
                  <Image
                    src={IMG(file)}
                    alt={label}
                    width={800}
                    height={600}
                    className="h-auto w-full rounded-xl"
                    sizes="(max-width: 700px) 100vw, 700px"
                  />
                  <figcaption className="text-center text-sm leading-snug text-ink/50">
                    {label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </CaseStudyWideBleed>

      {/* ── Recorrido del dinero ────────────────────────────────────────── */}
      <CaseStudySection id="money-path">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                The &ldquo;Recorrido del dinero&rdquo; (money path) was the most important design decision.
              </CaseStudyEmphasis>
              <p>
                In a payments product, uncertainty kills trust. If you
                can&apos;t tell whether your payment is processing, stuck, or
                gone — you start doubting the whole platform. I built a
                step-by-step timeline &mdash; visible in both the list and the
                detail panel &mdash; that shows exactly where the money is:
                received, dispersing, rejected, retried, dispersed. For
                rejections, the path makes the failure explicit and the fix
                immediate — reprocess from the same screen, no support call
                needed.
              </p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-2xl p-6 flex flex-col md:flex-row items-start gap-6 w-full max-w-[1100px]" style={{ backgroundColor: "#F6EEF5" }}>
            <Image
              src={IMG("PaymentFlow.png")}
              alt="Recorrido del dinero — full payment timeline."
              width={800}
              height={900}
              className="h-auto w-full md:w-[55%] rounded-xl"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            <div className="flex flex-col gap-6 md:flex-1 md:self-stretch">
              <div className="relative flex-1">
                <Image
                  src={IMG("ErrorPago.png")}
                  alt="Error en el pago — rejection card with reprocess action."
                  fill
                  className="rounded-xl object-contain"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="relative flex-1">
                <Image
                  src={IMG("PaymentFlow2.png")}
                  alt="Recorrido del dinero — compact view."
                  fill
                  className="rounded-xl object-contain"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
          <figcaption className="text-center text-sm leading-snug text-ink/50">
            Money path &amp; Payment retry
          </figcaption>
        </div>
      </CaseStudyWideBleed>

      {/* ── Search ─────────────────────────────────────────────────────── */}
      <CaseStudySection id="search">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Search as a first-class feature.
              </CaseStudyEmphasis>
              <p>
                Search wasn&apos;t a filter &mdash; it was a navigation tool. A
                user looking for a specific supplier, NIT, ID, or tag needed
                results across all transaction types at once. Search results
                came back categorized — Proveedores, Destinatario adicional,
                Transacciones — so you could jump straight to what you were
                after.
              </p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100%,800px)] flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl p-6" style={{ backgroundColor: "#F6EEF5" }}>
              <Image
                src={IMG("search 1.png")}
                alt="Search — finding payments by supplier, date, or amount."
                width={1194}
                height={849}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 100vw, 1100px"
              />
            </div>
          </figure>
        </div>
      </CaseStudyWideBleed>

      {/* ── Final Design ────────────────────────────────────────────────── */}
      <CaseStudySection id="final-design">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Final design — everything in one place.
              </CaseStudyEmphasis>
              <p>
                One unified, scannable list of every payment — grouped by date,
                status always visible, sub-transactions a click away in a side
                panel that keeps you in context.
              </p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100%,950px)] flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl px-6 py-1" style={{ background: "linear-gradient(135deg, #E4DDFF 0%, #FFFFFF 100%)" }}>
              <Image
                src={IMG("mockupfinal1.png")}
                alt="Transactions final design — main screen."
                width={1194}
                height={849}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 100vw, 1100px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              Transactions — Final Design · Main Screen.
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100%,950px)] flex flex-col gap-3 mt-10 md:mt-16">
            <div className="overflow-hidden rounded-2xl px-6 py-1" style={{ background: "linear-gradient(135deg, #E4DDFF 0%, #FFFFFF 100%)" }}>
              <Image
                src={IMG("trxdetails 1.png")}
                alt="Transactions final design — detail panel."
                width={1194}
                height={849}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 100vw, 1100px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              Transactions — Final Design · Detail Screen.
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      {/* ── 05 Post-Launch Analysis ─────────────────────────────────────── */}
      <CaseStudySection id="post-launch">
        <CaseStudyPhaseLabel>05 — Post-Launch Analysis</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              After launch, I built Amplitude funnels to track whether the new
              design was actually shifting behavior — not just hoping it worked.
            </p>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Funnel Reproceso (direct reprocess flow).
              </CaseStudyEmphasis>
              <p>
                18.4% of users who opened the transactions tab completed a
                reprocess. That feature didn&apos;t exist before. 18.4%
                completion on something that previously required a support call
                is a real number — it means users are actually handling their
                own payment failures now.
              </p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>
                Funnel Search Reprocess.
              </CaseStudyEmphasis>
              <p>
                3.54% of users who came through search completed a reprocess —
                lower than the direct path, but informative. Users who search
                are usually exploring, not acting on a specific known problem.
                That shaped how we thought about the next iteration of search.
              </p>
              <p>
                The data also surfaced a 56% drop-off between the list and the
                detail view — which became the next question: what&apos;s
                stopping half of users from going deeper? That&apos;s the kind
                of thing post-launch analysis is supposed to generate.
              </p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="overflow-hidden rounded-2xl p-6" style={{ backgroundColor: "#F6EEF5" }}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Image
              src={IMG("analisys1.png")}
              alt="Amplitude funnel — reprocess flow analysis."
              width={800}
              height={500}
              className="h-auto w-full rounded-xl"
              sizes="(max-width: 1186px) 50vw, 593px"
            />
            <Image
              src={IMG("analisys2.png")}
              alt="Amplitude funnel — search reprocess analysis."
              width={800}
              height={500}
              className="h-auto w-full rounded-xl"
              sizes="(max-width: 1186px) 50vw, 593px"
            />
          </div>
        </div>
      </CaseStudyWideBleed>

      {/* ── 06 Outcome ──────────────────────────────────────────────────── */}
      <CaseStudySection id="outcome">
        <CaseStudyPhaseLabel>06 — Outcome</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-6">
            {/* Left — text */}
            <div className="flex flex-col gap-6 md:flex-1">
              <div className="flex flex-col gap-2 text-lg leading-[1.56] tracking-[0.03em] text-muted">
                <p>
                  A transactions panel that people actually open — because now
                  they know it exists, they can find what they&apos;re looking
                  for, and when something goes wrong, they can handle it
                  themselves.
                </p>
                <p>
                  The most concrete signal: reprocessing a rejected payment now
                  has an 18.4% self-service completion rate. For a payments
                  platform, that&apos;s not just a UX win — it&apos;s a trust
                  signal. Users feel in control of their own money.
                </p>
              </div>
            </div>
            {/* Right — images card */}
            <div className="overflow-hidden rounded-2xl p-6 flex flex-col gap-7 md:w-[52%] shrink-0" style={{ backgroundColor: "#F6EEF5" }}>
              <Image
                src={IMG("top events.png")}
                alt="Top events — post-launch Amplitude data."
                width={800}
                height={500}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <Image
                src={IMG("most viewed.png")}
                alt="Most viewed screens — post-launch Amplitude data."
                width={800}
                height={200}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 07 What I Learned ───────────────────────────────────────────── */}
      <CaseStudySection id="what-i-learned">
        <CaseStudyPhaseLabel>07 — What I Learned</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <div>
            <div className="mt-9 flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                What I learned:
              </p>
              {[
                "The sharpest insight from this whole project came from a user who didn\u2019t know the feature existed. That quote \u2014 \u201cAre there transactions? I didn\u2019t know\u201d \u2014 changed the frame entirely. It wasn\u2019t a design problem. It was a discoverability and architecture problem that looked like a design problem. Fixing the surface without understanding that would\u2019ve shipped a nicer version of the same invisible feature.",
                "Testing the concept before the design saved real time. Two rough mockups in round 2 of interviews. If users had pushed back on the unified view, we could\u2019ve pivoted without burning a sprint on high fidelity. Instead we got clear signal and moved fast.",
                "Dev constraints can make your design better. The dropdown performance issue pushed us to a panel-based view that ended up being the right call. I used to think constraints were things to push against \u2014 this project changed that.",
                "Define success metrics before the first wireframe, not after the last handoff. I built the Amplitude funnels after shipping. That\u2019s backwards. The instrumentation plan comes first \u2014 every time.",
              ].map((lesson) => (
                <p key={lesson}>{lesson}</p>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-center gap-6 text-center md:mt-24">
              <p className="font-[family-name:var(--font-general-sans)] text-2xl font-semibold text-heading-case">
                Thank you for reading!
              </p>
              <Link href="/#card-transactions" className="btn-primary">
                <ArrowLeftIcon className="size-4" aria-hidden />
                Go Back
              </Link>
            </div>
          </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

    </CaseStudyLayout>
  );
}
