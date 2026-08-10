"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV = [
  { label: "PRODUCTOS", href: "#productos" },
  { label: "POR QUÉ LADY", href: "#por-que" },
  { label: "CONTACTO", href: "#contacto" },
];

export default function LwHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
          solid
            ? "bg-[color-mix(in_srgb,var(--lw-bg)_85%,transparent)] backdrop-blur-md border-b border-[color-mix(in_srgb,var(--lw-accent)_25%,transparent)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:h-20 md:px-12">
          <Link
            href="/ladywipes"
            aria-label="Lady Wipes"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/lady-wipes/logo.jpg"
              alt="Lady Wipes"
              width={280}
              height={140}
              priority
              className="h-14 w-auto md:h-16"
              style={{ filter: "url(#lw-logo-clean)" }}
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--lw-fg)] transition-colors duration-200 hover:text-[var(--lw-pink-hot)]"
              >
                {link.label}
              </a>
            ))}
            <span className="h-4 w-px bg-[color-mix(in_srgb,var(--lw-fg)_20%,transparent)]" />
            <Link
              href="/"
              className="text-[11px] uppercase tracking-[0.18em] text-[var(--lw-muted)] transition-colors duration-200 hover:text-[var(--lw-fg)]"
            >
              WINCO
            </Link>
          </nav>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center text-[var(--lw-fg)] md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="lw-mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-[var(--lw-bg)] md:hidden"
          >
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-lw-heading text-[36px] text-[var(--lw-fg)]"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="mt-6 text-[12px] uppercase tracking-[0.22em] text-[var(--lw-muted)]"
            >
              ← WINCO
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
