"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { brands, type Brand } from "@/data/brands";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Marcas() {
  return (
    <section id="marcas" className="section-y bg-winco-white">
      <div className="container-winco">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="heading-eyebrow">Nuestras marcas</p>
          <h2 className="heading-section mt-4 text-winco-black">
            Nuestras marcas
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-winco-muted md:text-[20px]">
            Conceptos independientes. Personalidades diferentes. Una misma
            visión.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          {brands.map((brand, i) => (
            <BrandCard key={brand.slug} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandCard({ brand, index }: { brand: Brand; index: number }) {
  const { primary, secondary, accent } = brand.colors;
  const enabled = brand.href !== null;
  const cardBg = brand.bgStyle ?? primary;

  const article = (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
      className={`group relative overflow-hidden rounded-card ${
        enabled ? "cursor-pointer" : ""
      }`}
      style={{ background: cardBg, color: secondary }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.05]"
        style={{ background: secondary }}
      />

      <div className="relative flex min-h-[500px] flex-col justify-between p-8 md:p-10">
        {/* Cabecera — logo o nombre + dot accent */}
        <div className="flex items-center justify-between">
          {brand.logoText ? (
            <span className="text-[22px] font-bold uppercase leading-none tracking-[-0.02em] md:text-[26px]">
              {brand.logoText}
            </span>
          ) : brand.logo ? (
            <Image
              src={brand.logo}
              alt={brand.name}
              width={280}
              height={200}
              className={brand.logoClassName ?? "h-14 w-auto md:h-16"}
              style={{ filter: "url(#logo-clean-dark)" }}
            />
          ) : (
            <span className="text-[13px] font-semibold uppercase tracking-[0.16em]">
              {brand.name}
            </span>
          )}
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: accent }}
          />
        </div>

        {/* Centro — imagen de producto o placeholder */}
        {brand.productImage ? (
          <div className="-mx-8 my-6 flex flex-1 items-center justify-center md:-mx-10">
            <div className="relative w-full transition-transform duration-300 ease-out group-hover:-translate-y-2">
              <Image
                src={brand.productImage}
                alt={`${brand.name} — línea de productos`}
                width={1600}
                height={901}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="block h-auto w-full"
                style={{ mixBlendMode: "screen" }}
              />
              {/* Fusión inferior: el borde bajo de la foto se disuelve en el color de la card
                  (el reflejo del piso + neón bajo se apagan gradualmente hasta el bg) */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
                style={{
                  background: `linear-gradient(to bottom, transparent 0%, ${primary} 100%)`,
                }}
              />
              {/* Fusión superior más fina: hilo de 24px para tapar cualquier
                  hairline en el borde superior del JPG sin cubrir la headline "LA SOLUCIÓN" */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-6"
                style={{
                  background: `linear-gradient(to top, transparent 0%, ${primary} 100%)`,
                }}
              />
            </div>
          </div>
        ) : (
          <div className="my-10 flex flex-1 items-center justify-center">
            <div
              className="flex aspect-square w-[68%] max-w-[300px] items-center justify-center rounded-card transition-transform duration-300 ease-out group-hover:-translate-y-2"
              style={{
                background: `${secondary}0d`,
                border: `1px solid ${secondary}1a`,
              }}
            >
              <span
                className="text-[11px] uppercase tracking-[0.24em]"
                style={{ color: `${secondary}80` }}
              >
                {brand.name}
              </span>
            </div>
          </div>
        )}

        {/* Pie — tagline / desc / CTA */}
        <div>
          <h3 className="max-w-md text-[26px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[30px]">
            {brand.tagline}
          </h3>
          <p
            className="mt-4 max-w-[400px] text-[15px] leading-relaxed"
            style={{ color: `${secondary}cc` }}
          >
            {brand.description}
          </p>

          <div className="mt-8">
            {enabled ? (
              // CTA como <span>: la card entera es el <Link> (envoltorio de arriba),
              // así evitamos anidar <a> dentro de <a>. Los efectos de hover se
              // disparan igual porque usan `group-hover` del <motion.article>.
              <span
                className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.1em]"
                style={{ color: accent }}
              >
                <span className="border-b border-transparent transition-colors duration-300 group-hover:border-current">
                  Conoce {brand.name}
                </span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            ) : (
              <span
                aria-disabled
                className="inline-flex cursor-not-allowed items-center gap-2 text-[13px] font-medium uppercase tracking-[0.1em]"
                style={{ color: `${accent}CC` }}
              >
                <span>Conoce {brand.name}</span>
                <span>→</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );

  // Cuando la marca tiene href definido, envolvemos toda la card en <Link>
  // para que sea clickeable completa. Link renderiza como <a> con prefetch
  // y navegación client-side instantánea.
  if (enabled && brand.href) {
    return (
      <Link
        href={brand.href}
        aria-label={`Ir a ${brand.name}`}
        className="block rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{ outlineColor: accent }}
      >
        {article}
      </Link>
    );
  }

  return article;
}
