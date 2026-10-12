import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

const title = "Evren Demir | Firmalar ve esnaf için yazılım";
const description =
  "Firmalara özel ERP ve yönetim yazılımları; küçük işletmeler ve esnaf için stok, ön muhasebe, randevu ve servis takibi uygulamaları.";

export const metadata: Metadata = {
  metadataBase: new URL("https://evrendemir.com"),
  title,
  description,
  authors: [{ name: "Evren Demir" }],
  openGraph: { title, description, type: "website", locale: "tr_TR", url: "https://evrendemir.com" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
