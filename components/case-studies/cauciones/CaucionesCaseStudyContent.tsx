"use client";
import Image from "next/image";
import { ExpandableImage } from "@/components/ExpandableImage";
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
import { useLanguage } from "@/lib/i18n";

/** Exported assets from Figma frame `4845:2308` (MCP `download_figma_images`). */
const IMG = "/images/case-studies/cauciones";

/** Device frame — `public/images/iPhone 13 mini Thin.png` */
const IPHONE_13_MINI_THIN_FRAME = "/images/iPhone%2013%20mini%20Thin.webp";

/** Screen recording — `public/images/estimado.mp4` */
const ESTIMADO_VIDEO = "/images/estimado.mp4";

/** Screen recording — flujo hacer caución — `public/images/hacercaucion.mp4` */
const HACER_CAUCION_VIDEO = "/images/hacercaucion.mp4";

/** Display insets in `iPhone 13 mini Thin.png` (540×1096): screen bbox from bezel scan. */
const IPHONE_THIN = { w: 540, h: 1096 } as const;
/** Inset 1–2px más "adentro" que el bisel en el PNG para que el video tape halos de subpíxel. */
const SCREEN_INSET_STYLE = {
  top: `${(11 / IPHONE_THIN.h) * 100}%`,
  right: `${(21 / IPHONE_THIN.w) * 100}%`,
  bottom: `${(11 / IPHONE_THIN.h) * 100}%`,
  left: `${(21 / IPHONE_THIN.w) * 100}%`,
} as const;

const COPY = {
  en: {
    eyebrow: "Flow Cauciones -",
    eyebrowLine2: "InvertirOnline",
    chips: ["Mobile App", "B2C"] as string[],
    lede: "A financial product available on web for years — but invisible in the app. We redesigned the caución flow from scratch to make it work where users already were: mobile.",
    factDate: "Date", factDateVal: "Q3 2023",
    factRole: "Role", factRoleVal: "Product Designer",
    factScope: "Scope", factScopeVal: "UX Research, UX/UI Design",
    factTeam: "Team", factTeamVal: "1 Designer, 4 engineers, 1 PM",
    factTools: "Tools", factToolsVal: "Figma, Figjam, Jira, HotJar",
    factStatus: "Status", factStatusVal: "Productive",
    researchLabel: "01 — Research",
    researchP1: "Stakeholders flagged that cauciones — one of the platform\u2019s core investment instruments — only existed on the web. Users who worked exclusively through the app had no way to access it. The ask was simple: bring it to mobile. But before designing anything, we needed to understand how users actually used the web flow — and whether just replicating it would be enough.",
    researchEmphasis: "We started where the behavior was already happening.",
    researchP2: "We analyzed the existing web product and ran a survey with open-ended questions targeting users who had already made a caci\u00f3n on the web. Two things stood out immediately.",
    surveyFinding1Label: "Survey finding 1 \u2014 The \u201cuse all\u201d button is load-bearing.",
    surveyFinding1Stat: "85% of 208 respondents rated the \u201cusar todo\u201d button as very useful",
    surveyFinding1Sub: "(4\u20135 out of 5).",
    surveyFinding2Label: "Survey finding 2 \u2014 The flow felt easy. But that\u2019s the web.",
    surveyFinding2Stat: "74% of 218 respondents rated the ease of making a caci\u00f3n as very easy",
    surveyFinding2Sub: "(5 out of 5) on desktop.",
    researchQuestion: "The question we needed to answer: would that translate to mobile?",
    userVoicesLabel: "What users were actually asking for:",
    userQuotes: [
      "\u201cThey should add the option to make cauciones directly from the app.\u201d",
      "\u201cIt would be great to -caucionar- from the app.\u201d",
      "\u201cThe \u2018use all\u2019 action is excellent.\u201d",
      "\u201cThe rates are very small \u2014 much smaller than the rest of the pages.\u201d",
    ] as string[],
    researchP3: "These weren\u2019t feature requests. They were signals about where friction would show up on mobile.",
    researchP4: "Then we looked at the data.",
    researchHeatmaps: "We analyzed heatmaps and quantitative behavior across 732 screens over 1 month on desktop, and 134 screens on the responsive version.",
    desktopInsightsLabel: "Desktop insights:",
    desktopHeatmapCaption: "Desktop heatmap data from Hotjar.",
    researchP5: "The pattern was the same across platforms: users don\u2019t want to configure \u2014 they want to confirm. The default behavior was the dominant behavior. That became our design principle.",
    researchP6: "To add qualitative context, we ran 3 short interviews with active web users. Not statistically significant, but they consistently reinforced what the heatmaps already showed: users wanted speed, \u2018use all\u2019 was essential, and the app felt like a gap in their workflow.",
    researchCompetitors: "We also audited 3 competing apps (Cocos, PPI, Taurus) to understand how the market structured the same flow \u2014 and set a benchmark for step reduction.",
    dataTeamLabel: "We also consulted the data team to understand term behavior.",
    dataTeamP: "Beyond the heatmaps, we dug one level deeper: we asked the data team which term users were actually selecting most often. The answer was consistent \u2014 the majority were caucionando at 1 day. Not because it was the path of least resistance, but because it was the most financially effective strategy: daily reinvestment compounds significantly more than locking in a longer term upfront. A 15-day caci\u00f3n looks simpler on the surface, but daily reinvestment consistently outperforms it.",
    researchP7: "That finding reinforced the decision to pre-select 1 day as the default \u2014 not because it was the minimum, but because the data confirmed it was the optimal behavior for most users. Removing that decision from the flow meant users got the best outcome without needing to understand the math behind it.",
    researchP8: "It also surfaced a future opportunity we flagged during the project: an automatic daily caci\u00f3n feature that would reinvest returns on the user\u2019s behalf every day. The smart default was the first step toward that vision.",
    conclusionsLabel: "02 — Conclusions",
    conclusionsEmphasis: "What the data told us, and what we decided.",
    conclusionsP1: "The research didn\u2019t just validate assumptions \u2014 it sharpened the decisions we had to make.",
    callouts: [
      "Keep \u201cuse all\u201d as a primary action, not a secondary one. With 68\u201377% of users defaulting to it, hiding it or treating it as an edge case would actively hurt conversion.",
      "Don\u2019t ask users to configure what they don\u2019t touch. 84%+ operate with TNA Mercado and never modify the limit rate. Exposing those fields upfront adds cognitive load without adding value. The solution: smart defaults with the option to edit \u2014 not the other way around.",
      "Show the estimated return the moment the user enters an amount. In a financial flow, uncertainty kills confidence. If a user doesn\u2019t know what they\u2019re going to earn before confirming, they hesitate \u2014 or they leave. Making the return visible in real time, on the same screen, removes that friction entirely.",
      "Speed is a trust signal in financial apps. Users praised the web for being fast. The app had to match or exceed that \u2014 fewer steps, no context switching, everything in view.",
      "Set 1 day as the default term. It\u2019s the minimum and the most common starting point. Pre-selecting it removes a decision that most users never needed to make.",
    ] as string[],
    proposalLabel: "03 — Proposal",
    proposalEmphasis: "What we designed \u2014 and why",
    proposalUserFlowLabel: "User Flow",
    proposalUserFlowP: "We mapped the complete flow from app open to order confirmation, including registration states and error handling.",
    happyPathLabel: "The happy path:",
    happyPath: "Overview \u2192 Mercado \u2192 Cauciones \u2192 Make a caci\u00f3n \u2192 Enter amount & term \u2192 Confirm order.",
    workingConstraintsLabel: "Working within real constraints",
    workingConstraintsP: "This project involved constant back-and-forth with the dev team to figure out what was actually feasible \u2014 and those conversations directly shaped some of the design decisions.",
    proposalP1: "The clearest example: the term selector. My initial proposal was a calendar picker \u2014 more intuitive, clearer visual mapping between dates and days. Dev flagged it as significantly more expensive: it would\u2019ve required a brand-new component. The more pragmatic path was to reuse an existing dropdown already in use across the product. We negotiated. The result was that existing dropdown \u2014 cheaper to build, no new component \u2014 but with one key addition I pushed for: the day of the week shown alongside each date.",
    proposalP2: "This wasn\u2019t just an aesthetic preference. In a financial product with market hours, the date you think you\u2019re investing isn\u2019t always the date that counts. If you initiate a caci\u00f3n after market close on Thursday, the operation executes on Friday \u2014 so \u201c3 days\u201d becomes ambiguous. Showing \u201c3 days \u2014 Sunday\u201d gives the user the information that actually matters: not an abstract number, but a concrete moment in time. A small addition that resolved a real point of confusion without requiring any new infrastructure.",
    proposalP3: "That tradeoff taught me something I apply consistently now: the goal isn\u2019t to win every design decision \u2014 it\u2019s to identify which details actually matter for the user and hold the line on those, while being flexible on everything else.",
    estimadoLabel: "Real-time return calculation",
    estimadoP: "One of the most impactful decisions in the flow was showing the estimated return the moment the user enters an amount \u2014 no screen change, no confirmation step. Right there: \u201cIf I cauciono $10,000 for 3 days, I receive $X.\u201d",
    estimadoVideoLabel: "Estimated return updating on screen as the user enters an amount.",
    proposalP4: "In a financial product, that visibility directly affects whether the user actually completes the transaction. Uncertainty at the amount-entry step is where hesitation happens. Removing it before the confirm button reduces the cognitive cost of committing.",
    designSystemLabel: "Design System",
    designSystemP: "We worked within the existing InvertirOnline component library. Consistency in a financial product isn\u2019t a constraint \u2014 it\u2019s a feature. Introducing unfamiliar patterns creates distrust at exactly the wrong moment. We extended the system where mobile required it, without breaking the established visual language.",
    finalDesignListLabel: "The final design addressed every insight from research:",
    finalDesignItems: [
      "Amount input defaults to \u201cuse all\u201d \u2014 the most common action is the first action",
      "TNA Mercado pre-selected \u2014 edit if you want to, ignore if you don\u2019t",
      "Estimated return visible in real time, same screen \u2014 no navigation to see what you\u2019re earning",
      "Term selector with day-of-week label",
      "Full order summary before confirming \u2014 trust at the critical moment",
      "Clear success state \u2014 users know the operation went through",
    ] as string[],
    closingLabel: "04 — Closing",
    closingEmphasis: "What this project was really about",
    closingP1: "Bringing a financial instrument from web to mobile isn\u2019t a replication exercise. The behavior data showed us that users already had a clear mental model around cauciones \u2014 our job was to design an experience that respected that model while removing every unnecessary point of friction.",
    closingP2: "Not every decision was ideal in isolation. Some were shaped by dev constraints, timelines, and negotiation. But the ones that mattered most for the user \u2014 real-time feedback, smart defaults, human-readable dates \u2014 made it in.",
    thankYou: "Thank you for reading!",
    goBack: "Go Back",
  },
  es: {
    eyebrow: "Flow Cauciones -",
    eyebrowLine2: "InvertirOnline",
    chips: ["App Mobile", "B2C"] as string[],
    lede: "Un producto financiero disponible en web durante a\u00f1os \u2014 pero invisible en la app. Redise\u00f1amos el flujo de cauciones desde cero para hacerlo funcionar donde los usuarios ya estaban: el m\u00f3vil.",
    factDate: "Fecha", factDateVal: "Q3 2023",
    factRole: "Rol", factRoleVal: "Dise\u00f1adora de Producto",
    factScope: "Alcance", factScopeVal: "UX Research, UX/UI Design",
    factTeam: "Equipo", factTeamVal: "1 Dise\u00f1adora, 4 ingenieros, 1 PM",
    factTools: "Herramientas", factToolsVal: "Figma, Figjam, Jira, HotJar",
    factStatus: "Estado", factStatusVal: "Productivo",
    researchLabel: "01 \u2014 Investigaci\u00f3n",
    researchP1: "Los stakeholders se\u00f1alaron que las cauciones \u2014 uno de los instrumentos de inversi\u00f3n centrales de la plataforma \u2014 solo exist\u00edan en la web. Los usuarios que trabajaban exclusivamente desde la app no ten\u00edan forma de acceder. El pedido era simple: llevarlo al m\u00f3vil. Pero antes de dise\u00f1ar cualquier cosa, necesit\u00e1bamos entender c\u00f3mo los usuarios usaban realmente el flujo web \u2014 y si simplemente replicarlo iba a ser suficiente.",
    researchEmphasis: "Empezamos donde el comportamiento ya estaba ocurriendo.",
    researchP2: "Analizamos el producto web existente e hicimos una encuesta con preguntas abiertas dirigida a usuarios que ya hab\u00edan hecho una cauci\u00f3n en la web. Dos cosas saltaron a la vista inmediatamente.",
    surveyFinding1Label: "Hallazgo de encuesta 1 \u2014 El bot\u00f3n \u201cusar todo\u201d es clave.",
    surveyFinding1Stat: "El 85% de 208 encuestados calific\u00f3 el bot\u00f3n \u201cusar todo\u201d como muy \u00fatil",
    surveyFinding1Sub: "(4\u20135 sobre 5).",
    surveyFinding2Label: "Hallazgo de encuesta 2 \u2014 El flujo parec\u00eda f\u00e1cil. Pero eso era en la web.",
    surveyFinding2Stat: "El 74% de 218 encuestados calific\u00f3 la facilidad de hacer una cauci\u00f3n como muy f\u00e1cil",
    surveyFinding2Sub: "(5 sobre 5) en desktop.",
    researchQuestion: "La pregunta que necesit\u00e1bamos responder: \u00bfeso se trasladar\u00eda al m\u00f3vil?",
    userVoicesLabel: "Lo que los usuarios ped\u00edan:",
    userQuotes: [
      "\u201cDeber\u00edan agregar la opci\u00f3n de hacer cauciones directamente desde la app.\u201d",
      "\u201cEstar\u00eda buen\u00edsimo poder caucionar desde la app.\u201d",
      "\u201cLa acci\u00f3n de \u2018usar todo\u2019 es excelente.\u201d",
      "\u201cLas tasas son muy chiquitas \u2014 mucho m\u00e1s que el resto de las p\u00e1ginas.\u201d",
    ] as string[],
    researchP3: "No eran pedidos de features. Eran se\u00f1ales sobre d\u00f3nde iba a aparecer la fricci\u00f3n en el m\u00f3vil.",
    researchP4: "Despu\u00e9s miramos los datos.",
    researchHeatmaps: "Analizamos heatmaps y comportamiento cuantitativo en 732 pantallas durante 1 mes en desktop, y 134 pantallas en la versi\u00f3n responsive.",
    desktopInsightsLabel: "Insights de desktop:",
    desktopHeatmapCaption: "Datos del heatmap de desktop de Hotjar.",
    researchP5: "El patr\u00f3n era el mismo en ambas plataformas: los usuarios no quieren configurar \u2014 quieren confirmar. El comportamiento por defecto era el comportamiento dominante. Eso se convirti\u00f3 en nuestro principio de dise\u00f1o.",
    researchP6: "Para agregar contexto cualitativo, hicimos 3 entrevistas cortas con usuarios activos de la web. No eran estad\u00edsticamente significativas, pero reforzaron de forma consistente lo que los heatmaps ya mostraban: los usuarios quer\u00edan velocidad, \u2018usar todo\u2019 era esencial, y la app se sent\u00eda como un hueco en su flujo de trabajo.",
    researchCompetitors: "Tambi\u00e9n auditamos 3 apps competidoras (Cocos, PPI, Taurus) para entender c\u00f3mo el mercado estructuraba el mismo flujo \u2014 y establecer un benchmark de reducci\u00f3n de pasos.",
    dataTeamLabel: "Tambi\u00e9n consultamos al equipo de datos para entender el comportamiento por plazo.",
    dataTeamP: "M\u00e1s all\u00e1 de los heatmaps, profundizamos un nivel: le preguntamos al equipo de datos qu\u00e9 plazo eleg\u00edan los usuarios m\u00e1s frecuentemente. La respuesta fue consistente \u2014 la mayor\u00eda cauciona a 1 d\u00eda. No porque sea la opci\u00f3n de menor fricci\u00f3n, sino porque es la estrategia financieramente m\u00e1s efectiva: la reinversi\u00f3n diaria compone significativamente m\u00e1s que fijar un plazo m\u00e1s largo por adelantado. Una cauci\u00f3n a 15 d\u00edas parece m\u00e1s simple en la superficie, pero la reinversi\u00f3n diaria la supera consistentemente.",
    researchP7: "Ese hallazgo reforz\u00f3 la decisi\u00f3n de preseleccionar 1 d\u00eda como valor por defecto \u2014 no porque fuera el m\u00ednimo, sino porque los datos confirmaban que era el comportamiento \u00f3ptimo para la mayor\u00eda de los usuarios. Sacar esa decisi\u00f3n del flujo significaba que los usuarios obten\u00edan el mejor resultado sin necesitar entender la matem\u00e1tica detr\u00e1s.",
    researchP8: "Tambi\u00e9n surgi\u00f3 una oportunidad futura que se\u00f1alamos durante el proyecto: una funci\u00f3n de cauci\u00f3n diaria autom\u00e1tica que reinvertir\u00eda los retornos en nombre del usuario cada d\u00eda. El default inteligente fue el primer paso hacia esa visi\u00f3n.",
    conclusionsLabel: "02 \u2014 Conclusiones",
    conclusionsEmphasis: "Lo que nos dijeron los datos, y lo que decidimos.",
    conclusionsP1: "La investigaci\u00f3n no solo valid\u00f3 supuestos \u2014 afil\u00f3 las decisiones que ten\u00edamos que tomar.",
    callouts: [
      "Mantener \u201cusar todo\u201d como acci\u00f3n primaria, no secundaria. Con el 68\u201377% de los usuarios us\u00e1ndola por defecto, ocultarla o tratarla como un caso borde afectar\u00eda activamente la conversi\u00f3n.",
      "No pedirle a los usuarios que configuren lo que no tocan. El 84%+ opera con TNA Mercado y nunca modifica la tasa l\u00edmite. Exponer esos campos desde el principio agrega carga cognitiva sin agregar valor. La soluci\u00f3n: defaults inteligentes con la opci\u00f3n de editar \u2014 no al rev\u00e9s.",
      "Mostrar el retorno estimado en el momento en que el usuario ingresa un monto. En un flujo financiero, la incertidumbre mata la confianza. Si un usuario no sabe lo que va a ganar antes de confirmar, duda \u2014 o se va. Hacer visible el retorno en tiempo real, en la misma pantalla, elimina esa fricci\u00f3n por completo.",
      "La velocidad es una se\u00f1al de confianza en las apps financieras. Los usuarios elogiaron la web por ser r\u00e1pida. La app ten\u00eda que igualar o superar eso \u2014 menos pasos, sin cambios de contexto, todo a la vista.",
      "Establecer 1 d\u00eda como plazo por defecto. Es el m\u00ednimo y el punto de inicio m\u00e1s com\u00fan. Preseleccionarlo elimina una decisi\u00f3n que la mayor\u00eda de los usuarios nunca necesit\u00f3 tomar.",
    ] as string[],
    proposalLabel: "03 \u2014 Propuesta",
    proposalEmphasis: "Qu\u00e9 dise\u00f1amos \u2014 y por qu\u00e9",
    proposalUserFlowLabel: "User Flow",
    proposalUserFlowP: "Mapeamos el flujo completo desde la apertura de la app hasta la confirmaci\u00f3n de la orden, incluyendo estados de registro y manejo de errores.",
    happyPathLabel: "El happy path:",
    happyPath: "Resumen \u2192 Mercado \u2192 Cauciones \u2192 Hacer una cauci\u00f3n \u2192 Ingresar monto y plazo \u2192 Confirmar orden.",
    workingConstraintsLabel: "Trabajando dentro de restricciones reales",
    workingConstraintsP: "Este proyecto implic\u00f3 un ida y vuelta constante con el equipo de desarrollo para determinar qu\u00e9 era realmente factible \u2014 y esas conversaciones moldearon directamente algunas de las decisiones de dise\u00f1o.",
    proposalP1: "El ejemplo m\u00e1s claro: el selector de plazo. Mi propuesta inicial era un date picker tipo calendario \u2014 m\u00e1s intuitivo, mapeo visual m\u00e1s claro entre fechas y d\u00edas. El equipo de desarrollo lo marc\u00f3 como significativamente m\u00e1s costoso: habr\u00eda requerido un componente nuevo. La ruta m\u00e1s pragm\u00e1tica fue reutilizar un dropdown existente que ya se usaba en todo el producto. Negociamos. El resultado fue ese dropdown existente \u2014 m\u00e1s barato de construir, sin componente nuevo \u2014 pero con un agregado clave que yo impuls\u00e9: el d\u00eda de la semana mostrado junto a cada fecha.",
    proposalP2: "No era solo una preferencia est\u00e9tica. En un producto financiero con horario de mercado, la fecha en la que cre\u00e9s que est\u00e1s invirtiendo no siempre es la que cuenta. Si inici\u00e1s una cauci\u00f3n despu\u00e9s del cierre del mercado el jueves, la operaci\u00f3n se ejecuta el viernes \u2014 as\u00ed que \u201c3 d\u00edas\u201d se vuelve ambiguo. Mostrar \u201c3 d\u00edas \u2014 domingo\u201d le da al usuario la informaci\u00f3n que realmente importa: no un n\u00famero abstracto, sino un momento concreto en el tiempo. Un peque\u00f1o agregado que resolvi\u00f3 un punto real de confusi\u00f3n sin requerir ninguna infraestructura nueva.",
    proposalP3: "Ese trade-off me ense\u00f1\u00f3 algo que aplico consistentemente ahora: el objetivo no es ganar cada decisi\u00f3n de dise\u00f1o \u2014 es identificar qu\u00e9 detalles realmente importan para el usuario y mantener la posici\u00f3n en esos, mientras se es flexible en todo lo dem\u00e1s.",
    estimadoLabel: "C\u00e1lculo de retorno en tiempo real",
    estimadoP: "Una de las decisiones m\u00e1s impactantes del flujo fue mostrar el retorno estimado en el momento en que el usuario ingresa un monto \u2014 sin cambio de pantalla, sin paso de confirmaci\u00f3n. Ah\u00ed mismo: \u201cSi cauciono $10.000 por 3 d\u00edas, recibo $X.\u201d",
    estimadoVideoLabel: "Retorno estimado actualiz\u00e1ndose en pantalla mientras el usuario ingresa un monto.",
    proposalP4: "En un producto financiero, esa visibilidad afecta directamente si el usuario completa la transacci\u00f3n. La incertidumbre en el paso de ingreso de monto es donde aparece la duda. Eliminarla antes del bot\u00f3n de confirmaci\u00f3n reduce el costo cognitivo de comprometerse.",
    designSystemLabel: "Design System",
    designSystemP: "Trabajamos dentro de la biblioteca de componentes existente de InvertirOnline. La consistencia en un producto financiero no es una restricci\u00f3n \u2014 es una feature. Introducir patrones desconocidos genera desconfianza justo en el momento equivocado. Extendimos el sistema donde el m\u00f3vil lo requer\u00eda, sin romper el lenguaje visual establecido.",
    finalDesignListLabel: "El dise\u00f1o final abord\u00f3 cada insight de la investigaci\u00f3n:",
    finalDesignItems: [
      "El input de monto tiene \u201cusar todo\u201d por defecto \u2014 la acci\u00f3n m\u00e1s com\u00fan es la primera acci\u00f3n",
      "TNA Mercado preseleccionada \u2014 edit\u00e1 si quer\u00e9s, ignor\u00e1 si no",
      "Retorno estimado visible en tiempo real, en la misma pantalla \u2014 sin navegar para ver lo que gan\u00e1s",
      "Selector de plazo con etiqueta del d\u00eda de la semana",
      "Resumen completo de la orden antes de confirmar \u2014 confianza en el momento cr\u00edtico",
      "Estado de \u00e9xito claro \u2014 los usuarios saben que la operaci\u00f3n se concret\u00f3",
    ] as string[],
    closingLabel: "04 \u2014 Cierre",
    closingEmphasis: "De qu\u00e9 se trataba realmente este proyecto",
    closingP1: "Llevar un instrumento financiero de la web al m\u00f3vil no es un ejercicio de replicaci\u00f3n. Los datos de comportamiento nos mostraron que los usuarios ya ten\u00edan un modelo mental claro sobre las cauciones \u2014 nuestro trabajo era dise\u00f1ar una experiencia que respetara ese modelo mientras eliminaba cada punto de fricci\u00f3n innecesario.",
    closingP2: "No todas las decisiones fueron ideales por s\u00ed solas. Algunas estuvieron moldeadas por restricciones de desarrollo, tiempos y negociaci\u00f3n. Pero las que m\u00e1s importaban para el usuario \u2014 feedback en tiempo real, defaults inteligentes, fechas legibles \u2014 llegaron.",
    thankYou: "\u00a1Gracias por leer!",
    goBack: "Volver",
  },
};

/**
 * Long-form Cauciones case study — content & structure from Figma
 * `FeF5ES2xRY75wBP8gFjOVr` node `4845:2308` (MCP `get_figma_data`).
 */
export function CaucionesCaseStudyContent() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <CaseStudyLayout
      intro={
        <CaseStudyProjectHero
          eyebrow={t.eyebrow}
          eyebrowLine2={t.eyebrowLine2}
          chips={t.chips}
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
      <CaseStudySection id="research">
        <CaseStudyPhaseLabel>{t.researchLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
        <CaseStudyProse>
          <p>{t.researchP1}</p>
          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>{t.researchEmphasis}</CaseStudyEmphasis>
            <p>{t.researchP2}</p>
          </CaseStudyHeadingBlock>

          <div id="survey" className="scroll-mt-24 flex flex-col gap-[4.5rem]">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl bg-[#dfdcff] px-5 py-5 md:px-6 md:py-6">
                <p className="text-sm leading-relaxed text-muted">
                  {t.surveyFinding1Label}
                </p>
                <p className="mt-3 font-[family-name:var(--font-general-sans)] text-2xl font-medium leading-tight text-ink md:text-3xl md:leading-tight">
                  {t.surveyFinding1Stat}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t.surveyFinding1Sub}
                </p>
              </div>
              <div className="rounded-2xl bg-[#dfdcff] px-5 py-5 md:px-6 md:py-6">
                <p className="text-sm leading-relaxed text-muted">
                  {t.surveyFinding2Label}
                </p>
                <p className="mt-3 font-[family-name:var(--font-general-sans)] text-2xl font-medium leading-tight text-ink md:text-3xl md:leading-tight">
                  {t.surveyFinding2Stat}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t.surveyFinding2Sub}
                </p>
              </div>
            </div>

            <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
              {t.researchQuestion}
            </p>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.userVoicesLabel}</CaseStudyEmphasis>
              <div className="flex flex-col gap-4">
                {t.userQuotes.map((q) => (
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

          <p>{t.researchP3}</p>
          <p>{t.researchP4}</p>

          <p className="text-[28px] font-medium leading-tight text-ink md:text-[28px]">
            {t.researchHeatmaps}
          </p>

          <div className="flex flex-col gap-4">
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.desktopInsightsLabel}</CaseStudyEmphasis>
            </CaseStudyHeadingBlock>
            <figure className="relative left-1/2 -translate-x-1/2 flex w-[calc(100vw-1.5rem)] flex-col gap-2 overflow-hidden rounded-2xl md:w-[calc(100vw-4rem)] lg:w-[min(calc(100vw-5rem),1344px)] xl:w-[min(calc(100vw-6rem),1328px)]">
              <ExpandableImage
                src="/images/desktop hotjar.webp"
                alt="Desktop Hotjar heatmap with stat cards and caption: Previous and complete flow from Circle."
                width={2534}
                height={1198}
                className="block h-auto w-full"
                sizes="(max-width: 1186px) 100vw, 1186px"
              />
              <figcaption className="text-center text-sm leading-relaxed text-muted">
                {t.desktopHeatmapCaption}
              </figcaption>
            </figure>
          </div>

          <figure className="mx-auto mt-[200px] mb-[120px] w-full max-w-[min(100%,800px)] overflow-hidden rounded-2xl">
            <ExpandableImage
              src={`${IMG}/mobile-insights-section.png`}
              alt="Mobile responsive Hotjar insights with stat cards and phone mockup. Caption: Analyzed Hotjar Heatmap in Responsive Size."
              width={1650}
              height={1294}
              className="h-auto w-full"
              sizes="(max-width: 1186px) 100vw, 800px"
            />
          </figure>

          <p>{t.researchP5}</p>
          <p>{t.researchP6}</p>
          <p className="text-[28px] font-medium leading-tight text-ink md:text-[28px]">
            {t.researchCompetitors}
          </p>

          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>{t.dataTeamLabel}</CaseStudyEmphasis>
            <p>{t.dataTeamP}</p>
          </CaseStudyHeadingBlock>
          <p>{t.researchP7}</p>
          <p>{t.researchP8}</p>
        </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudySection id="conclusions">
        <CaseStudyPhaseLabel>{t.conclusionsLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
        <CaseStudyProse>
          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>{t.conclusionsEmphasis}</CaseStudyEmphasis>
            <p>{t.conclusionsP1}</p>
          </CaseStudyHeadingBlock>
        </CaseStudyProse>
        <div className="mt-9 flex flex-col gap-4">
          {t.callouts.map((text) => (
            <CaseStudyHighlightCallout key={text}>{text}</CaseStudyHighlightCallout>
          ))}
        </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudySection id="proposal">
        <CaseStudyPhaseLabel>{t.proposalLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
        <CaseStudyProse>
          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>{t.proposalEmphasis}</CaseStudyEmphasis>
            <p>
              <strong>{t.proposalUserFlowLabel}</strong>
              <br />
              {t.proposalUserFlowP}
            </p>
          </CaseStudyHeadingBlock>

          <div className="rounded-2xl border border-ink/10 bg-white p-5 md:p-6">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-heading-case">
                {t.happyPathLabel}
              </p>
              <p className="text-lg font-medium text-heading-case">
                {t.happyPath}
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
                      {t.workingConstraintsLabel}
                    </p>
                    <p className="text-balance font-[family-name:var(--font-general-sans)] text-xl font-medium leading-[1.3] tracking-tight text-ink md:text-2xl md:leading-[1.35] lg:text-[28px] lg:leading-[1.38]">
                      {t.workingConstraintsP}
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

          <p>{t.proposalP1}</p>
          <p>{t.proposalP2}</p>
          <p>{t.proposalP3}</p>
          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>{t.estimadoLabel}</CaseStudyEmphasis>
            <p>{t.estimadoP}</p>
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
                    aria-label={t.estimadoVideoLabel}
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

          <p>{t.proposalP4}</p>

          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>{t.designSystemLabel}</CaseStudyEmphasis>
            <p>{t.designSystemP}</p>
          </CaseStudyHeadingBlock>

          <div className="rounded-2xl bg-[#f6f9fe] p-5 md:p-6">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-heading-case">
                {t.finalDesignListLabel}
              </p>
              <ul className="list-inside list-disc space-y-2 text-lg font-medium leading-[1.56] tracking-[0.03em] text-heading-case">
                {t.finalDesignItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
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
        <CaseStudyPhaseLabel>{t.closingLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
        <div className="min-w-0 text-lg leading-[1.56] tracking-[0.03em] text-muted">
          <CaseStudyHeadingBlock>
            <CaseStudyEmphasis>{t.closingEmphasis}</CaseStudyEmphasis>
            <p>{t.closingP1}</p>
          </CaseStudyHeadingBlock>
          <p className="mt-9">{t.closingP2}</p>
        </div>
        </CaseStudyPhaseContent>

        <div className="mt-16 flex flex-col items-center gap-6 text-center md:mt-24">
          <p className="font-[family-name:var(--font-general-sans)] text-2xl font-semibold text-heading-case">
            {t.thankYou}
          </p>
          <Link href="/#card-cauciones" className="btn-primary">
            <ArrowLeftIcon className="size-4" aria-hidden />
            {t.goBack}
          </Link>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
