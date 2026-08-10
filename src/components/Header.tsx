"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "INICIO", href: "#inicio" },
  { label: "NOSOTROS", href: "#nosotros" },
  { label: "ENFOQUE", href: "#enfoque" },
  { label: "MARCAS", href: "#marcas" },
  { label: "CONTACTO", href: "#contacto" },
];

// altura de la franja superior sobre la que evaluamos qué sección está detrás del header
const HEADER_BAND = 80;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [overDark, setOverDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const dark = Array.from(
      document.querySelectorAll<HTMLElement>('[data-theme="dark"]')
    );
    if (dark.length === 0) return;

    const active = new Set<Element>();

    const build = () =>
      new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) active.add(e.target);
            else active.delete(e.target);
          }
          setOverDark(active.size > 0);
        },
        {
          rootMargin: `0px 0px -${Math.max(
            0,
            window.innerHeight - HEADER_BAND
          )}px 0px`,
          threshold: 0,
        }
      );

    let observer = build();
    dark.forEach((s) => observer.observe(s));

    const onResize = () => {
      observer.disconnect();
      active.clear();
      observer = build();
      dark.forEach((s) => observer.observe(s));
    };
    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;
  const dark = !solid && overDark;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,color] duration-300 ${
          solid
            ? "bg-winco-white/85 backdrop-blur-md border-b border-winco-border"
            : "bg-transparent border-b border-transparent"
        } ${dark ? "text-winco-white" : "text-winco-black"}`}
      >
        <div className="container-winco flex h-16 items-center justify-between md:h-20">
          <Link
            href="#inicio"
            aria-label="WINCO"
            onClick={() => setMobileOpen(false)}
            className="flex items-center"
          >
            <Image
              src="/images/winco/logo.png"
              alt="WINCO"
              width={220}
              height={110}
              priority
              className="h-14 w-auto md:h-16"
              style={{
                filter: dark
                  ? "url(#logo-clean) invert(1)"
                  : "url(#logo-clean)",
                clipPath: "inset(4%)",
              }}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative inline-block text-[13px] font-medium uppercase tracking-[0.1em] text-current transition-colors duration-200"
              >
                {link.label}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center text-current"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-winco-white md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[28px] font-medium tracking-[-0.02em] text-winco-black"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
