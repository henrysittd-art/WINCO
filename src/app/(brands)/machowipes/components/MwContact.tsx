"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// TODO: reemplazar con datos reales cuando estén confirmados
const CONTACT_EMAIL = "hola@machowipes.com";
const WHATSAPP_URL = "https://wa.me/50700000000";

export default function MwContact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Rim light superior — misma señal de sección que en Por qué / Productos */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 15%, rgba(56, 189, 248, 0.4) 50%, transparent 85%)",
        }}
      />

      {/* Grid pattern técnico con máscara radial (consistente con Por qué / Productos) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 75%)",
        }}
      />

      {/* Orbe glow principal — centrado bajo el título para dar peso */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.28), transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      {/* Orbe secundario abajo — refuerza la transición al footer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-80"
        style={{
          background:
            "radial-gradient(ellipse 900px 320px at 50% 100%, rgba(14,165,233,0.18), transparent 70%)",
        }}
      />

      {/* Líneas técnicas decorativas laterales (invisibles en mobile) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-8 hidden w-px opacity-40 md:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent 20%, rgba(56,189,248,0.35) 50%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-8 hidden w-px opacity-40 md:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent 20%, rgba(56,189,248,0.35) 50%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow + tag técnico */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span
              aria-hidden
              className="h-px w-10 opacity-50"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--mw-blue-hot))",
              }}
            />
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--mw-accent)" }}
            >
              Dónde conseguirlo
            </p>
            <span
              aria-hidden
              className="h-px w-10 opacity-50"
              style={{
                background:
                  "linear-gradient(90deg, var(--mw-blue-hot), transparent)",
              }}
            />
          </div>

          <h2 className="font-mw-heading mt-5 text-[36px] leading-[0.9] text-[var(--mw-fg)] md:text-[64px]">
            <span
              className="mw-text-neon"
              style={{ color: "var(--mw-accent)" }}
            >
              HABLEMOS.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--mw-muted)] md:text-[17px]">
            Distribución mayorista, alianzas comerciales o pedidos personales.
            Escribinos por el canal que te quede más cómodo.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-3 rounded-md border border-[color-mix(in_srgb,var(--mw-accent)_40%,transparent)] bg-transparent px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--mw-fg)] transition-all duration-200 hover:border-[var(--mw-accent)] hover:bg-[color-mix(in_srgb,var(--mw-accent)_12%,transparent)]"
            >
              <Mail size={16} />
              {CONTACT_EMAIL}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mw-btn-pulse inline-flex items-center gap-3 rounded-md bg-[var(--mw-accent)] px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--mw-bg)] transition-transform duration-200 hover:scale-[1.04]"
            >
              WhatsApp
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Firma técnica al pie del bloque */}
          <p
            className="mt-16 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--mw-muted)] opacity-70"
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            }}
          >
            MW / CONTACT · 2026
          </p>

          {/*
            Puntos de venta — cuando llegue el kit de logos, colocarlo acá:
            <div className="mt-16 grid grid-cols-2 gap-8 opacity-70 sm:grid-cols-4">
              <img src="/images/retailers/xxx.png" alt="..." />
              ...
            </div>
          */}
        </motion.div>
      </div>
    </section>
  );
}
