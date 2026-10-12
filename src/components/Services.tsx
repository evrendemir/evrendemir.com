"use client";

import { motion } from "framer-motion";
import { offers, steps } from "@/content/site";
import { MaskText, Reveal } from "./Reveal";

export default function Services() {
  return (
    <section id="hizmetler" className="bg-fg text-bg">
      <div className="mx-auto max-w-7xl px-4 py-28 md:px-10 md:py-40">
        <Reveal y={16} className="mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-bg/50">
          <span className="text-accent">04</span>
          <span className="h-px w-10 bg-bg/15" />
          <span>Neler yapıyorum</span>
        </Reveal>
        <h2 className="mb-16 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
          <MaskText lines={["Büyük firmadan", <span key="s" className="font-serif font-normal italic">mahalle esnafına.</span>]} />
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {offers.map((o, i) => (
            <Reveal key={o.key} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 md:p-12 ${
                  i === 0 ? "bg-bg text-fg" : "bg-accent text-bg"
                }`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
                  style={{ background: i === 0 ? "radial-gradient(circle, var(--accent), transparent 70%)" : "radial-gradient(circle, #fff, transparent 70%)" }}
                />
                <p className={`relative font-mono text-xs uppercase tracking-[0.18em] ${i === 0 ? "text-accent" : "text-bg/60"}`}>{o.eyebrow}</p>
                <h3 className="relative mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{o.title}</h3>
                <p className={`relative mt-5 max-w-md leading-relaxed ${i === 0 ? "text-muted" : "text-bg/75"}`}>{o.body}</p>
                <ul className="relative mt-10 grid gap-x-6 sm:grid-cols-2">
                  {o.items.map((it, j) => (
                    <motion.li
                      key={it}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + j * 0.06 }}
                      className={`flex items-center gap-3 border-t py-3 text-sm ${i === 0 ? "border-line" : "border-bg/15"}`}
                    >
                      <span>✦</span>
                      {it}
                    </motion.li>
                  ))}
                </ul>
                <a
                  href="#iletisim"
                  className={`relative mt-10 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-105 ${
                    i === 0 ? "bg-fg text-bg" : "bg-bg text-fg"
                  }`}
                >
                  {o.cta} →
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-bg/50">Nasıl çalışıyoruz</p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-bg/10 bg-bg/10 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="h-full bg-fg">
                <div className="h-full p-6 md:p-8">
                  <span className="font-mono text-sm text-accent">0{i + 1}</span>
                  <h4 className="mt-6 text-2xl font-medium tracking-tight">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-bg/65">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
