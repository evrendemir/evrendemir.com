"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { apps } from "@/content/site";
import { MaskText, Reveal, SectionLabel } from "./Reveal";

// Tek satırlık ikon şeridi: üstüne gelinen uygulamanın adı ve açıklaması altta belirir.
export default function Apps() {
  const [active, setActive] = useState(0);
  const a = apps[active];

  return (
    <section id="uygulamalar" className="relative mx-auto max-w-7xl px-4 py-24 md:px-10 md:py-32">
      <SectionLabel index="04">App Store&apos;daki uygulamalarım</SectionLabel>
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-7xl">
          <MaskText lines={[<span key="a" className="text-metal">On uygulama,</span>, <span key="s" className="text-gradient font-serif font-normal italic">tek geliştirici.</span>]} />
        </h2>
        <Reveal className="max-w-sm text-muted">
          <p>Fikirden tasarıma, geliştirmeden App Store yayınına kadar her birini kendim yaptım.</p>
        </Reveal>
      </div>

      <Reveal>
        <div className="gradient-border relative overflow-hidden rounded-[2rem] bg-bg-soft p-6 md:p-10">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            animate={{ background: `radial-gradient(600px circle at ${10 + active * 9}% 0%, ${a.glow}55, transparent 60%)` }}
            transition={{ duration: 0.6 }}
          />
          <div className="relative flex flex-wrap justify-center gap-3 md:justify-between md:gap-2">
            {apps.map((x, i) => (
              <button
                key={x.id}
                onPointerEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-label={x.name}
                className="relative rounded-[22%] outline-none"
              >
                <motion.span
                  className="block"
                  animate={{ scale: i === active ? 1.15 : 1, y: i === active ? -6 : 0, opacity: i === active ? 1 : 0.55 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={`/apps/${x.id}.png`}
                    alt=""
                    width={128}
                    height={128}
                    className="h-14 w-14 rounded-[22%] ring-1 ring-white/10 md:h-[72px] md:w-[72px]"
                  />
                </motion.span>
              </button>
            ))}
          </div>

          <div className="relative mt-8 min-h-[72px] border-t border-line pt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6"
              >
                <p className="text-2xl font-medium tracking-tight">{a.name}</p>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  {a.category} · {a.year}
                  {a.price && ` · ${a.price}`}
                </p>
                <p className="text-muted md:ml-auto md:max-w-md md:text-right">{a.summary}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
