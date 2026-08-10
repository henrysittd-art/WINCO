type Variant = "light" | "dark";
type Fade =
  | "radial"
  | "radial-strong"
  | "radial-strong-bottom"
  | "radial-medium"
  | "top"
  | "bottom"
  | "none";

type Props = {
  variant?: Variant;
  fade?: Fade;
  opacity?: number;
  cell?: number;
  // Override del color de línea en variante LIGHT (útil sobre fondo #F5F5F5
  // donde el #E5E5E5 default tiene poco contraste).
  line?: string;
  className?: string;
};

// ══════════ AJUSTES GLOBALES ══════════
// Variante LIGHT — grid neutro sin color, como el original.
const LIGHT_LINE = "#E5E5E5";
// Variante DARK — grid tintado con gradiente diagonal (135°).
const DARK_GRADIENT =
  "linear-gradient(135deg, #6366F1 0%, #A855F7 33%, #EC4899 66%, #F59E0B 100%)";
// Opacidad global de la variante dark — modular acá para subir/bajar el tint.
const DARK_OPACITY = 0.55;
// ══════════════════════════════════════

const MASK: Record<Fade, string | undefined> = {
  radial: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
  "radial-strong":
    "radial-gradient(ellipse at center, black 0%, black 40%, transparent 75%)",
  // Como radial-strong pero con farthest-side + centro subido 40%:
  // fuerza que el degradado se complete bastante antes del borde inferior.
  "radial-strong-bottom":
    "radial-gradient(ellipse farthest-side at 50% 40%, black 0%, black 35%, transparent 70%)",
  // Área opaca aún más amplia; pensado para secciones light sobre fondo #F5F5F5.
  "radial-medium":
    "radial-gradient(ellipse at center, black 0%, black 45%, transparent 80%)",
  top: "linear-gradient(to bottom, black 0%, transparent 100%)",
  bottom: "linear-gradient(to top, black 0%, transparent 100%)",
  none: undefined,
};

export default function GridBackground({
  variant = "light",
  fade = "none",
  opacity,
  cell = 56,
  line,
  className = "",
}: Props) {
  const fadeMask = MASK[fade];

  if (variant === "dark") {
    const finalOpacity = opacity ?? DARK_OPACITY;
    const gridMask =
      "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)";
    const gridSize = `${cell}px ${cell}px, ${cell}px ${cell}px`;
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${className}`}
        style={{
          opacity: finalOpacity,
          maskImage: fadeMask,
          WebkitMaskImage: fadeMask,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: DARK_GRADIENT,
            maskImage: gridMask,
            WebkitMaskImage: gridMask,
            maskSize: gridSize,
            WebkitMaskSize: gridSize,
            maskRepeat: "repeat",
            WebkitMaskRepeat: "repeat",
          }}
        />
      </div>
    );
  }

  // Variante LIGHT — grid neutro en gris.
  const lineColor = line ?? LIGHT_LINE;
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `linear-gradient(${lineColor} 1px, transparent 1px), linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
        backgroundSize: `${cell}px ${cell}px`,
        opacity: opacity ?? 1,
        maskImage: fadeMask,
        WebkitMaskImage: fadeMask,
      }}
    />
  );
}
