"use client";

import { motion } from "framer-motion";
import { Droplets, Recycle, Backpack } from "lucide-react";
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
            Tres razones concretas para dejar el papel higiénico atrás — sin
            marketing barato, sin promesas raras.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {ARGUMENTOS.map((arg, i) => (
            <SpotlightCard key={arg.title} delay={i * 0.1}>
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
              <h3 className="font-mw-heading mt-6 text-[24px] leading-tight text-[var(--mw-fg)] md:text-[26px]">
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

// Card con spotlight que sigue al cursor
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
      {/* Spotlight que sigue al cursor */}
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
