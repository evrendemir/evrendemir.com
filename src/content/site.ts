// Sitedeki tüm metinler burada. Bir şeyi değiştirmek için yalnızca bu dosyayı düzenlemen yeterli.

export const profile = {
  name: "Evren Demir",
  firstName: "Evren",
  lastName: "Demir",
  location: "İzmir, Türkiye",
  email: "evren@evrendemir.com",
  available: true,
  intro:
    "İşletmeler için yazılım üretiyorum: web siteleri, yönetim panelleri ve işi kendi kendine yapan otomasyonlar. Şimdi de yapay zekâ ile iOS uygulamaları geliştiriyorum ve öğrendiklerimi paylaşıyorum.",
  roles: ["web siteleri", "yönetim panelleri", "otomasyonlar", "iOS uygulamaları"],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/evrendemir" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export const about = {
  statement:
    "Kod yazmayı bir amaç değil, araç olarak görüyorum. Bir atölyenin, bir yoga eğitmeninin ya da bir üretim firmasının gerçek bir derdini alıp onu her gün kullanılan bir ürüne dönüştürmek beni heyecanlandırıyor.",
  paragraphs: [
    "Bugüne kadar küçük işletmelerin vitrin sitelerinden, siparişten sevkiyata bütün üretimi yöneten şirket içi panellere kadar farklı ölçeklerde işler yaptım.",
    "Yapay zekâ araçları üretme hızımı kökten değiştirdi. Cursor ve Claude ile tek başıma, eskiden bir ekibin aylarca uğraşacağı işleri çıkarabiliyorum. Bu sitede o yolculuğu da yazıyorum.",
  ],
  stats: [
    { value: 6, suffix: "+", label: "proje" },
    { value: 25, suffix: "+", label: "panel modülü" },
    { value: 1, suffix: "", label: "kişilik ekip" },
  ],
};

export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "Tailwind CSS",
  "Python",
  "Swift",
  "SwiftUI",
  "Cursor",
  "Claude",
  "SEO",
  "Otomasyon",
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  tags: string[];
  href?: string;
  accent: [string, string];
  status?: string;
};

export const projects: Project[] = [
  {
    slug: "yordem-panel",
    title: "Yordem Yönetim Paneli",
    category: "Şirket içi yazılım",
    year: "2026",
    summary:
      "Bir etiket üretim firmasının siparişten iş emrine, satın almadan sevkiyata, finanstan kaliteye kadar bütün akışını tek ekrandan yöneten panel.",
    tags: ["Next.js", "Supabase", "25+ modül"],
    accent: ["#ff6a3d", "#ffb547"],
  },
  {
    slug: "linkedin-otomasyon",
    title: "LinkedIn Bağlantı Asistanı",
    category: "Otomasyon",
    year: "2026",
    summary:
      "Panelden onaylanan bağlantı isteklerini ve mesajları insan hızında gönderen, kota ve güvenlik kurallarıyla kendini durduran masaüstü asistan.",
    tags: ["Python", "Tarayıcı otomasyonu", "Panel entegrasyonu"],
    accent: ["#3d7bff", "#5ee7ff"],
  },
  {
    slug: "yordem-etiket",
    title: "Yordem Etiket",
    category: "Kurumsal web sitesi",
    year: "2026",
    summary:
      "Etiket üreticisi için kurumsal site ve sitenin arama sonuçlarındaki durumunu takip eden SEO raporlama aracı.",
    tags: ["Next.js", "SEO", "Raporlama"],
    accent: ["#8b5cf6", "#ec4899"],
  },
  {
    slug: "yoga-ve-yagmur",
    title: "Yoga ve Yağmur",
    category: "Online eğitim sitesi",
    year: "2025",
    summary:
      "Online yoga dersleri veren bir eğitmen için sakin, nefes alan bir tasarımla hazırlanmış eğitim sitesi.",
    tags: ["Next.js", "Tasarım", "İçerik"],
    accent: ["#22c55e", "#a3e635"],
  },
  {
    slug: "tufting-izmir",
    title: "Tufting İzmir",
    category: "Atölye vitrini",
    year: "2025",
    summary:
      "El yapımı dekoratif halı atölyesi için kişiye özel sipariş almaya odaklı, hafif ve hızlı vitrin sitesi.",
    tags: ["HTML", "CSS", "JavaScript"],
    accent: ["#f43f5e", "#fb923c"],
  },
  {
    slug: "ios",
    title: "iOS Uygulamaları",
    category: "Kendi ürünlerim",
    year: "Yakında",
    summary:
      "Yapay zekâ ile geliştirdiğim kendi iOS uygulamalarım. İlki App Store yolunda; süreci adım adım burada paylaşacağım.",
    tags: ["Swift", "SwiftUI", "Cursor"],
    accent: ["#e5e7eb", "#94a3b8"],
    status: "Geliştiriliyor",
  },
];

export const services = [
  {
    title: "Web siteleri",
    body: "Markanı doğru anlatan, hızlı açılan ve Google'da bulunan siteler. Tasarımdan yayına kadar.",
  },
  {
    title: "Yönetim panelleri",
    body: "Excel tablolarını ve WhatsApp gruplarını bırakıp işini tek bir ekrandan yönetmen için özel yazılım.",
  },
  {
    title: "Otomasyonlar",
    body: "Her gün elle yapılan tekrar eden işleri, kurallarına uyarak kendi kendine yapan küçük araçlar.",
  },
  {
    title: "AI ile ürün geliştirme",
    body: "Fikrini yapay zekâ araçlarıyla hızla çalışan bir ürüne dönüştürmek için birlikte çalışalım.",
  },
];

export const posts = [
  {
    title: "Cursor ile ilk iOS uygulamamı nasıl yapıyorum",
    tag: "iOS",
    status: "Yakında",
  },
  {
    title: "Bir üretim firmasının bütün akışını tek panele taşımak",
    tag: "Vaka çalışması",
    status: "Yakında",
  },
  {
    title: "Tek kişilik yazılım ekibi: yapay zekâ ile çalışma düzenim",
    tag: "Yapay zekâ",
    status: "Yakında",
  },
];

export const course = {
  badge: "Hazırlanıyor",
  title: "Cursor ile iOS uygulaması geliştir",
  body:
    "Kod geçmişin olmasa bile yapay zekâ ile fikrini App Store'a taşıyabilmen için adım adım bir eğitim hazırlıyorum. İlk duyan sen ol.",
  points: ["Kurulumdan App Store'a", "Gerçek bir uygulama üzerinden", "Topluluk ve canlı oturumlar"],
};
