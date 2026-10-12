"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { apps, type App } from "@/content/site";
import { MaskText, Reveal, SectionLabel } from "./Reveal";

// Fareyi takip eden, uygulamanın kendi renginde parlayan cam kart.
function AppCard({ app, index, big = false }: { app: App; index: number; big?: boolean }) {
  const px = useMotionValue(50);
  const py = useMotionValue(30);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${px}% ${py}%, ${app.glow}40, transparent 65%)`;

  return (
    <Reveal delay={(index % 4) * 0.07} className={big ? "sm:col-span-2 lg:row-span-2" : ""}>
      <motion.div
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          px.set(((e.clientX - r.left) / r.width) * 100);
          py.set(((e.clientY - r.top) / r.height) * 100);
        }}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={`gradient-border group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-bg-soft ${big ? "p-8 md:p-10" : "p-6"}`}
      >
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100" style={{ background: glow }} />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30 blur-3xl"
          style={{ background: app.glow }}
        />

        <div className="relative flex items-start justify-between">
          <div className="relative">
            <div aria-hidden className="absolute inset-2 rounded-[22%] blur-xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: app.glow, opacity: 0.5 }} />
            <Image
              src={`/apps/${app.id}.png`}
              alt={`${app.name} ikonu`}
              width={128}
              height={128}
              className={`relative rounded-[22%] ring-1 ring-white/10 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-3 ${
                big ? "h-28 w-28 md:h-32 md:w-32" : "h-16 w-16"
              }`}
            />
          </div>
          <span className="font-mono text-[11px] tracking-wider text-muted">{app.year}</span>
        </div>

        <div className={`relative ${big ? "mt-auto pt-16" : "mt-8"}`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {app.category}
            {app.price && <span className="ml-2 rounded-full border border-accent/40 px-2 py-0.5 text-accent">{app.price}</span>}
          </p>
          <h3 className={`mt-2 font-medium tracking-tight ${big ? "text-4xl md:text-5xl" : "text-xl"}`}>{app.name}</h3>
          <p className={`mt-3 leading-relaxed text-muted ${big ? "max-w-sm text-lg" : "text-sm"}`}>{app.summary}</p>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Apps() {
  return (
    <section id="uygulamalar" className="relative mx-auto max-w-7xl px-4 py-28 md:px-10 md:py-40">
      <SectionLabel index="02">App Store&apos;daki uygulamalarım</SectionLabel>
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-8xl">
          <MaskText lines={[<span key="a" className="text-metal">On uygulama,</span>, <span key="s" className="text-gradient font-serif font-normal italic">tek geliştirici.</span>]} />
        </h2>
        <Reveal className="max-w-sm text-muted">
          <p>Fikirden tasarıma, geliştirmeden App Store yayınına kadar her birini kendim yaptım.</p>
        </Reveal>
      </div>

      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {apps.map((a, i) => (
          <AppCard key={a.id} app={a} index={i} big={i === 0} />
        ))}
        <Reveal className="sm:col-span-2 lg:col-span-3">
          <a
            href="#iletisim"
            className="gradient-border group relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent/20 via-bg-soft to-bg-soft p-8 md:flex-row md:items-center md:p-10"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Sıradaki</p>
              <p className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">Bir sonraki uygulama sizin fikriniz olsun.</p>
            </div>
            <span className="shine relative inline-flex w-fit shrink-0 items-center gap-2 overflow-hidden rounded-full bg-fg px-6 py-3.5 font-medium text-bg">
              Fikrini anlat →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
