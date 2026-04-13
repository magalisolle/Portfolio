"use client";
import Image from "next/image";
import { ExpandableImage } from "@/components/ExpandableImage";
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
import { useLanguage } from "@/lib/i18n";

const IMG = (file: string) => `/images/Transactions/${encodeURIComponent(file)}`;

const COPY = {
  en: {
    eyebrow: "Transactions Redesign",
    eyebrowLine2: "Payana",
    chips: ["B2B", "Web"] as string[],
    lede: "Payana is a B2B payments platform that centralizes supplier payments, payroll, and collections for Latin American businesses \u2014 and this is the story of how we redesigned the transactions experience from the ground up.",
    factDate: "Date", factDateVal: "Q3 2024",
    factRole: "Role", factRoleVal: "Sr. Product Designer",
    factScope: "Scope", factScopeVal: "UX Research, Concept Development, UX/UI Design, Usability Testing, Post-launch Analysis",
    factTeam: "Team", factTeamVal: "PM, 2 backends, 1 frontend",
    heroVideoLabel: "Payana transactions experience walkthrough.",
    problemLabel: "01 \u2014 The Problem",
    problemP1: "Payana handles supplier payments, payroll, and collections for businesses. Transactions \u2014 the record of every payment made or received \u2014 were scattered across different modules, with no unified view. And if a payment got rejected, users had zero way to fix it themselves. Someone at the back office had to step in.",
    problemP2: "The result: nobody was using the transactions panel. Not because they didn\u2019t need it. Because they didn\u2019t know it was there.",
    oldTrxListCaption: "Previous experience \u2014 Transactions list.",
    oldTrxDetailCaption: "Previous experience \u2014 Transaction detail.",
    quoteText: "\u201cAre there transactions? I didn\u2019t know.\u201d",
    quoteCaption: "A real user interview quote that redefined the scope of the entire project.",
    researchLabel: "02 \u2014 Research & Discovery",
    researchP1: "Two rounds of interviews, same 4 users \u2014 some on the paying side, some on the receiving side, all with at least 6 months on the platform. The two-round structure was intentional: first session to understand the pain, second to validate we were solving the right thing.",
    researchCaption: "Research synthesis \u2014 pain points and product analysis.",
    round1Emphasis: "Round 1 \u2014 Understanding the current experience.",
    round1P: "Open questions about how they were actually using transactions, and what they expected from it. The pain points that came back were consistent \u2014 and pretty damning.",
    round1Quotes: [
      "\u201cAs it is currently, I never open it because I think all the details of the TRX are too far away.\u201d",
      "\u201cCurrently, you lose if a payment is rejected.\u201d",
      "\u201cI don\u2019t always find the information I need quickly.\u201d",
    ] as string[],
    round1P2: "Three things kept coming up: you couldn\u2019t see everything in one place, you had no control when a payment failed, and finding specific transactions was a pain. None of it was about missing features \u2014 the information existed. It just wasn\u2019t surfaced.",
    round1Emphasis2: "The interviews told us what users felt. The product analysis told us why.",
    round1P3: "Alongside the interviews, I mapped the transaction model from scratch \u2014 how a single payment action generates multiple bank disbursements, how pay-ins and pay-outs relate, how a rejection propagates through the system. You can\u2019t design something legible without first understanding what it actually is. This step wasn\u2019t optional.",
    round2Emphasis: "Round 2 \u2014 Validating the direction.",
    round2P: "Before touching high fidelity, I showed those same users two rough mockups of a unified view. The reaction was fast.",
    round2Quotes: [
      "\u201cIt\u2019s super intuitive.\u201d",
      "\u201cIt is more condensed and seeing them in one place seems better to me.\u201d",
      "\u201cI think it is very good, the information is clear, showing what is in process and what has been paid.\u201d",
    ] as string[],
    round2P2: "Testing the concept before the design meant we went into the build phase with actual signal, not gut feel.",
    modelLabel: "02b \u2014 The Real Design Challenge",
    modelEmphasis: "Understanding the transaction model.",
    modelP1: "Payana\u2019s payment model isn\u2019t like a standard bank transfer. Users don\u2019t pay one supplier at a time \u2014 they batch invoices from multiple suppliers into a single payment action. Payana handles the disbursements. One click from the user kicks off a whole cascade of individual bank transfers in the background.",
    modelP2: "That created the core visibility problem: what you saw in Payana bore no obvious relationship to what your bank statement showed. A single $90 lote in Payana could be five separate movements at the bank \u2014 and your accounting team had no way to reconcile them without picking up the phone.",
    modelEmphasis2: "We mapped three possible transaction models before deciding on the structure.",
    modelP3: "This wasn\u2019t just a visual problem \u2014 it was an architectural one. How do you represent a transaction that contains invoices from multiple suppliers?",
    modelOption1: "Option 1: Group by supplier \u2014 one transaction per supplier. Cleaner at a glance, but Payana lets you mix suppliers in a single batch, so retroactive grouping breaks down fast.",
    modelOption2: "Option 2: One transaction per invoice \u2014 maximum granularity, closest to how accounting systems think. But it fragments a single payment action into dozens of rows and loses the thread entirely.",
    modelOption3: "Option 3 (chosen): A lote consolidates everything from a single payment action into one parent transaction, with each supplier\u2019s individual pay-out visible underneath. This keeps the user\u2019s mental model intact (\u201cI made one payment\u201d) while giving them the full breakdown when they need it.",
    modelOptionsCaption: "Three transaction model options \u2014 the architecture decision that shaped the entire design.",
    modelP4: "We went with Option 3 \u2014 not because it was the simplest, but because it was the most honest. The lote is what the user did. The pay-outs are what the bank saw. The goal was to make both visible and make them match.",
    rejectionEmphasis: "The rejection flow was the most operationally significant problem.",
    rejectionP1: "When a pay-out got rejected \u2014 at the Cobre level or the bank level \u2014 the whole resolution was manual: support got a WhatsApp notification, copied the transaction code, edited data in a back-office tool, and reprocessed the payment. The user had no idea what happened or why.",
    rejectionP2: "The redesign flipped that entirely. Rejection reason right there in the transaction detail. Users can edit beneficiary data and reprocess on their own. If they need a refund instead of a retry, that path is there too \u2014 no support call needed. Every reprocess a user completes is a ticket that never got opened.",
    prioritizationLabel: "03 \u2014 Concept Development & Feature Prioritization",
    prioritizationP1: "Before wireframing, I ran a value vs. effort exercise with stakeholders \u2014 mapping user needs against what was actually realistic to build.",
    prioritizationP2: "This kept scope manageable and gave the team a shared picture of what had to ship well in v1 versus what could come later.",
    executionLabel: "04 \u2014 Design Execution",
    executionEmphasis: "First approach: close to the existing, but unified.",
    executionP: "My first wireframe stayed close to the existing experience \u2014 deliberately. I wanted a baseline before adding anything. The unified list already solved the core problem: everything in one place, grouped by date, parent transactions expandable to show what was underneath.",
    firstApproach1Caption: "First approach \u2014 unified list.",
    firstApproach2Caption: "First approach \u2014 detail exploration.",
    iterationsLabel: "Usability testing surfaced four key iterations:",
    iterations: [
      "\u2014 Transaction codes were given too much visual prominence \u2014 important but not primary",
      "\u2014 Invoice detail needed more space for clearer information distribution",
      "\u2014 Users needed to see the complete money path, not just the final status",
      "\u2014 Rejected payments needed to be actionable directly from the panel \u2014 not a back-office call",
    ] as string[],
    devConstraintsEmphasis: "Dev constraints can improve design.",
    devConstraintsP: "My first instinct was a dropdown to expand sub-transactions inline. After testing and talking with engineering, we ran into a performance constraint \u2014 dropdowns don\u2019t scale at the volume Payana handles. That limitation pushed us toward a panel-based detail view, which honestly worked out better: more space, cleaner list, no performance issues.",
    moneyPathEmphasis: "The \u201cRecorrido del dinero\u201d (money path) was the most important design decision.",
    moneyPathP: "In a payments product, uncertainty kills trust. If you can\u2019t tell whether your payment is processing, stuck, or gone \u2014 you start doubting the whole platform. I built a step-by-step timeline \u2014 visible in both the list and the detail panel \u2014 that shows exactly where the money is: received, dispersing, rejected, retried, dispersed. For rejections, the path makes the failure explicit and the fix immediate \u2014 reprocess from the same screen, no support call needed.",
    moneyPathCaption: "Money path & Payment retry",
    searchEmphasis: "Search as a first-class feature.",
    searchP: "Search wasn\u2019t a filter \u2014 it was a navigation tool. A user looking for a specific supplier, NIT, ID, or tag needed results across all transaction types at once. Search results came back categorized \u2014 Proveedores, Destinatario adicional, Transacciones \u2014 so you could jump straight to what you were after.",
    finalEmphasis: "Final design \u2014 everything in one place.",
    finalP: "One unified, scannable list of every payment \u2014 grouped by date, status always visible, sub-transactions a click away in a side panel that keeps you in context.",
    finalMainCaption: "Transactions \u2014 Final Design \u00b7 Main Screen.",
    finalDetailCaption: "Transactions \u2014 Final Design \u00b7 Detail Screen.",
    postLaunchLabel: "05 \u2014 Post-Launch Analysis",
    postLaunchP1: "After launch, I built Amplitude funnels to track whether the new design was actually shifting behavior \u2014 not just hoping it worked.",
    reproceso1Emphasis: "Funnel Reproceso (direct reprocess flow).",
    reproceso1P: "18.4% of users who opened the transactions tab completed a reprocess. That feature didn\u2019t exist before. 18.4% completion on something that previously required a support call is a real number \u2014 it means users are actually handling their own payment failures now.",
    reproceso2Emphasis: "Funnel Search Reprocess.",
    reproceso2P1: "3.54% of users who came through search completed a reprocess \u2014 lower than the direct path, but informative. Users who search are usually exploring, not acting on a specific known problem. That shaped how we thought about the next iteration of search.",
    reproceso2P2: "The data also surfaced a 56% drop-off between the list and the detail view \u2014 which became the next question: what\u2019s stopping half of users from going deeper? That\u2019s the kind of thing post-launch analysis is supposed to generate.",
    outcomeLabel: "06 \u2014 Outcome",
    outcomeP1: "A transactions panel that people actually open \u2014 because now they know it exists, they can find what they\u2019re looking for, and when something goes wrong, they can handle it themselves.",
    outcomeP2: "The most concrete signal: reprocessing a rejected payment now has an 18.4% self-service completion rate. For a payments platform, that\u2019s not just a UX win \u2014 it\u2019s a trust signal. Users feel in control of their own money.",
    learnedLabel: "07 \u2014 What I Learned",
    learnedIntro: "What I learned:",
    learnedItems: [
      "The sharpest insight from this whole project came from a user who didn\u2019t know the feature existed. That quote \u2014 \u201cAre there transactions? I didn\u2019t know\u201d \u2014 changed the frame entirely. It wasn\u2019t a design problem. It was a discoverability and architecture problem that looked like a design problem. Fixing the surface without understanding that would\u2019ve shipped a nicer version of the same invisible feature.",
      "Testing the concept before the design saved real time. Two rough mockups in round 2 of interviews. If users had pushed back on the unified view, we could\u2019ve pivoted without burning a sprint on high fidelity. Instead we got clear signal and moved fast.",
      "Dev constraints can make your design better. The dropdown performance issue pushed us to a panel-based view that ended up being the right call. I used to think constraints were things to push against \u2014 this project changed that.",
      "Define success metrics before the first wireframe, not after the last handoff. I built the Amplitude funnels after shipping. That\u2019s backwards. The instrumentation plan comes first \u2014 every time.",
    ] as string[],
    thankYou: "Thank you for reading!",
    goBack: "Go Back",
  },
  es: {
    eyebrow: "Redise\u00f1o de Transacciones",
    eyebrowLine2: "Payana",
    chips: ["B2B", "Web"] as string[],
    lede: "Payana es una plataforma de pagos B2B que centraliza pagos a proveedores, n\u00f3mina y cobranzas para empresas latinoamericanas \u2014 y esta es la historia de c\u00f3mo redise\u00f1amos la experiencia de transacciones desde cero.",
    factDate: "Fecha", factDateVal: "Q3 2024",
    factRole: "Rol", factRoleVal: "Sr. Dise\u00f1adora de Producto",
    factScope: "Alcance", factScopeVal: "UX Research, Desarrollo de Concepto, UX/UI Design, Tests de Usabilidad, An\u00e1lisis Post-lanzamiento",
    factTeam: "Equipo", factTeamVal: "PM, 2 backends, 1 frontend",
    heroVideoLabel: "Recorrido por la experiencia de transacciones de Payana.",
    problemLabel: "01 \u2014 El Problema",
    problemP1: "Payana maneja pagos a proveedores, n\u00f3mina y cobranzas para empresas. Las transacciones \u2014 el registro de cada pago realizado o recibido \u2014 estaban dispersas en diferentes m\u00f3dulos, sin ninguna vista unificada. Y si un pago era rechazado, los usuarios no ten\u00edan forma de solucionarlo por su cuenta. Alguien del back office ten\u00eda que intervenir.",
    problemP2: "El resultado: nadie usaba el panel de transacciones. No porque no lo necesitaran. Porque no sab\u00edan que exist\u00eda.",
    oldTrxListCaption: "Experiencia anterior \u2014 Lista de transacciones.",
    oldTrxDetailCaption: "Experiencia anterior \u2014 Detalle de transacci\u00f3n.",
    quoteText: "\u201c\u00bfHay transacciones? No sab\u00eda.\u201d",
    quoteCaption: "Una cita real de entrevista de usuario que redefini\u00f3 el alcance de todo el proyecto.",
    researchLabel: "02 \u2014 Investigaci\u00f3n y Descubrimiento",
    researchP1: "Dos rondas de entrevistas, los mismos 4 usuarios \u2014 algunos del lado pagador, otros del lado receptor, todos con al menos 6 meses en la plataforma. La estructura de dos rondas fue intencional: primera sesi\u00f3n para entender el dolor, segunda para validar que est\u00e1bamos resolviendo lo correcto.",
    researchCaption: "S\u00edntesis de investigaci\u00f3n \u2014 pain points y an\u00e1lisis del producto.",
    round1Emphasis: "Ronda 1 \u2014 Entendiendo la experiencia actual.",
    round1P: "Preguntas abiertas sobre c\u00f3mo usaban realmente las transacciones y qu\u00e9 esperaban de ellas. Los pain points que surgieron fueron consistentes \u2014 y bastante reveladores.",
    round1Quotes: [
      "\u201cComo est\u00e1 actualmente, nunca lo abro porque siento que todos los detalles de la TRX est\u00e1n muy lejos.\u201d",
      "\u201cActualmente, si un pago es rechazado, lo perd\u00e9s.\u201d",
      "\u201cNo siempre encuentro r\u00e1pido la informaci\u00f3n que necesito.\u201d",
    ] as string[],
    round1P2: "Tres cosas aparec\u00edan consistentemente: no pod\u00edas ver todo en un solo lugar, no ten\u00edas control cuando un pago fallaba, y encontrar transacciones espec\u00edficas era un dolor. Ninguno de esos problemas era por features faltantes \u2014 la informaci\u00f3n exist\u00eda. Solo no estaba expuesta.",
    round1Emphasis2: "Las entrevistas nos dijeron lo que sent\u00edan los usuarios. El an\u00e1lisis del producto nos dijo por qu\u00e9.",
    round1P3: "Junto con las entrevistas, mape\u00e9 el modelo de transacciones desde cero \u2014 c\u00f3mo una \u00fanica acci\u00f3n de pago genera m\u00faltiples desembolsos bancarios, c\u00f3mo se relacionan los pay-ins y los pay-outs, c\u00f3mo se propaga un rechazo a trav\u00e9s del sistema. No pod\u00e9s dise\u00f1ar algo legible sin entender primero qu\u00e9 es realmente. Este paso no era opcional.",
    round2Emphasis: "Ronda 2 \u2014 Validando la direcci\u00f3n.",
    round2P: "Antes de tocar alta fidelidad, le mostr\u00e9 a esos mismos usuarios dos mockups borradores de una vista unificada. La reacci\u00f3n fue r\u00e1pida.",
    round2Quotes: [
      "\u201cEs super intuitivo.\u201d",
      "\u201cEst\u00e1 m\u00e1s condensado y verlos en un solo lugar me parece mejor.\u201d",
      "\u201cMe parece muy bueno, la informaci\u00f3n est\u00e1 clara, mostrando lo que est\u00e1 en proceso y lo que fue pagado.\u201d",
    ] as string[],
    round2P2: "Testear el concepto antes del dise\u00f1o signific\u00f3 que entramos a la fase de construcci\u00f3n con se\u00f1al real, no con intuici\u00f3n.",
    modelLabel: "02b \u2014 El Desaf\u00edo Real de Dise\u00f1o",
    modelEmphasis: "Entendiendo el modelo de transacciones.",
    modelP1: "El modelo de pagos de Payana no es como una transferencia bancaria est\u00e1ndar. Los usuarios no pagan a un proveedor a la vez \u2014 agrupan facturas de m\u00faltiples proveedores en una \u00fanica acci\u00f3n de pago. Payana maneja los desembolsos. Un clic del usuario activa toda una cascada de transferencias bancarias individuales en segundo plano.",
    modelP2: "Eso cre\u00f3 el problema central de visibilidad: lo que ve\u00edas en Payana no ten\u00eda ninguna relaci\u00f3n obvia con lo que mostraba tu extracto bancario. Un \u00fanico lote de $90 en Payana pod\u00eda ser cinco movimientos separados en el banco \u2014 y tu equipo contable no ten\u00eda forma de conciliarlos sin llamar por tel\u00e9fono.",
    modelEmphasis2: "Mapeamos tres posibles modelos de transacciones antes de decidir la estructura.",
    modelP3: "No era solo un problema visual \u2014 era uno arquitect\u00f3nico. \u00bfC\u00f3mo represent\u00e1s una transacci\u00f3n que contiene facturas de m\u00faltiples proveedores?",
    modelOption1: "Opci\u00f3n 1: Agrupar por proveedor \u2014 una transacci\u00f3n por proveedor. M\u00e1s limpio a primera vista, pero Payana permite mezclar proveedores en un mismo lote, as\u00ed que la agrupaci\u00f3n retroactiva se rompe r\u00e1pido.",
    modelOption2: "Opci\u00f3n 2: Una transacci\u00f3n por factura \u2014 m\u00e1xima granularidad, lo m\u00e1s cercano a c\u00f3mo piensan los sistemas contables. Pero fragmenta una \u00fanica acci\u00f3n de pago en docenas de filas y pierde el hilo por completo.",
    modelOption3: "Opci\u00f3n 3 (elegida): Un lote consolida todo de una \u00fanica acci\u00f3n de pago en una transacci\u00f3n padre, con el pay-out individual de cada proveedor visible por debajo. Esto mantiene el modelo mental del usuario intacto (\u201chice un pago\u201d) mientras le da el desglose completo cuando lo necesita.",
    modelOptionsCaption: "Tres opciones de modelo de transacciones \u2014 la decisi\u00f3n arquitect\u00f3nica que dio forma a todo el dise\u00f1o.",
    modelP4: "Elegimos la Opci\u00f3n 3 \u2014 no porque fuera la m\u00e1s simple, sino porque era la m\u00e1s honesta. El lote es lo que hizo el usuario. Los pay-outs son lo que vio el banco. El objetivo era hacer ambos visibles y que coincidieran.",
    rejectionEmphasis: "El flujo de rechazos era el problema operativamente m\u00e1s significativo.",
    rejectionP1: "Cuando un pay-out era rechazado \u2014 a nivel Cobre o a nivel banco \u2014 toda la resoluci\u00f3n era manual: soporte recib\u00eda una notificaci\u00f3n por WhatsApp, copiaba el c\u00f3digo de transacci\u00f3n, editaba datos en una herramienta de back office y reprocesaba el pago. El usuario no ten\u00eda idea de qu\u00e9 hab\u00eda pasado ni por qu\u00e9.",
    rejectionP2: "El redise\u00f1o invirti\u00f3 eso completamente. El motivo del rechazo, directo en el detalle de la transacci\u00f3n. Los usuarios pueden editar los datos del beneficiario y reprocesar por su cuenta. Si necesitan un reembolso en lugar de un reintento, ese camino tambi\u00e9n est\u00e1 \u2014 sin llamar a soporte. Cada reproceso que completa un usuario es un ticket que nunca se abri\u00f3.",
    prioritizationLabel: "03 \u2014 Desarrollo de Concepto y Priorizaci\u00f3n de Features",
    prioritizationP1: "Antes del wireframing, realic\u00e9 un ejercicio de valor vs. esfuerzo con los stakeholders \u2014 mapeando las necesidades de los usuarios contra lo que era realistamente construible.",
    prioritizationP2: "Esto mantuvo el alcance manejable y le dio al equipo una imagen compartida de qu\u00e9 ten\u00eda que funcionar bien en la v1 versus qu\u00e9 pod\u00eda venir despu\u00e9s.",
    executionLabel: "04 \u2014 Ejecuci\u00f3n del Dise\u00f1o",
    executionEmphasis: "Primer approach: cerca de lo existente, pero unificado.",
    executionP: "Mi primer wireframe se mantuvo cerca de la experiencia existente \u2014 deliberadamente. Quer\u00eda una l\u00ednea base antes de agregar cualquier cosa. La lista unificada ya resolv\u00eda el problema central: todo en un lugar, agrupado por fecha, transacciones padre expandibles para mostrar lo que hab\u00eda debajo.",
    firstApproach1Caption: "Primer approach \u2014 lista unificada.",
    firstApproach2Caption: "Primer approach \u2014 exploraci\u00f3n del detalle.",
    iterationsLabel: "Los tests de usabilidad revelaron cuatro iteraciones clave:",
    iterations: [
      "\u2014 Los c\u00f3digos de transacci\u00f3n ten\u00edan demasiada prominencia visual \u2014 importantes pero no primarios",
      "\u2014 El detalle de la factura necesitaba m\u00e1s espacio para una distribuci\u00f3n m\u00e1s clara de la informaci\u00f3n",
      "\u2014 Los usuarios necesitaban ver el recorrido completo del dinero, no solo el estado final",
      "\u2014 Los pagos rechazados necesitaban ser accionables directamente desde el panel \u2014 no una llamada al back office",
    ] as string[],
    devConstraintsEmphasis: "Las restricciones de desarrollo pueden mejorar tu dise\u00f1o.",
    devConstraintsP: "Mi primer instinto fue un dropdown para expandir las sub-transacciones inline. Despu\u00e9s de testear y hablar con ingenier\u00eda, nos encontramos con una restricci\u00f3n de performance \u2014 los dropdowns no escalan al volumen que maneja Payana. Esa limitaci\u00f3n nos empuj\u00f3 hacia una vista de detalle basada en panel, que honestamente funcion\u00f3 mejor: m\u00e1s espacio, lista m\u00e1s limpia, sin problemas de performance.",
    moneyPathEmphasis: "El \u201cRecorrido del dinero\u201d fue la decisi\u00f3n de dise\u00f1o m\u00e1s importante.",
    moneyPathP: "En un producto de pagos, la incertidumbre mata la confianza. Si no pod\u00e9s saber si tu pago est\u00e1 procesando, trabado o perdido \u2014 empez\u00e1s a dudar de toda la plataforma. Construí un timeline paso a paso \u2014 visible tanto en la lista como en el panel de detalle \u2014 que muestra exactamente d\u00f3nde est\u00e1 el dinero: recibido, dispersando, rechazado, reintentado, dispersado. Para los rechazos, el recorrido hace expl\u00edcita la falla y la correcci\u00f3n inmediata \u2014 reprocesar desde la misma pantalla, sin llamar a soporte.",
    moneyPathCaption: "Recorrido del dinero & Reintento de pago",
    searchEmphasis: "La b\u00fasqueda como feature de primer nivel.",
    searchP: "La b\u00fasqueda no era un filtro \u2014 era una herramienta de navegaci\u00f3n. Un usuario buscando un proveedor espec\u00edfico, NIT, ID o etiqueta necesitaba resultados en todos los tipos de transacciones a la vez. Los resultados de b\u00fasqueda volv\u00edan categorizados \u2014 Proveedores, Destinatario adicional, Transacciones \u2014 para poder ir directo a lo que buscaba.",
    finalEmphasis: "Dise\u00f1o final \u2014 todo en un lugar.",
    finalP: "Una lista unificada y escaneable de cada pago \u2014 agrupada por fecha, estado siempre visible, sub-transacciones a un clic en un panel lateral que mantiene el contexto.",
    finalMainCaption: "Transacciones \u2014 Dise\u00f1o Final \u00b7 Pantalla Principal.",
    finalDetailCaption: "Transacciones \u2014 Dise\u00f1o Final \u00b7 Pantalla de Detalle.",
    postLaunchLabel: "05 \u2014 An\u00e1lisis Post-lanzamiento",
    postLaunchP1: "Despu\u00e9s del lanzamiento, constru\u00ed funnels en Amplitude para rastrear si el nuevo dise\u00f1o realmente estaba cambiando el comportamiento \u2014 no solo esperando que funcionara.",
    reproceso1Emphasis: "Funnel Reproceso (flujo de reproceso directo).",
    reproceso1P: "El 18,4% de los usuarios que abrieron la pesta\u00f1a de transacciones completaron un reproceso. Esa feature no exist\u00eda antes. Un 18,4% de completaci\u00f3n en algo que antes requer\u00eda una llamada a soporte es un n\u00famero real \u2014 significa que los usuarios est\u00e1n manejando sus propios errores de pago.",
    reproceso2Emphasis: "Funnel Search Reprocess.",
    reproceso2P1: "El 3,54% de los usuarios que llegaron por b\u00fasqueda completaron un reproceso \u2014 menor que el camino directo, pero informativo. Los usuarios que buscan generalmente est\u00e1n explorando, no actuando sobre un problema conocido espec\u00edfico. Eso molde\u00f3 c\u00f3mo pensamos la siguiente iteraci\u00f3n de la b\u00fasqueda.",
    reproceso2P2: "Los datos tambi\u00e9n mostraron un drop-off del 56% entre la lista y la vista de detalle \u2014 que se convirti\u00f3 en la pr\u00f3xima pregunta: \u00bfqu\u00e9 est\u00e1 deteniendo a la mitad de los usuarios de profundizar? Eso es lo que se supone que genera el an\u00e1lisis post-lanzamiento.",
    outcomeLabel: "06 \u2014 Resultados",
    outcomeP1: "Un panel de transacciones que la gente realmente abre \u2014 porque ahora sabe que existe, puede encontrar lo que busca y cuando algo sale mal, puede solucionarlo por su cuenta.",
    outcomeP2: "La se\u00f1al m\u00e1s concreta: reprocesar un pago rechazado ahora tiene una tasa de completaci\u00f3n self-service del 18,4%. Para una plataforma de pagos, eso no es solo un logro de UX \u2014 es una se\u00f1al de confianza. Los usuarios sienten que tienen el control de su propio dinero.",
    learnedLabel: "07 \u2014 Lo que Aprend\u00ed",
    learnedIntro: "Lo que aprend\u00ed:",
    learnedItems: [
      "El insight m\u00e1s preciso de todo este proyecto vino de un usuario que no sab\u00eda que la feature exist\u00eda. Esa cita \u2014 \u201c\u00bfHay transacciones? No sab\u00eda\u201d \u2014 cambi\u00f3 el marco por completo. No era un problema de dise\u00f1o. Era un problema de descubribilidad y arquitectura que parec\u00eda un problema de dise\u00f1o. Arreglar la superficie sin entender eso habr\u00eda lanzado una versi\u00f3n m\u00e1s bonita de la misma feature invisible.",
      "Testear el concepto antes del dise\u00f1o ahorr\u00f3 tiempo real. Dos mockups borradores en la ronda 2 de entrevistas. Si los usuarios hubieran rechazado la vista unificada, podr\u00edamos haber pivotado sin quemar un sprint en alta fidelidad. En cambio, obtuvimos se\u00f1al clara y avanzamos r\u00e1pido.",
      "Las restricciones de desarrollo pueden mejorar tu dise\u00f1o. El problema de performance con el dropdown nos empuj\u00f3 a una vista basada en panel que result\u00f3 ser la decisi\u00f3n correcta. Antes pensaba que las restricciones eran cosas contra las que empujar \u2014 este proyecto lo cambi\u00f3.",
      "Definir m\u00e9tricas de \u00e9xito antes del primer wireframe, no despu\u00e9s del \u00faltimo handoff. Constru\u00ed los funnels de Amplitude despu\u00e9s del lanzamiento. Eso est\u00e1 al rev\u00e9s. El plan de instrumentaci\u00f3n va primero \u2014 siempre.",
    ] as string[],
    thankYou: "\u00a1Gracias por leer!",
    goBack: "Volver",
  },
};

export function TransactionsCaseStudyContent() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <CaseStudyLayout
      pageBgClassName="bg-[#FBF8FB]"
      ringOffsetClassName="focus-visible:ring-offset-[#FBF8FB]"
      intro={
        <CaseStudyProjectHero
          eyebrow={t.eyebrow}
          eyebrowLine2={t.eyebrowLine2}
          chips={t.chips}
          heroBg="#EDDEEA"
          lede={t.lede}
          facts={[
            { label: t.factDate, value: t.factDateVal },
            { label: t.factRole, value: t.factRoleVal },
            { label: t.factScope, value: t.factScopeVal },
            { label: t.factTeam, value: t.factTeamVal },
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
                aria-label={t.heroVideoLabel}
              >
                <source src={IMG("paaayana (1).mp4")} type="video/mp4" />
              </video>
            </div>
          </figure>
        </div>
      </CaseStudyWideBleed>

      {/* ── 01 The Problem ─────────────────────────────────────────────── */}
      <CaseStudySection id="the-problem">
        <CaseStudyPhaseLabel>{t.problemLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.problemP1}</p>
            <p>{t.problemP2}</p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <figure className="m-0 flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6EEF5] p-3">
              <ExpandableImage
                src={IMG("transaccion vieja1.png")}
                zoomable
                alt="Old transactions experience — first screen."
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 50vw, 593px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.oldTrxListCaption}
            </figcaption>
          </figure>
          <figure className="m-0 flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6EEF5] p-3">
              <ExpandableImage
                src={IMG("transaccion vieja 2.png")}
                zoomable
                alt="Old transactions experience — second screen."
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 50vw, 593px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.oldTrxDetailCaption}
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100%,900px)] flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#FFCACA] px-8 py-10 flex items-center justify-center">
              <p className="text-center text-2xl font-medium leading-snug tracking-tight text-[#3c3c3c] md:text-3xl">
                {t.quoteText}
              </p>
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.quoteCaption}
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      {/* ── 02 Research & Discovery ─────────────────────────────────────── */}
      <CaseStudySection id="research">
        <CaseStudyPhaseLabel>{t.researchLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.researchP1}</p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100dvw,1424px)] flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl p-6" style={{ backgroundColor: "#F6EEF5" }}>
              <ExpandableImage
                src={IMG("research.png")}
                zoomable
                alt="Research synthesis — user interview insights and product analysis."
                width={1600}
                height={900}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1424px) 100vw, 1424px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.researchCaption}
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudySection id="research-continued">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.round1Emphasis}</CaseStudyEmphasis>
              <p>{t.round1P}</p>
            </CaseStudyHeadingBlock>

            <div className="rounded-2xl bg-[#FFCACA] px-5 py-5 md:px-6 md:py-6 flex flex-col gap-4">
              {t.round1Quotes.map((quote) => (
                <p
                  key={quote}
                  className="text-base font-medium leading-[1.56] tracking-[0.03em] text-ink md:text-lg"
                >
                  {quote}
                </p>
              ))}
            </div>

            <p>{t.round1P2}</p>

            <CaseStudyHeadingBlock>
              <p className="text-xl font-medium leading-[1.4] tracking-[0.02em] text-ink md:text-2xl">
                {t.round1Emphasis2}
              </p>
              <p>{t.round1P3}</p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.round2Emphasis}</CaseStudyEmphasis>
              <p>{t.round2P}</p>
            </CaseStudyHeadingBlock>

            <div className="rounded-2xl bg-[#C8F4B7] px-5 py-5 md:px-6 md:py-6 flex flex-col gap-4">
              {t.round2Quotes.map((quote) => (
                <p
                  key={quote}
                  className="text-base font-medium leading-[1.56] tracking-[0.03em] text-ink md:text-lg"
                >
                  {quote}
                </p>
              ))}
            </div>

            <p>{t.round2P2}</p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 02b Transaction Model ───────────────────────────────────────── */}
      <CaseStudySection id="transaction-model">
        <CaseStudyPhaseLabel>{t.modelLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.modelEmphasis}</CaseStudyEmphasis>
              <p>{t.modelP1}</p>
              <p>{t.modelP2}</p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.modelEmphasis2}</CaseStudyEmphasis>
              <p>{t.modelP3}</p>
            </CaseStudyHeadingBlock>

            <p><strong>Option 1:</strong> {t.modelOption1}</p>
            <p><strong>Option 2:</strong> {t.modelOption2}</p>
            <p><strong>Option 3 (chosen):</strong> {t.modelOption3}</p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100dvw,1424px)] flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6EEF5] p-6">
              <ExpandableImage
                src={IMG("opciones.png")}
                zoomable
                alt="Three transaction model options mapped before the final decision."
                width={1600}
                height={900}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 100vw, 900px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.modelOptionsCaption}
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudySection id="option3-rationale" className="!mt-4">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.modelP4}</p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── Rejection Flow ──────────────────────────────────────────────── */}
      <CaseStudySection id="rejection-flow">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.rejectionEmphasis}</CaseStudyEmphasis>
              <p>{t.rejectionP1}</p>
              <p>{t.rejectionP2}</p>
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
        <CaseStudyPhaseLabel>{t.prioritizationLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.prioritizationP1}</p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* Prioritization matrix */}
      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100dvw,700px)] flex flex-col gap-3">
              <ExpandableImage
                src={IMG("diagramapriorizacion.png")}
                zoomable
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
            <p>{t.prioritizationP2}</p>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      {/* ── 04 Design Execution ─────────────────────────────────────────── */}
      <CaseStudySection id="design-execution">
        <CaseStudyPhaseLabel>{t.executionLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.executionEmphasis}</CaseStudyEmphasis>
              <p>{t.executionP}</p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <figure className="m-0 flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6EEF5] p-3">
              <ExpandableImage
                src={IMG("first approach1.png")}
                zoomable
                alt="First wireframe approach — unified transactions list."
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 50vw, 593px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.firstApproach1Caption}
            </figcaption>
          </figure>
          <figure className="m-0 flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl bg-[#F6EEF5] p-3">
              <ExpandableImage
                src={IMG("first approach2.png")}
                zoomable
                alt="First wireframe approach — transaction detail exploration."
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 50vw, 593px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.firstApproach2Caption}
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudySection id="design-execution-iterations" className="!mt-10 md:!mt-14">
        <CaseStudyPhaseContent>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-medium leading-[1.4] tracking-[0.03em] text-muted">
              {t.iterationsLabel}
            </p>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#F6EEF5" }}>
              <div className="flex flex-col gap-3 text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                {t.iterations.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudySection id="design-execution-2">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.devConstraintsEmphasis}</CaseStudyEmphasis>
              <p>{t.devConstraintsP}</p>
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
                  <ExpandableImage
                    src={IMG(file)}
                    alt={label}
                    zoomable
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
              <CaseStudyEmphasis>{t.moneyPathEmphasis}</CaseStudyEmphasis>
              <p>{t.moneyPathP}</p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-2xl p-6 flex flex-col md:flex-row items-start gap-6 w-full max-w-[1100px]" style={{ backgroundColor: "#F6EEF5" }}>
            <ExpandableImage
              src={IMG("PaymentFlow.png")}
              zoomable
              alt="Recorrido del dinero — full payment timeline."
              width={800}
              height={900}
              className="h-auto w-full rounded-xl"
              containerClassName="w-full md:w-[55%]"
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
            {t.moneyPathCaption}
          </figcaption>
        </div>
      </CaseStudyWideBleed>

      {/* ── Search ─────────────────────────────────────────────────────── */}
      <CaseStudySection id="search">
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.searchEmphasis}</CaseStudyEmphasis>
              <p>{t.searchP}</p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100%,800px)] flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl p-6" style={{ backgroundColor: "#F6EEF5" }}>
              <ExpandableImage
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
              <CaseStudyEmphasis>{t.finalEmphasis}</CaseStudyEmphasis>
              <p>{t.finalP}</p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100%,950px)] flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl px-6 py-1" style={{ background: "linear-gradient(135deg, #E4DDFF 0%, #FFFFFF 100%)" }}>
              <ExpandableImage
                src={IMG("mockupfinal1.png")}
                alt="Transactions final design — main screen."
                width={1194}
                height={849}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 100vw, 1100px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.finalMainCaption}
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="flex w-full min-w-0 justify-center">
          <figure className="m-0 w-full max-w-[min(100%,950px)] flex flex-col gap-3 mt-10 md:mt-16">
            <div className="overflow-hidden rounded-2xl px-6 py-1" style={{ background: "linear-gradient(135deg, #E4DDFF 0%, #FFFFFF 100%)" }}>
              <ExpandableImage
                src={IMG("trxdetails 1.png")}
                alt="Transactions final design — detail panel."
                width={1194}
                height={849}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1186px) 100vw, 1100px"
              />
            </div>
            <figcaption className="text-center text-sm leading-snug text-ink/50">
              {t.finalDetailCaption}
            </figcaption>
          </figure>
        </div>
      </CaseStudyWideBleed>

      {/* ── 05 Post-Launch Analysis ─────────────────────────────────────── */}
      <CaseStudySection id="post-launch">
        <CaseStudyPhaseLabel>{t.postLaunchLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <CaseStudyProse>
            <p>{t.postLaunchP1}</p>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.reproceso1Emphasis}</CaseStudyEmphasis>
              <p>{t.reproceso1P}</p>
            </CaseStudyHeadingBlock>

            <CaseStudyHeadingBlock>
              <CaseStudyEmphasis>{t.reproceso2Emphasis}</CaseStudyEmphasis>
              <p>{t.reproceso2P1}</p>
              <p>{t.reproceso2P2}</p>
            </CaseStudyHeadingBlock>
          </CaseStudyProse>
        </CaseStudyPhaseContent>
      </CaseStudySection>

      <CaseStudyWideBleed className="!mt-10 md:!mt-14">
        <div className="overflow-hidden rounded-2xl p-6" style={{ backgroundColor: "#F6EEF5" }}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ExpandableImage
              src={IMG("analisys1.png")}
              zoomable
              alt="Amplitude funnel — reprocess flow analysis."
              width={800}
              height={500}
              className="h-auto w-full rounded-xl"
              sizes="(max-width: 1186px) 50vw, 593px"
            />
            <ExpandableImage
              src={IMG("analisys2.png")}
              zoomable
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
        <CaseStudyPhaseLabel>{t.outcomeLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-6">
            {/* Left — text */}
            <div className="flex flex-col gap-6 md:flex-1">
              <div className="flex flex-col gap-2 text-lg leading-[1.56] tracking-[0.03em] text-muted">
                <p>{t.outcomeP1}</p>
                <p>{t.outcomeP2}</p>
              </div>
            </div>
            {/* Right — images card */}
            <div className="overflow-hidden rounded-2xl p-6 flex flex-col gap-7 md:w-[52%] shrink-0" style={{ backgroundColor: "#F6EEF5" }}>
              <ExpandableImage
                src={IMG("top events.png")}
                zoomable
                alt="Top events — post-launch Amplitude data."
                width={800}
                height={500}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <ExpandableImage
                src={IMG("most viewed.png")}
                zoomable
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
        <CaseStudyPhaseLabel>{t.learnedLabel}</CaseStudyPhaseLabel>
        <CaseStudyPhaseContent>
          <div>
            <div className="mt-9 flex flex-col gap-4">
              <p className="text-lg font-medium leading-[1.56] tracking-[0.03em] text-ink">
                {t.learnedIntro}
              </p>
              {t.learnedItems.map((lesson) => (
                <p key={lesson}>{lesson}</p>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-center gap-6 text-center md:mt-24">
              <p className="font-[family-name:var(--font-general-sans)] text-2xl font-semibold text-heading-case">
                {t.thankYou}
              </p>
              <Link href="/#card-transactions" className="btn-primary">
                <ArrowLeftIcon className="size-4" aria-hidden />
                {t.goBack}
              </Link>
            </div>
          </div>
        </CaseStudyPhaseContent>
      </CaseStudySection>

    </CaseStudyLayout>
  );
}
