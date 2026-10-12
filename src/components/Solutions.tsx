"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { solutions, type Solution } from "@/content/site";
import { MaskText, Reveal, SectionLabel } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

// Görselin üstünde süzülen, uygulamadan bir bildirim gibi görünen cam kart.
function Widget({ s, className = "" }: { s: Solution; className?: string }) {
  return (
    <div className={`glass flex items-center gap-3 rounded-2xl p-3 pr-5 shadow-2xl shadow-black/40 ${className}`}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold text-white" style={{ background: s.color }}>
        ✓
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-white">{s.widget.title}</p>
        <p className="truncate text-xs text-white/70">
          {s.widget.detail} · <span className="text-white">{s.widget.status}</span>
        </p>
      </div>
    </div>
  );
}

function Showcase() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const s = solutions[i];

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((n) => (n + 1) % solutions.length), 5000);
    return () => clearTimeout(t);
  }, [i, paused]);

  return (
    <div onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)}>
      {/* Sektör seçici */}
      <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0">
        {solutions.map((x, j) => (
          <button
            key={x.slug}
            onClick={() => setI(j)}
            className={`relative shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${j === i ? "text-bg" : "text-muted hover:text-fg"}`}
          >
            {j === i && <motion.span layoutId="sector-pill" className="absolute inset-0 rounded-full bg-fg" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
            <span className="relative">{x.sector}</span>
          </button>
        ))}
      </div>

      <div className="gradient-border relative grid overflow-hidden rounded-[2rem] bg-bg-soft lg:grid-cols-[1.5fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[560px]">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={s.slug}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease }}
            >
              <Image src={`/solutions/${s.slug}.jpg`} alt={s.sector} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" priority={i === 0} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={s.slug + "-w"}
              className="absolute bottom-5 left-5 right-5 sm:right-auto"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease, delay: 0.35 }}
            >
              <Widget s={s} />
            </motion.div>
          </AnimatePresence>
          {/* ilerleme çubuğu */}
          <div className="absolute inset-x-0 top-0 h-0.5 bg-white/10">
            <motion.div
              key={s.slug + (paused ? "-p" : "")}
              className="h-full"
              style={{ background: s.color }}
              initial={{ width: "0%" }}
              animate={{ width: paused ? "0%" : "100%" }}
              transition={{ duration: paused ? 0 : 5, ease: "linear" }}
            />
          </div>
        </div>

        <div className="relative flex flex-col justify-between gap-10 p-8 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: s.color }}>
                {s.sector}
              </p>
              <h3 className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{s.product}</h3>
              <ul className="mt-8 space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 border-t border-line pt-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px]" style={{ background: s.color + "26", color: s.color }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#iletisim" className="shine relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-fg px-6 py-3.5 text-sm font-medium text-bg">
              İşletmem için konuşalım →
            </a>
            <span className="font-mono text-xs text-muted tabular-nums">
              {String(i + 1).padStart(2, "0")} / {solutions.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ s, index }: { s: Solution; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <a href="#iletisim" className="group block">
        <div className="gradient-border relative aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-bg-soft">
          <Image
            src={`/solutions/${s.slug}.jpg`}
            alt={s.sector}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
          <Widget
            s={s}
            className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          />
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-muted">{s.sector}</p>
            <h3 className="mt-1 text-xl font-medium tracking-tight">{s.product}</h3>
          </div>
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: s.color }} />
        </div>
      </a>
    </Reveal>
  );
}

export default function Solutions() {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? solutions : solutions.slice(0, 9);

  return (
    <section id="cozumler" className="relative mx-auto max-w-7xl px-4 py-28 md:px-10 md:py-40">
      <SectionLabel index="02">Sektörünüze hazır çözümler</SectionLabel>
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-8xl">
          <MaskText lines={[<span key="a" className="text-metal">Her işletmeye</span>, <span key="s" className="text-gradient font-serif font-normal italic">kendi uygulaması.</span>]} />
        </h2>
        <Reveal className="max-w-sm text-muted">
          <p>Randevudan rezervasyona, stoktan müşteri takibine. Aşağıdakiler işletmenize göre uyarlayabileceğim örnek çözümler.</p>
        </Reveal>
      </div>

      <Reveal>
        <Showcase />
      </Reveal>

      <div className="mt-24 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s, i) => (
          <Card key={s.slug} s={s} index={i} />
        ))}
      </div>
      {!showAll && (
        <Reveal className="mt-14 flex justify-center">
          <button onClick={() => setShowAll(true)} className="glass rounded-full px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white/10">
            Tüm sektörleri gör ({solutions.length})
          </button>
        </Reveal>
      )}
    </section>
  );
}
