"use client";

import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { apps, profile } from "@/content/site";
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

// Uygulamalarımın ikonlarıyla dolu, fareyle eğilen cam telefon ekranı.
function HomeScreen({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  const rotateY = useSpring(useTransform(mx, [0, 1], [14, -14]), { stiffness: 60, damping: 18 });
  const rotateX = useSpring(useTransform(my, [0, 1], [-10, 10]), { stiffness: 60, damping: 18 });
  const time = new Intl.DateTimeFormat("tr-TR", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Istanbul" }).format(new Date());

  return (
    <motion.div
      className="relative mx-auto w-[300px] [perspective:1400px] xl:w-[330px]"
      initial={{ opacity: 0, y: 60, rotateX: 25 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.4, ease, delay: START + 0.2 }}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
        <div aria-hidden className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(255,138,76,0.35),transparent_65%)] blur-2xl" />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="gradient-border relative aspect-[9/19] overflow-hidden rounded-[3rem] bg-gradient-to-b from-white/[0.09] to-white/[0.02] p-5 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
        >
          <div className="mx-auto mb-6 h-6 w-24 rounded-full bg-black/70" />
          <div className="mb-8 flex items-center justify-between px-2 text-xs font-medium text-fg/80">
            <span className="tabular-nums" suppressHydrationWarning>{time}</span>
            <span className="font-mono text-[10px] tracking-wider text-muted">EVREN</span>
          </div>
          <div className="grid grid-cols-3 gap-x-3 gap-y-5">
            {apps.slice(0, 9).map((a, i) => (
              <motion.div
                key={a.id}
                className="flex flex-col items-center gap-1.5"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: START + 0.7 + i * 0.06, type: "spring", stiffness: 260, damping: 18 }}
              >
                <Image src={`/apps/${a.id}.png`} alt="" width={128} height={128} className="h-[60px] w-[60px] rounded-[22%] shadow-lg shadow-black/40" />
                <span className="w-full truncate text-center text-[10px] text-fg/70">{a.name}</span>
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-x-5 bottom-5 flex justify-around rounded-[1.6rem] bg-white/[0.07] p-3 backdrop-blur-xl">
            {apps.slice(-1).concat(apps.slice(0, 3)).map((a) => (
              <Image key={a.id} src={`/apps/${a.id}.png`} alt="" width={128} height={128} className="h-12 w-12 rounded-[22%]" />
            ))}
          </div>
          {/* cam parlaması */}
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[3rem] bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.08)_45%,transparent_55%)]" />
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
          <HomeScreen mx={mx} my={my} />
        </div>

        {/* Mobilde ikon şeridi */}
        <motion.div
          className="flex gap-3 overflow-hidden lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: START + 0.8 }}
        >
          {apps.slice(0, 6).map((a) => (
            <Image key={a.id} src={`/apps/${a.id}.png`} alt="" width={128} height={128} className="h-14 w-14 shrink-0 rounded-[22%] ring-1 ring-white/10" />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
