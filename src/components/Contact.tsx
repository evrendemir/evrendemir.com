"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile, socials } from "@/content/site";
import { MaskText, Reveal } from "./Reveal";

// İmlece doğru hafifçe çekilen buton.
function Magnetic({ children, href }: { children: React.ReactNode; href: string }) {
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  return (
    <motion.a
      href={href}
      style={{ x, y }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.35);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="flex h-40 w-40 items-center justify-center rounded-full bg-accent text-center text-lg font-medium text-bg md:h-52 md:w-52 md:text-xl"
    >
      {children}
    </motion.a>
  );
}

function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      setTime(new Intl.DateTimeFormat("tr-TR", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Istanbul" }).format(new Date()));
    fmt();
    const t = setInterval(fmt, 30_000);
    return () => clearInterval(t);
  }, []);
  return <span className="tabular-nums">{time}</span>;
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);

  return (
    <footer id="iletisim" ref={ref} className="relative overflow-hidden border-t border-line pt-28 md:pt-40">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <h2 className="text-6xl font-semibold leading-[0.9] tracking-[-0.05em] md:text-[9rem]">
            <MaskText lines={["Birlikte", <span key="s" className="font-serif font-normal italic text-accent">bir şey</span>, "yapalım."]} />
          </h2>
          <Reveal delay={0.2}>
            <Magnetic href={`mailto:${profile.email}`}>Bana yaz ↗</Magnetic>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-3 text-2xl tracking-tight md:text-4xl">
            <span className="relative">
              {profile.email}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left bg-fg transition-transform duration-500 group-hover:scale-x-0" />
            </span>
          </a>
        </Reveal>

        <div className="mt-24 grid gap-10 border-t border-line py-10 text-sm text-muted md:grid-cols-3">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em]">Konum</p>
            <p className="text-fg">
              {profile.location} · <LocalTime />
            </p>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em]">Sosyal</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="text-fg transition-colors hover:text-accent">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:text-right">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em]">© {new Date().getFullYear()}</p>
            <a href="#top" className="text-fg transition-colors hover:text-accent">
              Başa dön ↑
            </a>
          </div>
        </div>
      </div>

      <motion.p
        aria-hidden
        style={{ x }}
        className="pointer-events-none select-none whitespace-nowrap pb-4 text-[22vw] font-semibold leading-none tracking-[-0.06em] text-outline"
      >
        Evren Demir · Evren Demir
      </motion.p>
    </footer>
  );
}
