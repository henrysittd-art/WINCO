"use client";

import { motion } from "framer-motion";
import { Package, Sparkles, Users } from "lucide-react";
import GridBackground from "./GridBackground";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const cards = [
  {
    icon: Package,
    label: "Producto",
    title: "Funcional desde el primer día.",
    description:
      "Desarrollamos productos pensados para resolver necesidades reales del consumidor, desde el cuidado personal hasta nuevas categorías de uso diario.",
  },
  {
    icon: Sparkles,
    label: "Marca",
    title: "Una identidad que se recuerda.",
    description:
      "Construimos marcas con personalidad propia, comunicación diferenciada y presencia visual.",
  },
  {
    icon: Users,
    label: "Consumidor",
    title: "Pensamos desde quien lo va a usar.",
    description:
      "Diseñamos cada concepto alrededor de hábitos, necesidades y experiencias del consumidor.",
  },
];

export default function Enfoque() {
  return (
    <section
      id="enfoque"
      className="section-y relative overflow-hidden bg-winco-bg-alt"
    >
      <GridBackground variant="light" fade="radial-medium" line="#D9D9D9" />
      <div className="container-winco relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="heading-eyebrow">Nuestro enfoque</p>
          <h2 className="heading-section mt-4 text-winco-black">
            Nuestro enfoque
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: EASE,
                }}
                className="rounded-card border border-winco-border bg-winco-white p-8"
              >
                <Icon size={28} strokeWidth={1.5} className="text-winco-black" />
                <p className="heading-eyebrow mt-8">{card.label}</p>
                <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.02em] text-winco-black">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-winco-muted">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
