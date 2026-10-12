"use client";

import { animate, motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
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
    <p ref={ref} className="text-3xl font-medium leading-[1.15] tracking-tight md:text-5xl">
      {words.map((w, i) => (
        <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
    </p>
  );
}

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(v) });
    return () => c.stop();
  }, [inView, value]);
  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString("tr-TR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
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
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="gradient-border group relative aspect-[3/4] overflow-hidden rounded-[2rem]">
              <Image
                src="/me/portre-studyo.jpg"
                alt="Evren Demir portresi"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-lg font-medium">Evren Demir</p>
                <p className="text-sm text-white/70">Yazılım geliştirici · İzmir</p>
              </div>
            </div>
          </Reveal>

          <div>
            <ScrollText text={about.statement} />
            <div className="mt-16 space-y-6 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-16 grid grid-cols-3 gap-4">
              {about.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1} className="border-t border-line pt-5">
                  <p className="text-4xl font-semibold tracking-tight md:text-6xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-muted">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
