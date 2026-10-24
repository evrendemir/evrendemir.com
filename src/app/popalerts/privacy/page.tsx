import type { Metadata } from "next";

// PopAlerts gizlilik politikası. Mağaza linki için var; menüde yok ve arama motorlarına kapalı.
export const metadata: Metadata = {
  title: "Privacy Policy | People Over Papers – Alerts",
  description: "Privacy Policy for the People Over Papers – Alerts app.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: "/popalerts/privacy" },
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

export default function PopAlertsPrivacy() {
  return (
    <main lang="en" className="mx-auto max-w-3xl px-4 py-16 leading-relaxed text-fg/85 md:px-8 md:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">People Over Papers – Alerts</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-fg md:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted">Effective date: October 24, 2026</p>

      <div className="mt-8 space-y-3">
        <p>
          This Privacy Policy explains what information the People Over Papers – Alerts app (&quot;PopAlerts&quot;, &quot;the app&quot;, &quot;we&quot;)
          collects, how we use it, who processes it for us, and the choices you have. It applies to the Android and iOS apps. The app is
          developed by Evren Demir, Turkey. Contact: <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
        <p>PopAlerts does not require an account. You do not give us your email address or real name to use the app.</p>
      </div>

      <Section title="1. Information we collect">
        <p className="font-medium text-fg">Information you choose to provide</p>
        <List
          items={[
            <><b>Nickname.</b> An optional display name used in the app.</>,
            <><b>Reports.</b> When you submit a community alert, we store its text, category, time, and the location you set for it. Reports are visible to other users of the app. Do not include personal information about yourself or others in a report.</>,
            <><b>Photos you attach to a report.</b> Optional. Stored on our servers and shown with the report.</>,
            <><b>Emergency contacts.</b> Optional names and phone numbers you add for the SOS feature, used only so the app can prepare a message to them.</>,
            <><b>Personal log entries.</b> Optional notes you create in the app.</>,
            <><b>Questions and messages.</b> Questions you ask the Know Your Rights assistant, and messages you send through Ideas &amp; Questions.</>,
          ]}
        />
        <p className="pt-2 font-medium text-fg">Information collected automatically</p>
        <List
          items={[
            <><b>Location.</b> Precise location only when you allow it, to show nearby alerts and to place a report on the map. Approximate location (the state you select, or a city estimated from your IP address) to show relevant alerts and content. We do not track your location continuously in the background.</>,
            <><b>Device and app identifiers.</b> An app instance ID, a push notification token, and on Android the advertising ID (collected by Firebase Analytics; we do not show ads).</>,
            <><b>App activity.</b> Screens viewed and buttons used, for analytics and to improve the app.</>,
            <><b>Purchase information.</b> Your subscription status and purchase history (for example, which plan is active). Payments are processed by Google Play or the Apple App Store. We never receive your card details.</>,
            <><b>Diagnostics.</b> Basic technical information such as device model, operating system version, and crash data.</>,
          ]}
        />
        <p className="pt-2 font-medium text-fg">Information that stays on your device</p>
        <p>Audio and video recordings made with the emergency recording feature are saved only on your device and are not uploaded to our servers.</p>
      </Section>

      <Section title="2. How we use information">
        <List
          items={[
            "To run the app's features: the alerts map, reports, SOS messages, personal log, notifications, and the rights assistant.",
            "To provide and manage subscriptions and unlock premium features.",
            "To send alerts and notifications you have enabled.",
            "To understand how the app is used and to fix problems.",
            "To keep the community safe, including reviewing and removing reports that break our rules.",
          ]}
        />
        <p>We do not sell your personal information, and we do not use it for third-party advertising.</p>
      </Section>

      <Section title="3. Service providers">
        <p>We use the following companies to operate the app. They process data on our behalf under their own privacy terms:</p>
        <List
          items={[
            <><b>Google Firebase</b> (Google LLC): database, file storage, push notifications, analytics, and server functions.</>,
            <><b>Google Maps Platform</b> (Android) / <b>Apple Maps</b> (iOS): showing the map.</>,
            <><b>RevenueCat</b>: managing subscriptions and purchase status.</>,
            <><b>Superwall</b>: showing subscription offers in the app.</>,
            <><b>OpenAI</b>: generating answers for the Know Your Rights assistant from the question you type.</>,
            <><b>Google Play</b> and the <b>Apple App Store</b>: app distribution and payments.</>,
          ]}
        />
        <p>We may also disclose information if required by law, or to protect the safety of our users or the public.</p>
      </Section>

      <Section title="4. Data retention">
        <List
          items={[
            "Reports and attached photos are kept while they are relevant to the community and may be removed earlier by moderation or at your request.",
            "Analytics data is kept for up to 14 months.",
            "Other data is kept only as long as needed for the purposes above, then deleted.",
          ]}
        />
      </Section>

      <Section title="5. Your choices and rights">
        <List
          items={[
            <><b>Location and notifications:</b> you can turn these permissions off at any time in your phone&apos;s settings. Some features will then not work.</>,
            <><b>Advertising ID:</b> on Android you can reset or delete it in your device settings.</>,
            <><b>Delete your data:</b> email <a className="underline" href={`mailto:${EMAIL}?subject=Delete%20my%20data`}>{EMAIL}</a> with the subject &quot;Delete my data&quot; and, if possible, the approximate time and text of your reports. We will delete the data we hold about you within 30 days. Uninstalling the app removes data stored only on your device.</>,
            "Depending on where you live, you may have additional rights to access, correct, or delete your information. Contact us to use them.",
          ]}
        />
      </Section>

      <Section title="6. Security">
        <p>
          All data is sent over encrypted connections (HTTPS/TLS) and stored with our service providers. No method of transmission or storage
          is completely secure, but we work to protect your information.
        </p>
      </Section>

      <Section title="7. Children">
        <p>
          The app is not directed to children under 16, and we do not knowingly collect personal information from them. If you believe a
          child has given us information, contact us and we will delete it.
        </p>
      </Section>

      <Section title="8. International transfers">
        <p>
          Our service providers may process data in the United States and other countries. By using the app, you understand your information
          may be transferred to and processed in those countries.
        </p>
      </Section>

      <Section title="9. Changes to this policy">
        <p>We may update this policy. We will change the effective date above and, for significant changes, notify you in the app.</p>
      </Section>

      <Section title="10. Contact">
        <p>
          Evren Demir · <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </Section>
    </main>
  );
}
