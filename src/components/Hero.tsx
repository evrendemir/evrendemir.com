"use client";

import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/content/site";
import { MaskText } from "./Reveal";

const START = 1.7; // açılış ekranı kalktıktan sonra

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={profile.roles[i]}
          className="font-serif italic text-accent"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.4);
  const gx = useSpring(useTransform(mx, (v) => `${v * 100}%`), { stiffness: 60, damping: 20 });
  const gy = useSpring(useTransform(my, (v) => `${v * 100}%`), { stiffness: 60, damping: 20 });

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-4 pb-10 pt-32 md:px-10 md:pb-14"
    >
      {/* Fareyi takip eden ışık */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          left: gx,
          top: gy,
          background: "radial-gradient(circle, rgba(255,106,61,0.55) 0%, rgba(255,181,71,0.15) 35%, transparent 65%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: START }}
      />
      {/* İnce ızgara */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div style={{ y, opacity, scale }} className="relative mx-auto w-full max-w-7xl">
        <motion.div
          className="mb-8 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: START + 0.5 }}
        >
          {profile.available && (
            <span className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-fg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Yeni projelere açığım
            </span>
          )}
          <span>{profile.location}</span>
        </motion.div>

        <h1 className="text-[18vw] font-semibold leading-[0.85] tracking-[-0.06em] md:text-[14vw] xl:text-[12.5rem]">
          <MaskText animateOnMount delay={START} lines={[profile.firstName, <span key="l" className="text-outline">{profile.lastName}</span>]} />
        </h1>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[1.2fr_1fr] md:items-end">
          <motion.p
            className="text-2xl leading-tight tracking-tight md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: START + 0.35 }}
          >
            İşletmeler için <RotatingRole />
            <br />
            üretiyorum.
          </motion.p>
          <motion.p
            className="max-w-md text-base leading-relaxed text-muted md:justify-self-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: START + 0.5 }}
          >
            {profile.intro}
          </motion.p>
        </div>
      </motion.div>

      <motion.a
        href="#hakkimda"
        aria-label="Aşağı kaydır"
        className="absolute bottom-8 right-6 hidden h-14 w-14 items-center justify-center rounded-full border border-line md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: START + 0.9 }}
      >
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
