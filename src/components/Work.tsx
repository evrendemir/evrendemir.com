"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { projects, type Project } from "@/content/site";
import { MaskText, Reveal, SectionLabel } from "./Reveal";

function Cover({ project }: { project: Project }) {
  const [a, b] = project.accent;
  if (project.image) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-bg-soft">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${a}66, ${b}33)` }} />
        <div className="absolute inset-x-[7%] bottom-0 top-[9%] overflow-hidden rounded-t-xl border border-white/15 shadow-2xl shadow-black/50 transition-transform duration-700 group-hover:-translate-y-3">
          <div className="flex h-6 items-center gap-1.5 bg-[#1d1d1f] px-3">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
          </div>
          <Image
            src={project.image}
            alt={`${project.title} ekran görüntüsü`}
            width={1440}
            height={1000}
            className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-bg-soft">
      <motion.div
        className="absolute inset-0"
        style={{ background: `radial-gradient(120% 90% at 20% 10%, ${a}55 0%, transparent 55%), radial-gradient(90% 80% at 90% 100%, ${b}40 0%, transparent 60%)` }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soyut arayüz çizimi */}
      <div className="absolute inset-x-[12%] bottom-0 top-[18%] rounded-t-xl border border-white/15 bg-black/30 p-4 backdrop-blur-md transition-transform duration-700 group-hover:-translate-y-3">
        <div className="mb-4 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
        </div>
        <div className="mb-3 h-3 w-1/2 rounded-full" style={{ background: a }} />
        <div className="mb-2 h-2 w-4/5 rounded-full bg-white/15" />
        <div className="mb-6 h-2 w-3/5 rounded-full bg-white/15" />
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-12 rounded-lg border border-white/10 bg-white/5" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ project, index }: { project: Project; index: number }) {
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(400px circle at ${px}% ${py}%, rgba(255,255,255,0.08), transparent 70%)`;

  const Tag = project.href ? "a" : "div";

  return (
    <Reveal delay={(index % 2) * 0.12} className={index % 2 === 1 ? "md:mt-32" : ""}>
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width;
          const y = (e.clientY - r.top) / r.height;
          ry.set((x - 0.5) * 6);
          rx.set((0.5 - y) * 6);
          px.set(x * 100);
          py.set(y * 100);
        }}
        onPointerLeave={() => {
          rx.set(0);
          ry.set(0);
        }}
        className="group relative"
        data-cursor
      >
        <Tag {...(project.href ? { href: project.href, target: "_blank", rel: "noreferrer" } : {})} className="block">
          <Cover project={project} />
          <motion.div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ background: spotlight }} />
          <div className="mt-6 flex items-start justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {project.category} · {project.year}
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">{project.title}</h3>
            </div>
            <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
              ↗
            </span>
          </div>
          <p className="mt-3 max-w-lg leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                {t}
              </span>
            ))}
          </div>
        </Tag>
      </motion.div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="isler" className="mx-auto max-w-7xl px-4 py-28 md:px-10 md:py-40">
      <SectionLabel index="03">Seçili işler</SectionLabel>
      <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
          <MaskText lines={["Gerçek işler,", <span key="s" className="font-serif font-normal italic text-accent">gerçek dertler.</span>]} />
        </h2>
        <Reveal className="max-w-sm text-muted">
          <p>Uygulamaların yanında firmalar için yaptığım sistemler, siteler ve otomasyonlar.</p>
        </Reveal>
      </div>
      <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
        {projects.map((p, i) => (
          <Card key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
