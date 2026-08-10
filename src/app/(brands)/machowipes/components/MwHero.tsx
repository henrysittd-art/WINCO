"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function MwHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 md:pt-20">
      {/* Glow principal — más brillante y concentrado (no muddy) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 720px 500px at 68% 45%, rgba(56, 189, 248, 0.45) 0%, rgba(14, 165, 233, 0.18) 35%, transparent 65%)",
        }}
      />
      {/* Rim light superior — línea de luz fina */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 20%, rgba(56, 189, 248, 0.5) 50%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1280px] gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12 md:px-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="order-2 md:order-1"
        >
          <p
            className="mb-6 text-[12px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--mw-blue-hot)" }}
          >
            Macho Wipes
          </p>
          <h1 className="font-mw-heading text-[44px] leading-[0.86] tracking-[0.005em] text-[var(--mw-fg)] md:text-[64px] lg:text-[86px]">
            LIMPIEZA
            <br />
            PERSONAL HECHA
            <br />
            <span
              className="mw-text-neon"
              style={{ color: "var(--mw-blue-hot)" }}
            >
              PARA HOMBRES.
            </span>
          </h1>
          <p className="mt-6 max-w-[480px] text-[16px] leading-relaxed text-[var(--mw-muted)] md:text-[18px]">
            Una alternativa práctica, fresca y moderna diseñada para
            acompañarte dondequiera que estés.
          </p>
          <div className="mt-8">
            <a
              href="#productos"
              className="inline-flex items-center gap-3 rounded-md bg-[var(--mw-blue-hot)] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--mw-bg)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_50px_-5px_rgba(56,189,248,0.85)]"
              style={{
                boxShadow: "0 0 24px -6px rgba(56, 189, 248, 0.55)",
              }}
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
              src="/images/macho-wipes/product.jpg"
              alt="Línea Macho Wipes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mw-hero-image object-contain"
              style={{
                // Filtro SVG: quita fondo negro sin blend haze.
                // Filter chain adicional: brillo/contraste/saturación para
                // que los colores del producto salgan más nítidos y vivos.
                filter:
                  "url(#mw-logo-clean) brightness(1.08) contrast(1.12) saturate(1.2)",
              }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
