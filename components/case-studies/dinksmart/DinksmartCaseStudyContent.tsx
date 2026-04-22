"use client";
import Image from "next/image";
import { ExpandableImage } from "@/components/ExpandableImage";
import { ArrowLeftIcon } from "@/components/icons/ArrowIcons";
import {
  CaseStudyLayout,
  CaseStudyPhaseContent,
  CaseStudyPhaseLabel,
  CaseStudyProjectHero,
  CaseStudyProse,
  CaseStudySection,
} from "@/components/case-studies";
import { useLanguage } from "@/lib/i18n";

const IMG = (file: string) =>
  `/images/Dinksmart/${encodeURIComponent(file)}`;

const IPHONE_13_MINI_THIN_FRAME = "/images/iPhone%2013%20mini%20Thin.png";
const IPHONE_THIN = { w: 540, h: 1096 } as const;
const SCREEN_INSET_STYLE = {
  top: `${(11 / IPHONE_THIN.h) * 100}%`,
  right: `${(21 / IPHONE_THIN.w) * 100}%`,
  bottom: `${(11 / IPHONE_THIN.h) * 100}%`,
  left: `${(21 / IPHONE_THIN.w) * 100}%`,
  position: "absolute" as const,
};

const COPY = {
  en: {
    eyebrow: "Dinksmart",
    chips: ["Mobile App", "B2C"],
    lede: "DinkSmart is a mobile app for the SoCal pickleball community — a sport that was exploding in popularity but had no good way to organize matches.",
    factDate: "Date", factDateVal: "Q3 2024",
    factRole: "Role", factRoleVal: "Product Designer",
    factScope: "Scope", factScopeVal: "UX/UI Design, Accessibility, Dev Handoff",
    factTeam: "Team", factTeamVal: "Design Director (client), Development team, PM",
    factTools: "Tools", factToolsVal: "Figma, Jira",
    factStatus: "Status", factStatusVal: "Productive",
    contextLabel: "The Context",
    contextP1: "Finding open courts, building groups, and coordinating games was all done manually — group chats, word of mouth. Existing apps were generic. DinkSmart wanted to go further: real-time court availability, player ratings, and the ability to propose and join matches with people you didn't already know.",
    contextP2: "I joined mid-project, with the visual direction already set and flows partially defined.",
    createMatchCaption: "Create a Match",
    whatIDidLabel: "What I Actually Did",
    whatIDidP1: "I didn't design DinkSmart from scratch. I came in when the visual direction was locked — a high-energy, graphic-design-heavy aesthetic driven by the client's creative director — and the UX was partially resolved. My job was to make it work.",
    notificationsCaption: "Push notification & Match Unavailable",
    threeTings: "That meant three things in practice:",
    buildable: "Making it buildable.",
    buildableText: " Several design decisions weren't implementable as designed. I worked between design and development to identify what needed to be simplified, restructured, or rebuilt — without losing the visual identity the client had invested in.",
    accessible: "Making it accessible.",
    accessibleText: " The high-contrast, neon-heavy palette looked striking but failed basic contrast requirements. I pushed for color adjustments that preserved the brand feel while meeting WCAG standards — a conversation that required educating stakeholders on why accessibility isn't negotiable.",
    documenting: "Completing and documenting the flows.",
    documentingText: " The \"Propose a Match\" flow — select players, find a time slot that works for everyone, choose a venue, confirm — was the most complex feature in the product. I documented every state, edge case, and component link in Figma, making the handoff to development precise enough to actually build.",
    homeScreenCaption: "Home Screen, Availability & Cancel Pop Up",
    tensionLabel: "The Tension Worth Mentioning",
    tensionP1: "Working alongside a graphic designer who owned the visual identity created a specific kind of friction: graphic design language and product design language are different, and sometimes they conflict. A bold typographic treatment that works on a poster doesn't work in a list view with 12 items. A color that reads as energetic in a hero section fails contrast in a form label.",
    tensionP2: "Navigating that tension — advocating for usability without dismissing the creative vision — was the most valuable skill this project demanded. The goal wasn't to make DinkSmart look generic. It was to make it look like itself and work.",
    whatILearnedLabel: "What I Learned",
    learned1: "Mid-project is a real constraint, not an excuse. Coming in after decisions are made means working with what exists, not what you'd design from scratch. That takes a different skill set — diagnosis, negotiation, and selective intervention rather than blank-canvas design.",
    learned2: "Accessibility is a design argument, not a compliance argument. Framing contrast requirements as \"this is the rule\" loses the argument. Framing them as \"users won't be able to read this in sunlight on a court\" wins it.",
    thankYou: "Thank you for reading!",
    goBack: "Go Back",
  },
  es: {
    eyebrow: "Dinksmart",
    chips: ["App Mobile", "B2C"],
    lede: "DinkSmart es una app mobile para la comunidad de pickleball de SoCal — un deporte que explotó en popularidad pero no tenía una buena forma de organizar partidos.",
    factDate: "Fecha", factDateVal: "Q3 2024",
    factRole: "Rol", factRoleVal: "Diseñadora de Producto",
    factScope: "Alcance", factScopeVal: "UX/UI Design, Accesibilidad, Dev Handoff",
    factTeam: "Equipo", factTeamVal: "Director Creativo (cliente), Equipo de Desarrollo, PM",
    factTools: "Herramientas", factToolsVal: "Figma, Jira",
    factStatus: "Estado", factStatusVal: "Productivo",
    contextLabel: "El Contexto",
    contextP1: "Encontrar canchas disponibles, armar grupos y coordinar partidos se hacía todo de forma manual — chats grupales, boca a boca. Las apps existentes eran genéricas. DinkSmart quería ir más lejos: disponibilidad de canchas en tiempo real, ratings de jugadores y la posibilidad de proponer y unirse a partidos con personas que no conocías.",
    contextP2: "Entré al proyecto a mitad de camino, con la dirección visual ya definida y los flujos parcialmente resueltos.",
    createMatchCaption: "Crear un Partido",
    whatIDidLabel: "Lo que Hice Realmente",
    whatIDidP1: "No diseñé DinkSmart desde cero. Llegué cuando la dirección visual estaba cerrada — una estética de alta energía y diseño gráfico intenso liderada por el director creativo del cliente — y el UX estaba parcialmente resuelto. Mi trabajo era hacer que funcionara.",
    notificationsCaption: "Notificación push y Partido No Disponible",
    threeTings: "Eso implicó tres cosas en la práctica:",
    buildable: "Hacerlo buildeable.",
    buildableText: " Varias decisiones de diseño no eran implementables tal como estaban. Trabajé entre diseño y desarrollo para identificar qué había que simplificar, reestructurar o reconstruir — sin perder la identidad visual en la que el cliente había invertido.",
    accessible: "Hacerlo accesible.",
    accessibleText: " La paleta de alto contraste y neones se veía impactante pero no cumplía los requisitos básicos de contraste. Empujé ajustes de color que preservaban el feel de marca y cumplían con los estándares WCAG — una conversación que requirió educar a los stakeholders sobre por qué la accesibilidad no es negociable.",
    documenting: "Completar y documentar los flujos.",
    documentingText: " El flujo de \"Proponer un Partido\" — seleccionar jugadores, encontrar un horario que le venga bien a todos, elegir la cancha, confirmar — era la feature más compleja del producto. Documenté cada estado, edge case y link de componente en Figma, haciendo que el handoff al equipo de desarrollo fuera lo suficientemente preciso para poder construirlo.",
    homeScreenCaption: "Pantalla de Inicio, Disponibilidad y Pop Up de Cancelación",
    tensionLabel: "La Tensión que Vale la Pena Mencionar",
    tensionP1: "Trabajar junto a un diseñador gráfico que tenía la identidad visual generó un tipo específico de fricción: el lenguaje del diseño gráfico y el del diseño de producto son diferentes, y a veces entran en conflicto. Un tratamiento tipográfico bold que funciona en un póster no funciona en una lista con 12 ítems. Un color que se siente energético en una sección hero falla en contraste en un label de formulario.",
    tensionP2: "Navegar esa tensión — defender la usabilidad sin desestimar la visión creativa — fue la habilidad más valiosa que exigió este proyecto. El objetivo no era hacer que DinkSmart pareciera genérico. Era hacer que pareciera sí mismo y que funcionara.",
    whatILearnedLabel: "Lo que Aprendí",
    learned1: "Entrar a mitad de proyecto es una restricción real, no una excusa. Llegar después de que las decisiones están tomadas implica trabajar con lo que existe, no con lo que diseñarías desde cero. Eso requiere un skill set diferente — diagnóstico, negociación e intervención selectiva, más que diseño en lienzo en blanco.",
    learned2: "La accesibilidad es un argumento de diseño, no de cumplimiento. Enmarcar los requisitos de contraste como \"esta es la regla\" pierde el argumento. Enmarcarlo como \"los usuarios no van a poder leer esto al sol en una cancha\" lo gana.",
    thankYou: "¡Gracias por leer!",
    goBack: "Volver",
  },
};

export function DinksmartCaseStudyContent() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <CaseStudyLayout
      backHref="/#card-dinksmart"
      pageBgClassName="bg-[#faffe6]"
      ringOffsetClassName="focus-visible:ring-offset-[#faffe6]"
      intro={
        <CaseStudyProjectHero
          eyebrow={t.eyebrow}
          chips={t.chips}
          heroBg="#dbf67b"
          lede={t.lede}
          facts={[
            { label: t.factDate, value: t.factDateVal },
            { label: t.factRole, value: t.factRoleVal },
            { label: t.factScope, value: t.factScopeVal },
            { label: t.factTeam, value: t.factTeamVal },
            { label: t.factTools, value: t.factToolsVal },
            { label: t.factStatus, value: t.factStatusVal },
          ]}
        />
      }
    >
      {/* ── The Context ─────────────────────────────────────────────────── */}
      <CaseStudySection id="context">
        <CaseStudyPhaseContent>
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12">
            {/* Text */}
            <div className="min-w-0 flex-1 text-lg leading-[1.56] tracking-[0.03em] text-muted">
              <CaseStudyPhaseLabel>{t.contextLabel}</CaseStudyPhaseLabel>
              <div className="flex flex-col gap-4">
                <p>{t.contextP1}</p>
                <p>{t.contextP2}</p>
              </div>
            </div>

            {/* Splash video in iPhone mockup */}
            <div className="flex shrink-0 justify-center">
              <div style={{ width: 220, position: "relative" }}>
                <div style={{ position: "relative", width: 220, height: Math.round(220 * (1096 / 540)) }}>
                  <Image
                    src={IPHONE_13_MINI_THIN_FRAME}
                    alt=""
                    fill
                    className="pointer-events-none object-contain object-center"
                    style={{ zIndex: 0 }}
                    sizes="220px"
                    aria-hidden
                    draggable={false}
                  />
                  <div
                    style={{
                      position: "absolute",
                      zIndex: 10,
                      top: `${(11 / 1096) * 100}%`,
                      right: `${(21 / 540) * 100}%`,
                      bottom: `${(11 / 1096) * 100}%`,
                      left: `${(21 / 540) * 100}%`,
                      overflow: "hidden",
                      borderRadius: "1.65rem",
                    }}
                  >
                    <video
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      poster={IMG("splash-poster.jpg")}
                      aria-label="DinkSmart splash screen."
                    >
                      <source src={IMG("splash-dinksmart.mp4")} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Mockup: Create a Match ───────────────────────────────────────── */}
      <CaseStudySection id="mockup-create-match">
        <div className="flex flex-col gap-4">
          <ExpandableImage
            src={IMG("mockup phones.webp")}
            alt="Create a Match flow"
            width={1016}
            height={762}
            className="h-auto w-full rounded-3xl"
            sizes="(max-width: 1186px) 100vw, 1016px"
            priority
          />
          <p className="text-center text-sm leading-relaxed text-muted">
            {t.createMatchCaption}
          </p>
        </div>
      </CaseStudySection>

      {/* ── What I Actually Did ─────────────────────────────────────────── */}
      <CaseStudySection id="what-i-did">
        <CaseStudyPhaseLabel>{t.whatIDidLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.whatIDidP1}</p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Mockup: Push notification & Match Unavailable ───────────────── */}
      <CaseStudySection id="mockup-notifications">
        <div className="flex flex-col gap-4">
          <ExpandableImage
            src={IMG("phones3.webp")}
            alt="Push notification and Match Unavailable screens"
            width={1022}
            height={767}
            className="h-auto w-full rounded-3xl"
            sizes="(max-width: 1186px) 100vw, 1022px"
          />
          <p className="text-center text-sm leading-relaxed text-muted">
            {t.notificationsCaption}
          </p>
        </div>
      </CaseStudySection>

      {/* ── That meant three things ─────────────────────────────────────── */}
      <CaseStudySection id="three-things">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                {t.threeTings}
              </p>
              <div className="flex flex-col gap-3">
                <p>
                  <span className="font-medium text-ink">{t.buildable}</span>
                  {t.buildableText}
                </p>
                <p>
                  <span className="font-medium text-ink">{t.accessible}</span>
                  {t.accessibleText}
                </p>
                <p>
                  <span className="font-medium text-ink">{t.documenting}</span>
                  {t.documentingText}
                </p>
              </div>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Mockup: Home Screen, Availability & Cancel Pop Up ───────────── */}
      <CaseStudySection id="mockup-home">
        <div className="flex flex-col gap-4">
          <ExpandableImage
            src={IMG("phones4.webp")}
            alt="Home Screen, Availability and Cancel Pop Up"
            width={942}
            height={707}
            className="h-auto w-full rounded-3xl"
            sizes="(max-width: 1186px) 100vw, 942px"
          />
          <p className="text-center text-sm leading-relaxed text-muted">
            {t.homeScreenCaption}
          </p>
        </div>
      </CaseStudySection>

      {/* ── The Tension Worth Mentioning ────────────────────────────────── */}
      <CaseStudySection id="tension">
        <CaseStudyPhaseLabel>{t.tensionLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>{t.tensionP1}</p>
              <p>{t.tensionP2}</p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── What I Learned ──────────────────────────────────────────────── */}
      <CaseStudySection id="what-i-learned">
        <CaseStudyPhaseLabel>{t.whatILearnedLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>{t.learned1}</p>
              <p>{t.learned2}</p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Thank You ───────────────────────────────────────────────────── */}
      <CaseStudySection id="thank-you">
        <div className="flex flex-col items-center gap-12 py-8 text-center">
          <p className="font-[family-name:var(--font-general-sans)] text-3xl font-medium leading-tight text-ink md:text-[32px] md:leading-[1.25]">
            {t.thankYou}
          </p>
          <a
            href="/#card-dinksmart"
            className="inline-flex items-center gap-2 rounded-full bg-[#3c3c3c] px-6 py-4 text-base font-semibold leading-tight text-[#fdfdfd] transition-colors hover:bg-[#555] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#faffe6]"
          >
            <ArrowLeftIcon className="size-4" />
            {t.goBack}
          </a>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
