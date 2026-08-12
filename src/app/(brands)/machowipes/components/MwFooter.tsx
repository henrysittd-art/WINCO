import Image from "next/image";
import Link from "next/link";

const YEAR = 2026;

const NAV = [
  { label: "Productos", href: "#productos" },
  { label: "Por qué Macho", href: "#por-que" },
  { label: "Contacto", href: "#contacto" },
];

export default function MwFooter() {
  return (
    <footer className="border-t border-[color-mix(in_srgb,var(--mw-fg)_10%,transparent)] bg-[color-mix(in_srgb,var(--mw-bg)_85%,black)]">
      {/* Barra fina de acento arriba */}
      <div
        aria-hidden
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--mw-accent), transparent)",
        }}
      />

      <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-12 md:py-20">
        {/* ═════════ Logo grande centrado + tagline ═════════ */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/macho-wipes/logo.jpg"
            alt="Macho Wipes"
            width={640}
            height={460}
            className="h-40 w-auto md:h-56 lg:h-64"
            style={{ filter: "url(#mw-logo-clean)" }}
          />
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-[var(--mw-muted)] md:text-[15px]">
            Limpieza personal hecha para hombres.
          </p>
        </div>

        {/* ═════════ Nav links centrados en fila ═════════ */}
        <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:mt-14 md:gap-x-12">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--mw-fg)_75%,transparent)] transition-colors duration-200 hover:text-[var(--mw-accent)]"
            >
              {l.label}
            </a>
          ))}
          <span
            aria-hidden
            className="hidden h-4 w-px bg-[color-mix(in_srgb,var(--mw-fg)_18%,transparent)] md:inline-block"
          />
          <Link
            href="/"
            className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--mw-fg)_75%,transparent)] transition-colors duration-200 hover:text-[var(--mw-accent)]"
          >
            WINCO
          </Link>
        </nav>

        {/* ═════════ Bottom bar ═════════ */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[color-mix(in_srgb,var(--mw-fg)_8%,transparent)] pt-6 text-[12px] text-[var(--mw-muted)] md:flex-row md:items-center">
          <p>© {YEAR} Macho Wipes. Una marca de WINCO.</p>
          <p className="text-[color-mix(in_srgb,var(--mw-muted)_70%,transparent)]">
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
