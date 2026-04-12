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
  CaseStudyWideBleed,
} from "@/components/case-studies";
import { useLanguage } from "@/lib/i18n";

const IMG = (file: string) =>
  `/images/Compra simple/${encodeURIComponent(file)}`;

const COPY = {
  en: {
    eyebrow: "Compra Simple",
    eyebrowLine2: "InvertirOnline.",
    chips: ["Mobile App", "B2C"] as string[],
    lede: "Compra Simple is a feature I designed for InvertirOnline that added a faster purchase flow directly into the stock list \u2014 letting experienced users buy in two taps without going through the full detailed flow.",
    factDate: "Date", factDateVal: "Q3 2024",
    factRole: "Role", factRoleVal: "Product Designer",
    factScope: "Scope", factScopeVal: "User Research, Data Analysis, UX Strategy, Wireframing, UI Design, QA",
    factTeam: "Team", factTeamVal: "Product Owner, IT, QA, Data Science",
    factTools: "Tools", factToolsVal: "Figma, Figjam, Jira, Analytics",
    factStatus: "Status", factStatusVal: "Productive",
    problemLabel: "01. The Problem",
    problemP1: "InvertirOnline is one of Argentina\u2019s leading investment platforms. The existing purchase flow was thorough \u2014 it walked users through every parameter: limit price, validity term, quantity, order type.",
    problemP2: "For new or hesitant investors, that detail was genuinely useful. For experienced users who already knew exactly what they wanted to buy, it was just friction.",
    problemP3: "When we dug into user behavior, a specific segment stood out: frequent buyers who never touched the advanced parameters and found the flow unnecessarily long. They were completing purchases in spite of the flow, not because of it.",
    researchLabel: "02. Research & Hypothesis",
    researchP1: "Before designing anything, we let the data speak.",
    quantLabel: "Quantitative finding:",
    quantText: "More than half of all purchases were being completed without ever touching the fields the flow was built around.",
    statValue: "53,4%",
    statText: "of users who bought stocks did not modify default parameters (limit or validity).",
    qualLabel: "Qualitative finding:",
    qualText: "We ran interviews and usability tests with 5 frequent users. Four patterns came up consistently:",
    qualItems: [
      "\u2192 They valued speed and simplicity above all else",
      "\u2192 They rarely reviewed details when buying assets they already knew",
      "\u2192 Several users mentioned they would buy more often \u201cif it were faster\u201d",
    ] as string[],
    insightLabel: "The key insight:",
    insightText: "The product had two distinct user types in the same flow \u2014 one that valued control and detail, and another that just wanted to get it done. The existing flow served one of them well. The other was hitting unnecessary friction every single time they opened the app.",
    challengeLabel: "The design challenge:",
    challengeText: "How might we give experienced users a faster path \u2014 without taking anything away from users who need more detail?",
    metricsLabel: "Success metrics defined upfront:",
    metricsItems: [
      "\u2192 Reduce time to complete a purchase",
      "\u2192 Increase conversion rate",
      "\u2192 Improve satisfaction for frequent traders",
    ] as string[],
    solutionLabel: "03. The Solution \u2014 Compra Simple",
    solutionP1: "Rather than replacing the existing flow \u2014 which would\u2019ve broken the experience for detail-oriented users \u2014 we designed a parallel path that sits alongside it.",
    solutionP2: "Compra Simple is a lightweight purchase flow built directly into the stock list. It lets users:",
    newFlowCaption: "New Flow (interaction with the older flow)",
    phoneCaption: "A dropdown component in the stock list, allowing the user to directly buy.",
    featuresItems: [
      "\u2192 Buy by amount instead of quantity (eliminating the need to calculate)",
      "\u2192 Use quick +/\u2212 selectors to adjust the amount",
      "\u2192 Confirm in two taps",
      "\u2192 Access the full purchase flow with one tap if they need more options",
    ] as string[],
    epilogueP1: "The key call here was building an alternative, not a replacement. Users who wanted speed got speed. Users who wanted detail still had it. And users who wanted both \u2014 6,747 used both flows in the analysis period \u2014 could move between them naturally.",
    epilogueP2: "The solution landed as a dropdown component directly in the stock list, so users never had to navigate away to start a purchase.",
    oldDesignCaption: "Old design list",
    newDesignCaption: "New design list \u2014 New component",
    goalsLabel: "Our goals were:",
    goals: [
      "Keep the main decision visible (amount and ticker)",
      "Reduce navigation levels",
      "Offer a seamless way to access the full flow if needed",
    ] as string[],
    sketchesLabel: "Early sketches included:",
    sketches: [
      "A quick-purchase list view with \u201cBuy\u201d buttons",
      "Inline amount selector (+ / \u2212)",
      'Shortcut to open \u201cFull Flow\u201d',
    ] as string[],
    outcomeLabel: "04. Outcome",
    outcomeSubtitle: "In one month of analysis after launch:",
    stats: [
      { value: "17,881", label: "Users accessed the feature during the first weeks" },
      { value: "13,158", label: "Used Compra Simple" },
      { value: "6,747",  label: "Used both (suggesting users test and adopt what best fits their style)" },
      { value: "11,594", label: "Used the traditional flow" },
    ] as { value: string; label: string }[],
    feedbackText: "Positive feedback from frequent users:",
    feedbackQuote: "\u201cfaster,\u201d \u201cmore intuitive,\u201d \u201csaves me time.\u201d",
    coexistenceText: "The fact that both flows coexisted also helped with retention \u2014 neither user type was forced into a pattern that didn\u2019t fit them.",
    conversionCards: [
      { value: "+12%", label: "increase in conversion rate." },
      { value: "+14%", label: "approval rate improvement" },
    ] as { value: string; label: string }[],
    learnedLabel: "05. What I Learned",
    learnedItems: [
      "Data before design. The 53.4% finding wasn\u2019t a hypothesis \u2014 it was a validated behavior pattern that gave us a clear reason to build something new. Starting with the data made every decision after that easier to defend.",
      "Coexistence beats replacement. The instinct when designing a simplified flow is to simplify the whole product. That would\u2019ve served one user type while hurting the other. Letting both flows live together \u2014 without competition, with clear access to each \u2014 was the right call, and it\u2019s what drove the retention impact.",
      "Simple solutions can have outsized business impact. Compra Simple wasn\u2019t technically complex. It didn\u2019t require a new information architecture or a redesigned system. It required understanding a specific behavior pattern and removing exactly the friction that was getting in the way. The impact was disproportionate to the scope.",
      "Define success metrics before the first wireframe. We defined conversion rate, time to complete, and user satisfaction before designing anything. That made post-launch analysis clean and the results unambiguous.",
    ] as string[],
    thankYou: "Thank you for reading!",
    goBack: "Go Back",
  },
  es: {
    eyebrow: "Compra Simple",
    eyebrowLine2: "InvertirOnline.",
    chips: ["App Mobile", "B2C"] as string[],
    lede: "Compra Simple es una feature que dise\u00f1\u00e9 para InvertirOnline que agreg\u00f3 un flujo de compra m\u00e1s r\u00e1pido directamente en la lista de acciones \u2014 permiti\u00e9ndole a usuarios experimentados comprar en dos taps sin pasar por el flujo detallado completo.",
    factDate: "Fecha", factDateVal: "Q3 2024",
    factRole: "Rol", factRoleVal: "Dise\u00f1adora de Producto",
    factScope: "Alcance", factScopeVal: "User Research, An\u00e1lisis de Datos, Estrategia UX, Wireframing, UI Design, QA",
    factTeam: "Equipo", factTeamVal: "Product Owner, IT, QA, Data Science",
    factTools: "Herramientas", factToolsVal: "Figma, Figjam, Jira, Analytics",
    factStatus: "Estado", factStatusVal: "Productivo",
    problemLabel: "01. El Problema",
    problemP1: "InvertirOnline es una de las plataformas de inversi\u00f3n l\u00edderes de Argentina. El flujo de compra existente era completo \u2014 gu\u00edaba a los usuarios por cada par\u00e1metro: precio l\u00edmite, plazo de vigencia, cantidad, tipo de orden.",
    problemP2: "Para inversores nuevos o indecisos, ese nivel de detalle era genuinamente \u00fatil. Para usuarios experimentados que ya sab\u00edan exactamente lo que quer\u00edan comprar, era simple fricci\u00f3n.",
    problemP3: "Cuando profundizamos en el comportamiento de los usuarios, un segmento se destacaba: compradores frecuentes que nunca tocaban los par\u00e1metros avanzados y encontraban el flujo innecesariamente largo. Completaban las compras a pesar del flujo, no gracias a \u00e9l.",
    researchLabel: "02. Investigaci\u00f3n e Hip\u00f3tesis",
    researchP1: "Antes de dise\u00f1ar cualquier cosa, dejamos hablar a los datos.",
    quantLabel: "Hallazgo cuantitativo:",
    quantText: "M\u00e1s de la mitad de todas las compras se completaban sin tocar jam\u00e1s los campos alrededor de los cuales se construy\u00f3 el flujo.",
    statValue: "53,4%",
    statText: "de los usuarios que compraron acciones no modificaron los par\u00e1metros por defecto (l\u00edmite o vigencia).",
    qualLabel: "Hallazgo cualitativo:",
    qualText: "Realizamos entrevistas y tests de usabilidad con 5 usuarios frecuentes. Cuatro patrones aparecieron consistentemente:",
    qualItems: [
      "\u2192 Valoraban la velocidad y la simplicidad por encima de todo",
      "\u2192 Rara vez revisaban los detalles al comprar activos que ya conoc\u00edan",
      "\u2192 Varios usuarios mencionaron que comprar\u00edan m\u00e1s seguido \u201csi fuera m\u00e1s r\u00e1pido\u201d",
    ] as string[],
    insightLabel: "El insight clave:",
    insightText: "El producto ten\u00eda dos tipos de usuario distintos en el mismo flujo \u2014 uno que valoraba el control y el detalle, y otro que solo quer\u00eda terminar. El flujo existente serv\u00eda bien a uno de ellos. El otro topaba con fricci\u00f3n innecesaria cada vez que abr\u00eda la app.",
    challengeLabel: "El desaf\u00edo de dise\u00f1o:",
    challengeText: "\u00bfC\u00f3mo darle a los usuarios experimentados un camino m\u00e1s r\u00e1pido \u2014 sin quitarle nada a los usuarios que necesitan m\u00e1s detalle?",
    metricsLabel: "M\u00e9tricas de \u00e9xito definidas de antemano:",
    metricsItems: [
      "\u2192 Reducir el tiempo para completar una compra",
      "\u2192 Aumentar la tasa de conversi\u00f3n",
      "\u2192 Mejorar la satisfacci\u00f3n de los traders frecuentes",
    ] as string[],
    solutionLabel: "03. La Soluci\u00f3n \u2014 Compra Simple",
    solutionP1: "En lugar de reemplazar el flujo existente \u2014 lo que habr\u00eda roto la experiencia para los usuarios orientados al detalle \u2014 dise\u00f1amos un camino paralelo que convive con \u00e9l.",
    solutionP2: "Compra Simple es un flujo de compra liviano integrado directamente en la lista de acciones. Le permite a los usuarios:",
    newFlowCaption: "Nuevo Flujo (interacci\u00f3n con el flujo anterior)",
    phoneCaption: "Un componente dropdown en la lista de acciones que permite al usuario comprar directamente.",
    featuresItems: [
      "\u2192 Comprar por monto en lugar de cantidad (eliminando la necesidad de calcular)",
      "\u2192 Usar selectores r\u00e1pidos +/\u2212 para ajustar el monto",
      "\u2192 Confirmar en dos taps",
      "\u2192 Acceder al flujo de compra completo con un tap si necesitan m\u00e1s opciones",
    ] as string[],
    epilogueP1: "La decisi\u00f3n clave fue construir una alternativa, no un reemplazo. Los usuarios que quer\u00edan velocidad la tuvieron. Los que quer\u00edan detalle lo siguieron teniendo. Y los que quer\u00edan ambos \u2014 6.747 usaron los dos flujos en el per\u00edodo de an\u00e1lisis \u2014 pod\u00edan moverse entre ellos naturalmente.",
    epilogueP2: "La soluci\u00f3n qued\u00f3 como un componente dropdown directamente en la lista de acciones, para que los usuarios nunca tuvieran que navegar a otra parte para iniciar una compra.",
    oldDesignCaption: "Dise\u00f1o anterior de la lista",
    newDesignCaption: "Nuevo dise\u00f1o de la lista \u2014 Nuevo componente",
    goalsLabel: "Nuestros objetivos eran:",
    goals: [
      "Mantener la decisi\u00f3n principal visible (monto y ticker)",
      "Reducir los niveles de navegaci\u00f3n",
      "Ofrecer una forma fluida de acceder al flujo completo si se necesita",
    ] as string[],
    sketchesLabel: "Los primeros bocetos inclu\u00edan:",
    sketches: [
      "Una vista de lista de compra r\u00e1pida con botones \u201cComprar\u201d",
      "Selector de monto inline (+ / \u2212)",
      'Acceso directo para abrir el \u201cFlujo Completo\u201d',
    ] as string[],
    outcomeLabel: "04. Resultados",
    outcomeSubtitle: "En un mes de an\u00e1lisis despu\u00e9s del lanzamiento:",
    stats: [
      { value: "17.881", label: "Usuarios accedieron a la feature durante las primeras semanas" },
      { value: "13.158", label: "Usaron Compra Simple" },
      { value: "6.747",  label: "Usaron ambos (lo que sugiere que los usuarios prueban y adoptan lo que mejor se adapta a su estilo)" },
      { value: "11.594", label: "Usaron el flujo tradicional" },
    ] as { value: string; label: string }[],
    feedbackText: "Feedback positivo de usuarios frecuentes:",
    feedbackQuote: "\u201cm\u00e1s r\u00e1pido,\u201d \u201cm\u00e1s intuitivo,\u201d \u201cme ahorra tiempo.\u201d",
    coexistenceText: "El hecho de que los dos flujos coexistieran tambi\u00e9n ayud\u00f3 con la retenci\u00f3n \u2014 ning\u00fan tipo de usuario fue forzado a un patr\u00f3n que no le encajaba.",
    conversionCards: [
      { value: "+12%", label: "aumento en la tasa de conversi\u00f3n." },
      { value: "+14%", label: "mejora en la tasa de aprobaci\u00f3n" },
    ] as { value: string; label: string }[],
    learnedLabel: "05. Lo que Aprend\u00ed",
    learnedItems: [
      "Datos antes del dise\u00f1o. El hallazgo del 53,4% no era una hip\u00f3tesis \u2014 era un patr\u00f3n de comportamiento validado que nos dio una raz\u00f3n clara para construir algo nuevo. Arrancar con los datos hizo que cada decisi\u00f3n posterior fuera m\u00e1s f\u00e1cil de defender.",
      "La coexistencia supera al reemplazo. El instinto al dise\u00f1ar un flujo simplificado es simplificar todo el producto. Eso habr\u00eda servido a un tipo de usuario mientras perjudicaba al otro. Dejar que los dos flujos convivieran \u2014 sin competencia, con acceso claro a cada uno \u2014 fue la decisi\u00f3n correcta, y fue lo que impuls\u00f3 el impacto en la retenci\u00f3n.",
      "Las soluciones simples pueden tener un impacto de negocio desproporcionado. Compra Simple no era t\u00e9cnicamente complejo. No requer\u00eda una nueva arquitectura de informaci\u00f3n ni un sistema redise\u00f1ado. Requer\u00eda entender un patr\u00f3n de comportamiento espec\u00edfico y eliminar exactamente la fricci\u00f3n que estaba en el camino. El impacto fue desproporcionado al alcance.",
      "Definir m\u00e9tricas de \u00e9xito antes del primer wireframe. Definimos tasa de conversi\u00f3n, tiempo para completar y satisfacci\u00f3n del usuario antes de dise\u00f1ar cualquier cosa. Eso hizo que el an\u00e1lisis post-lanzamiento fuera limpio y los resultados, inequ\u00edvocos.",
    ] as string[],
    thankYou: "\u00a1Gracias por leer!",
    goBack: "Volver",
  },
};

export function CompraSimpleCaseStudyContent() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <CaseStudyLayout
      pageBgClassName="bg-[#ededfa]"
      ringOffsetClassName="focus-visible:ring-offset-[#ededfa]"
      intro={
        <CaseStudyProjectHero
          eyebrow={t.eyebrow}
          eyebrowLine2={t.eyebrowLine2}
          chips={t.chips}
          heroBg="#DFDCFF"
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
      {/* ── 01. The Problem ─────────────────────────────────────────────── */}
      <CaseStudySection id="the-problem">
        <CaseStudyPhaseLabel>{t.problemLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>{t.problemP1}</p>
              <p>{t.problemP2}</p>
              <p>{t.problemP3}</p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 02. Research & Hypothesis ───────────────────────────────────── */}
      <CaseStudySection id="research">
        <CaseStudyPhaseLabel>{t.researchLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.researchP1}</p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                  {t.quantLabel}
                </p>
                <p>{t.quantText}</p>
              </div>

              {/* 53.4% stat */}
              <div className="rounded-2xl p-8" style={{ backgroundColor: "#DFDCFF" }}>
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-[34px]">
                  <p className="shrink-0 text-6xl font-bold leading-none text-ink">
                    {t.statValue}
                  </p>
                  <p className="text-2xl font-medium leading-[1.29] text-ink">
                    {t.statText}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                  {t.qualLabel}
                </p>
                <p>{t.qualText}</p>
              </div>
              <div className="rounded-2xl p-6" style={{ backgroundColor: "#f6f9fe" }}>
                <div className="flex flex-col gap-3 text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                  {t.qualItems.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                {t.insightLabel}
              </p>
              <p>{t.insightText}</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                {t.challengeLabel}
              </p>
              <p>{t.challengeText}</p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">
                {t.metricsLabel}
              </p>
              <div className="rounded-2xl p-6" style={{ backgroundColor: "#f6f9fe" }}>
                <div className="flex flex-col gap-3 text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                  {t.metricsItems.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 03. The Solution ────────────────────────────────────────────── */}
      <CaseStudySection id="the-solution">
        <CaseStudyPhaseLabel>{t.solutionLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>{t.solutionP1}</p>
              <p>{t.solutionP2}</p>
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
                {t.newFlowCaption}
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
                {t.phoneCaption}
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
              {t.featuresItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Solution epilogue ───────────────────────────────────────────── */}
      <CaseStudySection id="solution-epilogue" className="!mt-10 md:!mt-14">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>{t.epilogueP1}</p>
              <p>{t.epilogueP2}</p>
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
                {t.oldDesignCaption}
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
                {t.newDesignCaption}
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
                {t.goalsLabel}
              </p>
              <div className="flex flex-col gap-2">
                {t.goals.map((goal) => (
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
                {t.sketchesLabel}
              </p>
              <div className="flex flex-col gap-2">
                {t.sketches.map((sketch) => (
                  <div key={sketch} className="rounded-2xl p-6" style={{ backgroundColor: "#f6f9fe" }}>
                    <p className="text-lg font-medium leading-[1.4] tracking-[0.03em] text-ink">{sketch}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 04. Outcome ─────────────────────────────────────────────────── */}
      <CaseStudySection id="outcome">
        <div className="flex flex-col gap-1">
          <CaseStudyPhaseLabel>{t.outcomeLabel}</CaseStudyPhaseLabel>
          <p className="text-lg leading-[1.56] tracking-[0.03em] text-muted">
            {t.outcomeSubtitle}
          </p>
        </div>
        <CaseStudyPhaseContent className="!mt-10 md:!mt-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {t.stats.map(({ value, label }, i) => (
              <div key={value} className="flex items-center gap-5 rounded-2xl p-9" style={{ backgroundColor: "#f6f9fe" }}>
                <div className="flex flex-1 flex-col gap-2">
                  <p className="text-5xl font-bold leading-none text-ink">{value}</p>
                  <p className="text-lg font-medium leading-[1.4] text-muted">{label}</p>
                </div>
                <img alt="" src={`/images/Compra simple/Shape${i + 1}.svg`} className="h-[124px] w-[134px] shrink-0" />
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
              <p>{t.feedbackText}</p>
              <p>&ldquo;{t.feedbackQuote}&rdquo;</p>
            </div>
            <p className="text-2xl font-medium leading-[1.4] tracking-[0.025em] text-ink md:text-[28px] md:leading-[1.29]">
              {t.coexistenceText}
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
              {t.conversionCards.map(({ value, label }) => (
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
        <CaseStudyPhaseLabel>{t.learnedLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              {t.learnedItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Thank you ───────────────────────────────────────────────────── */}
      <CaseStudySection id="thank-you">
        <div className="flex flex-col items-center gap-10 py-8">
          <p className="text-3xl font-medium leading-tight text-ink">
            {t.thankYou}
          </p>
          <a href="/#card-compra-simple" className="btn-primary">
            <ArrowLeftIcon className="size-4" />
            {t.goBack}
          </a>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
