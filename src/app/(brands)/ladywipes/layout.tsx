import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./styles.css";

// Misma familia que Macho (por request explícito). Anton — condensada,
// pesada, uppercase. La diferencia entre marcas se logra por paleta.
const anton = Anton({
  variable: "--lw-font-heading",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const SITE = "https://winco.com.pa";
const TITLE = "Lady Wipes | Frescura y cuidado para todos los días";
const DESCRIPTION =
  "Lady Wipes — propuesta de cuidado personal práctica, moderna y diseñada especialmente para acompañar el estilo de vida de la mujer.";
const URL = `${SITE}/ladywipes`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Lady Wipes",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function LadyWipesLayout({
  children,
}: LayoutProps<"/ladywipes">) {
  return (
    <div
      className={`ladywipes ladywipes-shell ${anton.variable} relative min-h-screen overflow-hidden text-[var(--lw-fg)]`}
    >
      {/* Orbes de luz — magenta */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div
          className="lw-orb"
          style={{ width: 620, height: 620, top: "-8%", left: "-12%" }}
        />
        <div
          className="lw-orb"
          style={{
            width: 540,
            height: 540,
            bottom: "-6%",
            right: "-10%",
            background:
              "radial-gradient(circle, rgba(255,31,143,0.15) 0%, rgba(255,31,143,0.06) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10">{children}</div>

      {/*
        SVG filter local para quitar el fondo negro del JPG del logo
        y de la foto de producto. Preserva colores (rosa magenta, texto blanco).
        A_out = 0.667·R + 0.667·G + 0.667·B − 0.2 → pixeles casi negros → alpha 0.
      */}
      <svg
        aria-hidden
        focusable="false"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="lw-logo-clean" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0.667 0.667 0.667 0 -0.2"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
