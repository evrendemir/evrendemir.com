import type { Metadata } from "next";

// PopAlerts çocuk güvenliği standartları (Google Play CSAE beyanı için). Menüde yok ve arama motorlarına kapalı.
export const metadata: Metadata = {
  title: "Child Safety Standards | People Over Papers – Alerts",
  description: "Child safety standards for the People Over Papers – Alerts app.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: "/popalerts/child-safety" },
};

const EMAIL = "evren.demir.ed@gmail.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="mb-3 text-xl font-semibold tracking-[-0.02em] text-fg">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-muted">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function PopAlertsChildSafety() {
  return (
    <main lang="en" className="mx-auto max-w-3xl px-4 py-16 leading-relaxed text-fg/85 md:px-8 md:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">People Over Papers – Alerts</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-fg md:text-5xl">Child Safety Standards</h1>
      <p className="mt-4 text-sm text-muted">Effective date: November 10, 2026</p>

      <div className="mt-8 space-y-3">
        <p>
          These standards apply to the People Over Papers – Alerts app (&quot;PopAlerts&quot;, Android package com.evrendemir.popalerts),
          developed by Evren Demir. PopAlerts is a community safety app where people share local safety alerts in their neighborhood.
        </p>
      </div>

      <Section title="1. Zero tolerance for child sexual abuse and exploitation">
        <p>
          We have zero tolerance for child sexual abuse and exploitation (CSAE). The following are strictly prohibited in the app and will
          never be published:
        </p>
        <List
          items={[
            "Child sexual abuse material (CSAM) of any kind, including real, drawn, edited, or AI-generated content.",
            "Any content that sexualizes minors.",
            "Grooming, sextortion, trafficking, or any attempt to contact, solicit, or exploit a minor.",
            "Links to, or requests for, any of the above.",
          ]}
        />
      </Section>

      <Section title="2. How we prevent it">
        <List
          items={[
            <><b>Every post is reviewed before it is published.</b> Community reports and attached photos are held for review by our moderators and are only shown to other users after approval. Content that breaks these standards is rejected and removed.</>,
            <><b>No private messaging.</b> The app has no direct messages or private chat between users, so users cannot privately contact one another through the app.</>,
            <><b>Not for children.</b> The app is not directed to children under 16.</>,
            <><b>Enforcement.</b> Users who post or try to post CSAE content are permanently blocked, and their content is removed.</>,
          ]}
        />
      </Section>

      <Section title="3. How to report a concern">
        <List
          items={[
            <><b>In the app:</b> send us a message from the feedback screen (Suggestions), available from the Community Feed.</>,
            <><b>By email:</b> <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>. Please describe the issue and, if you can, include the post&apos;s text, location, or a screenshot.</>,
          ]}
        />
        <p>We review every report promptly and remove violating content as soon as we confirm it.</p>
      </Section>

      <Section title="4. Cooperation with authorities">
        <p>
          When we become aware of child sexual abuse material, we remove it, preserve relevant information as required by law, and report
          it to the National Center for Missing &amp; Exploited Children (NCMEC) and to the relevant law enforcement authorities.
        </p>
      </Section>

      <Section title="5. Compliance">
        <p>We comply with applicable child safety laws and with Google Play&apos;s Child Safety Standards policy.</p>
      </Section>

      <Section title="6. Child safety contact">
        <p>
          Evren Demir · <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <p>
          Read our <a className="underline" href="/popalerts/privacy">Privacy Policy</a>.
        </p>
      </Section>
    </main>
  );
}
