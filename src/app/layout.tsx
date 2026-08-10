import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Serif italic para acentos tipográficos (títulos y palabras destacadas).
// Cargamos solo el estilo italic en pesos 400 y 700 para minimizar el bundle.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["italic"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://winco.com.pa";
const siteTitle = "WINCO | Creamos marcas que se hacen notar";
const siteDescription =
  "WINCO desarrolla marcas y productos de consumo modernos creados para conectar con las nuevas generaciones. Conoce nuestro portafolio de marcas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "WINCO",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-winco-white text-winco-black">
        {/* SVG filter global para eliminar el fondo blanco del PNG del logo.
            Convierte brillo → alpha: blanco = transparente, negro = opaco.
            RGB se fija a 0 (negro) para preservar anti-aliasing sin lavar el texto.
            Uso: style={{ filter: "url(#logo-clean)" }} — o "url(#logo-clean) invert(1)" para modo dark. */}
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
            <filter
              id="logo-clean"
              colorInterpolationFilters="sRGB"
            >
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0 0
                        -0.333 -0.333 -0.333 0 1"
              />
            </filter>
            {/* Para logos con contenido claro sobre fondo oscuro (ej. Macho Wipes).
                Preserva RGB original y usa brillo como alpha con threshold:
                pixeles casi negros (bg comprimido a #040404) → transparentes,
                pixeles brillantes → opacos. */}
            <filter
              id="logo-clean-dark"
              colorInterpolationFilters="sRGB"
            >
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
        {children}
      </body>
    </html>
  );
}
