"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Ban,
  Backpack,
  Droplets,
  Leaf,
  TestTube,
  FlaskConical,
  ShieldCheck,
  Maximize2,
} from "lucide-react";
import { useState, type ComponentType, type SVGProps, type MouseEvent } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type IconT = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const ARGUMENTOS: { icon: IconT; title: string; copy: string }[] = [
  {
    icon: Sparkles,
    title: "pH balanceado, siempre",
    copy: "Formulado para respetar el equilibrio natural de la piel. Dermatológicamente testeado, gentle & effective.",
  },
  {
    icon: Ban,
    title: "Sin alcohol ni parabenos",
    copy: "99% agua purificada e ingredientes de origen vegetal. Nada de fragancias artificiales que no aportan nada.",
  },
  {
    icon: Backpack,
    title: "Te acompaña donde sea",
    copy: "Cartera, gym, oficina, viaje largo, el bolsillo de la chaqueta. Cierre hermético, no se secan.",
  },
];

const BADGES: { icon: IconT; label: string; lime?: boolean }[] = [
  { icon: Droplets, label: "99% agua purificada" },
  { icon: Leaf, label: "Fibras de origen vegetal", lime: true },
  { icon: TestTube, label: "pH balanceado" },
  { icon: Ban, label: "Sin alcohol" },
  { icon: FlaskConical, label: "Sin parabenos" },
  { icon: ShieldCheck, label: "Diseñado para adultas" },
];

export default function LwWhy() {
  return (
    <section
      id="por-que"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Rim light superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 12%, rgba(255, 82, 170, 0.45) 50%, transparent 88%)",
        }}
      />

      {/* Pink glow — arriba a la derecha */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[-10%] h-[560px] w-[560px] rounded-full opacity-55"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 82, 170, 0.38), transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
        {/* ═════════ Header ═════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl"
        >
          <p
            className="text-[12px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--lw-pink-hot)" }}
          >
            Por qué Lady
          </p>
          <h2 className="font-lw-heading mt-4 text-[36px] leading-[0.9] text-[var(--lw-fg)] md:text-[56px]">
            HECHO PARA
            <br />
            TU DÍA A DÍA.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-[var(--lw-muted)] md:text-[17px]">
            Cuatro razones concretas para hacer un upgrade a tu rutina — sin
            promesas raras, sin marketing forzado.
          </p>
        </motion.div>

        {/* ═════════ Card featured — XL ═════════ */}
        <XLFeatureCard />

        {/* ═════════ Cards de soporte (3) ═════════ */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {ARGUMENTOS.map((arg, i) => (
            <SpotlightCard key={arg.title} delay={0.1 + i * 0.08}>
              <div
                className="lw-icon-glow inline-flex h-14 w-14 items-center justify-center rounded-lg"
                style={{
                  background:
                    "color-mix(in srgb, var(--lw-pink) 15%, transparent)",
                  color: "var(--lw-pink-hot)",
                }}
              >
                <arg.icon size={28} />
              </div>
              <h3 className="font-lw-heading mt-6 text-[22px] leading-tight text-[var(--lw-fg)] md:text-[24px]">
                {arg.title.toUpperCase()}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--lw-muted)]">
                {arg.copy}
              </p>
            </SpotlightCard>
          ))}
        </div>

        {/* Fila de badges — 6 sellos que replican los del packaging */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 rounded-2xl border border-[color-mix(in_srgb,var(--lw-pink)_18%,transparent)] bg-[color-mix(in_srgb,var(--lw-fg)_3%,var(--lw-bg))] px-6 py-10 sm:grid-cols-3 md:mt-20 md:grid-cols-6 md:px-10"
        >
          {BADGES.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div
                className={b.lime ? "lw-icon-glow-lime" : "lw-icon-glow"}
                style={{ color: b.lime ? "var(--lw-lime)" : "var(--lw-pink-hot)" }}
              >
                <b.icon size={30} strokeWidth={1.75} />
              </div>
              <p className="text-[11px] font-semibold uppercase leading-tight tracking-[0.1em] text-[var(--lw-fg)]">
                {b.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Card featured para el XL — el WOW ─────────────────────────────── */
function XLFeatureCard() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: EASE }}
      onMouseMove={onMove}
      onMouseLeave={() => setPos(null)}
      className="lw-card relative mt-14 overflow-hidden md:mt-20"
    >
      {pos && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[14px]"
          style={{
            background: `radial-gradient(circle 420px at ${pos.x}px ${pos.y}px, rgba(255,82,170,0.15), transparent 45%)`,
          }}
        />
      )}

      <div className="grid gap-0 md:grid-cols-[1.25fr_1fr]">
        {/* ── Lado texto ── */}
        <div className="relative z-10 p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em]"
              style={{
                background:
                  "color-mix(in srgb, var(--lw-pink) 18%, transparent)",
                color: "var(--lw-pink-hot)",
                boxShadow: "0 0 24px -8px rgba(255,82,170,0.6)",
              }}
            >
              <Maximize2 size={13} strokeWidth={2.5} />
              Extra Large
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--lw-muted)]">
              7 × 7 in · 17.8 × 17.8 cm
            </span>
          </div>

          <h3 className="font-lw-heading mt-6 text-[36px] leading-[0.92] text-[var(--lw-fg)] md:text-[52px]">
            EL TAMAÑO
            <br />
            <span
              className="lw-text-neon"
              style={{ color: "var(--lw-pink-hot)" }}
            >
              QUE PROTEGE.
            </span>
          </h3>
          <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-[var(--lw-muted)] md:text-[17px]">
            Un XL de verdad. Más cobertura, más frescura, más suavidad — sin
            perder la delicadeza que buscás para tu piel.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat value="7×7" label="pulgadas" />
            <Stat value="+40%" label="cobertura" />
            <Stat value="99%" label="agua purif." />
          </div>
        </div>

        {/* ── Lado visual ── */}
        <div
          className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-t border-[color-mix(in_srgb,var(--lw-pink)_15%,transparent)] md:border-l md:border-t-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, color-mix(in srgb, var(--lw-pink) 6%, transparent), transparent 70%)",
          }}
        >
          {/* Grid lines de fondo del panel visual */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,82,170,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,82,170,0.6) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Big XL — palabra estrella */}
          <motion.div
            aria-hidden
            className="relative select-none"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          >
            <motion.div
              className="font-lw-heading text-[180px] leading-none tracking-[-0.02em] md:text-[240px]"
              style={{
                color: "var(--lw-pink-hot)",
                textShadow:
                  "0 0 40px rgba(255,82,170,0.55), 0 0 80px rgba(255,31,143,0.35)",
              }}
              animate={{
                textShadow: [
                  "0 0 40px rgba(255,82,170,0.55), 0 0 80px rgba(255,31,143,0.35)",
                  "0 0 60px rgba(255,82,170,0.85), 0 0 120px rgba(255,31,143,0.5)",
                  "0 0 40px rgba(255,82,170,0.55), 0 0 80px rgba(255,31,143,0.35)",
                ],
              }}
              transition={{
                duration: 3.2,
                ease: [0.4, 0, 0.4, 1],
                repeat: Infinity,
              }}
            >
              XL
            </motion.div>

            {/* Comparación visual — chico vs XL */}
            <div className="absolute -bottom-4 right-0 flex items-end gap-3 md:-bottom-6 md:-right-2">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className="h-8 w-8 rounded border md:h-10 md:w-10"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--lw-fg) 25%, transparent)",
                  }}
                />
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--lw-muted)]">
                  Std
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className="h-14 w-14 rounded border-2 md:h-16 md:w-16"
                  style={{
                    borderColor: "var(--lw-pink-hot)",
                    boxShadow: "0 0 16px -4px rgba(255,82,170,0.8)",
                  }}
                />
                <span
                  className="text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--lw-pink-hot)" }}
                >
                  Lady
                </span>
              </div>
            </div>
          </motion.div>

          {/* Rim light lateral */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent 20%, rgba(255,82,170,0.35) 50%, transparent 80%)",
            }}
          />
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Bloque stat pequeño ─────────────────────────────────────────── */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 pl-3" style={{ borderColor: "var(--lw-pink-hot)" }}>
      <div className="font-lw-heading text-[26px] leading-none text-[var(--lw-fg)] md:text-[30px]">
        {value}
      </div>
      <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--lw-muted)]">
        {label}
      </div>
    </div>
  );
}

/* ─── Card con spotlight cursor ─────────────────────────────────── */
function SpotlightCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      onMouseMove={onMove}
      onMouseLeave={() => setPos(null)}
      className="lw-card relative p-8"
    >
      {pos && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[14px]"
          style={{
            background: `radial-gradient(circle 320px at ${pos.x}px ${pos.y}px, rgba(255,82,170,0.16), transparent 45%)`,
          }}
        />
      )}
      <div className="relative">{children}</div>
    </motion.article>
  );
}
