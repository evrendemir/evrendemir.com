"use client";

import Image from "next/image";
import { consulting, personalProjects, type PersonalProject } from "@/content/site";
import { MaskText, Reveal, SectionLabel } from "./Reveal";

function ProjectCard({ p, index }: { p: PersonalProject; index: number }) {
  return (
    <Reveal delay={(index % 4) * 0.07}>
      <a href="#iletisim" className="gradient-border group relative block aspect-[3/4] overflow-hidden rounded-[1.6rem] bg-bg-soft">
        <Image
          src={`/projects/${p.slug}.jpg`}
          alt={p.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/0" />
        <span className="glass absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] text-white sm:left-4 sm:top-4 sm:px-3 sm:text-xs">{p.type}</span>
        <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5">
          <h3 className="text-base font-medium leading-tight tracking-tight text-white sm:text-xl md:text-2xl">{p.title}</h3>
          {/* Açıklama üstüne gelince açılır */}
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="pt-2 text-sm leading-relaxed text-white/75">{p.summary}</p>
            </div>
          </div>
          <div className="mt-3 hidden flex-wrap gap-1.5 sm:flex">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/20 px-2.5 py-0.5 text-[11px] text-white/80">
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export default function Personal() {
  return (
    <section id="bireysel" className="relative mx-auto max-w-7xl px-4 py-28 md:px-10 md:py-40">
      <SectionLabel index="03">Bireyler ve girişimciler için</SectionLabel>
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-8xl">
          <MaskText lines={[<span key="a" className="text-metal">Fikir sizden,</span>, <span key="s" className="text-gradient font-serif font-normal italic">uygulama benden.</span>]} />
        </h2>
        <Reveal className="max-w-sm text-muted">
          <p>Girişim fikrinden kişisel bir uygulamaya kadar her şeyi baştan sona geliştiriyorum. Birkaç örnek:</p>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {personalProjects.slice(0, 4).map((p, i) => (
          <ProjectCard key={p.slug} p={p} index={i} />
        ))}
      </div>

      {/* Danışmanlık */}
      <Reveal className="mt-20 scroll-mt-28">
        <span id="danismanlik" className="block -translate-y-28" />
        <div className="gradient-border relative grid overflow-hidden rounded-[2rem] bg-bg-soft lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <Image src="/projects/danismanlik.jpg" alt="Birebir danışmanlık görüşmesi" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[35%_50%]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-soft/40" />
          </div>
          <div className="p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Danışmanlık</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{consulting.title}</h3>
            <p className="mt-5 leading-relaxed text-muted">{consulting.body}</p>
            <div className="mt-10 space-y-3">
              {consulting.packages.map((pk, i) => (
                <div key={pk.name} className="glass flex items-start gap-4 rounded-2xl p-4">
                  <span className="font-mono text-sm text-accent">0{i + 1}</span>
                  <div>
                    <p className="font-medium">{pk.name}</p>
                    <p className="text-sm text-muted">{pk.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#iletisim" className="shine relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full bg-fg px-6 py-3.5 text-sm font-medium text-bg">
              Görüşme planlayalım →
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
