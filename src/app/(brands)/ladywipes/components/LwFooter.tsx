import Link from "next/link";

const YEAR = 2026;

const NAV = [
  { label: "Productos", href: "#productos" },
  { label: "Por qué Lady", href: "#por-que" },
  { label: "Contacto", href: "#contacto" },
];

export default function LwFooter() {
  return (
    <footer className="border-t border-[color-mix(in_srgb,var(--lw-fg)_10%,transparent)] bg-[color-mix(in_srgb,var(--lw-bg)_85%,black)]">
      {/* Barra fina de acento arriba */}
      <div
        aria-hidden
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--lw-pink-hot), transparent)",
        }}
      />

      <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-12 md:py-14">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr] md:gap-10">
          <div>
            <span className="font-lw-heading text-[26px] leading-none text-[var(--lw-fg)]">
              LADY WIPES
            </span>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-[var(--lw-muted)]">
              Frescura y cuidado para todos los días.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--lw-muted)]">
              Navegar
            </p>
            <ul className="mt-4 space-y-2 text-[13px]">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[color-mix(in_srgb,var(--lw-fg)_75%,transparent)] transition-colors duration-200 hover:text-[var(--lw-fg)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--lw-muted)]">
              Más
            </p>
            <ul className="mt-4 space-y-2 text-[13px]">
              <li>
                <Link
                  href="/"
                  className="text-[color-mix(in_srgb,var(--lw-fg)_75%,transparent)] transition-colors duration-200 hover:text-[var(--lw-fg)]"
                >
                  WINCO
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[color-mix(in_srgb,var(--lw-fg)_8%,transparent)] pt-6 text-[12px] text-[var(--lw-muted)] md:flex-row md:items-center">
          <p>© {YEAR} Lady Wipes. Una marca de WINCO.</p>
          <p className="text-[color-mix(in_srgb,var(--lw-muted)_70%,transparent)]">
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
