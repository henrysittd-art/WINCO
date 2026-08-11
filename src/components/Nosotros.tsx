"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import GridBackground from "./GridBackground";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="section-y relative overflow-hidden bg-winco-white"
    >
      <GridBackground variant="light" fade="radial" opacity={0.5} />
      <div className="container-winco relative">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="heading-eyebrow">Quiénes somos</p>
            <h2 className="heading-section mt-4 text-winco-black">
              Construimos marcas para el consumidor de hoy.
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-winco-muted md:text-[18px]">
              <p>
                En WINCO identificamos oportunidades dentro de categorías de
                consumo cotidiano y las transformamos en productos con
                identidad, funcionalidad y una propuesta clara. Hoy
                desarrollamos productos de cuidado e higiene personal, con una
                línea que sigue creciendo.
              </p>
              <p>
                Nuestro objetivo es desarrollar marcas modernas, relevantes y
                fáciles de recordar, capaces de conectar con las necesidades y
                estilos de vida de los consumidores.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="relative w-full"
            style={{ aspectRatio: "6 / 5" }}
          >
            <ShelfSketch />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Vista frontal plana de un mueble de supermercado.
   Sin perspectiva — solo rectángulos y líneas rectas.
   viewBox 600×500.

   - Mueble grande (30,30)→(570,400) con 5 estantes (4 divisores)
   - Cada estante lleva ~12–15 productos de 5 tipos (botella / frasco /
     caja / lata / bolsa) generados con variaciones sutiles
   - Piso y techo como líneas ambientes
   - Persona pequeña de espaldas al frente con carrito
   ═══════════════════════════════════════════════════════════════ */

const VBW = 600;
const VBH = 500;

// Mueble
const SH_XL = 30;
const SH_XR = 570;
const SH_YT = 30;
const SH_YB = 400;
// Divisores internos → 5 estantes
const SHELF_LINES = [104, 178, 252, 326, 400];
// Y de las repisas (base de productos = línea inferior de cada sección)
const SHELF_BASES = SHELF_LINES;
// Y superiores de cada sección
const SECTION_TOPS = [SH_YT, 104, 178, 252, 326];

type Ptype = "bottle" | "jar" | "box" | "can" | "bag";

const PRODUCT_BASE: Record<Ptype, { w: number; h: number }> = {
  bottle: { w: 20, h: 55 },
  box: { w: 28, h: 52 },
  jar: { w: 24, h: 42 },
  can: { w: 18, h: 50 },
  bag: { w: 26, h: 48 },
};

// Genera productos para una sección — tipos rotando y tamaños con variación
function generateSectionProducts(
  sectionIdx: number,
  maxHeight: number
): Array<{ type: Ptype; x: number; w: number; h: number }> {
  const products: Array<{ type: Ptype; x: number; w: number; h: number }> = [];
  const types: Ptype[] = ["bottle", "box", "jar", "can", "bag"];
  let x = 40;
  let i = 0;
  const shift = sectionIdx * 3;
  const rightEdge = SH_XR - 10;

  while (x < rightEdge) {
    const type = types[(shift + i) % types.length];
    const base = PRODUCT_BASE[type];
    const wVar = 1 + (((i + sectionIdx * 2) % 5) - 2) * 0.09;
    const hVar = 1 + (((i * 3 + sectionIdx) % 7) - 3) * 0.06;
    const w = Math.max(12, Math.round(base.w * wVar));
    const h = Math.min(
      maxHeight - 4,
      Math.max(20, Math.round(base.h * hVar))
    );
    if (x + w > rightEdge) break;
    products.push({ type, x, w, h });
    x += w + 4;
    i += 1;
  }
  return products;
}

// Persona (coordenadas explícitas — vista de frente/espaldas)
const PERSON_HEAD = { cx: 300, cy: 322, r: 13 };
const PERSON_TORSO_D = "M282 348 L318 348 L314 415 L286 415 Z";
// Carrito a la derecha de la persona
const CART = { x: 322, y: 386, w: 62, h: 42, wheelY: 442, wheelR: 5.5 };

function ShelfSketch() {
  const reduce = useReducedMotion();
  const ease: [number, number, number, number] = [0.4, 0, 0.2, 1];
  const tx = (delay: number, duration = 0.35) => ({
    duration,
    delay,
    ease,
  });

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };
  const fadeVar = (target: number) => ({
    hidden: { opacity: 0 },
    visible: { opacity: target },
  });

  // Render de un producto según tipo, con su base en shelfY
  const renderProduct = (
    p: { type: Ptype; x: number; w: number; h: number },
    shelfY: number,
    key: string,
    delay: number,
    targetOpacity: number,
    strokeW: number
  ): ReactNode => {
    const { x, w, h, type } = p;
    const y = shelfY - h;
    const g = {
      variants: fadeVar(targetOpacity),
      transition: tx(delay, 0.25),
      strokeWidth: strokeW,
    };

    switch (type) {
      case "bottle": {
        const neckW = w * 0.48;
        const capH = Math.max(2, h * 0.06);
        const neckH = Math.max(3, h * 0.13);
        const neckX = x + (w - neckW) / 2;
        return (
          <motion.g key={key} {...g}>
            <rect
              x={x}
              y={y + capH + neckH}
              width={w}
              height={h - capH - neckH}
            />
            <line
              x1={neckX}
              y1={y + capH}
              x2={neckX}
              y2={y + capH + neckH}
            />
            <line
              x1={neckX + neckW}
              y1={y + capH}
              x2={neckX + neckW}
              y2={y + capH + neckH}
            />
            <line
              x1={neckX}
              y1={y + capH}
              x2={neckX + neckW}
              y2={y + capH}
            />
            <rect
              x={neckX + 1}
              y={y}
              width={Math.max(1, neckW - 2)}
              height={capH}
            />
          </motion.g>
        );
      }
      case "jar": {
        const lidH = Math.max(3, h * 0.2);
        const lidW = w * 0.92;
        const lidX = x + (w - lidW) / 2;
        return (
          <motion.g key={key} {...g}>
            <rect x={x} y={y + lidH} width={w} height={h - lidH} />
            <rect x={lidX} y={y} width={lidW} height={lidH} />
          </motion.g>
        );
      }
      case "box":
        return (
          <motion.rect
            key={key}
            x={x}
            y={y}
            width={w}
            height={h}
            {...g}
          />
        );
      case "can": {
        const bandY1 = y + h * 0.16;
        const bandY2 = y + h * 0.84;
        return (
          <motion.g key={key} {...g}>
            <rect x={x} y={y} width={w} height={h} />
            <line x1={x + 1} y1={bandY1} x2={x + w - 1} y2={bandY1} />
            <line x1={x + 1} y1={bandY2} x2={x + w - 1} y2={bandY2} />
          </motion.g>
        );
      }
      case "bag": {
        const notch = w * 0.14;
        return (
          <motion.path
            key={key}
            d={`M ${x + notch} ${y} L ${x + w - notch} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z`}
            {...g}
          />
        );
      }
    }
  };

  // Genera todos los productos
  const productElements: ReactNode[] = [];
  const productBase = 0.55;
  const productStagger = 0.008;
  let pIdx = 0;
  SHELF_BASES.forEach((shelfY, sIdx) => {
    const secTop = SECTION_TOPS[sIdx];
    const maxH = shelfY - secTop;
    const items = generateSectionProducts(sIdx, maxH);
    items.forEach((p, i) => {
      productElements.push(
        renderProduct(
          p,
          shelfY,
          `p-${sIdx}-${i}`,
          productBase + pIdx * productStagger,
          0.95,
          1.4
        )
      );
      pIdx += 1;
    });
  });

  return (
    <motion.svg
      viewBox={`0 0 ${VBW} ${VBH}`}
      className="absolute inset-0 block h-full w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient
          id="wc-brand-grad"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2={VBW}
          y2={VBH}
        >
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="0.33" stopColor="#A855F7" />
          <stop offset="0.66" stopColor="#EC4899" />
          <stop offset="1" stopColor="#F59E0B" />
          {!reduce && (
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="-100 -80; 100 80; -100 -80"
              dur="8s"
              repeatCount="indefinite"
            />
          )}
        </linearGradient>
      </defs>

      <g stroke="url(#wc-brand-grad)">
        {/* ═════════ Techo (línea sutil arriba) ═════════ */}
        <motion.line
          x1={20}
          y1={16}
          x2={580}
          y2={16}
          strokeWidth={1}
          opacity={0.35}
          variants={draw}
          transition={tx(0)}
        />

        {/* ═════════ Frame del mueble ═════════ */}
        <g strokeWidth={2}>
          <motion.line
            x1={SH_XL}
            y1={SH_YT}
            x2={SH_XR}
            y2={SH_YT}
            variants={draw}
            transition={tx(0.05)}
          />
          <motion.line
            x1={SH_XR}
            y1={SH_YT}
            x2={SH_XR}
            y2={SH_YB}
            variants={draw}
            transition={tx(0.1)}
          />
          <motion.line
            x1={SH_XL}
            y1={SH_YB}
            x2={SH_XR}
            y2={SH_YB}
            variants={draw}
            transition={tx(0.15)}
          />
          <motion.line
            x1={SH_XL}
            y1={SH_YT}
            x2={SH_XL}
            y2={SH_YB}
            variants={draw}
            transition={tx(0.2)}
          />
        </g>

        {/* ═════════ Divisores horizontales (repisas) con volumen ═════════ */}
        {SHELF_LINES.slice(0, -1).map((y, i) => (
          <g key={`shelf-${i}`}>
            {/* Cara superior */}
            <motion.line
              x1={SH_XL}
              y1={y}
              x2={SH_XR}
              y2={y}
              strokeWidth={1.7}
              variants={draw}
              transition={tx(0.28 + i * 0.04)}
            />
            {/* Cara inferior (grosor 3px) */}
            <motion.line
              x1={SH_XL}
              y1={y + 3}
              x2={SH_XR}
              y2={y + 3}
              strokeWidth={1.2}
              opacity={0.7}
              variants={draw}
              transition={tx(0.3 + i * 0.04)}
            />
          </g>
        ))}

        {/* ═════════ Productos ═════════ */}
        {productElements}

        {/* ═════════ Piso ═════════ */}
        <motion.line
          x1={0}
          y1={460}
          x2={VBW}
          y2={460}
          strokeWidth={1.2}
          opacity={0.55}
          variants={draw}
          transition={tx(0.5)}
        />
        <motion.line
          x1={0}
          y1={475}
          x2={VBW}
          y2={475}
          strokeWidth={0.9}
          opacity={0.3}
          variants={draw}
          transition={tx(0.53)}
        />

        {/* ═════════ Persona — vista de frente/espaldas, en el centro ═════════ */}
        <g strokeWidth={2.5}>
          <motion.circle
            cx={PERSON_HEAD.cx}
            cy={PERSON_HEAD.cy}
            r={PERSON_HEAD.r}
            variants={fadeVar(1)}
            transition={tx(1.15, 0.35)}
          />
          {/* Cuello */}
          <motion.line
            x1={300}
            y1={335}
            x2={300}
            y2={346}
            strokeWidth={1.8}
            variants={fadeVar(1)}
            transition={tx(1.18, 0.25)}
          />
          {/* Torso trapecio */}
          <motion.path
            d={PERSON_TORSO_D}
            variants={fadeVar(1)}
            transition={tx(1.2, 0.4)}
          />
          {/* Brazo izquierdo */}
          <motion.line
            x1={283}
            y1={352}
            x2={276}
            y2={412}
            variants={fadeVar(1)}
            transition={tx(1.26, 0.3)}
          />
          {/* Brazo derecho — extendido hacia el carrito */}
          <motion.line
            x1={317}
            y1={352}
            x2={330}
            y2={396}
            variants={fadeVar(1)}
            transition={tx(1.28, 0.3)}
          />
          {/* Piernas */}
          <motion.line
            x1={291}
            y1={415}
            x2={289}
            y2={458}
            variants={fadeVar(1)}
            transition={tx(1.32, 0.3)}
          />
          <motion.line
            x1={309}
            y1={415}
            x2={311}
            y2={458}
            variants={fadeVar(1)}
            transition={tx(1.34, 0.3)}
          />
          {/* Pies */}
          <motion.line
            x1={283}
            y1={459}
            x2={295}
            y2={459}
            strokeWidth={2.2}
            variants={fadeVar(1)}
            transition={tx(1.36, 0.2)}
          />
          <motion.line
            x1={305}
            y1={459}
            x2={317}
            y2={459}
            strokeWidth={2.2}
            variants={fadeVar(1)}
            transition={tx(1.38, 0.2)}
          />
        </g>

        {/* ═════════ Carrito ═════════ */}
        <g strokeWidth={2}>
          <motion.rect
            x={CART.x}
            y={CART.y}
            width={CART.w}
            height={CART.h}
            variants={fadeVar(0.95)}
            transition={tx(1.42, 0.35)}
          />
          <motion.line
            x1={CART.x + 4}
            y1={CART.y + 10}
            x2={CART.x + CART.w - 4}
            y2={CART.y + 10}
            strokeWidth={1}
            variants={fadeVar(0.55)}
            transition={tx(1.45, 0.3)}
          />
          <motion.line
            x1={CART.x + 4}
            y1={CART.y + 22}
            x2={CART.x + CART.w - 4}
            y2={CART.y + 22}
            strokeWidth={1}
            variants={fadeVar(0.55)}
            transition={tx(1.47, 0.3)}
          />
          <motion.circle
            cx={CART.x + 14}
            cy={CART.wheelY}
            r={CART.wheelR}
            variants={fadeVar(1)}
            transition={tx(1.5, 0.3)}
          />
          <motion.circle
            cx={CART.x + CART.w - 14}
            cy={CART.wheelY}
            r={CART.wheelR}
            variants={fadeVar(1)}
            transition={tx(1.52, 0.3)}
          />
        </g>
      </g>
    </motion.svg>
  );
}
