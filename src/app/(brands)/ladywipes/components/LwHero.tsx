"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function LwHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 md:pt-20">
      {/* Glow principal — magenta concentrado, no muddy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 720px 500px at 68% 45%, rgba(255, 82, 170, 0.45) 0%, rgba(255, 31, 143, 0.18) 35%, transparent 65%)",
        }}
      />
      {/* Rim light superior — línea fina de luz */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 20%, rgba(255, 82, 170, 0.5) 50%, transparent 80%)",
        }}
      />

      {/* Líneas de neón diagonales — muy tenues */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lw-neon-h" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,82,170,0)" />
            <stop offset="50%" stopColor="rgba(255,82,170,0.3)" />
            <stop offset="100%" stopColor="rgba(255,82,170,0)" />
          </linearGradient>
          <linearGradient id="lw-neon-h2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,82,170,0)" />
            <stop offset="50%" stopColor="rgba(255,82,170,0.18)" />
            <stop offset="100%" stopColor="rgba(255,82,170,0)" />
          </linearGradient>
        </defs>
        <line
          x1="-10%"
          y1="30%"
          x2="110%"
          y2="10%"
          stroke="url(#lw-neon-h)"
          strokeWidth="0.75"
        />
        <line
          x1="-10%"
          y1="85%"
          x2="110%"
          y2="65%"
          stroke="url(#lw-neon-h2)"
          strokeWidth="0.75"
        />
      </svg>

      <div className="relative mx-auto grid w-full max-w-[1280px] gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12 md:px-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="order-2 md:order-1"
        >
          <p
            className="mb-6 text-[12px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--lw-pink-hot)" }}
          >
            Lady Wipes
          </p>
          <h1 className="font-lw-heading text-[44px] leading-[0.86] tracking-[0.005em] text-[var(--lw-fg)] md:text-[64px] lg:text-[86px]">
            FRESCURA
            <br />
            Y CUIDADO
            <br />
            <span
              className="lw-text-neon"
              style={{ color: "var(--lw-pink-hot)" }}
            >
              PARA TODOS LOS DÍAS.
            </span>
          </h1>
          <p className="mt-6 max-w-[480px] text-[16px] leading-relaxed text-[var(--lw-muted)] md:text-[18px]">
            Una propuesta de cuidado personal práctica, moderna y diseñada
            especialmente para acompañar el estilo de vida de la mujer.
          </p>
          <div className="mt-8">
            <a
              href="#productos"
              className="inline-flex items-center gap-3 rounded-md bg-[var(--lw-pink-hot)] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--lw-bg)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_50px_-5px_rgba(255,82,170,0.85)]"
              style={{ boxShadow: "0 0 24px -6px rgba(255, 82, 170, 0.55)" }}
            >
              Ver productos
              <span aria-hidden>→</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="relative order-1 md:order-2"
        >
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/images/lady-wipes/product.jpg"
              alt="Línea Lady Wipes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="lw-hero-image object-contain"
              style={{
                filter:
                  "url(#lw-logo-clean) brightness(1.08) contrast(1.12) saturate(1.2)",
              }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
