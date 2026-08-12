import Image from "next/image";
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

      <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-12 md:py-20">
        {/* ═════════ Logo grande centrado + tagline ═════════ */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/lady-wipes/logo.jpg"
            alt="Lady Wipes"
            width={640}
            height={460}
            className="h-40 w-auto md:h-56 lg:h-64"
            style={{ filter: "url(#lw-logo-clean)" }}
          />
          <p className="-mt-6 max-w-md text-[14px] leading-relaxed text-[var(--lw-muted)] md:-mt-10 md:text-[15px]">
            Frescura y cuidado para todos los días.
          </p>
        </div>

        {/* ═════════ Nav links centrados en fila ═════════ */}
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:mt-12 md:gap-x-12">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--lw-fg)_75%,transparent)] transition-colors duration-200 hover:text-[var(--lw-pink-hot)]"
            >
              {l.label}
            </a>
          ))}
          <span
            aria-hidden
            className="hidden h-4 w-px bg-[color-mix(in_srgb,var(--lw-fg)_18%,transparent)] md:inline-block"
          />
          <Link
            href="/"
            className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--lw-fg)_75%,transparent)] transition-colors duration-200 hover:text-[var(--lw-pink-hot)]"
          >
            WINCO
          </Link>
        </nav>

        {/* ═════════ Bottom bar ═════════ */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[color-mix(in_srgb,var(--lw-fg)_8%,transparent)] pt-6 text-[12px] text-[var(--lw-muted)] md:flex-row md:items-center">
          <p>© {YEAR} Lady Wipes. Una marca de WINCO.</p>
          <p className="text-[color-mix(in_srgb,var(--lw-muted)_70%,transparent)]">
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
