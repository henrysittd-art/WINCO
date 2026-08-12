"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, type MouseEvent } from "react";
import { products, type Product } from "../data/products";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TOTAL_FORMATOS = products.length.toString().padStart(2, "0");

export default function MwProducts() {
  return (
    <section
      id="productos"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Filtro SVG que liftea los negros puros a un gris consistente,
          para que las fotos de empaques sobre fondo negro se vean con
          la misma ambient grey de las que traen fondo fotográfico. */}
      <svg
        aria-hidden
        width="0"
        height="0"
        className="absolute"
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <filter id="mw-lift-blacks" colorInterpolationFilters="sRGB">
            <feComponentTransfer>
              <feFuncR type="linear" slope="0.9" intercept="0.11" />
              <feFuncG type="linear" slope="0.9" intercept="0.11" />
              <feFuncB type="linear" slope="0.9" intercept="0.11" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* Rim light superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 15%, rgba(56, 189, 248, 0.5) 50%, transparent 85%)",
        }}
      />

      {/* Blue glow — abajo a la izquierda */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] bottom-[-10%] h-[580px] w-[580px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.34), transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
        {/* ═════════ Header ═════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="flex items-center gap-4">
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--mw-accent)" }}
              >
                Nuestra línea
              </p>
              <span
                aria-hidden
                className="h-px w-14 opacity-60"
                style={{
                  background:
                    "linear-gradient(90deg, var(--mw-blue-hot), transparent)",
                }}
              />
              <span
                className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--mw-muted)]"
                style={{
                  fontFamily:
                    "ui-monospace, SFMono-Regular, Menlo, monospace",
                }}
              >
                MW / LINE-UP · 2026
              </span>
            </div>
            <h2 className="font-mw-heading mt-4 text-[36px] leading-[0.95] text-[var(--mw-fg)] md:text-[56px]">
              ELEGÍ TU
              <br />
              PRESENTACIÓN.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            {/* Badge con conteo total */}
            <div
              className="inline-flex items-center gap-2.5 rounded-md border px-3 py-1.5"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--mw-accent) 30%, transparent)",
                background:
                  "color-mix(in srgb, var(--mw-accent) 10%, transparent)",
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                  style={{ backgroundColor: "var(--mw-blue-hot)" }}
                />
                <span
                  className="relative inline-flex h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--mw-blue-hot)" }}
                />
              </span>
              <span
                className="font-mw-heading text-[13px] leading-none"
                style={{ color: "var(--mw-blue-hot)" }}
              >
                {TOTAL_FORMATOS}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--mw-fg)]">
                Formatos
              </span>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-[var(--mw-muted)] md:text-right">
              Formatos pensados para cada uso — del pack familiar al que va en
              la guantera.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const forSale = Boolean(product.price && product.buyUrl);
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
      onMouseMove={onMove}
      onMouseLeave={() => setSpot(null)}
      className="mw-glow-hover group relative flex flex-col overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--mw-accent)_15%,transparent)] bg-[color-mix(in_srgb,var(--mw-fg)_3%,var(--mw-bg))]"
    >
      {/* Spotlight cursor por card */}
      {spot && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-xl"
          style={{
            background: `radial-gradient(circle 320px at ${spot.x}px ${spot.y}px, rgba(56,189,248,0.13), transparent 45%)`,
          }}
        />
      )}

      {/* Imagen del producto */}
      {product.floating ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {/* Ambient grey sólido de canto a canto en el área de imagen.
              Los PNGs verticales (ej. Travel Pack) no llenan horizontal-
              mente, así que el gris debe cubrir absolutamente todo el
              bloque; la transición al card body pasa en la línea
              horizontal que separa la imagen de la sección de info. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ backgroundColor: "#1c1c1c" }}
          />
          <Image
            src={product.imagen}
            alt={product.nombre}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="relative scale-[1.22] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.28]"
            style={{
              filter: "url(#mw-lift-blacks)",
              maskImage:
                "radial-gradient(ellipse 80% 82% at 50% 52%, #000 60%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 82% at 50% 52%, #000 60%, transparent 100%)",
            }}
          />
        </div>
      ) : (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(14,165,233,0.25), transparent 70%)",
            }}
          />
          <Image
            src={product.imagen}
            alt={product.nombre}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="relative object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ mixBlendMode: "screen" }}
          />
        </div>
      )}

      {/* Info */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center gap-3">
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--mw-accent)" }}
          >
            {product.cantidad}
          </span>
        </div>
        <h3 className="font-mw-heading mt-3 text-[22px] leading-tight text-[var(--mw-fg)] md:text-[26px]">
          {product.nombre.toUpperCase()}
        </h3>
        <p className="mt-1 text-[13px] uppercase tracking-[0.1em] text-[var(--mw-muted)]">
          {product.formato}
        </p>
        <p className="mt-4 flex-1 text-[14px] leading-relaxed text-[var(--mw-muted)]">
          {product.descripcion}
        </p>

        {/* Precio + CTA (solo si están definidos en products.ts) */}
        {forSale && (
          <div className="mt-6 flex items-center justify-between">
            <span className="font-mw-heading text-[22px] text-[var(--mw-fg)]">
              {product.price}
            </span>
            <a
              href={product.buyUrl}
              className="inline-flex items-center gap-2 rounded-md bg-[var(--mw-accent)] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--mw-bg)] transition-all duration-200 hover:scale-[1.03]"
            >
              Comprar
              <span aria-hidden>→</span>
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}
