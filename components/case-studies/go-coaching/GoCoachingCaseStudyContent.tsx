"use client";
import type { CSSProperties } from "react";
import Image from "next/image";
import { ExpandableImage } from "@/components/ExpandableImage";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons/ArrowIcons";
import { imagePath } from "@/lib/image-path";
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
import { useLanguage } from "@/lib/i18n";

/** Hero: `go coaching 3.mp4` / `go coaching 3.mov` en `public/images/`. */
const GO_COACHING_VIDEO_MP4 = imagePath("go coaching 3.mp4");
const GO_COACHING_VIDEO_MOV = imagePath("go coaching 3.mov");

/** `mockupcoaching 1.webp` intrinsic size — overlay % must match this box. */
const MOCKUP_W = 3009;
const MOCKUP_H = 1842;

/** Dimensiones reales del stream `go coaching 3.mp4`. */
const VIDEO_W = 1444;
const VIDEO_H = 932;

/**
 * Área exacta del frame detectada dentro de `mockupcoaching 1.webp` mediante
 * template-matching del sidebar del video contra el mockup (score 0.80).
 * AR screen = 2093/1351 = 1.5492 ≈ AR video 1444/932 = 1.5494 → encaje perfecto.
 * Este rect coincide con el hueco en `mockupcoaching-frame.webp`.
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

const COPY = {
  en: {
    eyebrow: "Sales Performance & Coaching Platform for Loan Officers",
    chips: ["Web Responsive", "B2C"] as string[],
    lede: "Go! Coaching is a sales performance platform built for loan officers \u2014 replacing 6 disconnected spreadsheets and a failed CRM with a single connected system where coaches can track student progress in real time and every logged activity updates the rest of the platform automatically.",
    factDate: "Date", factDateVal: "Q2 2025",
    factRole: "Role", factRoleVal: "Product Designer",
    factScope: "Scope", factScopeVal: "UX Research, Product Strategy, UX/UI Design, Design System, Prototyping",
    factTeam: "Team", factTeamVal: "Product, Engineering, Coaches (Stakeholders)",
    factTools: "Tools", factToolsVal: "Figma, Figjam, Jira",
    factStatus: "Status", factStatusVal: "Productive",
    heroVideoLabel: "Go! Coaching product screen recording on the laptop display.",
    problemLabel: "01 \u2014 The Problem",
    problemP1: "Loan officers in the Go! Coaching program were running their entire sales operation across 6 separate spreadsheets: a Relationship Tracker that internally managed five categories of contacts (Target 300 Realtors, Focus 50 RLTRs, Focus 50 COI, Focus 50 VIP, and Focus 50 Clients), plus an Activity Tracker, Lead Tracker, Loan Tracker, Closing Deals tracker, and Commissions Tracker. Each one had its own logic, its own structure, and no connection to any of the others. Data that should have flowed automatically had to be copied by hand \u2014 every time, by every user.",
    problemP2: "Beyond the spreadsheets, the existing ecosystem was already complex: HubSpot feeding into Zapier, Zapier triggering Circle account creation, students receiving access to their spreadsheets via email, coaches manually building Master Student Rosters from that data. Every new student meant a cascade of manual steps across multiple tools.",
    problemP3: "The team had already tried SalesScreen \u2014 one of the leading SPM tools in the market. They abandoned it. The customization was too limited for their methodology, and the data presentation was overwhelming and poorly organized. The coaches didn\u2019t need more data. They needed the right data, structured around the way they actually coached.",
    problemP4: "The ask was to build a platform. But the real problem was deeper: how do you replace 6 spreadsheets, a failed CRM, and a patchwork of automation tools \u2014 without losing the methodology that made the coaching program work?",
    sheetsCaption: "Previous Experience of the Students - Activity Tracker Google Sheets.",
    diagramCircleCaption: "Previous and complete flow from Circle.",
    discoveryLabel: "02 \u2014 Discovery & Research",
    discoveryP1: "Before opening Figma, I needed to understand how the system actually worked.",
    discoveryEmphasis: "Long conversations before any wireframe existed.",
    discoveryP2: "Understanding the platform required extended sessions with the client and coaches \u2014 spreadsheet by spreadsheet, field by field, asking what fed into what and why. They knew their methodology deeply. But translating it from isolated files into a connected product was a completely different challenge. In a spreadsheet, each tracker lives on its own. In a product, every action has consequences somewhere else. We needed to be crystal clear on the data logic before touching the design \u2014 because getting it wrong here would have broken everything downstream.",
    sessionsCaption: "Working session notes \u2014 each client call was documented as a breakdown of coach and student needs, turning conversations into product requirements.",
    wireframesCaption: "Early sketches exploring layout and hierarchy before moving to high fidelity.",
    discoveryEmphasis2: "The insight that changed everything came from reading the spreadsheets themselves.",
    discoveryP3: "The existing Activity Tracker wasn\u2019t just a log \u2014 it was a cascade of calculations. Marketing Inputs fed into Sales Inputs, which produced Outputs, which drove Results. Each section was color-coded, each row had a Target and a live Metric percentage. The logic was solid \u2014 but entirely implicit, encoded in cell formulas and column order, invisible to anyone who hadn\u2019t built it themselves. A new loan officer opening this for the first time just saw rows. The methodology was buried under the mechanics of a spreadsheet that was never designed to teach anyone anything.",
    discoveryP4: "That became the core design challenge: preserve the cascade logic, but make it legible.",
    discoveryEmphasis3: "The product also had to work across four distinct user profiles \u2014 not just roles, but levels of experience and business maturity:",
    levels: [
      "Level 1 (Foundations): new loan officers, 0\u20133 deals/month, building structure and rhythm from scratch",
      "Level 2 (Accelerator): 4\u20137 deals/month, establishing repeatable sales systems",
      "Level 3 (Elite): 8+ deals/month, focused on team leadership and scaling",
      "Level 4 (Peak+): sales leaders building and recruiting teams",
    ] as string[],
    discoveryP5: "Each level had different goals, different coaching needs, and a different relationship to the data. Designing one platform that served all four without feeling generic for any of them was a structural challenge that started in research, not in UI.",
    discoveryP6: "I also reviewed existing SPM tools like SalesScreen and CRMs like HubSpot. The conclusion: too generic for this methodology, or too complex for a coaching relationship. Building from scratch was the right call.",
    discoveryP7: "Working within a 13-week delivery cycle \u2014 development starting at week 4, prototypes delivered every two weeks \u2014 meant every research input had to turn into a concrete design direction within days, not weeks.",
    diagramCaption: "Diagram of the student experience.",
    strategyLabel: "03 \u2014 Product Strategy",
    strategyEmphasis1: "Replicating spreadsheets was the wrong goal.",
    strategyP1: "The real opportunity wasn\u2019t digitization \u2014 it was connection. The platform\u2019s core value proposition was that actions in one part of the system would automatically update everything else. Tag a referral partner in a Sales activity, and their last contact date updates instantly. Log a new lead as an Output, and it appears in the Lead Tracker already linked to its source. Lock a deal, and a loan gets created automatically. Users log once \u2014 the system does the rest. That was impossible in a spreadsheet. It became the reason to build the product at all.",
    strategyEmphasis2: "A gradual exit from spreadsheet thinking.",
    strategyP2: "The coaches and loan officers knew the spreadsheet structure inside out \u2014 and that familiarity was an asset, not something to eliminate. Rather than forcing a complete mental shift on day one, I designed the transition deliberately: some table-based views survived, column structures were preserved where they aided recognition, and new interactions were layered on top of familiar patterns. The goal wasn\u2019t to make the product feel nothing like a spreadsheet. It was to make it feel like a better version of one \u2014 until users naturally stopped thinking in spreadsheet terms at all.",
    strategyEmphasis3: "The Activity Tracker \u2014 the daily operating system.",
    strategyP3: "The cascade logic of the original spreadsheet \u2014 Marketing \u2192 Sales \u2192 Outputs \u2192 Results \u2014 became the structure of the Activity Tracker, but made visible and legible instead of hidden in cell formulas. Numeric inputs keep daily logging fast. Direct tagging of referral partners triggers automatic updates to last contact dates across the Relationship Tracker. The weekly progress visualization lives in a persistent panel so users always know where they stand without leaving the page. The streak indicator \u2014 small, unobtrusive \u2014 was the first gamification hook, present from day one.",
    activityTrackerCaption: "Desktop \u2014 Student View \u2014 Activity Tracker.",
    strategyEmphasis4: "Mobile first, with a companion app in mind.",
    strategyP4: "Despite being a web app, I designed every screen mobile first. Loan officers are rarely at a desk when they need to log an activity or check a referral. Designing for the smallest screen forced better prioritization \u2014 if something didn\u2019t deserve space on mobile, it probably didn\u2019t deserve space at all. The web experience expanded from those constraints, not the other way around. And it positioned the product for a natural next step: a dedicated mobile companion app down the line.",
    mobileCoachCaption: "Mobile \u2014 Coach View.",
    visualLabel: "04 \u2014 Visual Direction",
    visualEmphasis: "Choosing an aesthetic that felt like the product.",
    visualP1: "Before any UI work started, I put together three moodboard directions for the client to evaluate. The goal wasn\u2019t to pick a color palette \u2014 it was to align on the emotional register of the product. A performance platform for competitive loan officers needs to feel different from a generic SaaS dashboard.",
    visualP2: "They chose the spatial, high-contrast direction: dark backgrounds, glowing data visualizations, a sense of precision and ambition. It matched the competitive culture of the program and the aspirational identity of the users \u2014 people who track their numbers because they want to win.",
    moodboardsCaption: "Three visual directions were presented to the client.",
    dashboardCaption: "Mobile \u2014 Coach View \u00b7 Dashboard",
    solutionLabel: "05 \u2014 The Solution",
    solutionIntro: "The platform was designed around two distinct experiences:",
    studentExpTitle: "The Student Experience",
    studentExpText: "Everything a loan officer needs to manage their day-to-day: the Activity Tracker, lead and loan management, the Relationship Tracker, their profile, dashboard, and leaderboard. All of it designed to help them log fast, stay accountable, and see their own progress clearly.",
    solutionActivityEmphasis: "The Activity Tracker \u2014 the daily operating system.",
    solutionActivityP: "The cascade logic of the original spreadsheet \u2014 Marketing \u2192 Sales \u2192 Outputs \u2192 Results \u2014 became the structure of the Activity Tracker, but made visible and legible instead of hidden in cell formulas. Numeric inputs keep daily logging fast. Direct tagging of referral partners triggers automatic updates to last contact dates across the Relationship Tracker. The weekly progress visualization lives in a persistent panel so users always know where they stand without leaving the page. The streak indicator \u2014 small, unobtrusive \u2014 was the first gamification hook, present from day one.",
    solutionAutoEmphasis: "Automatic updates as the core product promise.",
    solutionAutoP: "Every design decision in the Activity Tracker was evaluated against one question: does this make the automatic update trustworthy and understandable? If a number changes and the user doesn\u2019t understand why, the feature backfires. Designing the logic of automation was as important as designing the interface around it.",
    solutionLeadsEmphasis: "The hardest design problem: leads and loans.",
    solutionLeadsP1: "The most complex experience wasn\u2019t the Activity Tracker \u2014 it was understanding how leads and loans actually worked and how to show their relationship in the product. A lead is a potential deal in progress. A loan is a committed transaction with its own lifecycle. A loan doesn\u2019t exist until a lead reaches a specific threshold \u2014 a locked deal. From that point, the loan has its own record, its own update cycle, and its own tracking completely separate from the lead that originated it.",
    solutionLeadsP2: "Cancel states (Cancelled, Unqualified, Different Lender) were handled separately to keep the active pipeline clean and give coaches meaningful data about why deals didn\u2019t close \u2014 not just that they didn\u2019t. Collapsing leads and loans into a single view would\u2019ve simplified the interface but destroyed the data integrity that makes coaching conversations useful.",
    referralPartnersCaption: "Mobile \u2014 Student View \u00b7 Referral Partners",
    leadViewCaption: "Mobile \u2014 Student View \u00b7 Lead View",
    solutionRelEmphasis: "The Relationship Tracker as an emotional CRM.",
    solutionRelP: "Beyond contact details and performance metrics, the referral partner profile captures spouse name, kids\u2019 names, hobbies, and a \u201cwhat\u2019s important for this person\u201d field. In the mortgage business, relationships are the pipeline. Designing space for that information was a way of encoding the coaching methodology into the product itself.",
    solutionGuardrailsEmphasis: "Guardrails, not just inputs.",
    solutionGuardrailsP: "Preventing retroactive data manipulation was one of the least visible but most important decisions. In an accountability product, the integrity of historical data is what makes coaching conversations meaningful. Building guardrails wasn\u2019t a technical constraint \u2014 it was a product principle.",
    solutionPanelEmphasis: "Persistent context panel.",
    solutionPanelP: "In both Lead detail and Referral Partner detail views, key contact information lives in a fixed right panel outside the editable form. The context stays visible. The form stays focused. Two different jobs that shouldn\u2019t compete for the same space.",
    solutionGamEmphasis: "Gamification as a layer, not a feature.",
    solutionGamP: "Coaches wanted motivation hooks. Engineering wanted an MVP. I designed the gamification system \u2014 leaderboards, streaks, weekly progress visualization \u2014 as optional layers that could be activated progressively, without blocking the core product from shipping. This wasn\u2019t a compromise. It was the right architecture: prove the core loop first, add motivation mechanics once the behavior is established.",
    referralDetailCaption: "Referral Partner\u2019s Detail View",
    coachExpTitle: "The Coach Experience",
    coachExpText: "A completely separate set of views \u2014 different design, different information hierarchy \u2014 built entirely around one job: tracking and supporting student progress.",
    coachViewEmphasis: "The Coach View \u2014 designed for the conversation, not the spreadsheet.",
    coachViewP1: "The coach experience was built around preparing for a weekly accountability call. From their view, a coach can see at a glance how each student is tracking against their weekly targets, when they last logged data, what their call pick-up rate is, and what action steps are still open from the previous session.",
    coachViewP2: "The most important design decision here was showing not just where a student stands, but whether they\u2019re moving in the right direction. A student at 60% of their weekly goal on Thursday tells a different story than a student at 60% on Monday. The coach view was built to surface that distinction without the coach having to do the math themselves.",
    coachWeeklyEmphasis: "Coach experience designed around weekly thinking.",
    coachWeeklyP: "Coaches don\u2019t think in individual days \u2014 they think in weeks. Every coach view was built around that mental model: weekly snapshots, temporal context always visible, team and individual breakdowns that made it easy to spot who needed attention without micromanaging. Coaches can also view the leaderboard across all their students, filter by level \u2014 Foundations, Accelerator, Elite, Peak+ \u2014 and see at a glance who\u2019s excelling and who needs a more focused conversation that week.",
    mobilesCaption: "Mobile \u2014 Student View \u00b7 Referral Partners",
    closingLabel: "06 \u2014 Closing",
    closingEmphasis: "What\u2019s next.",
    closingP1: "The 2026 roadmap reflects a product that\u2019s proven its core and is ready to grow: a Student Dashboard, migration of existing users from Circle, an enhanced Leaderboard, and expanded search and filtering across all views. The mobile companion app \u2014 designed for from the beginning through the mobile-first approach \u2014 is the natural next milestone. The data model, component architecture, and permission structure the MVP established make all of it buildable without starting from scratch.",
    closingP2: "The MVP shipped as a functional replacement for 6 spreadsheets and a failed CRM \u2014 consolidated into a single platform with a shared data model, automatic cross-system updates, real-time visibility for coaches, and a daily logging experience designed around the habits the methodology depends on. A product that replaced a system the team had already failed to replace once before, built in 13 weeks, actively growing into 2026.",
    learnedIntro: "What I learned:",
    learnedItems: [
      "Spreadsheets are design artifacts. Every column, every workaround, every manual copy-paste is a user telling you something about what they need. I learned to read them like research data, not just as things to replace.",
      "Transitions matter as much as destinations. Designing the gradual exit from spreadsheet thinking. Users need to recognize enough of the old system to trust the new one.",
      "The hardest UX problems are often data problems in disguise. The lead/loan relationship looked like a UI challenge on the surface. Underneath, it was a question about data ownership and lifecycle boundaries. Solving the data model first made the UI obvious.",
      "Mobile first forces better decisions. Every element that didn\u2019t earn its place on mobile didn\u2019t earn its place anywhere. The constraint made the product sharper.",
      "In competitive products, motivation is part of the experience. The leaderboard and streak weren\u2019t features bolted on at the end \u2014 they were in the product thinking from day one. Designing for performance means designing for the emotional experience of performance, not just the functional tracking of it.",
      "Define success metrics before the first wireframe. Not having post-launch data isn\u2019t just a measurement gap \u2014 it\u2019s a product gap. Knowing what you\u2019re optimizing for changes the decisions you make during design, not just after launch.",
    ] as string[],
    thankYou: "Thank you for reading!",
    goBack: "Go Back",
  },
  es: {
    eyebrow: "Plataforma de Performance de Ventas y Coaching para Loan Officers",
    chips: ["Web Responsive", "B2C"] as string[],
    lede: "Go! Coaching es una plataforma de performance de ventas creada para loan officers \u2014 que reemplaza 6 planillas desconectadas y un CRM fallido por un \u00fanico sistema conectado donde los coaches pueden seguir el progreso de los estudiantes en tiempo real y cada actividad registrada actualiza el resto de la plataforma autom\u00e1ticamente.",
    factDate: "Fecha", factDateVal: "Q2 2025",
    factRole: "Rol", factRoleVal: "Dise\u00f1adora de Producto",
    factScope: "Alcance", factScopeVal: "UX Research, Estrategia de Producto, UX/UI Design, Design System, Prototipado",
    factTeam: "Equipo", factTeamVal: "Producto, Ingeniería, Coaches (Stakeholders)",
    factTools: "Herramientas", factToolsVal: "Figma, Figjam, Jira",
    factStatus: "Estado", factStatusVal: "Productivo",
    heroVideoLabel: "Grabaci\u00f3n de pantalla del producto Go! Coaching en la pantalla del laptop.",
    problemLabel: "01 \u2014 El Problema",
    problemP1: "Los loan officers del programa Go! Coaching manejaban toda su operaci\u00f3n de ventas a trav\u00e9s de 6 planillas separadas: un Relationship Tracker que gestionaba internamente cinco categor\u00edas de contactos (Target 300 Realtors, Focus 50 RLTRs, Focus 50 COI, Focus 50 VIP y Focus 50 Clients), m\u00e1s un Activity Tracker, Lead Tracker, Loan Tracker, Closing Deals tracker y Commissions Tracker. Cada uno ten\u00eda su propia l\u00f3gica, su propia estructura, y ninguna conexi\u00f3n con los dem\u00e1s. Los datos que deber\u00edan haber fluido autom\u00e1ticamente hab\u00eda que copiarlos a mano \u2014 cada vez, por cada usuario.",
    problemP2: "M\u00e1s all\u00e1 de las planillas, el ecosistema existente ya era complejo: HubSpot alimentando a Zapier, Zapier disparando la creaci\u00f3n de cuentas en Circle, los estudiantes recibiendo acceso a sus planillas por email, los coaches construyendo manualmente los Master Student Rosters con esos datos. Cada nuevo estudiante implicaba una cascada de pasos manuales en m\u00faltiples herramientas.",
    problemP3: "El equipo ya hab\u00eda probado SalesScreen \u2014 una de las principales herramientas de SPM del mercado. La abandonaron. La personalizaci\u00f3n era demasiado limitada para su metodolog\u00eda, y la presentaci\u00f3n de datos era abrumadora y mal organizada. Los coaches no necesitaban m\u00e1s datos. Necesitaban los datos correctos, estructurados alrededor de c\u00f3mo realmente hac\u00edan el coaching.",
    problemP4: "El pedido era construir una plataforma. Pero el problema real era m\u00e1s profundo: \u00bfc\u00f3mo reemplaz\u00e1s 6 planillas, un CRM fallido y un conjunto de herramientas de automatizaci\u00f3n \u2014 sin perder la metodolog\u00eda que hac\u00eda funcionar el programa de coaching?",
    sheetsCaption: "Experiencia previa de los Estudiantes - Activity Tracker Google Sheets.",
    diagramCircleCaption: "Flujo anterior y completo de Circle.",
    discoveryLabel: "02 \u2014 Descubrimiento e Investigaci\u00f3n",
    discoveryP1: "Antes de abrir Figma, necesitaba entender c\u00f3mo funcionaba realmente el sistema.",
    discoveryEmphasis: "Conversaciones largas antes de que existiera cualquier wireframe.",
    discoveryP2: "Entender la plataforma requiri\u00f3 sesiones extendidas con el cliente y los coaches \u2014 planilla por planilla, campo por campo, preguntando qu\u00e9 alimentaba a qu\u00e9 y por qu\u00e9. Conoc\u00edan su metodolog\u00eda en profundidad. Pero traducirla de archivos aislados a un producto conectado era un desaf\u00edo completamente distinto. En una planilla, cada tracker vive por su cuenta. En un producto, cada acci\u00f3n tiene consecuencias en otro lado. Necesit\u00e1bamos tener absolutamente claro el modelo de datos antes de tocar el dise\u00f1o \u2014 porque equivocarse aqu\u00ed habr\u00eda roto todo lo dem\u00e1s.",
    sessionsCaption: "Notas de sesiones de trabajo \u2014 cada llamada con el cliente fue documentada como un desglose de necesidades de coaches y estudiantes, convirtiendo conversaciones en requisitos de producto.",
    wireframesCaption: "Bocetos tempranos explorando layout y jerarqu\u00eda antes de pasar a alta fidelidad.",
    discoveryEmphasis2: "El insight que cambi\u00f3 todo vino de leer las planillas en s\u00ed mismas.",
    discoveryP3: "El Activity Tracker existente no era solo un registro \u2014 era una cascada de c\u00e1lculos. Los Marketing Inputs alimentaban los Sales Inputs, que produc\u00edan Outputs, que generaban Resultados. Cada secci\u00f3n ten\u00eda c\u00f3digo de colores, cada fila ten\u00eda un Target y un porcentaje de m\u00e9trica en vivo. La l\u00f3gica era s\u00f3lida \u2014 pero completamente impl\u00edcita, codificada en f\u00f3rmulas de celdas y orden de columnas, invisible para cualquiera que no la hubiera construido. Un loan officer nuevo que abr\u00eda esto por primera vez solo ve\u00eda filas. La metodolog\u00eda estaba sepultada bajo la mec\u00e1nica de una planilla que nunca fue dise\u00f1ada para ense\u00f1arle nada a nadie.",
    discoveryP4: "Ese se convirti\u00f3 en el desaf\u00edo de dise\u00f1o central: preservar la l\u00f3gica en cascada, pero hacerla legible.",
    discoveryEmphasis3: "El producto tambi\u00e9n ten\u00eda que funcionar para cuatro perfiles de usuario distintos \u2014 no solo roles, sino niveles de experiencia y madurez de negocio:",
    levels: [
      "Level 1 (Foundations): loan officers nuevos, 0\u20133 operaciones/mes, construyendo estructura y ritmo desde cero",
      "Level 2 (Accelerator): 4\u20137 operaciones/mes, estableciendo sistemas de ventas repetibles",
      "Level 3 (Elite): 8+ operaciones/mes, enfocados en liderazgo de equipo y escalamiento",
      "Level 4 (Peak+): l\u00edderes de ventas construyendo y reclutando equipos",
    ] as string[],
    discoveryP5: "Cada nivel ten\u00eda objetivos distintos, distintas necesidades de coaching y una relaci\u00f3n diferente con los datos. Dise\u00f1ar una plataforma \u00fanica que sirviera a los cuatro sin sentirse gen\u00e9rica para ninguno fue un desaf\u00edo estructural que empez\u00f3 en la investigaci\u00f3n, no en la UI.",
    discoveryP6: "Tambi\u00e9n revis\u00e9 herramientas de SPM existentes como SalesScreen y CRMs como HubSpot. La conclusi\u00f3n: demasiado gen\u00e9ricas para esta metodolog\u00eda, o demasiado complejas para una relaci\u00f3n de coaching. Construir desde cero era la decisi\u00f3n correcta.",
    discoveryP7: "Trabajar dentro de un ciclo de entrega de 13 semanas \u2014 con desarrollo iniciando en la semana 4 y prototipos entregados cada dos semanas \u2014 significaba que cada input de investigaci\u00f3n ten\u00eda que convertirse en una direcci\u00f3n de dise\u00f1o concreta en d\u00edas, no en semanas.",
    diagramCaption: "Diagrama de la experiencia del estudiante.",
    strategyLabel: "03 \u2014 Estrategia de Producto",
    strategyEmphasis1: "Replicar planillas era el objetivo equivocado.",
    strategyP1: "La oportunidad real no era la digitalizaci\u00f3n \u2014 era la conexi\u00f3n. La propuesta de valor central de la plataforma era que las acciones en una parte del sistema actualizar\u00edan autom\u00e1ticamente todo lo dem\u00e1s. Etiquet\u00e1s a un referral partner en una actividad de Ventas, y su \u00faltima fecha de contacto se actualiza instant\u00e1neamente. Registr\u00e1s un lead nuevo como Output, y aparece en el Lead Tracker ya vinculado a su fuente. Cerrar un deal crea un loan autom\u00e1ticamente. Los usuarios registran una vez \u2014 el sistema hace el resto. Eso era imposible en una planilla. Se convirti\u00f3 en la raz\u00f3n para construir el producto.",
    strategyEmphasis2: "Una salida gradual del pensamiento en planillas.",
    strategyP2: "Los coaches y los loan officers conoc\u00edan la estructura de planillas de memoria \u2014 y esa familiaridad era un activo, no algo a eliminar. En lugar de forzar un cambio mental completo el primer d\u00eda, dise\u00f1\u00e9 la transici\u00f3n deliberadamente: algunas vistas basadas en tablas sobrevivieron, las estructuras de columnas se preservaron donde ayudaban al reconocimiento, y las nuevas interacciones se apilaron sobre patrones familiares. El objetivo no era que el producto no se pareciera en nada a una planilla. Era que se sintiera como una mejor versi\u00f3n de una \u2014 hasta que los usuarios dejaran naturalmente de pensar en t\u00e9rminos de planillas.",
    strategyEmphasis3: "El Activity Tracker \u2014 el sistema operativo diario.",
    strategyP3: "La l\u00f3gica en cascada de la planilla original \u2014 Marketing \u2192 Ventas \u2192 Outputs \u2192 Resultados \u2014 se convirti\u00f3 en la estructura del Activity Tracker, pero hecha visible y legible en lugar de oculta en f\u00f3rmulas de celdas. Los inputs num\u00e9ricos mantienen el registro diario r\u00e1pido. El etiquetado directo de referral partners dispara actualizaciones autom\u00e1ticas de las \u00faltimas fechas de contacto en el Relationship Tracker. La visualizaci\u00f3n del progreso semanal vive en un panel persistente para que los usuarios siempre sepan d\u00f3nde est\u00e1n sin abandonar la p\u00e1gina. El indicador de racha \u2014 peque\u00f1o, no intrusivo \u2014 fue el primer gancho de gamificaci\u00f3n, presente desde el primer d\u00eda.",
    activityTrackerCaption: "Desktop \u2014 Vista Estudiante \u2014 Activity Tracker.",
    strategyEmphasis4: "Mobile first, con una app complementaria en mente.",
    strategyP4: "A pesar de ser una web app, dise\u00f1\u00e9 cada pantalla mobile first. Los loan officers rara vez est\u00e1n en un escritorio cuando necesitan registrar una actividad o revisar un referral. Dise\u00f1ar para la pantalla m\u00e1s chica forz\u00f3 una mejor priorizaci\u00f3n \u2014 si algo no merec\u00eda espacio en m\u00f3vil, probablemente no lo merec\u00eda en ning\u00fan lado. La experiencia web se expandi\u00f3 a partir de esas restricciones, no al rev\u00e9s. Y posicion\u00f3 al producto para un paso natural siguiente: una app m\u00f3vil complementaria dedicada.",
    mobileCoachCaption: "Mobile \u2014 Vista Coach.",
    visualLabel: "04 \u2014 Direcci\u00f3n Visual",
    visualEmphasis: "Elegir una est\u00e9tica que se sintiera como el producto.",
    visualP1: "Antes de cualquier trabajo de UI, arm\u00e9 tres direcciones de moodboard para que el cliente evaluara. El objetivo no era elegir una paleta de colores \u2014 era alinearse en el registro emocional del producto. Una plataforma de performance para loan officers competitivos tiene que sentirse diferente a un dashboard gen\u00e9rico de SaaS.",
    visualP2: "Eligieron la direcci\u00f3n espacial y de alto contraste: fondos oscuros, visualizaciones de datos luminosas, sensaci\u00f3n de precisi\u00f3n y ambici\u00f3n. Correspond\u00eda con la cultura competitiva del programa y la identidad aspiracional de los usuarios \u2014 personas que monitorean sus n\u00fameros porque quieren ganar.",
    moodboardsCaption: "Se presentaron tres direcciones visuales al cliente.",
    dashboardCaption: "Mobile \u2014 Vista Coach \u00b7 Dashboard",
    solutionLabel: "05 \u2014 La Soluci\u00f3n",
    solutionIntro: "La plataforma fue dise\u00f1ada alrededor de dos experiencias distintas:",
    studentExpTitle: "La Experiencia del Estudiante",
    studentExpText: "Todo lo que un loan officer necesita para manejar su d\u00eda a d\u00eda: el Activity Tracker, gesti\u00f3n de leads y loans, el Relationship Tracker, su perfil, dashboard y leaderboard. Todo dise\u00f1ado para ayudarlos a registrar r\u00e1pido, mantenerse accountables y ver su propio progreso con claridad.",
    solutionActivityEmphasis: "El Activity Tracker \u2014 el sistema operativo diario.",
    solutionActivityP: "La l\u00f3gica en cascada de la planilla original \u2014 Marketing \u2192 Ventas \u2192 Outputs \u2192 Resultados \u2014 se convirti\u00f3 en la estructura del Activity Tracker, pero hecha visible y legible en lugar de oculta en f\u00f3rmulas de celdas. Los inputs num\u00e9ricos mantienen el registro diario r\u00e1pido. El etiquetado directo de referral partners dispara actualizaciones autom\u00e1ticas de las \u00faltimas fechas de contacto en el Relationship Tracker. La visualizaci\u00f3n del progreso semanal vive en un panel persistente para que los usuarios siempre sepan d\u00f3nde est\u00e1n sin abandonar la p\u00e1gina. El indicador de racha \u2014 peque\u00f1o, no intrusivo \u2014 fue el primer gancho de gamificaci\u00f3n, presente desde el primer d\u00eda.",
    solutionAutoEmphasis: "Las actualizaciones autom\u00e1ticas como promesa central del producto.",
    solutionAutoP: "Cada decisi\u00f3n de dise\u00f1o en el Activity Tracker se evalu\u00f3 contra una pregunta: \u00bfesto hace que la actualizaci\u00f3n autom\u00e1tica sea confiable y comprensible? Si un n\u00famero cambia y el usuario no entiende por qu\u00e9, la feature se vuelve en contra. Dise\u00f1ar la l\u00f3gica de la automatizaci\u00f3n era tan importante como dise\u00f1ar la interfaz alrededor de ella.",
    solutionLeadsEmphasis: "El problema de dise\u00f1o m\u00e1s complejo: leads y loans.",
    solutionLeadsP1: "La experiencia m\u00e1s compleja no era el Activity Tracker \u2014 era entender c\u00f3mo funcionaban realmente los leads y los loans y c\u00f3mo mostrar su relaci\u00f3n en el producto. Un lead es un deal potencial en curso. Un loan es una transacci\u00f3n comprometida con su propio ciclo de vida. Un loan no existe hasta que un lead alcanza un umbral espec\u00edfico \u2014 un deal cerrado. A partir de ese punto, el loan tiene su propio registro, su propio ciclo de actualizaci\u00f3n y su propio seguimiento completamente separado del lead que lo origin\u00f3.",
    solutionLeadsP2: "Los estados de cancelaci\u00f3n (Cancelado, No calificado, Otro prestamista) se manejaron por separado para mantener el pipeline activo limpio y darle a los coaches datos significativos sobre por qu\u00e9 los deals no cerraron \u2014 no solo que no cerraron. Colapsar leads y loans en una \u00fanica vista habr\u00eda simplificado la interfaz pero habr\u00eda destruido la integridad de datos que hace \u00fatiles las conversaciones de coaching.",
    referralPartnersCaption: "Mobile \u2014 Vista Estudiante \u00b7 Referral Partners",
    leadViewCaption: "Mobile \u2014 Vista Estudiante \u00b7 Lead View",
    solutionRelEmphasis: "El Relationship Tracker como CRM emocional.",
    solutionRelP: "M\u00e1s all\u00e1 de los datos de contacto y las m\u00e9tricas de performance, el perfil del referral partner captura el nombre del c\u00f3nyuge, nombres de los hijos, hobbies y un campo de \u201cqu\u00e9 es importante para esta persona\u201d. En el negocio hipotecario, las relaciones son el pipeline. Dise\u00f1ar espacio para esa informaci\u00f3n fue una forma de codificar la metodolog\u00eda de coaching en el propio producto.",
    solutionGuardrailsEmphasis: "Guardrails, no solo inputs.",
    solutionGuardrailsP: "Prevenir la manipulaci\u00f3n retroactiva de datos fue una de las decisiones menos visibles pero m\u00e1s importantes. En un producto de accountability, la integridad de los datos hist\u00f3ricos es lo que hace \u00fatiles las conversaciones de coaching. Construir guardrails no era una restricci\u00f3n t\u00e9cnica \u2014 era un principio de producto.",
    solutionPanelEmphasis: "Panel de contexto persistente.",
    solutionPanelP: "Tanto en la vista de detalle de Lead como en la de Referral Partner, la informaci\u00f3n de contacto clave vive en un panel derecho fijo fuera del formulario editable. El contexto se mantiene visible. El formulario se mantiene enfocado. Dos trabajos distintos que no deber\u00edan competir por el mismo espacio.",
    solutionGamEmphasis: "La gamificaci\u00f3n como capa, no como feature.",
    solutionGamP: "Los coaches quer\u00edan ganchos de motivaci\u00f3n. Ingenier\u00eda quer\u00eda un MVP. Dise\u00f1\u00e9 el sistema de gamificaci\u00f3n \u2014 leaderboards, rachas, visualizaci\u00f3n del progreso semanal \u2014 como capas opcionales que pod\u00edan activarse progresivamente, sin bloquear el producto central para el lanzamiento. No fue un compromiso. Fue la arquitectura correcta: probar el loop central primero, agregar mec\u00e1nicas de motivaci\u00f3n una vez que el comportamiento est\u00e9 establecido.",
    referralDetailCaption: "Vista de Detalle del Referral Partner",
    coachExpTitle: "La Experiencia del Coach",
    coachExpText: "Un conjunto completamente separado de vistas \u2014 dise\u00f1o diferente, jerarqu\u00eda de informaci\u00f3n diferente \u2014 construido \u00edntegramente alrededor de un trabajo: seguir y apoyar el progreso de los estudiantes.",
    coachViewEmphasis: "La Vista Coach \u2014 dise\u00f1ada para la conversaci\u00f3n, no para la planilla.",
    coachViewP1: "La experiencia del coach fue construida alrededor de la preparaci\u00f3n para una llamada semanal de accountability. Desde su vista, un coach puede ver de un vistazo c\u00f3mo cada estudiante est\u00e1 trazando contra sus objetivos semanales, cu\u00e1ndo registraron datos por \u00faltima vez, cu\u00e1l es su tasa de atenci\u00f3n de llamadas y qu\u00e9 pasos de acci\u00f3n siguen abiertos de la sesi\u00f3n anterior.",
    coachViewP2: "La decisi\u00f3n de dise\u00f1o m\u00e1s importante aqu\u00ed fue mostrar no solo d\u00f3nde est\u00e1 un estudiante, sino si se est\u00e1 moviendo en la direcci\u00f3n correcta. Un estudiante al 60% de su objetivo semanal el jueves cuenta una historia diferente que uno al 60% el lunes. La vista del coach fue construida para mostrar esa distinci\u00f3n sin que el coach tuviera que hacer los c\u00e1lculos por su cuenta.",
    coachWeeklyEmphasis: "Experiencia del coach dise\u00f1ada alrededor del pensamiento semanal.",
    coachWeeklyP: "Los coaches no piensan en d\u00edas individuales \u2014 piensan en semanas. Cada vista del coach fue construida alrededor de ese modelo mental: snapshots semanales, contexto temporal siempre visible, desgloses de equipo e individuales que facilitan identificar qui\u00e9n necesita atenci\u00f3n sin microgestionar. Los coaches tambi\u00e9n pueden ver el leaderboard de todos sus estudiantes, filtrar por nivel \u2014 Foundations, Accelerator, Elite, Peak+ \u2014 y ver de un vistazo qui\u00e9n est\u00e1 sobresaliendo y qui\u00e9n necesita una conversaci\u00f3n m\u00e1s enfocada esa semana.",
    mobilesCaption: "Mobile \u2014 Vista Estudiante \u00b7 Referral Partners",
    closingLabel: "06 \u2014 Cierre",
    closingEmphasis: "Qu\u00e9 sigue.",
    closingP1: "El roadmap 2026 refleja un producto que prob\u00f3 su core y est\u00e1 listo para crecer: un Student Dashboard, migraci\u00f3n de usuarios existentes de Circle, un Leaderboard mejorado y b\u00fasqueda y filtrado expandidos en todas las vistas. La app m\u00f3vil complementaria \u2014 dise\u00f1ada desde el principio a trav\u00e9s del enfoque mobile-first \u2014 es el siguiente hito natural. El modelo de datos, la arquitectura de componentes y la estructura de permisos que estableci\u00f3 el MVP hacen que todo sea construible sin empezar desde cero.",
    closingP2: "El MVP se lanz\u00f3 como un reemplazo funcional de 6 planillas y un CRM fallido \u2014 consolidados en una \u00fanica plataforma con un modelo de datos compartido, actualizaciones autom\u00e1ticas entre sistemas, visibilidad en tiempo real para los coaches y una experiencia de registro diario dise\u00f1ada alrededor de los h\u00e1bitos que depende la metodolog\u00eda. Un producto que reemplaz\u00f3 un sistema que el equipo ya hab\u00eda intentado reemplazar una vez antes, construido en 13 semanas, creciendo activamente hacia 2026.",
    learnedIntro: "Lo que aprend\u00ed:",
    learnedItems: [
      "Las planillas son artefactos de dise\u00f1o. Cada columna, cada workaround, cada copia y pegado manual es un usuario dic\u00e9ndote algo sobre lo que necesita. Aprend\u00ed a leerlas como datos de investigaci\u00f3n, no solo como cosas a reemplazar.",
      "Las transiciones importan tanto como los destinos. Dise\u00f1ar la salida gradual del pensamiento en planillas. Los usuarios necesitan reconocer suficiente del sistema anterior para confiar en el nuevo.",
      "Los problemas de UX m\u00e1s dif\u00edciles son frecuentemente problemas de datos disfrazados. La relaci\u00f3n lead/loan parec\u00eda un desaf\u00edo de UI en la superficie. Por debajo, era una pregunta sobre propiedad de datos y l\u00edmites de ciclo de vida. Resolver el modelo de datos primero hizo que la UI fuera obvia.",
      "Mobile first fuerza mejores decisiones. Cada elemento que no gan\u00f3 su lugar en m\u00f3vil no lo gan\u00f3 en ning\u00fan lado. La restricci\u00f3n hizo al producto m\u00e1s preciso.",
      "En productos competitivos, la motivaci\u00f3n es parte de la experiencia. El leaderboard y la racha no fueron features parchadas al final \u2014 estuvieron en el pensamiento del producto desde el primer d\u00eda. Dise\u00f1ar para performance significa dise\u00f1ar para la experiencia emocional de la performance, no solo para el seguimiento funcional de ella.",
      "Definir m\u00e9tricas de \u00e9xito antes del primer wireframe. No tener datos post-lanzamiento no es solo una brecha de medici\u00f3n \u2014 es una brecha de producto. Saber qu\u00e9 est\u00e1s optimizando cambia las decisiones que tom\u00e1s durante el dise\u00f1o, no solo despu\u00e9s del lanzamiento.",
    ] as string[],
    thankYou: "\u00a1Gracias por leer!",
    goBack: "Volver",
  },
};

/**
 * Long-form Go! Coaching case study — content & structure from Figma
 * `FeF5ES2xRY75wBP8gFjOVr` node `4953:5639` (MCP `get_figma_data`).
 */
export function GoCoachingCaseStudyContent() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <CaseStudyLayout
      backHref="/#card-go-coaching"
      pageBgClassName="bg-[#E8EFFD]"
      ringOffsetClassName="focus-visible:ring-offset-[#E8EFFD]"
      intro={
        <CaseStudyProjectHero
          eyebrow={t.eyebrow}
          chips={t.chips}
          heroBg="#A7C2F6"
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
              src={imagePath("mockupcoaching-frame.webp")}
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
                aria-label={t.heroVideoLabel}
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
        <CaseStudyPhaseLabel>{t.problemLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.problemP1}</p>
            <p>{t.problemP2}</p>
            <p>{t.problemP3}</p>
            <p>{t.problemP4}</p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-12 md:!mt-16">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          <figure className="m-0 flex min-w-0 flex-1 flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6F9FE] p-3">
              <ExpandableImage
                src={imagePath("google sheets.png")}
                zoomable
                alt="Activity Tracker Google Sheets used by students before the platform."
                width={590}
                height={405}
                className="h-auto w-full rounded-lg"
                sizes="(max-width: 1424px) 50vw, 712px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.sheetsCaption}
            </figcaption>
          </figure>
          <figure className="m-0 flex min-w-0 flex-1 flex-col gap-3 justify-center">
            <div className="overflow-hidden rounded-2xl bg-[#F6F9FE] p-3">
              <ExpandableImage
                src={imagePath("diagram circle.png")}
                zoomable
                alt="Previous and complete flow diagram from Circle platform."
                width={1256}
                height={560}
                className="h-auto w-full rounded-lg"
                sizes="(max-width: 1424px) 50vw, 712px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.diagramCircleCaption}
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      {/* ── 02 Discovery & Research ─────────────────────────────────────── */}
      <CaseStudySection id="discovery">
        <CaseStudyPhaseLabel>{t.discoveryLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.discoveryP1}</p>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.discoveryEmphasis}</CaseStudyEmphasis>
              <p>{t.discoveryP2}</p>
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
                zoomable
                alt="Working session notes — client calls documented as coach and student needs."
                width={1276}
                height={804}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1424px) 70vw, 996px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.sessionsCaption}
            </figcaption>
          </figure>
          {/* Right box — two images inside one shared card */}
          <figure className="m-0 flex min-w-0 flex-[3] flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6F9FE] p-3 flex flex-col gap-3">
              <ExpandableImage
                src={imagePath("wireframes.png")}
                zoomable
                alt="Early wireframes exploring layout and hierarchy before high fidelity."
                width={498}
                height={354}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1424px) 30vw, 427px"
              />
              <ExpandableImage
                src={imagePath("wireframeeeegocoaching 1.png")}
                zoomable
                alt="Additional early sketches exploring hierarchy and layout."
                width={374}
                height={281}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1424px) 30vw, 427px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.wireframesCaption}
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudySection id="discovery-continued">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.discoveryEmphasis2}</CaseStudyEmphasis>
              <p>{t.discoveryP3}</p>
              <p>{t.discoveryP4}</p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.discoveryEmphasis3}</CaseStudyEmphasis>
              <div className="flex flex-col gap-3 rounded-2xl bg-[#A7C2F6]/20 px-5 py-5 md:px-6 md:py-6">
                {t.levels.map((level) => (
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
              <p>{t.discoveryP5}</p>
              <p>{t.discoveryP6}</p>
              <p>{t.discoveryP7}</p>
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
                zoomable
                alt="Diagram of the student experience through the Go! Coaching platform."
                width={1656}
                height={1240}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1424px) 100vw, 1424px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.diagramCaption}
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudySection id="product-strategy">
        <CaseStudyPhaseLabel>{t.strategyLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.strategyEmphasis1}</CaseStudyEmphasis>
              <p>{t.strategyP1}</p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.strategyEmphasis2}</CaseStudyEmphasis>
              <p>{t.strategyP2}</p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.strategyEmphasis3}</CaseStudyEmphasis>
              <p>{t.strategyP3}</p>
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
                        <ExpandableImage
                          src={imagePath("mockupcoaching 1.webp")}
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
                        <ExpandableImage
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
                    {t.activityTrackerCaption}
                  </figcaption>
                </figure>
              </div>
            </CaseStudyWideBleed>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.strategyEmphasis4}</CaseStudyEmphasis>
              <p>{t.strategyP4}</p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14 !overflow-x-visible">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100dvw,1424px)] flex flex-col gap-3">
            <ExpandableImage
              src={imagePath("mobile-coach view.webp")}
              alt="Mobile coach view — multiple screens showing the Go! Coaching app on iPhone."
              width={3594}
              height={2687}
              className="h-auto w-full"
              sizes="(max-width: 1424px) 100vw, 1424px"
            />
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.mobileCoachCaption}
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudySection id="visual-direction">
        <CaseStudyWideBleed className="!mt-0">
          <CaseStudyPhaseLabel>{t.visualLabel}</CaseStudyPhaseLabel>
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-stretch md:gap-36">
            {/* Text */}
            <div className="min-w-0 flex-1 flex flex-col justify-center space-y-4">
              <CaseStudyEmphasis>{t.visualEmphasis}</CaseStudyEmphasis>
              <p className="text-lg leading-[1.56] tracking-[0.03em] text-muted">{t.visualP1}</p>
              <p className="text-lg leading-[1.56] tracking-[0.03em] text-muted">{t.visualP2}</p>
            </div>
            {/* Moodboard */}
            <figure className="m-0 min-w-0 flex-1 flex flex-col gap-3 overflow-hidden rounded-2xl">
              <ExpandableImage
                src={imagePath("moodboards.png")}
                alt="Three moodboard directions; the chosen spatial, dark, high-contrast direction became the design system foundation."
                width={1824}
                height={1170}
                className="h-auto w-full rounded-2xl"
                sizes="(max-width: 1424px) 100vw, 1424px"
              />
              <figcaption className="text-center text-sm leading-relaxed text-muted-soft">
                {t.moodboardsCaption}
              </figcaption>
            </figure>
          </div>
        </CaseStudyWideBleed>
      </CaseStudySection>


      {/* ── 05 The Solution ─────────────────────────────────────────────── */}
      <CaseStudySection id="the-solution">
        <CaseStudyPhaseLabel>{t.solutionLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.solutionIntro}</p>

            {/* Student Experience */}
            <div className="space-y-[4.5rem]">
              <div className="flex flex-col gap-4">
                <p className="text-xl font-medium leading-[1.4] tracking-[0.02em] text-ink md:text-2xl">
                  {t.studentExpTitle}
                </p>
                <p className="text-xl font-medium leading-[1.4] tracking-[0.02em] text-ink md:text-2xl">
                  {t.studentExpText}
                </p>
              </div>

              <CaseStudyHeadingBlock>
                <CaseStudyEmphasis>{t.solutionActivityEmphasis}</CaseStudyEmphasis>
                <p>{t.solutionActivityP}</p>
              </CaseStudyHeadingBlock>

              <CaseStudyHeadingBlock>
                <CaseStudyEmphasis>{t.solutionAutoEmphasis}</CaseStudyEmphasis>
                <p>{t.solutionAutoP}</p>
              </CaseStudyHeadingBlock>

              {/* Hardest design problem */}
              <CaseStudyHeadingBlock>
                <CaseStudyEmphasis>{t.solutionLeadsEmphasis}</CaseStudyEmphasis>
                <p>{t.solutionLeadsP1}</p>
                <p>{t.solutionLeadsP2}</p>
              </CaseStudyHeadingBlock>
            </div>

            <CaseStudyWideBleed>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <figure className="m-0 flex flex-col gap-3">
                  <div className="overflow-hidden rounded-2xl">
                    <ExpandableImage
                      src={imagePath("mobile student view.png")}
                      alt="Mobile — Student View — Referral Partners."
                      width={1764}
                      height={1323}
                      className="h-auto w-full"
                      sizes="(max-width: 1424px) 50vw, 712px"
                    />
                  </div>
                  <figcaption className="text-center text-sm leading-snug text-ink/50">
                    {t.referralPartnersCaption}
                  </figcaption>
                </figure>
                <figure className="m-0 flex flex-col gap-3">
                  <div className="overflow-hidden rounded-2xl">
                    <ExpandableImage
                      src={imagePath("mobile lead view.png")}
                      alt="Mobile — Student View — Lead View."
                      width={1764}
                      height={1323}
                      className="h-auto w-full"
                      sizes="(max-width: 1424px) 50vw, 712px"
                    />
                  </div>
                  <figcaption className="text-center text-sm leading-snug text-ink/50">
                    {t.leadViewCaption}
                  </figcaption>
                </figure>
              </div>
            </CaseStudyWideBleed>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.solutionRelEmphasis}</CaseStudyEmphasis>
              <p>{t.solutionRelP}</p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.solutionGuardrailsEmphasis}</CaseStudyEmphasis>
              <p>{t.solutionGuardrailsP}</p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.solutionPanelEmphasis}</CaseStudyEmphasis>
              <p>{t.solutionPanelP}</p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.solutionGamEmphasis}</CaseStudyEmphasis>
              <p>{t.solutionGamP}</p>
            </CaseStudyHeadingBlock>

            <figure className="m-0 mb-[9rem] flex flex-col gap-3">
              <div className="overflow-hidden rounded-2xl">
                <ExpandableImage
                  src={imagePath("liam johnson.webp")}
                  alt="Referral partner profile and detail views — relationship context, forms, and guardrails in the student experience."
                  width={2757}
                  height={1781}
                  className="h-auto w-full"
                  sizes="(max-width: 1186px) 100vw, 1186px"
                />
              </div>
              <figcaption className="text-center text-sm leading-snug text-ink/50">
                {t.referralDetailCaption}
              </figcaption>
            </figure>

            {/* Coach Experience */}
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium leading-[1.4] tracking-[0.02em] text-ink md:text-2xl">
                {t.coachExpTitle}
              </p>
              <p className="text-xl font-medium leading-[1.4] tracking-[0.02em] text-ink md:text-2xl">
                {t.coachExpText}
              </p>
            </div>

          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-32 md:!mt-36">
        <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-36">
          <div className="min-w-0 flex-1 flex flex-col justify-center space-y-4">
            <CaseStudyEmphasis>{t.coachViewEmphasis}</CaseStudyEmphasis>
            <p className="text-lg leading-[1.56] tracking-[0.03em] text-muted">{t.coachViewP1}</p>
            <p className="text-lg leading-[1.56] tracking-[0.03em] text-muted">{t.coachViewP2}</p>
          </div>
          <figure className="m-0 min-w-0 flex-1 flex flex-col gap-3 overflow-hidden rounded-2xl">
            <ExpandableImage
              src={imagePath("dashboard mobile.webp")}
              alt="Mobile — Coach View Dashboard."
              width={1824}
              height={1170}
              className="h-auto w-full rounded-2xl"
              sizes="(max-width: 1424px) 100vw, 1424px"
            />
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.dashboardCaption}
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudySection id="coach-view-weekly">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.coachWeeklyEmphasis}</CaseStudyEmphasis>
              <p>{t.coachWeeklyP}</p>
            </CaseStudyHeadingBlock>

          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <figure className="m-0 flex flex-col gap-3">
          <div className="overflow-hidden rounded-2xl">
            <ExpandableImage
              src={imagePath("mobiles.webp")}
              alt="Mobile — Student View — Referral Partners."
              width={1824}
              height={1170}
              className="h-auto w-full"
              sizes="(max-width: 1424px) 100vw, 1424px"
            />
          </div>
          <figcaption className="text-center text-sm leading-snug text-ink/50">
            {t.mobilesCaption}
          </figcaption>
        </figure>
      </CaseStudyWideBleed>

      {/* ── 06 Closing ──────────────────────────────────────────────────── */}
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

          <div className="mt-16 md:mt-24">
            <div className="min-w-0 text-lg leading-[1.56] tracking-[0.03em] text-muted">
              <p className="font-medium text-ink">
                {t.learnedIntro}
              </p>
              <div className="mt-4 flex flex-col gap-4">
                {t.learnedItems.map((lesson) => (
                  <p key={lesson}>{lesson}</p>
                ))}
              </div>
            </div>
          </div>
        </CaseStudyPhaseContent>

        <div className="mt-16 flex flex-col items-center gap-6 text-center md:mt-24">
          <p className="font-[family-name:var(--font-general-sans)] text-2xl font-semibold text-heading-case">
            {t.thankYou}
          </p>
          <Link href="/#card-go-coaching" className="btn-primary">
            <ArrowLeftIcon className="size-4" aria-hidden />
            {t.goBack}
          </Link>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
