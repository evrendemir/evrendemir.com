"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { apps, type App } from "@/content/site";
import { MaskText, Reveal, SectionLabel } from "./Reveal";

const filters = [
  { key: "all", label: "Tümü" },
  { key: "esnaf", label: "Esnaf ve küçük işletme" },
  { key: "firma", label: "Firmalara özel" },
  { key: "topluluk", label: "Topluluk" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[1.6rem] border-[5px] border-[#1d1d1f] bg-[#1d1d1f] shadow-2xl shadow-black/60 ${className}`}>
      <Image src={src} alt={alt} width={600} height={1300} className="h-full w-full rounded-[1.2rem] object-cover object-top" />
    </div>
  );
}

function Featured() {
  const app = apps[0];
  return (
    <Reveal className="mb-6">
      <a
        href={app.url}
        target="_blank"
        rel="noreferrer"
        className="group relative grid overflow-hidden rounded-3xl border border-line bg-bg-soft md:grid-cols-[1fr_1.1fr]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #e11d1d, transparent 70%)" }}
        />
        <div className="relative flex flex-col justify-between gap-10 p-8 md:p-12">
          <div>
            <div className="flex items-center gap-4">
              <Image src={`/apps/${app.id}-icon.jpg`} alt="" width={72} height={72} className="rounded-[1.1rem]" />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">En çok kullanılan</p>
                <h3 className="text-3xl font-semibold tracking-tight">{app.name}</h3>
              </div>
            </div>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">{app.summary}</p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {app.rating && (
              <div>
                <p className="text-4xl font-semibold tracking-tight">
                  {app.rating.value.toLocaleString("tr-TR")}
                  <span className="text-accent-2"> ★</span>
                </p>
                <p className="text-sm text-muted">{app.rating.count} değerlendirme</p>
              </div>
            )}
            <span className="rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-transform group-hover:scale-105">
              App Store&apos;da gör ↗
            </span>
          </div>
        </div>
        <div className="relative flex h-80 items-end justify-center gap-4 overflow-hidden px-6 pt-10 md:h-auto md:min-h-[460px]">
          <Phone src={`/apps/${app.id}-1.jpg`} alt={`${app.name} ekranı`} className="w-40 translate-y-16 transition-transform duration-700 group-hover:translate-y-10 md:w-48" />
          <Phone src={`/apps/${app.id}-2.jpg`} alt={`${app.name} ekranı`} className="w-40 translate-y-4 transition-transform duration-700 group-hover:-translate-y-2 md:w-48" />
        </div>
      </a>
    </Reveal>
  );
}

function AppCard({ app }: { app: App }) {
  return (
    <motion.a
      layout
      href={app.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-bg-soft p-6 transition-colors hover:border-fg/25"
    >
      <div className="flex items-start justify-between gap-4">
        <Image
          src={`/apps/${app.id}-icon.jpg`}
          alt=""
          width={64}
          height={64}
          className="rounded-[1rem] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
        />
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-sm transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
          ↗
        </span>
      </div>
      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {app.category}
        {app.platform && ` · ${app.platform}`}
      </p>
      <h3 className="mt-1 text-xl font-medium tracking-tight">{app.name}</h3>
      {app.extra && <p className="text-sm text-accent">{app.extra}</p>}
      <p className="mt-3 text-sm leading-relaxed text-muted">{app.summary}</p>

      {/* Üstüne gelince alttan yükselen ekran görüntüsü */}
      <div className="pointer-events-none mt-6 h-0 overflow-hidden transition-[height] duration-700 ease-out group-hover:h-56">
        <Image
          src={`/apps/${app.id}-2.jpg`}
          alt={`${app.name} ekranı`}
          width={600}
          height={1300}
          className="mx-auto w-32 rounded-2xl border-4 border-[#1d1d1f] object-cover object-top"
        />
      </div>
    </motion.a>
  );
}

export default function Apps() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const rest = apps.slice(1).filter((a) => filter === "all" || a.group === filter);

  return (
    <section id="uygulamalar" className="mx-auto max-w-7xl px-4 py-28 md:px-10 md:py-40">
      <SectionLabel index="02">App Store&apos;daki uygulamalarım</SectionLabel>
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
          <MaskText lines={["Cebinizde", <span key="s" className="font-serif font-normal italic text-accent">çalışan yazılım.</span>]} />
        </h2>
        <Reveal className="max-w-sm text-muted">
          <p>Esnafın her gün kullandığı uygulamalardan firmalara özel sistemlere kadar, yayında olan işlerim.</p>
        </Reveal>
      </div>

      <Featured />

      <Reveal className="my-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`relative rounded-full px-4 py-2 text-sm transition-colors ${filter === f.key ? "text-bg" : "text-muted hover:text-fg"}`}
          >
            {filter === f.key && (
              <motion.span layoutId="app-filter" className="absolute inset-0 rounded-full bg-fg" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
            )}
            <span className="relative">{f.label}</span>
          </button>
        ))}
      </Reveal>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {rest.map((a) => (
            <AppCard key={a.id} app={a} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
