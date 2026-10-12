"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { services } from "@/content/site";
import { MaskText, Reveal } from "./Reveal";

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-fg text-bg">
      <div className="mx-auto max-w-7xl px-4 py-28 md:px-10 md:py-40">
        <Reveal y={16} className="mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-bg/50">
          <span className="text-accent">03</span>
          <span className="h-px w-10 bg-bg/15" />
          <span>Neler yapıyorum</span>
        </Reveal>
        <h2 className="mb-16 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
          <MaskText lines={["Fikirden,", <span key="s" className="font-serif font-normal italic">çalışan ürüne.</span>]} />
        </h2>

        <ul className="border-t border-bg/15" onPointerLeave={() => setActive(null)}>
          {services.map((s, i) => (
            <li key={s.title} onPointerEnter={() => setActive(i)} className="relative border-b border-bg/15">
              <motion.div
                className="absolute inset-0 origin-bottom bg-accent"
                initial={false}
                animate={{ scaleY: active === i ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <Reveal delay={i * 0.06} className="relative grid gap-3 px-2 py-8 md:grid-cols-[80px_1fr_1fr] md:items-center md:py-10">
                <span className="font-mono text-sm text-bg/50">0{i + 1}</span>
                <motion.h3
                  className="text-3xl font-medium tracking-tight md:text-5xl"
                  animate={{ x: active === i ? 16 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {s.title}
                </motion.h3>
                <p className="max-w-md text-bg/70">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
