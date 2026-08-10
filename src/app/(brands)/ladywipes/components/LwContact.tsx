"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// TODO: reemplazar con datos reales cuando estén confirmados
const CONTACT_EMAIL = "hola@ladywipes.com";
const WHATSAPP_URL = "https://wa.me/50700000000";

export default function LwContact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-24 md:py-28"
    >
      {/* Glow inferior magenta */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-80"
        style={{
          background:
            "radial-gradient(ellipse 900px 350px at 50% 100%, rgba(255,82,170,0.22), transparent 70%)",
        }}
      />
      {/* Orbes locales */}
      <div
        aria-hidden
        className="lw-orb"
        style={{
          width: 500,
          height: 500,
          top: "10%",
          left: "8%",
          background:
            "radial-gradient(circle, rgba(255,82,170,0.09) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="lw-orb"
        style={{
          width: 460,
          height: 460,
          top: "20%",
          right: "5%",
          background:
            "radial-gradient(circle, rgba(255,31,143,0.08) 0%, transparent 65%)",
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
          <p
            className="text-[12px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--lw-pink-hot)" }}
          >
            Dónde conseguirlo
          </p>
          <h2 className="font-lw-heading mt-4 text-[36px] leading-[0.9] text-[var(--lw-fg)] md:text-[56px]">
            <span
              className="lw-text-neon"
              style={{ color: "var(--lw-pink-hot)" }}
            >
              HABLEMOS.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--lw-muted)] md:text-[17px]">
            Distribución mayorista, alianzas comerciales o pedidos personales.
            Escribinos por el canal que te quede más cómodo.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-3 rounded-md border border-[color-mix(in_srgb,var(--lw-pink)_45%,transparent)] bg-transparent px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--lw-fg)] transition-all duration-200 hover:border-[var(--lw-pink-hot)] hover:bg-[color-mix(in_srgb,var(--lw-pink)_12%,transparent)]"
            >
              <Mail size={16} />
              {CONTACT_EMAIL}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lw-btn-pulse inline-flex items-center gap-3 rounded-md bg-[var(--lw-pink-hot)] px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--lw-bg)] transition-transform duration-200 hover:scale-[1.04]"
            >
              WhatsApp
              <span aria-hidden>→</span>
            </a>
          </div>

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
