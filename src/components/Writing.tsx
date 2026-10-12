"use client";

import { course, posts } from "@/content/site";
import { MaskText, Reveal, SectionLabel } from "./Reveal";
import SubscribeForm from "./SubscribeForm";

export default function Writing() {
  return (
    <section id="yazilar" className="mx-auto max-w-7xl px-4 py-28 md:px-10 md:py-40">
      <SectionLabel index="04">Yazılar ve bülten</SectionLabel>
      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="mb-6 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            <MaskText lines={["Öğrendiklerimi", <span key="s" className="font-serif font-normal italic text-accent">paylaşıyorum.</span>]} />
          </h2>
          <Reveal className="mb-12 max-w-md text-muted">
            <p>Yapay zekâ ile ürün geliştirme, işletmeler için yazılım ve tek kişilik ekip olmak üzerine notlar. Ayda bir, kısa ve işe yarar.</p>
          </Reveal>
          <ul className="border-t border-line">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <li className="group flex items-center justify-between gap-6 border-b border-line py-6">
                  <div>
                    <p className="mb-1 font-mono text-xs uppercase tracking-[0.18em] text-muted">{p.tag}</p>
                    <p className="text-xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-2xl">{p.title}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs text-muted">{p.status}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-10 max-w-md">
            <SubscribeForm cta="Bültene katıl" />
          </Reveal>
        </div>

        {/* Kurs */}
        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-bg-soft p-8 md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-50 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
            />
            <span className="relative inline-block rounded-full border border-accent/40 px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent">
              {course.badge}
            </span>
            <h3 className="relative mt-8 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{course.title}</h3>
            <p className="relative mt-5 leading-relaxed text-muted">{course.body}</p>
            <ul className="relative mt-8 space-y-3">
              {course.points.map((pt) => (
                <li key={pt} className="flex items-center gap-3">
                  <span className="text-accent">✦</span>
                  {pt}
                </li>
              ))}
            </ul>
            <div className="relative mt-10">
              <SubscribeForm cta="Haber ver" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
