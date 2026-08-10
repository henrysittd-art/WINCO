export type BrandColors = {
  primary: string;
  secondary: string;
  accent: string;
};

export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  colors: BrandColors;
  // Rutas de imágenes. null = todavía no hay asset, el card renderiza placeholder.
  logo: string | null;
  productImage: string | null;
  // Wordmark opcional en texto. Cuando está presente, la card lo prioriza
  // sobre `logo` — útil cuando el archivo del logo tiene marco/bordes que
  // ensucian el render (ej. la pill de Macho).
  logoText?: string;
  // Override opcional del tamaño de la imagen del logo (Tailwind className).
  // Útil cuando el logo tiene mucho padding transparente (ej. la pill de
  // Macho ocupa ~60% del canvas del JPG) y necesita más alto para leerse
  // al mismo tamaño visual que otros logos.
  logoClassName?: string;
  // Override opcional del background de la card — permite gradientes / capas
  // complejas para marcas con lenguaje visual propio.
  bgStyle?: string;
  href: string | null;
};

// Semántica de colores:
//   primary   → fondo por defecto de la card (si no hay `bgStyle`)
//   secondary → color de texto / logo sobre la card
//   accent    → pequeño highlight (dots, subrayados)
//
// href: `null` = CTA deshabilitado. Al poner URL real se activa solo.

export const brands: Brand[] = [
  {
    slug: "macho-wipes",
    name: "Macho Wipes",
    tagline: "Limpieza personal hecha para hombres.",
    description:
      "Una alternativa práctica, fresca y moderna diseñada para acompañarte dondequiera que estés.",
    colors: {
      // Sampleado directamente de las esquinas del JPG: el fondo superior es
      // #000000 puro. Usamos negro puro en la card para que las esquinas y el
      // borde superior de la imagen se fundan sin costura.
      primary: "#000000",
      secondary: "#FFFFFF",
      // Cyan/azul eléctrico del neón — reemplaza el verde previo.
      accent: "#0EA5E9",
    },
    logo: "/images/macho-wipes/logo.jpg",
    productImage: "/images/macho-wipes/product.jpg",
    // La pill del JPG ocupa solo el centro; usamos más alto para que se lea
    // al mismo tamaño visual que otros logos que llenan más su canvas.
    logoClassName: "h-20 w-auto md:h-24",
    // Sin bgStyle: card en color primary sólido, coherente con el fondo de la foto.
    href: "/machowipes",
  },
  {
    slug: "lady-wipes",
    name: "Lady Wipes",
    tagline: "Frescura y cuidado para todos los días.",
    description:
      "Una propuesta de cuidado personal práctica, moderna y diseñada especialmente para acompañar el estilo de vida de la mujer.",
    colors: {
      // Sampleado de las esquinas del JPG: fondo superior #000000 puro.
      primary: "#000000",
      secondary: "#FFFFFF",
      // Magenta/hot pink del neón — sampleado del arco (~#EF3E8F).
      accent: "#EC4899",
    },
    logo: "/images/lady-wipes/logo.jpg",
    productImage: "/images/lady-wipes/product.jpg",
    href: "/ladywipes",
  },
];
