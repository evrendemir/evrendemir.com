"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#cozumler", label: "Çözümler" },
  { href: "#bireysel", label: "Bireysel" },
  { href: "#uygulamalar", label: "Uygulamalar" },
  { href: "#surec", label: "Süreç" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 200 && !open);
    setScrolled(y > 40);
  });

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: hidden ? 0 : 0.1 }}
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-colors duration-500 ${
            scrolled ? "glass border-white/10 shadow-2xl shadow-black/40" : "border-transparent"
          }`}
        >
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Evren Demir<span className="text-accent">.</span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="group relative text-sm text-muted transition-colors hover:text-fg">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-fg transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#iletisim"
            className="hidden rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform hover:scale-105 md:block"
          >
            Birlikte çalışalım
          </a>
          <button
            aria-label="Menü"
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            <motion.span className="h-px w-6 bg-fg" animate={{ rotate: open ? 45 : 0, y: open ? 3.5 : 0 }} />
            <motion.span className="h-px w-6 bg-fg" animate={{ rotate: open ? -45 : 0, y: open ? -3.5 : 0 }} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg px-8 md:hidden"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-5xl font-medium tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.07 }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
