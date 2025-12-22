import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "evrendemir.com | Kod Yazmadan iOS Uygulaması Geliştir",
  description: "Cursor AI ile sıfırdan App Store'a. Kod bilmeden ayda $100,000 kazanan uygulamalar yap. 2025'in en iyi fırsatı!",
  keywords: ["iOS uygulama geliştirme", "Cursor AI", "kod yazmadan uygulama", "mobil uygulama kursu", "App Store", "pasif gelir"],
  authors: [{ name: "Evren Demir" }],
  openGraph: {
    title: "evrendemir.com | Kod Yazmadan iOS Uygulaması Geliştir",
    description: "Cursor AI ile sıfırdan App Store'a. Kod bilmeden ayda $100,000 kazanan uygulamalar yap.",
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "evrendemir.com | Kod Yazmadan iOS Uygulaması Geliştir",
    description: "Cursor AI ile sıfırdan App Store'a. 2025'in en iyi fırsatı!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <LanguageProvider>
          {/* Noise Overlay */}
          <div className="noise-overlay" />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
