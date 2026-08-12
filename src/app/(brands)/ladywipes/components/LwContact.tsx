"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// TODO: reemplazar con datos reales cuando estén confirmados
const CONTACT_EMAIL = "hola@ladywipes.com";
const WHATSAPP_URL = "https://wa.me/50700000000";
const WHATSAPP_LABEL = "+507 0000-0000";

export default function LwContact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Rim light superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 15%, rgba(255, 82, 170, 0.4) 50%, transparent 85%)",
        }}
      />

      {/* Pink glow — halo central */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45"
        style={{
          background:
            "radial-gradient(circle, rgba(255,82,170,0.30), transparent 60%)",
          filter: "blur(90px)",
        }}
      />

      {/* Pink glow inferior — cierre hacia el footer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-80"
        style={{
          background:
            "radial-gradient(ellipse 900px 320px at 50% 100%, rgba(255,31,143,0.20), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1180px] px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:gap-14">
          {/* ═════════ IZQUIERDA — brand + canales directos ═════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-px w-8 opacity-60"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--lw-pink-hot))",
                }}
              />
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--lw-pink-hot)" }}
              >
                Dónde conseguirlo
              </p>
            </div>

            <h2 className="font-lw-heading mt-5 text-[44px] leading-[0.9] text-[var(--lw-fg)] md:text-[68px]">
              <span
                className="lw-text-neon"
                style={{ color: "var(--lw-pink-hot)" }}
              >
                HABLEMOS.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[var(--lw-muted)] md:text-[17px]">
              Distribución mayorista, alianzas comerciales o pedidos
              personales. Escribinos por el canal que te quede más cómodo.
            </p>

            {/* Chips de contacto directo */}
            <div className="mt-8 space-y-3">
              <ContactChip
                href={`mailto:${CONTACT_EMAIL}`}
                icon={Mail}
                label="Email"
                value={CONTACT_EMAIL}
              />
              <ContactChip
                href={WHATSAPP_URL}
                icon={MessageCircle}
                label="WhatsApp"
                value={WHATSAPP_LABEL}
                external
              />
              <ContactChip
                icon={MapPin}
                label="Distribución"
                value="Panamá · Región Centroamérica"
              />
            </div>
          </motion.div>

          {/* ═════════ DERECHA — formulario ═════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="relative"
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Firma técnica al pie del bloque */}
        <p
          className="mt-16 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--lw-muted)] opacity-60"
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          LW / CONTACT · 2026
        </p>
      </div>
    </section>
  );
}

/* ─── Chip de contacto ────────────────────────────────────────── */
function ContactChip({
  href,
  icon: Icon,
  label,
  value,
  external,
}: {
  href?: string;
  icon: typeof Mail;
  label: string;
  value: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span
        className="lw-icon-glow flex h-10 w-10 shrink-0 items-center justify-center rounded-md"
        style={{
          background:
            "color-mix(in srgb, var(--lw-pink) 12%, transparent)",
          color: "var(--lw-pink-hot)",
        }}
      >
        <Icon size={16} strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--lw-muted)]">
          {label}
        </p>
        <p className="mt-0.5 truncate text-[14px] font-medium text-[var(--lw-fg)]">
          {value}
        </p>
      </div>
    </>
  );

  const baseCls =
    "group flex items-center gap-3 rounded-lg border px-4 py-3 transition-all duration-200";
  const styleObj = {
    borderColor:
      "color-mix(in srgb, var(--lw-pink) 18%, transparent)",
    background:
      "color-mix(in srgb, var(--lw-fg) 2%, var(--lw-bg))",
  } as const;

  if (!href) {
    return (
      <div className={baseCls} style={styleObj}>
        {inner}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${baseCls} hover:border-[var(--lw-pink-hot)] hover:bg-[color-mix(in_srgb,var(--lw-pink)_8%,var(--lw-bg))]`}
      style={styleObj}
    >
      {inner}
    </a>
  );
}

/* ─── Form de contacto ─────────────────────────────────────────── */
function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") || "");
    const empresa = String(data.get("empresa") || "");
    const email = String(data.get("email") || "");
    const mensaje = String(data.get("mensaje") || "");

    const subject = encodeURIComponent(
      `Contacto Lady Wipes${empresa ? ` — ${empresa}` : ""}`
    );
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmpresa: ${empresa || "—"}\nEmail: ${email}\n\nMensaje:\n${mensaje}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-2xl border p-6 md:p-8"
      style={{
        borderColor:
          "color-mix(in srgb, var(--lw-pink) 20%, transparent)",
        background:
          "linear-gradient(160deg, color-mix(in srgb, var(--lw-fg) 4%, var(--lw-bg)) 0%, color-mix(in srgb, var(--lw-bg) 95%, black) 100%)",
      }}
    >
      {/* Gradiente decorativo en el borde superior de la card */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,82,170,0.55) 50%, transparent)",
        }}
      />

      <div className="flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
            style={{ backgroundColor: "var(--lw-pink-hot)" }}
          />
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ backgroundColor: "var(--lw-pink-hot)" }}
          />
        </span>
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--lw-pink-hot)" }}
        >
          Escribinos
        </p>
      </div>

      <h3 className="font-lw-heading mt-3 text-[22px] leading-tight text-[var(--lw-fg)] md:text-[26px]">
        DEJANOS TU MENSAJE.
      </h3>
      <p className="mt-1.5 text-[13px] text-[var(--lw-muted)]">
        Te respondemos en las próximas 24 h laborales.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Field label="Nombre" name="nombre" required placeholder="Tu nombre" />
        <Field
          label="Empresa"
          name="empresa"
          placeholder="Opcional"
          optional
        />
      </div>
      <div className="mt-4">
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
        />
      </div>
      <div className="mt-4">
        <Field
          label="Comentario"
          name="mensaje"
          required
          textarea
          placeholder="Contanos qué necesitás — pedido personal, distribución, alianza…"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--lw-pink-hot)] px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--lw-bg)] transition-all duration-200 hover:scale-[1.01] hover:shadow-[0_0_40px_-8px_rgba(255,82,170,0.7)] md:w-auto"
        style={{
          boxShadow: "0 0 20px -6px rgba(255, 82, 170, 0.5)",
        }}
      >
        Enviar mensaje
        <ArrowRight size={16} strokeWidth={2.5} />
      </button>

      {sent && (
        <p
          className="mt-4 text-[12px] font-medium"
          style={{ color: "var(--lw-pink-hot)" }}
        >
          Se abrió tu cliente de mail — si no, escribinos directo a{" "}
          {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  );
}

/* ─── Input / Textarea unificado ────────────────────────────────── */
function Field({
  label,
  name,
  type = "text",
  required,
  optional,
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const commonCls =
    "w-full rounded-md border bg-transparent px-3.5 py-3 text-[14px] text-[var(--lw-fg)] placeholder:text-[color-mix(in_srgb,var(--lw-muted)_60%,transparent)] outline-none transition-all duration-200 focus:border-[var(--lw-pink-hot)] focus:shadow-[0_0_0_3px_rgba(255,82,170,0.15)]";
  const styleObj = {
    borderColor:
      "color-mix(in srgb, var(--lw-fg) 14%, transparent)",
  } as const;

  return (
    <label className="block">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--lw-muted)]">
          {label}
        </span>
        {optional && (
          <span className="text-[10px] uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--lw-muted)_65%,transparent)]">
            Opcional
          </span>
        )}
      </div>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={5}
          className={`mt-2 resize-none ${commonCls}`}
          style={styleObj}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={`mt-2 ${commonCls}`}
          style={styleObj}
        />
      )}
    </label>
  );
}
