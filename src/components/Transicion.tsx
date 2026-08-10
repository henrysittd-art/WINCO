"use client";

import { motion } from "framer-motion";
import GridBackground from "./GridBackground";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Transicion() {
  return (
    <section
      data-theme="dark"
      className="relative overflow-hidden bg-winco-black py-32 md:py-40 lg:py-52"
    >
      <GridBackground variant="dark" fade="radial-strong" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at center, rgba(255,255,255,0.06), transparent 65%)",
        }}
      />
      <div className="container-winco relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2
            className="font-semibold text-winco-white"
            style={{
              fontSize: "clamp(1.75rem, 5.5vw, 4.25rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            PRODUCTOS COTIDIANOS
            <br />
            MARCAS EXTRAORDINARIAS
          </h2>
          <p className="mx-auto mt-12 max-w-[600px] text-[17px] leading-relaxed text-neutral-400 md:mt-14 md:text-[18px]">
            Creemos que incluso las categorías más tradicionales pueden
            reinventarse a través de producto, diseño y comunicación.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
