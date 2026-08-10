import Image from "next/image";

const YEAR = 2026;

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Marcas", href: "#marcas" },
  { label: "Contacto", href: "#contacto" },
];

// Placeholder: cuando existan las landings de marca, sustituir por <a href={...}>
const BRAND_LINKS = ["Macho Wipes", "Lady Wipes"];

// Gradiente de acento — mismo espectro que el grid dark
const ACCENT_GRADIENT =
  "linear-gradient(90deg, #6366F1 0%, #A855F7 33%, #EC4899 66%, #F59E0B 100%)";

export default function Footer() {
  return (
    <footer data-theme="dark" className="bg-[#050505] text-winco-white">
      {/* Línea de acento con gradiente — separador fino entre Contacto y el footer */}
      <div
        aria-hidden
        className="h-0.5 w-full"
        style={{ background: ACCENT_GRADIENT }}
      />
      {/* Borde superior en gris oscuro para marcar la transición */}
      <div className="border-t border-[#262626]">
        <div className="container-winco py-10 md:py-12">
          <div className="grid gap-10 md:grid-cols-4 md:gap-14">
            <div className="md:col-span-2">
              {/* mix-blend-mode: screen fuerza a que los pixeles blancos del PNG
                  se integren con el fondo oscuro (blanco * negro = negro).
                  Cuando exista /images/winco/logo-blanco.png, quitar filter/blend y apuntar allí. */}
              <Image
                src="/images/winco/logo.png"
                alt="WINCO"
                width={120}
                height={24}
                className="h-20 w-auto md:h-24"
                style={{
                  filter: "url(#logo-clean) invert(1)",
                  clipPath: "inset(4%)",
                  mixBlendMode: "screen",
                }}
              />
              <p className="mt-3 max-w-xs text-[12px] leading-relaxed text-[#666]">
                Creamos marcas que se hacen notar.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#666]">
                Navegación
              </p>
              <ul className="mt-3 space-y-2 text-[13px]">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-[#A3A3A3] transition-colors duration-200 hover:text-winco-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#666]">
                Marcas
              </p>
              <ul className="mt-3 space-y-2 text-[13px]">
                {BRAND_LINKS.map((name) => (
                  <li
                    key={name}
                    className="text-[#A3A3A3] transition-colors duration-200"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-[#262626] pt-6">
            <p className="text-[12px] text-[#666]">
              © {YEAR} WINCO. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
