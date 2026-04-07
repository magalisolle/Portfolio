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
  `/images/dinksmart/${encodeURIComponent(file)}`;

export function DinksmartCaseStudyContent() {
  return (
    <CaseStudyLayout
      pageBgClassName="bg-[#faffe6]"
      ringOffsetClassName="focus-visible:ring-offset-[#faffe6]"
      intro={
        <CaseStudyProjectHero
          eyebrow="Dinksmart"
          chips={["Mobile App", "B2C"]}
          heroBg="#dbf67b"
          lede="DinkSmart is a mobile app for the SoCal pickleball community — a sport that was exploding in popularity but had no good way to organize matches."
          facts={[
            { label: "Date", value: "Q3 2024" },
            { label: "Role", value: "Product Designer" },
            { label: "Scope", value: "UX/UI Design, Accessibility, Dev Handoff" },
            { label: "Team", value: "Design Director (client), Development team, PM" },
            { label: "Tools", value: "Figma, Jira" },
            { label: "Status", value: "In production" },
          ]}
        />
      }
    >
      {/* ── The Context ─────────────────────────────────────────────────── */}
      <CaseStudySection id="context">
        <CaseStudyPhaseLabel>The Context</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                Finding open courts, building groups, and coordinating games was
                all done manually — group chats, word of mouth. Existing apps
                were generic. DinkSmart wanted to go further: real-time court
                availability, player ratings, and the ability to propose and
                join matches with people you didn&apos;t already know.
              </p>
              <p>
                I joined mid-project, with the visual direction already set and
                flows partially defined.
              </p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Mockup: Create a Match ───────────────────────────────────────── */}
      <CaseStudySection id="mockup-create-match">
        <div className="flex flex-col gap-4">
          <Image
            src={IMG("mockup phones.png")}
            alt="Create a Match flow"
            width={1016}
            height={762}
            className="h-auto w-full rounded-3xl"
            sizes="(max-width: 1186px) 100vw, 1016px"
            priority
          />
          <p className="text-center text-sm leading-relaxed text-muted">
            Create a Match
          </p>
        </div>
      </CaseStudySection>

      {/* ── What I Actually Did ─────────────────────────────────────────── */}
      <CaseStudySection id="what-i-did">
        <CaseStudyPhaseLabel>What I Actually Did</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>
              I didn&apos;t design DinkSmart from scratch. I came in when the
              visual direction was locked — a high-energy, graphic-design-heavy
              aesthetic driven by the client&apos;s creative director — and the
              UX was partially resolved. My job was to make it work.
            </p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Mockup: Push notification & Match Unavailable ───────────────── */}
      <CaseStudySection id="mockup-notifications">
        <div className="flex flex-col gap-4">
          <Image
            src={IMG("phones3.png")}
            alt="Push notification and Match Unavailable screens"
            width={1022}
            height={767}
            className="h-auto w-full rounded-3xl"
            sizes="(max-width: 1186px) 100vw, 1022px"
          />
          <p className="text-center text-sm leading-relaxed text-muted">
            Push notification &amp; Match Unavailable
          </p>
        </div>
      </CaseStudySection>

      {/* ── That meant three things ─────────────────────────────────────── */}
      <CaseStudySection id="three-things">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                That meant three things in practice:
              </p>
              <div className="flex flex-col gap-3">
                <p>
                  <span className="font-medium text-ink">
                    Making it buildable.
                  </span>{" "}
                  Several design decisions weren&apos;t implementable as
                  designed. I worked between design and development to identify
                  what needed to be simplified, restructured, or rebuilt —
                  without losing the visual identity the client had invested in.
                </p>
                <p>
                  <span className="font-medium text-ink">
                    Making it accessible.
                  </span>{" "}
                  The high-contrast, neon-heavy palette looked striking but
                  failed basic contrast requirements. I pushed for color
                  adjustments that preserved the brand feel while meeting WCAG
                  standards — a conversation that required educating
                  stakeholders on why accessibility isn&apos;t negotiable.
                </p>
                <p>
                  <span className="font-medium text-ink">
                    Completing and documenting the flows.
                  </span>{" "}
                  The &ldquo;Propose a Match&rdquo; flow — select players, find
                  a time slot that works for everyone, choose a venue, confirm
                  — was the most complex feature in the product. I documented
                  every state, edge case, and component link in Figma, making
                  the handoff to development precise enough to actually build.
                </p>
              </div>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Mockup: Home Screen, Availability & Cancel Pop Up ───────────── */}
      <CaseStudySection id="mockup-home">
        <div className="flex flex-col gap-4">
          <Image
            src={IMG("phones4.png")}
            alt="Home Screen, Availability and Cancel Pop Up"
            width={942}
            height={707}
            className="h-auto w-full rounded-3xl"
            sizes="(max-width: 1186px) 100vw, 942px"
          />
          <p className="text-center text-sm leading-relaxed text-muted">
            Home Screen, Availability &amp; Cancel Pop Up
          </p>
        </div>
      </CaseStudySection>

      {/* ── The Tension Worth Mentioning ────────────────────────────────── */}
      <CaseStudySection id="tension">
        <CaseStudyPhaseLabel>The Tension Worth Mentioning</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                Working alongside a graphic designer who owned the visual
                identity created a specific kind of friction: graphic design
                language and product design language are different, and
                sometimes they conflict. A bold typographic treatment that works
                on a poster doesn&apos;t work in a list view with 12 items. A
                color that reads as energetic in a hero section fails contrast
                in a form label.
              </p>
              <p>
                Navigating that tension — advocating for usability without
                dismissing the creative vision — was the most valuable skill
                this project demanded. The goal wasn&apos;t to make DinkSmart
                look generic. It was to make it look like itself and work.
              </p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── What I Learned ──────────────────────────────────────────────── */}
      <CaseStudySection id="what-i-learned">
        <CaseStudyPhaseLabel>What I Learned</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>
                Mid-project is a real constraint, not an excuse. Coming in
                after decisions are made means working with what exists, not
                what you&apos;d design from scratch. That takes a different
                skill set — diagnosis, negotiation, and selective intervention
                rather than blank-canvas design.
              </p>
              <p>
                Accessibility is a design argument, not a compliance argument.
                Framing contrast requirements as &ldquo;this is the rule&rdquo;
                loses the argument. Framing them as &ldquo;users won&apos;t be
                able to read this in sunlight on a court&rdquo; wins it.
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
            href="/#card-dinksmart"
            className="inline-flex items-center gap-2 rounded-full bg-[#3c3c3c] px-6 py-4 text-base font-semibold leading-tight text-[#fdfdfd] transition-colors hover:bg-[#555] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#faffe6]"
          >
            <ArrowLeftIcon className="size-4" />
            Go Back
          </a>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
