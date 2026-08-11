"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/*
 * Hero video full-bleed.
 *
 * Poner los archivos de video en /public/videos/macho-wipes/ con estos nombres
 * (idealmente ambos para cobertura de navegadores):
 *   - hero.webm  (VP9, ~2-4 MB, 8-12s loop, muted)
 *   - hero.mp4   (H.264, ~3-6 MB, mismo loop)
 *
 * Mientras no existan los archivos, el <video> muestra el poster
 * (imagen actual del producto) y no se ve rota — solo estática.
 *
 * Recomendación de contenido: 8-12s en loop, sin corte visible;
 * planos cerrados del empaque, wipe siendo sacado del sachet en cámara
 * lenta, o gotas de agua sobre la tela. Sin audio.
 */
const HERO_POSTER = "/images/macho-wipes/product.jpg";
const HERO_VIDEO_WEBM = "/videos/macho-wipes/hero.webm";
const HERO_VIDEO_MP4 = "/videos/macho-wipes/hero.mp4";

export default function MwHero() {
  const reduce = !!useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 md:pt-20">
      {/* ═══════ Fondo — video full-bleed (o poster estático si reduce) ═══════ */}
      {reduce ? (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_POSTER})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          aria-hidden
        >
          <source src={HERO_VIDEO_WEBM} type="video/webm" />
          <source src={HERO_VIDEO_MP4} type="video/mp4" />
        </video>
      )}

      {/* ═══════ Overlays: legibilidad + acento azul + rim light ═══════ */}
      {/* Vignette diagonal — más oscuro en la izquierda (donde va el texto),
          fade hacia la derecha para dejar respirar el video */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(5,11,20,0.88) 0%, rgba(5,11,20,0.72) 32%, rgba(5,11,20,0.42) 62%, rgba(5,11,20,0.28) 100%)",
        }}
      />
      {/* Fade inferior — refuerza el borde con la sección siguiente */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(5,11,20,0.9))",
        }}
      />
      {/* Glow azul concentrado a la derecha */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 620px 460px at 78% 45%, rgba(56, 189, 248, 0.28) 0%, rgba(14, 165, 233, 0.10) 40%, transparent 70%)",
        }}
      />
      {/* Rim light superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 20%, rgba(56, 189, 248, 0.5) 50%, transparent 80%)",
        }}
      />

      {/* ═══════ Contenido overlay ═══════ */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-16 md:px-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-[720px]"
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
      </div>
    </section>
  );
}
