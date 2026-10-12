"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { steps } from "@/content/site";
import { MaskText, Reveal, SectionLabel } from "./Reveal";

function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="mt-16">
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
    <section id="surec" className="relative border-y border-line bg-bg-soft/40">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-10 md:py-32">
        <SectionLabel index="05">Nasıl çalışıyoruz</SectionLabel>
        <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-7xl">
          <MaskText lines={[<span key="a" className="text-metal">Dört adımda,</span>, <span key="s" className="text-gradient font-serif font-normal italic">fikirden yayına.</span>]} />
        </h2>
        <Steps />
      </div>
    </section>
  );
}
