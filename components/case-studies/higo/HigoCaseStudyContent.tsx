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
import { useLanguage } from "@/lib/i18n";

const IMG = (file: string) =>
  `/images/Higo/${encodeURIComponent(file)}`;

const COPY = {
  en: {
    eyebrow: "Payroll —",
    eyebrowLine2: "Higo (by Payana)",
    chips: ["Web Responsive", "B2B"],
    lede: "Higo is a B2B payments platform for Mexican businesses that centralizes supplier payments and expense management — replacing manual spreadsheets and bank layouts with a single, automated financial operations tool.",
    factDate: "Date", factDateVal: "Q3 2024",
    factRole: "Role", factRoleVal: "Sr. Product Designer",
    factScope: "Scope", factScopeVal: "UX Research, UX/UI Design",
    factTeam: "Team", factTeamVal: "PM / 1 Full Stack",
    factTools: "Tools", factToolsVal: "Figma, Amplitude, Notion",
    factStatus: "Status", factStatusVal: "In Production",
    contextLabel: "The Context",
    contextP: "In April 2024, Payana — the B2B payments platform where I worked — acquired Higo, a similar solution operating in Mexico. My job was to start aligning both products and experiences. Payroll already existed in Payana. Higo had the user base, but the feature needed to be built for their context from scratch — understanding a different market, different tools, and different user expectations.",
    problemLabel: "The Problem",
    problemP1: "Before designing anything, we ran discovery interviews with Higo users to understand how they currently handled payroll. The findings were immediate — and they defined the scope of everything we built.",
    problemInterviews: "We interviewed 11 customers to identify the top problems",
    problemP2: "Most users weren't looking for a full payroll management platform. They already had tools for that — Runa, OSMOS, ASPEL — handling the complex stuff: vacation pay, bonuses, social security, tax filing. What they needed was a reliable, clear, fast way to disperse the payments. That was it.",
    problemP3: "But \"just dispersing payments\" turned out to be more nuanced than it sounds. The interviews surfaced specific, concrete problems:",
    prob1: "— Payments failed silently — users only found out when an employee complained",
    prob2: "— There was no way to customize the payment concept per employee — the description that appeared on the employee's bank statement was generic or missing, creating confusion",
    prob3: "— Payment cycles weren't clearly labeled — users needed to distinguish first and second fortnightly payments without ambiguity",
    prob4: "— Layouts from their payroll software didn't map cleanly to what their bank expected, creating manual reconciliation work every cycle",
    q1label: "Their current process",
    q1text: "\u201cThey upload a layout to their bank — it works, but it\u2019s slow and only runs on business days before 1pm.\u201d",
    q1source: "— FUNEZA, 300 employees",
    q2label: "What they value most",
    q2text: "\u201cSpeed and immediacy. They don\u2019t want to depend on fixed bank schedules.\u201d",
    q2source: "— Jr3 Pack & Ship",
    q3label: "The most repeated pain point",
    q3text: "\u201cThey want to keep dispersing via layout — just simpler, without re-entering the account number every time.\u201d",
    q3source: "— Multiple Users",
    q4label: "The insight that defined the scope",
    q4text: "\u201cThey already have payroll software for calculations. What they need is a better way to disperse — not a full payroll tool.\u201d",
    q4source: "— Ben and Frank, Caliza",
    q5label: "The opportunity",
    q5text: "\u201cIf the dispersion automatically triggered the receipt stamp, that would be a game changer.\u201d",
    q5source: "— Jr3 Pack & Ship, EnviaYA",
    designChallengeLabel: "The Design Challenge",
    challengeP1: "The hardest part of this project wasn't the UI — it was designing within a deliberate scope limitation without making the product feel half-baked.",
    challengeP2: "Higo wasn't going to become a payroll calculator. But users coming from full payroll platforms had expectations shaped by those tools. My approach: don't try to replicate what their existing tools already do well. Make the dispersal experience significantly better than what their bank was offering.",
    desktopHomepage: "Desktop — Homepage",
    desktopPayrollNew: "Desktop — Payroll New",
    keyDesignLabel: "Key Design Decisions",
    d1title: "Failure visibility at the employee level.",
    d1text: "The most operationally significant call. When a batch payment fails for one employee out of forty, the user needs to know immediately — not when that employee calls. The list view shows a \u201cFalla en X pagos\u201d badge directly on the batch card. Opening the detail shows each employee's individual status: Processed or failed, with a download action for the payment receipt. Processing 50 payroll payments, you can see at a glance exactly which ones didn't go through — without opening each record individually.",
    payrollWhenFails: "Payroll — When a payment fails",
    d2title: "Editable concept and period after payment.",
    d2text: "Users needed to label each payment clearly — for their own records and for what appeared on the employee's bank statement. A payment labeled \u201cPrimer Quincena Marzo 2024\u201d is immediately recognizable; a generic batch code is not. Inline editing for both the concept and the period, accessible via a simple edit icon directly from the paid list. No need to re-enter the payment flow — edit in place and save.",
    d3title: "Clear batch structure with period as a first-class field.",
    d3text: "Each batch card shows the concept name, total amount processed, number of employees, and the payment period (e.g. 15/05 – 30/05 2024) as a visible, editable field. Users managing weekly and fortnightly payrolls simultaneously can distinguish them at a glance without opening the detail.",
    d4title: "Tabs for active vs. paid payrolls.",
    d4text: "Active and paid payrolls in separate tabs — keeps the working view clean and the historical record accessible without cluttering the main screen.",
    mainPayrollView: "Main Payroll view",
    whatThisCaseLabel: "What This Case Is Really About",
    whatThisP: "This project is a good example of designing at the intersection of business constraints and user expectations. The product had a defined scope — dispersal, not payroll calculation. My job wasn't to expand that scope. It was to make sure that within it, the experience was genuinely better than what users were getting from their banks: more visibility, more control, less manual reconciliation, and no silent failures.",
    paymentDetailView: "Payment detail view",
    whatILearnedLabel: "What I Learned",
    learned1: "Scope limitations are design inputs, not obstacles. Knowing that Higo wasn't going to be a full payroll platform didn't narrow the design space — it focused it. The question shifted from \"how do we build payroll?\" to \"what does a dispersal tool need to do well that banks consistently fail at?\"",
    learned2: "The most valuable research insight is often the most specific complaint. \"The CSV has scientific notation and it breaks every time\" is more useful than \"the process is complicated.\" Specificity tells you exactly where to focus.",
    learned3: "Silent failures are a trust problem, not just a UX problem. In a payroll context, a payment that fails without notification doesn't just create friction — it damages the relationship between employer and employee. Making failures visible and immediate was the highest-priority decision in the entire design.",
    thankYou: "Thank you for reading!",
    goBack: "Go Back",
  },
  es: {
    eyebrow: "Nómina —",
    eyebrowLine2: "Higo (by Payana)",
    chips: ["Web Responsive", "B2B"],
    lede: "Higo es una plataforma de pagos B2B para empresas mexicanas que centraliza pagos a proveedores y gestión de gastos — reemplazando planillas manuales y layouts bancarios con una herramienta única y automatizada de operaciones financieras.",
    factDate: "Fecha", factDateVal: "Q3 2024",
    factRole: "Rol", factRoleVal: "Sr. Diseñadora de Producto",
    factScope: "Alcance", factScopeVal: "UX Research, UX/UI Design",
    factTeam: "Equipo", factTeamVal: "PM / 1 Full Stack",
    factTools: "Herramientas", factToolsVal: "Figma, Amplitude, Notion",
    factStatus: "Estado", factStatusVal: "En Producción",
    contextLabel: "El Contexto",
    contextP: "En abril de 2024, Payana — la plataforma de pagos B2B donde trabajaba — adquirió Higo, una solución similar que operaba en México. Mi trabajo era empezar a alinear ambos productos y experiencias. La nómina ya existía en Payana. Higo tenía la base de usuarios, pero la feature necesitaba construirse desde cero para su contexto — entendiendo un mercado diferente, herramientas distintas y expectativas de usuario diferentes.",
    problemLabel: "El Problema",
    problemP1: "Antes de diseñar nada, hicimos entrevistas de discovery con usuarios de Higo para entender cómo manejaban actualmente la nómina. Los hallazgos fueron inmediatos — y definieron el alcance de todo lo que construimos.",
    problemInterviews: "Entrevistamos a 11 clientes para identificar los principales problemas",
    problemP2: "La mayoría de los usuarios no buscaba una plataforma completa de gestión de nómina. Ya tenían herramientas para eso — Runa, OSMOS, ASPEL — que manejaban lo complejo: vacaciones, bonos, seguridad social, declaraciones impositivas. Lo que necesitaban era una forma confiable, clara y rápida de dispersar los pagos. Eso era todo.",
    problemP3: "Pero \"simplemente dispersar pagos\" resultó ser más matizado de lo que suena. Las entrevistas identificaron problemas específicos y concretos:",
    prob1: "— Los pagos fallaban silenciosamente — los usuarios se enteraban recién cuando un empleado se quejaba",
    prob2: "— No había forma de personalizar el concepto de pago por empleado — la descripción que aparecía en el extracto bancario del empleado era genérica o inexistente, generando confusión",
    prob3: "— Los ciclos de pago no estaban claramente etiquetados — los usuarios necesitaban distinguir la primera y segunda quincena sin ambigüedad",
    prob4: "— Los layouts de su software de nómina no mapeaban limpiamente a lo que esperaba el banco, generando trabajo de conciliación manual cada ciclo",
    q1label: "Su proceso actual",
    q1text: "\u201cSuben un layout al banco — funciona, pero es lento y solo corre en días hábiles antes de la 1pm.\u201d",
    q1source: "— FUNEZA, 300 empleados",
    q2label: "Lo que más valoran",
    q2text: "\u201cVelocidad e inmediatez. No quieren depender de los horarios fijos del banco.\u201d",
    q2source: "— Jr3 Pack & Ship",
    q3label: "El pain point más repetido",
    q3text: "\u201cQuieren seguir dispersando vía layout — solo más simple, sin tener que reingresar el número de cuenta cada vez.\u201d",
    q3source: "— Múltiples Usuarios",
    q4label: "El insight que definió el alcance",
    q4text: "\u201cYa tienen software de nómina para los cálculos. Lo que necesitan es una mejor forma de dispersar — no una herramienta completa de nómina.\u201d",
    q4source: "— Ben and Frank, Caliza",
    q5label: "La oportunidad",
    q5text: "\u201cSi la dispersión activara automáticamente el sello del comprobante, sería un cambio total.\u201d",
    q5source: "— Jr3 Pack & Ship, EnviaYA",
    designChallengeLabel: "El Desafío de Diseño",
    challengeP1: "La parte más difícil de este proyecto no fue la UI — fue diseñar dentro de una limitación de alcance deliberada sin que el producto se sintiera incompleto.",
    challengeP2: "Higo no iba a convertirse en una calculadora de nómina. Pero los usuarios que venían de plataformas completas de nómina tenían expectativas moldeadas por esas herramientas. Mi enfoque: no tratar de replicar lo que sus herramientas existentes ya hacen bien. Hacer que la experiencia de dispersión sea significativamente mejor que lo que ofrece el banco.",
    desktopHomepage: "Desktop — Página de Inicio",
    desktopPayrollNew: "Desktop — Nueva Nómina",
    keyDesignLabel: "Decisiones Clave de Diseño",
    d1title: "Visibilidad de fallas a nivel de empleado.",
    d1text: "La decisión operativamente más significativa. Cuando un pago batch falla para uno de cuarenta empleados, el usuario necesita saberlo inmediatamente — no cuando ese empleado llame. La vista de lista muestra un badge de \"Falla en X pagos\" directamente en la tarjeta del batch. Abrir el detalle muestra el estado individual de cada empleado: Procesado o fallido, con una acción de descarga del comprobante. Procesando 50 pagos de nómina, podés ver de un vistazo exactamente cuáles no pasaron — sin abrir cada registro individualmente.",
    payrollWhenFails: "Nómina — Cuando un pago falla",
    d2title: "Concepto y período editables después del pago.",
    d2text: "Los usuarios necesitaban etiquetar cada pago claramente — para sus propios registros y para lo que aparecía en el extracto bancario del empleado. Un pago etiquetado \u201cPrimer Quincena Marzo 2024\u201d es inmediatamente reconocible; un código de batch genérico no lo es. Edición inline tanto del concepto como del período, accesible mediante un ícono de edición directamente desde la lista de pagados. Sin necesidad de reingresar al flujo de pago — editar en el lugar y guardar.",
    d3title: "Estructura de batch clara con período como campo de primera clase.",
    d3text: "Cada tarjeta de batch muestra el nombre del concepto, el monto total procesado, el número de empleados y el período de pago (ej. 15/05 – 30/05 2024) como un campo visible y editable. Los usuarios que gestionan nóminas semanales y quincenales simultáneamente pueden distinguirlas de un vistazo sin abrir el detalle.",
    d4title: "Tabs para nóminas activas vs. pagadas.",
    d4text: "Nóminas activas y pagadas en tabs separados — mantiene la vista de trabajo limpia y el historial accesible sin saturar la pantalla principal.",
    mainPayrollView: "Vista principal de Nómina",
    whatThisCaseLabel: "De Qué Se Trata Realmente Este Caso",
    whatThisP: "Este proyecto es un buen ejemplo de diseñar en la intersección de restricciones de negocio y expectativas de usuario. El producto tenía un alcance definido — dispersión, no cálculo de nómina. Mi trabajo no era expandir ese alcance. Era asegurarme de que dentro de él, la experiencia fuera genuinamente mejor que lo que los usuarios obtenían de sus bancos: más visibilidad, más control, menos conciliación manual y sin fallas silenciosas.",
    paymentDetailView: "Vista de detalle del pago",
    whatILearnedLabel: "Lo que Aprendí",
    learned1: "Las limitaciones de alcance son inputs de diseño, no obstáculos. Saber que Higo no iba a ser una plataforma completa de nómina no redujo el espacio de diseño — lo enfocó. La pregunta cambió de \"¿cómo construimos nómina?\" a \"¿qué necesita hacer bien una herramienta de dispersión que los bancos constantemente fallan en hacer?\"",
    learned2: "El insight de investigación más valioso suele ser la queja más específica. \"El CSV tiene notación científica y se rompe siempre\" es más útil que \"el proceso es complicado.\" La especificidad te dice exactamente dónde enfocarte.",
    learned3: "Las fallas silenciosas son un problema de confianza, no solo de UX. En un contexto de nómina, un pago que falla sin notificación no solo genera fricción — daña la relación entre empleador y empleado. Hacer las fallas visibles e inmediatas fue la decisión de mayor prioridad en todo el diseño.",
    thankYou: "¡Gracias por leer!",
    goBack: "Volver",
  },
};

export function HigoCaseStudyContent() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <CaseStudyLayout
      pageBgClassName="bg-[#e8effd]"
      ringOffsetClassName="focus-visible:ring-offset-[#e8effd]"
      intro={
        <CaseStudyProjectHero
          eyebrow={t.eyebrow}
          eyebrowLine2={t.eyebrowLine2}
          chips={t.chips}
          heroBg="#bed2f8"
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
        <CaseStudyPhaseLabel>{t.contextLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.contextP}</p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── The Problem ─────────────────────────────────────────────────── */}
      <CaseStudySection id="problem">
        <CaseStudyPhaseLabel>{t.problemLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.problemP1}</p>

            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                {t.problemInterviews}
              </p>
              <div className="flex flex-col gap-3">
                <p>{t.problemP2}</p>
                <p>{t.problemP3}</p>
                <p>{t.prob1}</p>
                <p>{t.prob2}</p>
                <p>{t.prob3}</p>
                <p>{t.prob4}</p>
              </div>
            </div>

            {/* Highlight quote cards */}
            <div className="flex flex-col gap-4">
              {[
                { bg: "#fdfdfd", label: t.q1label, text: t.q1text, source: t.q1source },
                { bg: "#fdfdfd", label: t.q2label, text: t.q2text, source: t.q2source },
                { bg: "#ffcaca", label: t.q3label, text: t.q3text, source: t.q3source },
                { bg: "#fdfdfd", label: t.q4label, text: t.q4text, source: t.q4source },
                { bg: "#fdfdfd", label: t.q5label, text: t.q5text, source: t.q5source },
              ].map(({ bg, label, text, source }) => (
                <div key={label} className="flex flex-col gap-4 rounded-2xl p-6" style={{ backgroundColor: bg }}>
                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-medium uppercase tracking-[0.025em] text-ink">{label}</p>
                    <p className="text-xl font-medium leading-[1.4] text-ink">{text}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{source}</p>
                </div>
              ))}
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── The Design Challenge ─────────────────────────────────────────── */}
      <CaseStudySection id="design-challenge">
        <CaseStudyPhaseLabel>{t.designChallengeLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>{t.challengeP1}</p>
              <p>{t.challengeP2}</p>
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
              {t.desktopHomepage}
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
              {t.desktopPayrollNew}
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* ── Key Design Decisions ─────────────────────────────────────────── */}
      <CaseStudySection id="key-design-decisions">
        <CaseStudyPhaseLabel>{t.keyDesignLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">{t.d1title}</p>
              <p>{t.d1text}</p>
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
                {t.payrollWhenFails}
              </p>
            </div>
          </div>
        </div>

        <CaseStudyPhaseContent className="!mt-36 md:!mt-44">
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">{t.d2title}</p>
              <p>{t.d2text}</p>
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

            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">{t.d3title}</p>
              <p>{t.d3text}</p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">{t.d4title}</p>
              <p>{t.d4text}</p>
            </div>

            {/* Pagos de nómina image */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-3xl bg-[#fdfdfd] p-4 md:p-6">
                <Image
                  src="/images/Higo/pagos-de-nomina.png"
                  alt="Payroll payments list view"
                  width={1440}
                  height={900}
                  className="h-auto w-full rounded-2xl object-cover"
                  sizes="(max-width: 1186px) 100vw, 1186px"
                />
              </div>
              <p className="text-center text-sm leading-relaxed text-muted">
                {t.mainPayrollView}
              </p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── What This Case Is Really About ──────────────────────────────── */}
      <CaseStudySection id="what-this-case-is-about">
        <CaseStudyPhaseLabel>{t.whatThisCaseLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.whatThisP}</p>
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
            {t.paymentDetailView}
          </p>
        </div>
      </CaseStudySection>

      {/* ── What I Learned ──────────────────────────────────────────────── */}
      <CaseStudySection id="what-i-learned">
        <CaseStudyPhaseLabel>{t.whatILearnedLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>{t.learned1}</p>
              <p>{t.learned2}</p>
              <p>{t.learned3}</p>
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
            href="/#card-higo"
            className="inline-flex items-center gap-2 rounded-full bg-[#3c3c3c] px-6 py-4 text-base font-semibold leading-tight text-[#fdfdfd] transition-colors hover:bg-[#555] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8effd]"
          >
            <ArrowLeftIcon className="size-4" />
            {t.goBack}
          </a>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
