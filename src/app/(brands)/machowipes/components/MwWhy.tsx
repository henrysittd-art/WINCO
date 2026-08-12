"use client";

import { motion } from "framer-motion";
import { Droplets, Recycle, Backpack, Maximize2 } from "lucide-react";
import { useState, type ComponentType, type SVGProps, type MouseEvent } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Argumento = {
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  title: string;
  copy: string;
};

const ARGUMENTOS: Argumento[] = [
  {
    icon: Droplets,
    title: "Húmedo limpia mejor que seco",
    copy: "El papel higiénico deja lo que no ves. Un wipe húmedo con el tamaño correcto arrastra lo que el papel no toca. Punto.",
  },
  {
    icon: Recycle,
    title: "Flushable de verdad",
    copy: "Fibras vegetales que se desintegran en el inodoro. Nada de plásticos disfrazados que tapan la tubería.",
  },
  {
    icon: Backpack,
    title: "Te acompaña donde sea",
    copy: "Gym, oficina, guantera, mochila, viaje largo. El bolsillo del uniforme. El día que necesitás uno, ahí está.",
  },
];

export default function MwWhy() {
  return (
    <section
      id="por-que"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* ═════════ FIRMA WHY — rayo diagonal + grid técnico ═════════ */}

      {/* Rim light superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 12%, rgba(56, 189, 248, 0.45) 50%, transparent 88%)",
        }}
      />

      {/* Diagonal light beam — rayo que cruza de arriba-derecha a abajo-izquierda */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, transparent 40%, rgba(56,189,248,0.12) 50%, transparent 60%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, transparent 62%, rgba(56,189,248,0.08) 68%, transparent 74%, transparent 100%)",
        }}
      />

      {/* Grid técnico tight (32px) — sensación de blueprint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 100% at 70% 30%, black 15%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 100% at 70% 30%, black 15%, transparent 75%)",
        }}
      />

      {/* Orbe azul en la esquina donde nace el rayo */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[-12%] h-[480px] w-[480px] rounded-full opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.32), transparent 65%)",
          filter: "blur(70px)",
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
            style={{ color: "var(--mw-accent)" }}
          >
            Por qué Macho
          </p>
          <h2 className="font-mw-heading mt-4 text-[36px] leading-[0.9] text-[var(--mw-fg)] md:text-[56px]">
            NO ES UN WIPE
            <br />
            CUALQUIERA.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-[var(--mw-muted)] md:text-[17px]">
            Cuatro razones concretas para dejar el papel higiénico atrás — sin
            marketing barato, sin promesas raras.
          </p>
        </motion.div>

        {/* ═════════ Card featured — XL ═════════ */}
        <XLFeatureCard />

        {/* ═════════ Cards de soporte (3) ═════════ */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {ARGUMENTOS.map((arg, i) => (
            <SpotlightCard key={arg.title} delay={0.1 + i * 0.08}>
              <div
                className="mw-icon-glow inline-flex h-14 w-14 items-center justify-center rounded-lg"
                style={{
                  background:
                    "color-mix(in srgb, var(--mw-accent) 15%, transparent)",
                  color: "var(--mw-accent)",
                }}
              >
                <arg.icon size={28} />
              </div>
              <h3 className="font-mw-heading mt-6 text-[22px] leading-tight text-[var(--mw-fg)] md:text-[24px]">
                {arg.title.toUpperCase()}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--mw-muted)]">
                {arg.copy}
              </p>
            </SpotlightCard>
          ))}
        </div>
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
      className="mw-card relative mt-14 overflow-hidden md:mt-20"
    >
      {/* Spotlight cursor */}
      {pos && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[14px]"
          style={{
            background: `radial-gradient(circle 420px at ${pos.x}px ${pos.y}px, rgba(56,189,248,0.14), transparent 45%)`,
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
                  "color-mix(in srgb, var(--mw-accent) 18%, transparent)",
                color: "var(--mw-blue-hot)",
                boxShadow: "0 0 24px -8px rgba(56,189,248,0.6)",
              }}
            >
              <Maximize2 size={13} strokeWidth={2.5} />
              Extra Large
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--mw-muted)]">
              7 × 7 in · 17.8 × 17.8 cm
            </span>
          </div>

          <h3 className="font-mw-heading mt-6 text-[36px] leading-[0.92] text-[var(--mw-fg)] md:text-[52px]">
            EL TAMAÑO
            <br />
            <span
              className="mw-text-neon"
              style={{ color: "var(--mw-blue-hot)" }}
            >
              SÍ IMPORTA.
            </span>
          </h3>
          <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-[var(--mw-muted)] md:text-[17px]">
            Un XL de verdad. Cobertura seria en cada wipe — hace en un solo
            movimiento lo que un wipe chico hace en dos. Menos wipes por
            sesión, más cabeza tranquila.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat value="7×7" label="pulgadas" />
            <Stat value="+40%" label="cobertura" />
            <Stat value="100%" label="plant based" />
          </div>
        </div>

        {/* ── Lado visual ── */}
        <div
          className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-t border-[color-mix(in_srgb,var(--mw-accent)_15%,transparent)] md:border-l md:border-t-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, color-mix(in srgb, var(--mw-accent) 6%, transparent), transparent 70%)",
          }}
        >
          {/* Grid lines de fondo del panel visual */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(56,189,248,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.6) 1px, transparent 1px)",
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
              className="font-mw-heading text-[180px] leading-none tracking-[-0.02em] md:text-[240px]"
              style={{
                color: "var(--mw-blue-hot)",
                textShadow:
                  "0 0 40px rgba(56,189,248,0.55), 0 0 80px rgba(14,165,233,0.35)",
              }}
              animate={{
                textShadow: [
                  "0 0 40px rgba(56,189,248,0.55), 0 0 80px rgba(14,165,233,0.35)",
                  "0 0 60px rgba(56,189,248,0.85), 0 0 120px rgba(14,165,233,0.5)",
                  "0 0 40px rgba(56,189,248,0.55), 0 0 80px rgba(14,165,233,0.35)",
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
                      "color-mix(in srgb, var(--mw-fg) 25%, transparent)",
                  }}
                />
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--mw-muted)]">
                  Std
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className="h-14 w-14 rounded border-2 md:h-16 md:w-16"
                  style={{
                    borderColor: "var(--mw-blue-hot)",
                    boxShadow: "0 0 16px -4px rgba(56,189,248,0.8)",
                  }}
                />
                <span
                  className="text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--mw-blue-hot)" }}
                >
                  Macho
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
                "linear-gradient(to bottom, transparent 20%, rgba(56,189,248,0.35) 50%, transparent 80%)",
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
    <div className="border-l-2 pl-3" style={{ borderColor: "var(--mw-blue-hot)" }}>
      <div className="font-mw-heading text-[26px] leading-none text-[var(--mw-fg)] md:text-[30px]">
        {value}
      </div>
      <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--mw-muted)]">
        {label}
      </div>
    </div>
  );
}

/* ─── Card con spotlight cursor (para los 3 argumentos secundarios) ── */
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
      className="mw-card relative p-8"
    >
      {pos && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[14px]"
          style={{
            background: `radial-gradient(circle 320px at ${pos.x}px ${pos.y}px, rgba(14,165,233,0.16), transparent 45%)`,
          }}
        />
      )}
      <div className="relative">{children}</div>
    </motion.article>
  );
}
