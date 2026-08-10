"use client";

import { motion } from "framer-motion";
import GridBackground from "./GridBackground";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function CTAFinal() {
  return (
    <section className="section-y relative overflow-hidden bg-winco-white">
      <GridBackground variant="light" fade="radial" opacity={0.6} />
      <div className="container-winco relative">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          {/* ── IZQUIERDA — texto ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="heading-eyebrow">Lo que viene</p>
            <h2 className="heading-section mt-4 text-winco-black">
              Estamos construyendo lo próximo.
            </h2>
            <p className="mt-6 max-w-[420px] text-[17px] leading-relaxed text-winco-muted md:text-[18px]">
              Seguimos identificando oportunidades y desarrollando nuevas marcas
              para las necesidades del consumidor moderno.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center justify-center rounded-btn bg-winco-black px-8 py-4 text-[13px] font-medium uppercase tracking-[0.1em] text-winco-white transition duration-200 hover:scale-[1.02] hover:bg-neutral-800"
            >
              Conócenos
            </a>
          </motion.div>

          {/* ── DERECHA — composición blueprint ── */}
          <div className="relative mx-auto w-full max-w-[520px]">
            {/* Grid más denso detrás del SVG para reforzar el plano técnico */}
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
            <BlueprintSVG />
          </div>
        </div>
      </div>
    </section>
  );
}

function BlueprintSVG() {
  // Coordenadas del contorno del "empaque"
  const bx = 130;
  const by = 90;
  const bw = 240;
  const bh = 340;
  const bx2 = bx + bw;
  const by2 = by + bh;

  // Variantes compartidas
  const drawLine = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const pop = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const corners: [number, number][] = [
    [bx, by],
    [bx2, by],
    [bx, by2],
    [bx2, by2],
  ];

  return (
    <motion.svg
      viewBox="0 0 500 500"
      className="relative block h-auto w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Guías diagonales punteadas — pulso infinito */}
      <motion.line
        x1={20}
        y1={20}
        x2={480}
        y2={480}
        stroke="#B8B8B8"
        strokeWidth={0.5}
        strokeDasharray="4 6"
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0 }}
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        style={{ transformOrigin: "center" }}
      />
      <motion.line
        x1={480}
        y1={20}
        x2={20}
        y2={480}
        stroke="#B8B8B8"
        strokeWidth={0.5}
        strokeDasharray="4 6"
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.15 }}
        animate={{ opacity: [0.12, 0.35, 0.12] }}
      />

      {/* Guía horizontal central punteada */}
      <motion.line
        x1={20}
        y1={260}
        x2={480}
        y2={260}
        stroke="#C0C0C0"
        strokeWidth={0.5}
        strokeDasharray="2 4"
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Contorno principal del empaque */}
      <motion.rect
        x={bx}
        y={by}
        width={bw}
        height={bh}
        stroke="#333"
        strokeWidth={1.5}
        fill="none"
        variants={drawLine}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
      />

      {/* Separador banda etiqueta */}
      <motion.line
        x1={bx}
        y1={by + 55}
        x2={bx2}
        y2={by + 55}
        stroke="#333"
        strokeWidth={1.5}
        variants={drawLine}
        transition={{ duration: 0.7, delay: 1.6, ease: "easeInOut" }}
      />

      {/* Área interior — rectángulo con dashes (opacity, no pathLength) */}
      <motion.rect
        x={bx + 30}
        y={by + 90}
        width={bw - 60}
        height={bh - 160}
        stroke="#8A8A8A"
        strokeWidth={1}
        strokeDasharray="5 5"
        fill="none"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 1.9 }}
      />

      {/* Línea decorativa base */}
      <motion.line
        x1={bx}
        y1={by2 - 40}
        x2={bx2}
        y2={by2 - 40}
        stroke="#333"
        strokeWidth={1}
        variants={drawLine}
        transition={{ duration: 0.7, delay: 1.7, ease: "easeInOut" }}
      />

      {/* Acento — diagonal violeta */}
      <motion.line
        x1={bx + 30}
        y1={by + 90}
        x2={bx2 - 30}
        y2={by2 - 70}
        stroke="#A855F7"
        strokeWidth={1.5}
        opacity={0.55}
        variants={drawLine}
        transition={{ duration: 1.1, delay: 1.9, ease: "easeInOut" }}
      />

      {/* ── Líneas de cota — anchura (top) ── */}
      <motion.g
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 2.1 }}
        fill="none"
        stroke="#8A8A8A"
        strokeWidth={0.75}
      >
        <line x1={bx} y1={60} x2={bx2} y2={60} />
        <line x1={bx} y1={54} x2={bx} y2={66} />
        <line x1={bx2} y1={54} x2={bx2} y2={66} />
        <text
          x={bx + bw / 2}
          y={49}
          fill="#525252"
          stroke="none"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fontSize={9}
          textAnchor="middle"
          letterSpacing="1.5"
        >
          240 MM
        </text>
      </motion.g>

      {/* ── Líneas de cota — altura (right) ── */}
      <motion.g
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 2.2 }}
        fill="none"
        stroke="#8A8A8A"
        strokeWidth={0.75}
      >
        <line x1={bx2 + 30} y1={by} x2={bx2 + 30} y2={by2} />
        <line x1={bx2 + 24} y1={by} x2={bx2 + 36} y2={by} />
        <line x1={bx2 + 24} y1={by2} x2={bx2 + 36} y2={by2} />
        <text
          x={bx2 + 45}
          y={by + bh / 2}
          fill="#525252"
          stroke="none"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fontSize={9}
          textAnchor="middle"
          letterSpacing="1.5"
          transform={`rotate(-90 ${bx2 + 45} ${by + bh / 2})`}
        >
          340 MM
        </text>
      </motion.g>

      {/* Círculos de anclaje en las esquinas */}
      {corners.map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r={3.5}
          fill="#FFFFFF"
          stroke="#333"
          strokeWidth={1}
          variants={pop}
          transition={{
            duration: 0.35,
            delay: 1.9 + i * 0.06,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />
      ))}

      {/* Etiqueta CONCEPT_01 dentro del banner */}
      <motion.text
        x={bx + 14}
        y={by + 33}
        fill="#525252"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize={9}
        letterSpacing="2"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 2.3 }}
      >
        CONCEPT_01
      </motion.text>

      {/* IN PROGRESS + dot violeta pulsante */}
      <motion.circle
        cx={bx + 8}
        cy={by2 + 22}
        r={3}
        fill="#A855F7"
        variants={fadeIn}
        transition={{ duration: 0.4, delay: 2.4 }}
        animate={{ opacity: [1, 0.35, 1] }}
      />
      <motion.text
        x={bx + 18}
        y={by2 + 25}
        fill="#A855F7"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize={9}
        letterSpacing="1.5"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 2.4 }}
      >
        IN PROGRESS
      </motion.text>

      {/* R&D_2026 abajo a la derecha */}
      <motion.text
        x={bx2}
        y={by2 + 25}
        fill="#525252"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize={9}
        letterSpacing="1.5"
        textAnchor="end"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        R&amp;D_2026
      </motion.text>
    </motion.svg>
  );
}
