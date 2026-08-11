"use client";

import { motion, useReducedMotion } from "framer-motion";
import GridBackground from "./GridBackground";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function CTAFinal() {
  return (
    <section className="section-y relative overflow-hidden bg-winco-white">
      <GridBackground variant="light" fade="radial" opacity={0.6} />
      <div className="container-winco relative">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          {/* ── IZQUIERDA — texto + card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="heading-eyebrow">En desarrollo</p>
            <h2 className="heading-section mt-4 text-winco-black">
              Estamos construyendo lo próximo.
            </h2>
            <p className="mt-6 max-w-[460px] text-[17px] leading-relaxed text-winco-muted md:text-[18px]">
              Seguimos identificando oportunidades y desarrollando nuevas marcas
              para las necesidades del consumidor moderno. Nuestra próxima línea
              llega para una necesidad muy real del trópico.
            </p>

            {/* Card destacada — próxima línea */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              className="mt-8 max-w-[460px] rounded-card border border-winco-border bg-winco-bg-alt p-6 md:p-7"
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A855F7] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A855F7]" />
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#A855F7]">
                  Próximamente
                </span>
              </div>
              <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.02em] text-winco-black">
                Toallitas repelentes de mosquitos
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-winco-muted">
                Protección práctica, portátil y sin aerosoles. Diseñada para el
                clima y el estilo de vida de la región.
              </p>
            </motion.div>

            <a
              href="#contacto"
              className="mt-8 inline-flex items-center justify-center rounded-btn bg-winco-black px-8 py-4 text-[13px] font-medium uppercase tracking-[0.1em] text-winco-white transition duration-200 hover:scale-[1.02] hover:bg-neutral-800"
            >
              Conócenos
            </a>
          </motion.div>

          {/* ── DERECHA — blueprint mosquitos ── */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(#D9D9D9 1px, transparent 1px), linear-gradient(90deg, #D9D9D9 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                maskImage:
                  "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 30%, transparent 80%)",
              }}
            />
            <MosquitoBlueprintSVG />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Blueprint estilo sketch de la línea repelente en desarrollo:
   empaque de toallitas al centro, arcos concéntricos sugiriendo
   un campo de protección y 4 mosquitos en distintas posiciones
   alejándose del empaque.
   viewBox 500×500.
   ═══════════════════════════════════════════════════════════════ */

const VB = 500;
// Empaque
const BX = 175;
const BY = 130;
const BW = 150;
const BH = 240;
const BX2 = BX + BW; // 325
const BY2 = BY + BH; // 370
const CX = BX + BW / 2; // 250
const CY = BY + BH / 2; // 250

const drawVar = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};
const fadeVar = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function MosquitoBlueprintSVG() {
  const reduce = !!useReducedMotion();

  return (
    <motion.svg
      viewBox={`0 0 ${VB} ${VB}`}
      className="relative block h-auto w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      fill="none"
      stroke="url(#wc-cta-grad)"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient
          id="wc-cta-grad"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2={VB}
          y2={VB}
        >
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="0.33" stopColor="#A855F7" />
          <stop offset="0.66" stopColor="#EC4899" />
          <stop offset="1" stopColor="#F59E0B" />
          {!reduce && (
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="-100 -80; 100 80; -100 -80"
              dur="8s"
              repeatCount="indefinite"
            />
          )}
        </linearGradient>
      </defs>

      {/* ═════════ Guías diagonales sutiles ═════════ */}
      <motion.line
        x1={20}
        y1={20}
        x2={480}
        y2={480}
        strokeWidth={0.5}
        strokeDasharray="4 6"
        opacity={0.25}
        variants={fadeVar}
        transition={{ duration: 0.8, delay: 0 }}
      />
      <motion.line
        x1={480}
        y1={20}
        x2={20}
        y2={480}
        strokeWidth={0.5}
        strokeDasharray="4 6"
        opacity={0.22}
        variants={fadeVar}
        transition={{ duration: 0.8, delay: 0.1 }}
      />

      {/* ═════════ 1. EMPAQUE (primero) ═════════ */}
      <motion.rect
        x={BX}
        y={BY}
        width={BW}
        height={BH}
        strokeWidth={1.8}
        variants={drawVar}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
      />
      {/* Banda superior (área etiqueta) */}
      <motion.line
        x1={BX}
        y1={BY + 44}
        x2={BX2}
        y2={BY + 44}
        strokeWidth={1.3}
        variants={drawVar}
        transition={{ duration: 0.5, delay: 1.1, ease: "easeInOut" }}
      />
      {/* Zona de dispensado (dashed) */}
      <motion.rect
        x={BX + 22}
        y={BY + 78}
        width={BW - 44}
        height={BH - 130}
        strokeWidth={0.9}
        strokeDasharray="4 4"
        opacity={0.55}
        variants={fadeVar}
        transition={{ duration: 0.6, delay: 1.4 }}
      />
      {/* Línea base */}
      <motion.line
        x1={BX}
        y1={BY2 - 30}
        x2={BX2}
        y2={BY2 - 30}
        strokeWidth={0.9}
        variants={drawVar}
        transition={{ duration: 0.5, delay: 1.25, ease: "easeInOut" }}
      />
      {/* Esquinas ancladas */}
      {(
        [
          [BX, BY],
          [BX2, BY],
          [BX, BY2],
          [BX2, BY2],
        ] as [number, number][]
      ).map(([x, y], i) => (
        <motion.circle
          key={`corner-${i}`}
          cx={x}
          cy={y}
          r={3}
          fill="#FFFFFF"
          strokeWidth={1}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{
            duration: 0.35,
            delay: 1.35 + i * 0.05,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />
      ))}

      {/* ═════════ 2. ARCOS concéntricos (después del empaque) ═════════ */}
      <ProtectionArc
        r={135}
        top
        drawDelay={1.7}
        pulseDur={5}
        pulseBegin={2.9}
        reduce={reduce}
      />
      <ProtectionArc
        r={135}
        top={false}
        drawDelay={1.75}
        pulseDur={5.4}
        pulseBegin={3.0}
        reduce={reduce}
      />
      <ProtectionArc
        r={172}
        top
        drawDelay={1.95}
        pulseDur={6}
        pulseBegin={3.15}
        reduce={reduce}
      />
      <ProtectionArc
        r={172}
        top={false}
        drawDelay={2.0}
        pulseDur={6.4}
        pulseBegin={3.25}
        reduce={reduce}
      />

      {/* ═════════ 3. MOSQUITOS (al final) ═════════ */}
      <Mosquito
        cx={78}
        cy={92}
        scale={0.85}
        rotation={-135}
        drawStart={2.4}
        driftDur={5.2}
        driftBegin={3.4}
        driftValues="0 0; 3 -2; -2 3; 4 1; -1 -3; 2 4; 0 0"
        reduce={reduce}
      />
      <Mosquito
        cx={425}
        cy={115}
        scale={1}
        rotation={-35}
        drawStart={2.65}
        driftDur={4.6}
        driftBegin={3.5}
        driftValues="0 0; -3 2; 2 4; -2 -1; 4 -2; -1 3; 0 0"
        reduce={reduce}
      />
      <Mosquito
        cx={65}
        cy={355}
        scale={0.7}
        rotation={155}
        drawStart={2.85}
        driftDur={5.8}
        driftBegin={3.7}
        driftValues="0 0; 2 -3; -3 -1; 1 3; -2 -2; 4 1; 0 0"
        reduce={reduce}
      />
      <Mosquito
        cx={440}
        cy={395}
        scale={0.78}
        rotation={38}
        drawStart={3.05}
        driftDur={4.9}
        driftBegin={3.6}
        driftValues="0 0; -2 3; 3 -2; -3 1; 2 4; -4 -1; 0 0"
        reduce={reduce}
      />

      {/* ═════════ Cotas + etiquetas ═════════ */}
      <motion.g
        variants={fadeVar}
        transition={{ duration: 0.5, delay: 2.35 }}
        strokeWidth={0.7}
        opacity={0.65}
      >
        <line x1={BX} y1={BY - 20} x2={BX2} y2={BY - 20} />
        <line x1={BX} y1={BY - 25} x2={BX} y2={BY - 15} />
        <line x1={BX2} y1={BY - 25} x2={BX2} y2={BY - 15} />
      </motion.g>
      <motion.text
        x={CX}
        y={BY - 26}
        fill="#525252"
        stroke="none"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize={9}
        textAnchor="middle"
        letterSpacing="1.5"
        variants={fadeVar}
        transition={{ duration: 0.5, delay: 2.4 }}
      >
        150 MM
      </motion.text>

      <motion.text
        x={BX + 12}
        y={BY + 29}
        fill="#525252"
        stroke="none"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize={9}
        letterSpacing="2"
        variants={fadeVar}
        transition={{ duration: 0.5, delay: 2.45 }}
      >
        CONCEPT_02
      </motion.text>

      {/* R&D con dot pulsante */}
      <motion.circle
        cx={BX2 - 34}
        cy={BY2 + 22}
        r={2.8}
        fill="#A855F7"
        stroke="none"
        variants={fadeVar}
        transition={{ duration: 0.4, delay: 2.5 }}
      >
        {!reduce && (
          <animate
            attributeName="opacity"
            values="1;0.35;1"
            dur="2.4s"
            begin="3s"
            repeatCount="indefinite"
          />
        )}
      </motion.circle>
      <motion.text
        x={BX2 - 26}
        y={BY2 + 25}
        fill="#525252"
        stroke="none"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize={9}
        letterSpacing="1.5"
        variants={fadeVar}
        transition={{ duration: 0.5, delay: 2.55 }}
      >
        R&amp;D
      </motion.text>

      <motion.text
        x={BX}
        y={BY2 + 25}
        fill="#A855F7"
        stroke="none"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize={9}
        letterSpacing="1.5"
        variants={fadeVar}
        transition={{ duration: 0.5, delay: 2.6 }}
      >
        REPELLENT LINE
      </motion.text>
    </motion.svg>
  );
}

/* ─── Arco concéntrico (mitad superior o inferior) con pulso de opacidad ─── */
function ProtectionArc({
  r,
  top,
  drawDelay,
  pulseDur,
  pulseBegin,
  reduce,
}: {
  r: number;
  top: boolean;
  drawDelay: number;
  pulseDur: number;
  pulseBegin: number;
  reduce: boolean;
}) {
  const sweep = top ? 1 : 0;
  const d = `M ${CX - r} ${CY} A ${r} ${r} 0 0 ${sweep} ${CX + r} ${CY}`;
  return (
    <motion.path
      d={d}
      strokeWidth={0.9}
      strokeDasharray="3 5"
      strokeOpacity={0.4}
      variants={drawVar}
      transition={{ duration: 1.0, delay: drawDelay, ease: "easeInOut" }}
    >
      {!reduce && (
        <animate
          attributeName="stroke-opacity"
          values="0.15;0.5;0.15"
          dur={`${pulseDur}s`}
          begin={`${pulseBegin}s`}
          repeatCount="indefinite"
        />
      )}
    </motion.path>
  );
}

/* ─── Mosquito estilizado (sketch técnico) ───
   Trazado local: cabeza apuntando a +x (derecha), origen en el tórax.
   La orientación final se aplica con rotate() en el <g> intermedio.
   La derivación en loop se aplica con SMIL en el <g> exterior.            */
function Mosquito({
  cx,
  cy,
  scale,
  rotation,
  drawStart,
  driftDur,
  driftBegin,
  driftValues,
  reduce,
}: {
  cx: number;
  cy: number;
  scale: number;
  rotation: number;
  drawStart: number;
  driftDur: number;
  driftBegin: number;
  driftValues: string;
  reduce: boolean;
}) {
  const s = drawStart;
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <g>
        {!reduce && (
          <animateTransform
            attributeName="transform"
            type="translate"
            values={driftValues}
            dur={`${driftDur}s`}
            begin={`${driftBegin}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
          />
        )}
        <g transform={`rotate(${rotation}) scale(${scale})`}>
          {/* Abdomen — elipse larga que se extiende hacia atrás */}
          <motion.ellipse
            cx={-14}
            cy={0}
            rx={13}
            ry={2.4}
            strokeWidth={1.1}
            variants={drawVar}
            transition={{ duration: 0.4, delay: s, ease: "easeInOut" }}
          />
          {/* Tórax */}
          <motion.ellipse
            cx={0}
            cy={0}
            rx={5}
            ry={3.5}
            strokeWidth={1.1}
            variants={drawVar}
            transition={{ duration: 0.3, delay: s + 0.05, ease: "easeInOut" }}
          />
          {/* Cabeza */}
          <motion.circle
            cx={9}
            cy={0}
            r={2.6}
            strokeWidth={1.1}
            variants={drawVar}
            transition={{ duration: 0.3, delay: s + 0.1, ease: "easeInOut" }}
          />
          {/* Probóscide */}
          <motion.line
            x1={11.5}
            y1={0}
            x2={22}
            y2={0}
            strokeWidth={0.9}
            variants={drawVar}
            transition={{ duration: 0.25, delay: s + 0.15, ease: "easeInOut" }}
          />
          {/* Antenas */}
          <motion.line
            x1={10}
            y1={-2}
            x2={16}
            y2={-8}
            strokeWidth={0.8}
            variants={drawVar}
            transition={{ duration: 0.25, delay: s + 0.2, ease: "easeInOut" }}
          />
          <motion.line
            x1={11.5}
            y1={-1}
            x2={19}
            y2={-6}
            strokeWidth={0.8}
            variants={drawVar}
            transition={{ duration: 0.25, delay: s + 0.22, ease: "easeInOut" }}
          />
          {/* Alas — dos elipses inclinadas sobre el tórax */}
          <motion.ellipse
            cx={-4}
            cy={-5}
            rx={11}
            ry={3.8}
            transform="rotate(-18 -4 -5)"
            strokeWidth={0.95}
            variants={drawVar}
            transition={{ duration: 0.35, delay: s + 0.25, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx={-1}
            cy={-6}
            rx={9}
            ry={3}
            transform="rotate(-28 -1 -6)"
            strokeWidth={0.85}
            variants={drawVar}
            transition={{ duration: 0.35, delay: s + 0.28, ease: "easeInOut" }}
          />
          {/* Patas — 3 finas hacia abajo (vista lateral) */}
          <motion.line
            x1={4}
            y1={2.5}
            x2={10}
            y2={13}
            strokeWidth={0.8}
            variants={drawVar}
            transition={{ duration: 0.25, delay: s + 0.32, ease: "easeInOut" }}
          />
          <motion.line
            x1={0}
            y1={3}
            x2={2}
            y2={16}
            strokeWidth={0.8}
            variants={drawVar}
            transition={{ duration: 0.25, delay: s + 0.34, ease: "easeInOut" }}
          />
          <motion.line
            x1={-5}
            y1={3}
            x2={-9}
            y2={15}
            strokeWidth={0.8}
            variants={drawVar}
            transition={{ duration: 0.25, delay: s + 0.36, ease: "easeInOut" }}
          />
        </g>
      </g>
    </g>
  );
}
