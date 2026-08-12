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

      <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-12 md:py-14">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr] md:gap-10">
          <div>
            <Image
              src="/images/macho-wipes/logo.jpg"
              alt="Macho Wipes"
              width={420}
              height={300}
              className="-ml-2 h-28 w-auto md:h-32"
              style={{ filter: "url(#mw-logo-clean)" }}
            />
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-[var(--mw-muted)]">
              Limpieza personal hecha para hombres.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--mw-muted)]">
              Navegar
            </p>
            <ul className="mt-4 space-y-2 text-[13px]">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[color-mix(in_srgb,var(--mw-fg)_75%,transparent)] transition-colors duration-200 hover:text-[var(--mw-fg)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--mw-muted)]">
              Más
            </p>
            <ul className="mt-4 space-y-2 text-[13px]">
              <li>
                <Link
                  href="/"
                  className="text-[color-mix(in_srgb,var(--mw-fg)_75%,transparent)] transition-colors duration-200 hover:text-[var(--mw-fg)]"
                >
                  WINCO
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[color-mix(in_srgb,var(--mw-fg)_8%,transparent)] pt-6 text-[12px] text-[var(--mw-muted)] md:flex-row md:items-center">
          <p>© {YEAR} Macho Wipes. Una marca de WINCO.</p>
          <p className="text-[color-mix(in_srgb,var(--mw-muted)_70%,transparent)]">
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
