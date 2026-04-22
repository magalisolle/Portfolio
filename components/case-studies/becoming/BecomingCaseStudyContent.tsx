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
  `/images/Becoming/${encodeURIComponent(file)}`;

const COPY = {
  en: {
    eyebrow: "Becoming —",
    eyebrowLine2: "Turning Reading into Action",
    chips: ["Web Responsive", "B2C"],
    lede: "Becoming is a web app that turns your Kindle and Readwise highlights into one personalized daily insight — bridging the gap between reading and actually applying what you learn.",
    factDate: "Date", factDateVal: "Q1 2026",
    factRole: "Role", factRoleVal: "Product Designer & Product Strategist",
    factScope: "Scope", factScopeVal: "Product Strategy, UX/UI Design, Prototyping, User Testing",
    factTeam: "Team", factTeamVal: "Co-founder & CEO / Backend Developer",
    factTools: "Tools", factToolsVal: "Figma, Amplitude, Jira.",
    factStatus: "Status", factStatusVal: "MVP in development",
    introP1: "Becoming started as a conversation with a developer friend who had a clear product idea and needed a design partner. He had the technical vision and the business — I came in as designer and product strategist.",
    introP2: "Clean split: he handled backend and CEO decisions, I handled design and product strategy. A two-person team making real decisions with limited resources and a lot still to validate.",
    problemLabel: "01. The Problem",
    probP1: "Most serious readers already have a system for capturing ideas. They highlight in Kindle, sync to Readwise, track books in Goodreads. The problem isn't that they don't save what resonates — it's that those highlights just sit there, accumulating, rarely revisited and almost never acted on.",
    probP2: "The gap isn't between reading and remembering. It's between reading and becoming.",
    probP3: "The tools that exist today are built for storage, not integration. They help you keep ideas. They don't help you live them.",
    debateLabel: "02. The Product Debate — And How We Resolved It",
    debateP1: "Before any wireframe existed, there was a fundamental disagreement about what the product should do.",
    debateP2: "My co-founder had a clear vision: the AI reads your highlights and returns actionables directly. You highlighted ideas about deep work, you get a concrete practice to do today. Clean, direct, high-value.",
    debateP3: "I pushed back.",
    debateP4: "Not because the vision was wrong — it was actually compelling. But because it was limiting. Forcing users into actionables from day one assumes a level of intent and readiness that not every reader has when they first arrive. It also cuts off users who want to explore, reflect, and discover patterns in their reading before committing to specific practices.",
    debateP5: "My proposal: design a spectrum, not a single output. Start with themes and recommendations — lighter, more exploratory — and let users progress toward actionables as they build the habit.",
    debateP6: "The resolution was pragmatic: anchor the product in the core of Readwise — highlight, revisit, integrate — and layer actionables on top of that foundation. This way we'd cover users who already have the habit (Readwise users) without alienating those who are still building it.",
    debateP7: "This is still to be validated. The approach is deliberately Lean: design, build, ship, and learn from real users before committing to a definitive direction. The question isn't whether the concept is good — it's whether it generates the behavior change it promises.",
    discoveryCaption: "Discovery sessions",
    llmCaption: "How the LLM will work",
    prioritizeCaption: "Features prioritization",
    onboardingLabel: "03. The Onboarding — Designing for Immediate Value",
    onboardingIntro: "The onboarding had one job: get the user to their first insight before they had time to doubt the product.",
    step1label: "Step 1 — Connect your sources.",
    step1p1: "Users can connect Kindle (automatic highlight sync), Readwise (aggregated highlights), or Goodreads (reading history with AI-generated popular highlights). Manual book entry is also available. One connection is enough to start.",
    step1p2: "The key design decision: show the data immediately after connection. After linking Kindle, the user sees their exact numbers — 10 books found, 459 highlights, 2 notes — and a preview of actual highlights. This does two things: it makes the connection feel real (these are your words, your books), and it builds trust in the AI before asking the user to rely on it.",
    step2label: "Step 2 — AI generates themes.",
    step2p1: "Rather than asking users to set goals, the system analyzes their highlights and generates themes — areas of interest that emerge from what they've already been reading. Leadership, deep work, negotiation, habits. The user didn't have to think of these. The AI found them in their own library.",
    step2p2: "This was the most important product decision in the onboarding: replacing goals with themes. Goals carry pressure and imply failure. Themes carry curiosity and imply exploration. For a product asking people to build a daily habit around reflection, that distinction matters enormously.",
    step2p3: "Each theme card shows which books it came from — grounding the AI's interpretation in the user's actual reading. The user can also generate more themes if none of the initial ones resonate.",
    step3label: "Step 3 — Preview the experience before committing.",
    step3p: "When a user selects a theme, the right panel shows example insights for that theme — what kind of practices and reflections they'd actually receive. This came directly from user testing: people needed to understand what they were choosing before choosing it. The preview makes the abstract concrete.",
    step4label: "Step 4 — Configure the cadence.",
    step4p: "Users define where they'll apply their insights (work, personal, both), what type of interaction they prefer (practice, reflection, or balanced), and when they want to receive their daily prompt. This isn't just personalization — it's the user making a commitment to the habit, on their own terms.",
    step5label: "Step 5 — First insight, immediately.",
    step5p: "The onboarding ends with the user's first insight already generated, grounded in a real highlight from their library. They don't leave onboarding wondering what the product will feel like. They already know.",
    coreLabel: "04. The Core Experience",
    coreP1: "The home screen is built around one thing: today's insight.",
    coreP2: "Each insight has three components: the practice or reflection (generated by AI based on the active theme), the highlight it came from (the user's own words, attributed to the book), and a clear action — Mark as done or Dismiss. Week and day context is always visible so users know where they are in the 4-week theme cycle.",
    coreP3: "Below the daily insight: the Daily Review (a 5-minute session revisiting recent highlights) and Suggestions (related articles and reflections). The streak indicator is present but never dominant — it supports the habit without making the product feel like a fitness app.",
    coreP4: "The Timeline gives users a weekly view of their insights, organized by theme. It's the product's memory — proof that the habit is building, and a way to revisit insights that landed.",
    coreP5: "The Library is the user's full highlight collection — filterable by books, saved from browser, or Notion. Every highlight that feeds the AI is visible and searchable. This transparency was deliberate: users should always be able to see where their insights come from.",
    testingLabel: "05. What We Learned from Early Testing",
    testP1: "We ran initial tests with a small group of users to validate the flow and catch friction. The results were useful — but came with an important caveat.",
    testP2: "The users we tested weren't the right users. They read, but they didn't have a clear intention of applying what they read to their lives. For a product built around integration, that distinction matters. The ideal test user is someone already using Readwise — a person who has already demonstrated that they care about doing something with their highlights, not just collecting them.",
    testP3: "That said, the feedback was directionally useful. The theme-based approach resonated — users understood and appreciated exploring an area of their reading rather than being assigned tasks. Several users clicked in unexpected places or didn't immediately recognize that the highlighted content was coming from their own library — a limitation of the prototype, not the concept, since we were using placeholder data instead of their real highlights.",
    testP4: "The most important learning: the product needs to be tested with real data. The next phase is a functional prototype — not just a design prototype — connected to real user libraries, generating real AI insights. Only then will we understand whether the core loop actually creates the behavior change the product is designed for.",
    whatsNextLabel: "06. What's Next",
    nextP1: "The current focus is the MVP experiment: a functional version of the onboarding and daily experience, connected to real data, tested with users who have demonstrated intent — active Readwise users and Kindle highlighters who already believe in the value of their reading but haven't found a way to act on it.",
    nextP2: "The key question the experiment is designed to answer: does receiving a daily insight grounded in your own highlights actually change how you engage with what you read?",
    learnedLabel: "07. What I Learned",
    learned1: "Questioning the vision early is the most valuable thing a designer can do. The original concept — AI returns actionables directly — was good. The expanded concept — a spectrum from exploration to action, anchored in the Readwise core — is better. That shift happened because I didn't just execute the brief.",
    learned2: "Themes are a better design pattern than goals for habit-forming products. Goals imply failure. Themes imply curiosity. When the stakes feel lower, users engage more honestly.",
    learned3: "Test with the right users or don't draw conclusions. Early testing with users who don't share the intent your product is designed for gives you UX feedback but not product validation. Those are two different things, and conflating them leads to wrong decisions.",
    learned4: "The AI's output is only as trustworthy as its transparency. Every insight in Becoming is grounded in a real highlight, attributed to a real book. That's not just a design detail — it's what makes users trust the AI enough to act on what it tells them.",
    learned5: "Lean doesn't mean skipping validation — it means validating faster. Shipping early with the intention of learning is only valuable if you're honest about what you don't yet know. We have a strong hypothesis. We don't have proof yet.",
    thankYou: "Thank you for reading!",
    goBack: "Go Back",
  },
  es: {
    eyebrow: "Becoming —",
    eyebrowLine2: "Convertir la Lectura en Acción",
    chips: ["Web Responsive", "B2C"],
    lede: "Becoming es una web app que convierte tus highlights de Kindle y Readwise en un insight diario personalizado — cerrando la brecha entre leer y aplicar realmente lo que aprendés.",
    factDate: "Fecha", factDateVal: "Q1 2026",
    factRole: "Rol", factRoleVal: "Diseñadora de Producto & Estratega de Producto",
    factScope: "Alcance", factScopeVal: "Estrategia de Producto, UX/UI Design, Prototipado, Testing con Usuarios",
    factTeam: "Equipo", factTeamVal: "Co-fundador & CEO / Desarrollador Backend",
    factTools: "Herramientas", factToolsVal: "Figma, Amplitude, Jira.",
    factStatus: "Estado", factStatusVal: "MVP en desarrollo",
    introP1: "Becoming empezó como una conversación con un amigo desarrollador que tenía una idea clara de producto y necesitaba una socia de diseño. Él tenía la visión técnica y el negocio — yo entré como diseñadora y estratega de producto.",
    introP2: "División clara: él manejaba el backend y las decisiones de CEO, yo manejaba el diseño y la estrategia de producto. Un equipo de dos personas tomando decisiones reales con recursos limitados y mucho todavía por validar.",
    problemLabel: "01. El Problema",
    probP1: "La mayoría de los lectores serios ya tiene un sistema para capturar ideas. Marcan en Kindle, sincronizan con Readwise, registran libros en Goodreads. El problema no es que no guarden lo que les resuena — es que esos highlights quedan ahí, acumulándose, rara vez revisitados y casi nunca llevados a la acción.",
    probP2: "La brecha no está entre leer y recordar. Está entre leer y convertirse.",
    probP3: "Las herramientas que existen hoy están construidas para el almacenamiento, no para la integración. Te ayudan a guardar ideas. No te ayudan a vivirlas.",
    debateLabel: "02. El Debate de Producto — Y Cómo lo Resolvimos",
    debateP1: "Antes de que existiera algún wireframe, había un desacuerdo fundamental sobre qué debía hacer el producto.",
    debateP2: "Mi co-fundador tenía una visión clara: la IA lee tus highlights y te devuelve accionables directamente. Marcaste ideas sobre deep work, recibís una práctica concreta para hacer hoy. Limpio, directo, de alto valor.",
    debateP3: "Yo lo cuestioné.",
    debateP4: "No porque la visión estuviera mal — era de hecho convincente. Sino porque era limitante. Forzar a los usuarios a accionables desde el día uno asume un nivel de intención y disposición que no tiene todo lector cuando llega por primera vez. También corta a los usuarios que quieren explorar, reflexionar y descubrir patrones en su lectura antes de comprometerse con prácticas específicas.",
    debateP5: "Mi propuesta: diseñar un espectro, no un único output. Empezar con temas y recomendaciones — más ligero, más exploratorio — y dejar que los usuarios progresen hacia los accionables a medida que construyen el hábito.",
    debateP6: "La resolución fue pragmática: anclar el producto en el núcleo de Readwise — highlight, revisitar, integrar — y sumar los accionables encima de esa base. Así cubríamos a los usuarios que ya tienen el hábito (usuarios de Readwise) sin alienar a quienes todavía lo están construyendo.",
    debateP7: "Esto todavía hay que validarlo. El enfoque es deliberadamente Lean: diseñar, construir, lanzar y aprender de usuarios reales antes de comprometerse con una dirección definitiva. La pregunta no es si el concepto es bueno — es si genera el cambio de comportamiento que promete.",
    discoveryCaption: "Sesiones de discovery",
    llmCaption: "Cómo va a funcionar el LLM",
    prioritizeCaption: "Priorización de features",
    onboardingLabel: "03. El Onboarding — Diseñando para el Valor Inmediato",
    onboardingIntro: "El onboarding tenía un solo trabajo: llevar al usuario a su primer insight antes de que tuviera tiempo de dudar del producto.",
    step1label: "Paso 1 — Conectá tus fuentes.",
    step1p1: "Los usuarios pueden conectar Kindle (sincronización automática de highlights), Readwise (highlights agregados) o Goodreads (historial de lectura con highlights populares generados por IA). La entrada manual de libros también está disponible. Una conexión es suficiente para empezar.",
    step1p2: "La decisión de diseño clave: mostrar los datos inmediatamente después de la conexión. Después de vincular Kindle, el usuario ve sus números exactos — 10 libros encontrados, 459 highlights, 2 notas — y una vista previa de highlights reales. Esto hace dos cosas: hace que la conexión se sienta real (son tus palabras, tus libros) y genera confianza en la IA antes de pedirle al usuario que dependa de ella.",
    step2label: "Paso 2 — La IA genera temas.",
    step2p1: "En lugar de pedirle a los usuarios que establezcan metas, el sistema analiza sus highlights y genera temas — áreas de interés que emergen de lo que ya estuvieron leyendo. Liderazgo, deep work, negociación, hábitos. El usuario no tuvo que pensar en estos. La IA los encontró en su propia biblioteca.",
    step2p2: "Esta fue la decisión de producto más importante del onboarding: reemplazar metas por temas. Las metas generan presión e implican fracaso. Los temas generan curiosidad e implican exploración. Para un producto que le pide a las personas que construyan un hábito diario alrededor de la reflexión, esa distinción importa enormemente.",
    step2p3: "Cada tarjeta de tema muestra de qué libros proviene — anclando la interpretación de la IA en la lectura real del usuario. El usuario también puede generar más temas si ninguno de los iniciales resuena.",
    step3label: "Paso 3 — Previsualizar la experiencia antes de comprometerse.",
    step3p: "Cuando un usuario selecciona un tema, el panel derecho muestra insights de ejemplo para ese tema — qué tipo de prácticas y reflexiones recibiría realmente. Esto surgió directamente del testing con usuarios: las personas necesitaban entender qué estaban eligiendo antes de elegirlo. La vista previa hace lo abstracto concreto.",
    step4label: "Paso 4 — Configurar la cadencia.",
    step4p: "Los usuarios definen dónde van a aplicar sus insights (trabajo, personal, ambos), qué tipo de interacción prefieren (práctica, reflexión o equilibrado) y cuándo quieren recibir su prompt diario. Esto no es solo personalización — es el usuario comprometiéndose con el hábito, en sus propios términos.",
    step5label: "Paso 5 — Primer insight, inmediatamente.",
    step5p: "El onboarding termina con el primer insight del usuario ya generado, anclado en un highlight real de su biblioteca. No salen del onboarding preguntándose cómo se va a sentir el producto. Ya lo saben.",
    coreLabel: "04. La Experiencia Central",
    coreP1: "La pantalla de inicio está construida alrededor de una sola cosa: el insight de hoy.",
    coreP2: "Cada insight tiene tres componentes: la práctica o reflexión (generada por IA basándose en el tema activo), el highlight del que proviene (las palabras del usuario, atribuidas al libro) y una acción clara — Marcar como hecho o Descartar. El contexto de semana y día siempre es visible para que los usuarios sepan en qué punto del ciclo de 4 semanas del tema están.",
    coreP3: "Debajo del insight diario: la Revisión Diaria (una sesión de 5 minutos revisitando highlights recientes) y Sugerencias (artículos y reflexiones relacionados). El indicador de racha está presente pero nunca dominante — apoya el hábito sin hacer que el producto se sienta como una app de fitness.",
    coreP4: "La Línea de Tiempo le da a los usuarios una vista semanal de sus insights, organizados por tema. Es la memoria del producto — prueba de que el hábito se está construyendo y una forma de revisitar los insights que resonaron.",
    coreP5: "La Biblioteca es la colección completa de highlights del usuario — filtrable por libros, guardados del navegador o Notion. Cada highlight que alimenta la IA es visible y buscable. Esta transparencia fue deliberada: los usuarios siempre deben poder ver de dónde vienen sus insights.",
    testingLabel: "05. Lo que Aprendimos del Testing Temprano",
    testP1: "Hicimos tests iniciales con un grupo pequeño de usuarios para validar el flujo y detectar fricciones. Los resultados fueron útiles — pero vinieron con una advertencia importante.",
    testP2: "Los usuarios que testeamos no eran los usuarios correctos. Leían, pero no tenían una intención clara de aplicar lo que leían a sus vidas. Para un producto construido alrededor de la integración, esa distinción importa. El usuario de test ideal es alguien que ya usa Readwise — una persona que ya demostró que le importa hacer algo con sus highlights, no solo coleccionarlos.",
    testP3: "Dicho eso, el feedback fue direccionalmente útil. El enfoque basado en temas resonó — los usuarios entendieron y apreciaron explorar un área de su lectura en lugar de que les asignaran tareas. Varios usuarios hicieron clic en lugares inesperados o no reconocieron inmediatamente que el contenido destacado venía de su propia biblioteca — una limitación del prototipo, no del concepto, ya que usábamos datos de placeholder en lugar de sus highlights reales.",
    testP4: "El aprendizaje más importante: el producto necesita testearse con datos reales. La próxima fase es un prototipo funcional — no solo un prototipo de diseño — conectado a las bibliotecas reales de los usuarios, generando insights de IA reales. Solo entonces entenderemos si el loop central realmente crea el cambio de comportamiento para el que está diseñado el producto.",
    whatsNextLabel: "06. Qué Sigue",
    nextP1: "El foco actual es el experimento MVP: una versión funcional del onboarding y la experiencia diaria, conectada a datos reales, testeada con usuarios que demostraron intención — usuarios activos de Readwise y marcadores de Kindle que ya creen en el valor de su lectura pero no encontraron una forma de actuar sobre ella.",
    nextP2: "La pregunta clave que el experimento está diseñado para responder: ¿recibir un insight diario anclado en tus propios highlights realmente cambia cómo te relacionás con lo que leés?",
    learnedLabel: "07. Lo que Aprendí",
    learned1: "Cuestionar la visión temprano es lo más valioso que puede hacer una diseñadora. El concepto original — la IA devuelve accionables directamente — era bueno. El concepto expandido — un espectro de la exploración a la acción, anclado en el núcleo de Readwise — es mejor. Ese cambio ocurrió porque no me limité a ejecutar el brief.",
    learned2: "Los temas son un patrón de diseño mejor que las metas para productos de formación de hábitos. Las metas implican fracaso. Los temas implican curiosidad. Cuando la presión se siente menor, los usuarios se involucran más honestamente.",
    learned3: "Testear con los usuarios correctos o no sacar conclusiones. El testing temprano con usuarios que no comparten la intención para la que está diseñado el producto te da feedback de UX pero no validación del producto. Son dos cosas diferentes, y mezclarlas lleva a decisiones equivocadas.",
    learned4: "El output de la IA es tan confiable como su transparencia. Cada insight en Becoming está anclado en un highlight real, atribuido a un libro real. Eso no es solo un detalle de diseño — es lo que hace que los usuarios confíen en la IA lo suficiente para actuar según lo que les dice.",
    learned5: "Lean no significa saltarse la validación — significa validar más rápido. Lanzar temprano con la intención de aprender solo tiene valor si sos honesta sobre lo que todavía no sabés. Tenemos una hipótesis fuerte. Todavía no tenemos prueba.",
    thankYou: "¡Gracias por leer!",
    goBack: "Volver",
  },
};

export function BecomingCaseStudyContent() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <CaseStudyLayout
      backHref="/#card-becoming"
      pageBgClassName="bg-[#fdfdfd]"
      ringOffsetClassName="focus-visible:ring-offset-[#fdfdfd]"
      intro={
        <CaseStudyProjectHero
          eyebrow={t.eyebrow}
          eyebrowLine2={t.eyebrowLine2}
          chips={t.chips}
          heroBg="#fff7e5"
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
              <p>{t.introP1}</p>
              <p>{t.introP2}</p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 01. The Problem ─────────────────────────────────────────────── */}
      <CaseStudySection id="the-problem">
        <CaseStudyPhaseLabel>{t.problemLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>{t.probP1}</p>
              <p>{t.probP2}</p>
              <p>{t.probP3}</p>
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
            <ExpandableImage
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
        <CaseStudyPhaseLabel>{t.debateLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>{t.debateP1}</p>
              <p>{t.debateP2}</p>
              <p>{t.debateP3}</p>
              <p>{t.debateP4}</p>
              <p>{t.debateP5}</p>
              <p>{t.debateP6}</p>
              <p>{t.debateP7}</p>
            </div>

            {/* Discovery images: left tall + right stacked */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-6">
              {/* Left: Discovery sessions */}
              <div className="flex flex-col items-center gap-4 md:w-[55%]">
                <div className="w-full overflow-hidden rounded-3xl bg-[#fff7e5] p-4 md:p-6">
                  <ExpandableImage
                    src={IMG("becoming discovery.png")}
                    zoomable
                    alt="Discovery sessions"
                    width={586}
                    height={737}
                    className="h-auto w-full rounded-2xl object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <p className="text-sm leading-relaxed text-muted-soft">
                  {t.discoveryCaption}
                </p>
              </div>
              {/* Right: LLM + Prioritize stacked */}
              <div className="flex flex-col gap-4 md:flex-1">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full overflow-hidden rounded-3xl bg-[#fff7e5] p-4 md:p-6">
                    <ExpandableImage
                      src={IMG("LLM.png")}
                    zoomable
                      alt="How the LLM will work"
                      width={1317}
                      height={667}
                      className="h-auto w-full rounded-2xl object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-soft">
                    {t.llmCaption}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full overflow-hidden rounded-3xl bg-[#fff7e5] p-4 md:p-6">
                    <ExpandableImage
                      src={IMG("pioritize.png")}
                    zoomable
                      alt="Features prioritization"
                      width={816}
                      height={767}
                      className="h-auto w-full rounded-2xl object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-soft">
                    {t.prioritizeCaption}
                  </p>
                </div>
              </div>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 03. The Onboarding ──────────────────────────────────────────── */}
      <CaseStudySection id="onboarding">
        <CaseStudyPhaseLabel>{t.onboardingLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.onboardingIntro}</p>

            {/* Step 1 */}
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">{t.step1label}</p>
              <div className="flex flex-col gap-4">
                <p>{t.step1p1}</p>
                <p>{t.step1p2}</p>
              </div>
            </div>
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
            <ExpandableImage
              src={IMG("IPHONEBECOMING 1.png")}
              alt="Becoming — connect your sources screen"
              width={961}
              height={609}
              className="h-auto w-full max-w-[640px] object-contain md:max-w-[85%] md:-translate-x-32 md:translate-y-8"
              sizes="(max-width: 768px) 90vw, 80vw"
            />
            {/* Cards — flow on mobile, absolute on desktop */}
            <div className="mt-6 flex flex-col items-end gap-4 md:absolute md:right-0 md:top-10 md:mt-0 md:w-[48%]">
              <ExpandableImage
                src={IMG("CardInfo1.png")}
                alt="How to get Readwise Access token"
                width={528}
                height={200}
                className="h-auto w-full rounded-2xl drop-shadow-md"
                sizes="(max-width: 768px) 100vw, 38vw"
              />
              <ExpandableImage
                src={IMG("CardInfo2.png")}
                alt="Access token privacy note"
                width={528}
                height={80}
                className="h-auto w-full rounded-2xl drop-shadow-md"
                sizes="(max-width: 768px) 100vw, 38vw"
              />
              <ExpandableImage
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
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">{t.step2label}</p>
              <div className="flex flex-col gap-4">
                <p>{t.step2p1}</p>
                <p>{t.step2p2}</p>
                <p>{t.step2p3}</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">{t.step3label}</p>
              <p>{t.step3p}</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">{t.step4label}</p>
              <p>{t.step4p}</p>
            </div>

            {/* Setup prompts full-width image */}
            <div className="overflow-hidden rounded-3xl bg-[#fff7e5] p-4 md:p-6">
              <ExpandableImage
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
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-muted">{t.step5label}</p>
              <p>{t.step5p}</p>
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
            <ExpandableImage
              src={IMG("onboardingbecomingmockup 1.png")}
              alt="First insight screen — Your first Prompt"
              width={1220}
              height={832}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1186px) 100vw, 1186px"
            />
            <ExpandableImage
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
        <CaseStudyPhaseLabel>{t.coreLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>{t.coreP1}</p>
              <p>{t.coreP2}</p>
              <p>{t.coreP3}</p>
              <p>{t.coreP4}</p>
              <p>{t.coreP5}</p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>

        {/* Home screens — wide bleed */}
        <div className="case-study-wide-bleed-outer mt-12 md:mt-14">
          <div className="overflow-hidden rounded-3xl bg-[#fff7e5] p-4 md:p-6">
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
              <ExpandableImage
                src={IMG("Home empty state.png")}
                alt="Home screen empty state"
                width={543}
                height={337}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1186px) 100vw, 50vw"
              />
              <ExpandableImage
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
        <CaseStudyPhaseLabel>{t.testingLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>{t.testP1}</p>
              <p>{t.testP2}</p>
              <p>{t.testP3}</p>
              <p>{t.testP4}</p>
            </div>

            {/* Mobile screens side by side */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-center">
              <ExpandableImage
                src={IMG("MOBILEBECOMING 1.png")}
                alt="Becoming mobile experience"
                width={227}
                height={685}
                containerClassName="w-full sm:w-[22%]"
                className="h-auto w-full rounded-2xl"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              <ExpandableImage
                src={IMG("MOBILE BECOMING2 1.png")}
                alt="Becoming mobile experience 2"
                width={227}
                height={491}
                containerClassName="w-full sm:w-[22%]"
                className="h-auto w-full rounded-2xl"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </div>

          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 06. What's Next ─────────────────────────────────────────────── */}
      <CaseStudySection id="whats-next">
        <CaseStudyPhaseLabel>{t.whatsNextLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>{t.nextP1}</p>
              <p>{t.nextP2}</p>
            </div>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 07. What I Learned ──────────────────────────────────────────── */}
      <CaseStudySection id="what-i-learned">
        <CaseStudyPhaseLabel>{t.learnedLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <div className="flex flex-col gap-4">
              <p>{t.learned1}</p>
              <p>{t.learned2}</p>
              <p>{t.learned3}</p>
              <p>{t.learned4}</p>
              <p>{t.learned5}</p>
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
            href="/#card-becoming"
            className="inline-flex items-center gap-2 rounded-full bg-[#3c3c3c] px-6 py-4 text-base font-semibold leading-tight text-[#fdfdfd] transition-colors hover:bg-[#555] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfdfd]"
          >
            <ArrowLeftIcon className="size-4" />
            {t.goBack}
          </a>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
