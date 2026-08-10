"use client";

import { motion } from "framer-motion";
import GridBackground from "./GridBackground";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Vision() {
  return (
    <section className="relative overflow-hidden bg-winco-bg-alt py-24 md:py-32">
      <GridBackground variant="light" fade="radial-medium" line="#D9D9D9" />
      <div className="container-winco relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0, ease: EASE }}
            className="heading-eyebrow"
          >
            Nuestra visión
          </motion.p>

          {/* Título en dos líneas — jerarquía por peso y color */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="heading-section mt-5"
          >
            <span className="block font-normal text-[#737373]">
              Diferentes marcas.
            </span>
            <span className="block font-bold text-[#0A0A0A]">
              Una misma visión.
            </span>
          </motion.h2>

          {/* Párrafo */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="mx-auto mt-8 max-w-[620px] text-[18px] leading-relaxed text-[#737373]"
          >
            En WINCO desarrollamos cada marca con una personalidad propia, pero
            todas comparten un mismo principio:
          </motion.p>

          {/* Frase destacada — una sola unidad tipográfica, dos niveles de énfasis */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mx-auto mt-16 tracking-[-0.02em] md:whitespace-nowrap"
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.75rem)",
              lineHeight: 1.2,
            }}
          >
            <span className="font-medium text-[#737373]">
              Crear productos que:{" "}
            </span>
            <span className="font-bold text-[#0A0A0A]">
              funcionen, destaquen y conecten.
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
