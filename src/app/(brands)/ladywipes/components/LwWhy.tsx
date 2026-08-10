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
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
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
            Tres razones concretas para hacer un upgrade a tu rutina — sin
            promesas raras, sin marketing forzado.
          </p>
        </motion.div>

        {/* 3 argumentos */}
        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {ARGUMENTOS.map((arg, i) => (
            <SpotlightCard key={arg.title} delay={i * 0.1}>
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
              <h3 className="font-lw-heading mt-6 text-[24px] leading-tight text-[var(--lw-fg)] md:text-[26px]">
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
