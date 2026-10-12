"use client";

import { animate, motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { about, skills } from "@/content/site";
import { Reveal, SectionLabel } from "./Reveal";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
}

// Kaydırdıkça kelime kelime aydınlanan cümle.
function ScrollText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className="text-3xl font-medium leading-[1.15] tracking-tight md:text-5xl lg:text-6xl">
      {words.map((w, i) => (
        <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
    </p>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="hakkimda" className="relative">
      <div className="border-y border-line py-6">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex shrink-0 items-center">
            {[...skills, ...skills].map((s, i) => (
              <span key={i} className="flex items-center gap-10 pr-10 text-2xl font-medium tracking-tight text-muted md:text-3xl">
                {s}
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-28 md:px-10 md:py-40">
        <SectionLabel index="01">Hakkımda</SectionLabel>
        <ScrollText text={about.statement} />

        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 self-end">
            {about.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="border-t border-line pt-5">
                <p className="text-5xl font-semibold tracking-tight md:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
