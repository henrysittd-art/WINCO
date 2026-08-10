"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GridBackground from "./GridBackground";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-winco-white"
    >
      <GridBackground variant="light" fade="radial" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-winco relative flex flex-col items-center gap-8 py-28 text-center md:py-32"
      >
        <motion.div variants={item}>
          <Image
            src="/images/winco/logo.png"
            alt="WINCO"
            width={520}
            height={260}
            priority
            className="h-24 w-auto md:h-32"
            style={{
              filter: "url(#logo-clean)",
              clipPath: "inset(4%)",
            }}
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="heading-display max-w-5xl text-winco-black"
        >
          CREAMOS MARCAS QUE SE HACEN NOTAR.
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-[600px] text-[18px] leading-relaxed text-winco-muted md:text-[20px]"
        >
          Desarrollamos productos de consumo con identidad, funcionalidad y una
          propuesta diseñada para conectar con nuevas generaciones.
        </motion.p>

        <motion.div variants={item} className="pt-2">
          <a
            href="#marcas"
            className="inline-flex items-center justify-center rounded-btn px-8 py-4 text-[13px] font-medium uppercase tracking-[0.1em] text-winco-white transition duration-200 hover:scale-[1.02] hover:brightness-110"
            style={{
              background:
                "linear-gradient(135deg, #6366F1 0%, #A855F7 33%, #EC4899 66%, #F59E0B 100%)",
            }}
          >
            Conoce nuestras marcas
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
