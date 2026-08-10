import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./styles.css";

const anton = Anton({
  variable: "--mw-font-heading",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const SITE = "https://winco.com.pa";
const TITLE = "Macho Wipes | Limpieza personal hecha para hombres";
const DESCRIPTION =
  "Macho Wipes — alternativa práctica, fresca y moderna de higiene personal diseñada para acompañarte dondequiera que estés.";
const URL = `${SITE}/machowipes`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Macho Wipes",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function MachoWipesLayout({
  children,
}: LayoutProps<"/machowipes">) {
  return (
    <div
      className={`machowipes machowipes-shell ${anton.variable} relative min-h-screen overflow-hidden text-[var(--mw-fg)]`}
    >
      {/* Orbes de luz — más brillantes, más chicos, sin haze */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div
          className="mw-orb"
          style={{ width: 620, height: 620, top: "-8%", left: "-12%" }}
        />
        <div
          className="mw-orb"
          style={{
            width: 540,
            height: 540,
            bottom: "-6%",
            right: "-10%",
            background:
              "radial-gradient(circle, rgba(14,165,233,0.14) 0%, rgba(14,165,233,0.06) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10">{children}</div>

      {/*
        SVG filter local para quitar el fondo negro del JPG del logo
        y de la foto de producto. Preserva colores originales.
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
          <filter id="mw-logo-clean" colorInterpolationFilters="sRGB">
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
