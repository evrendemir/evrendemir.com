"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { offers, steps } from "@/content/site";
import { MaskText, Reveal, SectionLabel } from "./Reveal";

function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="mt-28">
      <Reveal>
        <p className="mb-10 font-mono text-xs uppercase tracking-[0.18em] text-muted">Nasıl çalışıyoruz</p>
      </Reveal>
      <div className="relative">
        <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-line md:block" />
        <motion.div className="absolute left-0 top-[7px] hidden h-px bg-gradient-to-r from-accent to-accent-2 md:block" style={{ width }} />
        <div className="grid gap-10 md:grid-cols-4 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <span className="relative block h-[15px] w-[15px] rounded-full border border-accent bg-bg">
                <span className="absolute inset-[3px] rounded-full bg-accent" />
              </span>
              <p className="mt-6 font-mono text-xs text-muted">0{i + 1}</p>
              <h4 className="mt-2 text-2xl font-medium tracking-tight">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="hizmetler" className="relative overflow-hidden border-y border-line bg-bg-soft/40">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,76,0.12),transparent_65%)] blur-2xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-28 md:px-10 md:py-40">
        <SectionLabel index="04">Neler yapıyorum</SectionLabel>
        <h2 className="mb-16 text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-8xl">
          <MaskText lines={[<span key="a" className="text-metal">Büyük firmadan</span>, <span key="s" className="text-gradient font-serif font-normal italic">mahalle esnafına.</span>]} />
        </h2>

        <div className="grid gap-5 lg:grid-cols-2">
          {offers.map((o, i) => (
            <Reveal key={o.key} delay={i * 0.12} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={`gradient-border group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 md:p-12 ${
                  i === 0 ? "bg-bg" : "bg-gradient-to-br from-[#2a1609] via-bg to-bg"
                }`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl transition-opacity duration-700 group-hover:opacity-70"
                  style={{ background: i === 0 ? "radial-gradient(circle, rgba(130,110,255,0.6), transparent 70%)" : "radial-gradient(circle, var(--accent), transparent 70%)" }}
                />
                <p className="relative font-mono text-xs uppercase tracking-[0.18em] text-accent">{o.eyebrow}</p>
                <h3 className="relative mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{o.title}</h3>
                <p className="relative mt-5 max-w-md leading-relaxed text-muted">{o.body}</p>
                <ul className="relative mt-10 grid gap-x-8 sm:grid-cols-2">
                  {o.items.map((it, j) => (
                    <motion.li
                      key={it}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + j * 0.06 }}
                      className="flex items-center gap-3 border-t border-line py-3.5 text-[15px]"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[10px] text-accent">✓</span>
                      {it}
                    </motion.li>
                  ))}
                </ul>
                <a
                  href="#iletisim"
                  className={`shine relative mt-auto inline-flex w-fit items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-medium ${
                    i === 0 ? "glass text-fg" : "bg-fg text-bg"
                  }`}
                  style={{ marginTop: "2.5rem" }}
                >
                  {o.cta} →
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Steps />
      </div>
    </section>
  );
}
