"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import GridBackground from "./GridBackground";

// TODO: reemplazar con el correo corporativo definitivo
const CONTACT_EMAIL = "info@winco.com.pa";

// TODO: reemplazar cada href="#" con la URL real de cada red
// Nota: la versión instalada de lucide-react no incluye íconos de marca,
// así que se usan SVGs inline (Simple Icons, CC0).
const SOCIALS = [
  { icon: IconInstagram, label: "Instagram", href: "#" },
  { icon: IconLinkedIn, label: "LinkedIn", href: "#" },
  { icon: IconWhatsApp, label: "WhatsApp", href: "#" },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type FormErrors = { nombre?: string; correo?: string };

export default function Contacto() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const nombre = String(data.get("nombre") || "").trim();
    const empresa = String(data.get("empresa") || "").trim();
    const correo = String(data.get("correo") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();

    const nextErrors: FormErrors = {};
    if (!nombre) nextErrors.nombre = "Ingresa tu nombre.";
    if (!correo) nextErrors.correo = "Ingresa tu correo.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo))
      nextErrors.correo = "El correo no es válido.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    // TODO: sustituir por POST a un backend real (Resend / Formspree / /api/contact)
    // Ejemplo:
    //   await fetch("/api/contact", { method: "POST", body: JSON.stringify({...}) })
    const subject = encodeURIComponent(`Contacto WINCO — ${nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmpresa: ${empresa}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}\n`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSending(false);
  };

  return (
    <section
      id="contacto"
      data-theme="dark"
      className="relative overflow-hidden bg-winco-black py-20 text-winco-white md:py-28"
    >
      <GridBackground variant="dark" fade="radial-strong-bottom" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at top left, rgba(255,255,255,0.05), transparent 65%)",
        }}
      />

      <div className="container-winco relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="grid gap-12 md:grid-cols-[2fr_3fr] md:gap-16"
        >
          <div>
            <p className="heading-eyebrow">Contacto</p>
            <h2 className="heading-section mt-4 text-winco-white">Hablemos</h2>
            <p className="mt-6 max-w-[380px] text-[16px] leading-relaxed text-neutral-400">
              Para consultas comerciales, distribución o información sobre
              nuestras marcas.
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group mt-8 inline-flex items-center gap-3 text-[20px] font-medium tracking-[-0.01em] text-winco-white"
            >
              <Mail size={20} strokeWidth={1.5} />
              <span className="relative">
                {CONTACT_EMAIL}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-winco-white transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </span>
            </a>

            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 text-winco-white transition-colors duration-200 hover:border-winco-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div
            className="rounded-card border p-8 md:p-10"
            style={{ background: "#141414", borderColor: "#262626" }}
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <Field
                name="nombre"
                type="text"
                placeholder="Nombre"
                autoComplete="name"
                required
                error={errors.nombre}
              />
              <Field
                name="correo"
                type="email"
                placeholder="Correo"
                autoComplete="email"
                required
                error={errors.correo}
              />
              <Field
                name="empresa"
                type="text"
                placeholder="Empresa (opcional)"
                autoComplete="organization"
              />
              <Field
                name="mensaje"
                type="textarea"
                placeholder="Mensaje"
                rows={4}
              />
              <button
                type="submit"
                disabled={sending}
                className="mt-2 w-full rounded-btn bg-winco-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-winco-black transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
              >
                {sending ? "Enviando…" : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  name,
  type = "text",
  placeholder,
  autoComplete,
  required,
  rows,
  error,
}: {
  name: string;
  type?: "text" | "email" | "textarea";
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
  rows?: number;
  error?: string;
}) {
  const base =
    "w-full border-0 border-b bg-transparent px-0 py-2.5 text-[15px] text-winco-white placeholder:text-[#666] outline-none transition-colors duration-200";
  const borderCls = error
    ? "border-[#f87171]"
    : "border-[#333] focus:border-white";
  const cls = `${base} ${borderCls}${type === "textarea" ? " resize-none" : ""}`;

  return (
    <div>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className={cls}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          className={cls}
        />
      )}
      {error && (
        <p role="alert" className="mt-1.5 text-[12px] text-[#f87171]">
          {error}
        </p>
      )}
    </div>
  );
}

type IconProps = { size?: number };

function IconInstagram({ size = 20 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.898 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.898-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  );
}

function IconLinkedIn({ size = 20 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconWhatsApp({ size = 20 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
