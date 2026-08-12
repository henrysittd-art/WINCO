"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const HERO_IMAGE = "/images/lady-wipes/hero-lineup.jpg";

export default function LwHero() {
  const reduce = !!useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 md:pt-20">
      {/* ═══════ Fondo — imagen full-bleed con Ken Burns lento ═══════ */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.02 }}
        animate={reduce ? undefined : { scale: [1.02, 1.09, 1.02] }}
        transition={
          reduce
            ? undefined
            : {
                duration: 22,
                ease: [0.4, 0, 0.6, 1],
                repeat: Infinity,
              }
        }
      >
        <Image
          src={HERO_IMAGE}
          alt="Lady Wipes — línea de productos"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ═══════ Pink neon pulse — respira con las luces rosadas del set ═══════ */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 520px at 55% 42%, rgba(255, 82, 170, 0.34) 0%, rgba(255, 31, 143, 0.10) 40%, transparent 68%)",
          mixBlendMode: "screen",
        }}
        animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
        transition={
          reduce
            ? undefined
            : {
                duration: 3.8,
                ease: [0.4, 0, 0.4, 1],
                repeat: Infinity,
              }
        }
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 620px 380px at 20% 55%, rgba(255, 82, 170, 0.18) 0%, transparent 60%)",
          mixBlendMode: "screen",
        }}
        animate={reduce ? undefined : { opacity: [0.9, 0.45, 0.9] }}
        transition={
          reduce
            ? undefined
            : {
                duration: 4.4,
                ease: [0.4, 0, 0.4, 1],
                repeat: Infinity,
              }
        }
      />

      {/* ═══════ Overlay diagonal — oscuro a la izquierda, fade a la derecha ═══════ */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 28%, rgba(0,0,0,0.42) 55%, rgba(0,0,0,0.14) 80%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(0,0,0,0.92))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 20%, rgba(255, 82, 170, 0.5) 50%, transparent 80%)",
        }}
      />

      {/* ═══════ Contenido overlay ═══════ */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-16 md:px-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-[620px]"
        >
          <p
            className="mb-6 text-[12px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--lw-pink-hot)" }}
          >
            Lady Wipes
          </p>
          <h1 className="font-lw-heading text-[44px] leading-[0.86] tracking-[0.005em] text-[var(--lw-fg)] md:text-[60px] lg:text-[78px]">
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
      </div>
    </section>
  );
}
