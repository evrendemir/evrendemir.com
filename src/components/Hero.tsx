"use client";

import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { apps, profile, solutions } from "@/content/site";
import { MaskText } from "./Reveal";

const START = 1.7; // açılış ekranı kalktıktan sonra
const ease = [0.22, 1, 0.36, 1] as const;

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.15em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={profile.roles[i]}
          className="text-gradient font-serif italic"
          initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease }}
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// Portre: fareyle hafifçe eğilir, etrafında uygulamadan bildirimler süzülür.
function Portrait({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  const rotateY = useSpring(useTransform(mx, [0, 1], [8, -8]), { stiffness: 60, damping: 18 });
  const rotateX = useSpring(useTransform(my, [0, 1], [-6, 6]), { stiffness: 60, damping: 18 });
  const chipX = useSpring(useTransform(mx, [0, 1], [18, -18]), { stiffness: 50, damping: 18 });
  const chipY = useSpring(useTransform(my, [0, 1], [14, -14]), { stiffness: 50, damping: 18 });
  const booking = solutions[1];

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[440px] [perspective:1400px]"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease, delay: START + 0.15 }}
    >
      <div aria-hidden className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(255,138,76,0.35),transparent_65%)] blur-2xl" />
      <motion.div style={{ rotateX, rotateY }} className="gradient-border relative aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]">
        <Image src="/me/portre-kollar.jpg" alt="Evren Demir" fill priority sizes="440px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
      </motion.div>

      {/* Randevu bildirimi */}
      <motion.div
        className="absolute -left-14 top-[56%] xl:-left-24"
        style={{ x: chipX, y: chipY }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: START + 0.9, duration: 0.8, ease }}
      >
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}>
          <div className="glass flex items-center gap-3 rounded-2xl p-3 pr-5 shadow-2xl shadow-black/50">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: booking.color }}>✓</span>
            <div>
              <p className="text-sm font-medium">{booking.widget.status}</p>
              <p className="text-xs text-muted">{booking.widget.title} · {booking.widget.detail}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Uygulama ikonları */}
      <motion.div
        className="absolute -bottom-8 -right-8 xl:-right-14"
        style={{ x: chipX, y: chipY }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: START + 1.1, duration: 0.8, ease }}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}>
          <div className="glass rounded-2xl p-4 shadow-2xl shadow-black/50">
            <div className="flex -space-x-3">
              {apps.slice(0, 5).map((a) => (
                <Image key={a.id} src={`/apps/${a.id}.png`} alt="" width={128} height={128} className="h-10 w-10 rounded-[22%] ring-2 ring-bg" />
              ))}
            </div>
            <p className="mt-3 text-sm font-medium">{apps.length} App Store uygulaması</p>
            <p className="text-xs text-muted">Tasarım, kod ve yayın</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.4);
  const gx = useSpring(useTransform(mx, (v) => `${v * 100}%`), { stiffness: 50, damping: 20 });
  const gy = useSpring(useTransform(my, (v) => `${v * 100}%`), { stiffness: 50, damping: 20 });

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-32 md:px-10"
    >
      {/* Arka plan: yavaşça dolaşan ışıklar, fare ışığı ve nokta deseni */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <motion.div
          className="absolute h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ left: gx, top: gy, background: "radial-gradient(circle, rgba(255,210,154,0.16), transparent 60%)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(244,242,238,0.09)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <motion.div style={{ y, opacity }} className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.div
            className="glass mb-10 inline-flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4 text-sm"
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: START + 0.4 }}
          >
            {profile.available && (
              <span className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Yeni projelere açığım
              </span>
            )}
            <span className="text-muted">{profile.location}</span>
          </motion.div>

          <h1 className="text-[17vw] font-semibold leading-[0.88] tracking-[-0.055em] sm:text-[13vw] lg:text-[8.5rem] xl:text-[10rem]">
            <MaskText
              animateOnMount
              delay={START}
              lines={[
                <span key="f" className="text-metal">{profile.firstName}</span>,
                <span key="l" className="text-metal">
                  {profile.lastName}
                  <span className="text-accent">.</span>
                </span>,
              ]}
            />
          </h1>

          <motion.p
            className="mt-10 text-2xl leading-tight tracking-tight text-fg/90 md:text-[2.5rem]"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: START + 0.3 }}
          >
            İşletmeler için <RotatingRole />
            <br />
            tasarlıyor ve geliştiriyorum.
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl leading-relaxed text-muted md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: START + 0.45 }}
          >
            {profile.intro}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: START + 0.6 }}
          >
            <a href="#iletisim" className="shine group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-fg py-3.5 pl-6 pr-3 font-medium text-bg">
              Birlikte çalışalım
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bg text-fg transition-transform duration-500 group-hover:rotate-[-45deg]">→</span>
            </a>
            <a href="#uygulamalar" className="glass inline-flex items-center rounded-full px-6 py-3.5 font-medium transition-colors hover:bg-white/10">
              Uygulamalarım
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <Portrait mx={mx} my={my} />
        </div>

        {/* Mobilde portre */}
        <motion.div
          className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] lg:hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: START + 0.6, duration: 1, ease }}
        >
          <Image src="/me/portre-kollar.jpg" alt="Evren Demir" fill sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
    </section>
  );
}
