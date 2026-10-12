// Sitedeki tüm metinler burada. Bir şeyi değiştirmek için yalnızca bu dosyayı düzenlemen yeterli.

export const profile = {
  name: "Evren Demir",
  firstName: "Evren",
  lastName: "Demir",
  location: "İzmir, Türkiye",
  email: "evren@evrendemir.com",
  available: true,
  intro:
    "Firmalara özel ERP ve yönetim yazılımları geliştiriyorum; küçük işletmeler ve esnaf için de stok, ön muhasebe, randevu ve servis takibini kolaylaştıran uygulamalarla çözüm ortaklığı yapıyorum.",
  roles: ["ERP yazılımları", "randevu uygulamaları", "mobil uygulamalar", "web siteleri", "otomasyonlar"],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/evrendemir" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export const about = {
  statement:
    "Kod yazmayı bir amaç değil, araç olarak görüyorum. Bir üretim firmasının, bir atölyenin ya da mahalledeki bir dükkânın gerçek derdini alıp her gün kullanılan bir ürüne dönüştürmek beni heyecanlandırıyor.",
  paragraphs: [
    "Bugüne kadar App Store'a 10 uygulama çıkardım; siparişten sevkiyata bütün üretimi yöneten şirket içi sistemler ve küçük işletmelerin vitrin siteleri yaptım.",
    "Yazılımı teslim edip gitmiyorum. Kurulumu, eğitimi ve sonrasındaki desteği üstleniyorum; işletme büyüdükçe yazılım da onunla birlikte büyüyor.",
  ],
  stats: [
    { value: 10, suffix: "", label: "App Store uygulaması" },
    { value: 25, suffix: "+", label: "panel modülü" },
    { value: 5, suffix: "", label: "web projesi" },
  ],
};

export const skills = [
  "ERP",
  "Stok ve POS",
  "Ön muhasebe",
  "Randevu sistemleri",
  "Teknik servis takibi",
  "iOS",
  "Next.js",
  "Supabase",
  "Swift",
  "Otomasyon",
  "SEO",
];

// App Store'da "Evren Demir" geliştirici hesabıyla yayınladığım uygulamalar (şu an mağazada değiller).
// İkonlar /public/apps klasöründe.
export type App = {
  id: string;
  name: string;
  category: string;
  summary: string;
  year: string;
  glow: string;
  price?: string;
};

export const apps: App[] = [
  {
    id: "6477433175",
    name: "Pomem Hazırlık",
    category: "Eğitim",
    summary: "Polis Akademisi POMEM sınavına hazırlananlar için soru bankası ve deneme sınavları.",
    year: "2024",
    glow: "#1e3a8a",
    price: "Ücretli",
  },
  {
    id: "6471904214",
    name: "Train Heroic",
    category: "Sağlık ve fitness",
    summary: "Hedefe göre hazır antrenman programları ve ilerleme takibi.",
    year: "2023",
    glow: "#a1a1aa",
  },
  {
    id: "6499078634",
    name: "InLove",
    category: "İlişki",
    summary: "Çiftlerin birlikte geçirdikleri zamanı ve özel günlerini takip ettiği uygulama.",
    year: "2024",
    glow: "#fb7185",
  },
  {
    id: "6748896112",
    name: "Couple Games",
    category: "Oyun",
    summary: "Çiftlerin birbirini daha iyi tanıması için soru ve oyun kartları.",
    year: "2025",
    glow: "#e11d48",
  },
  {
    id: "6748671997",
    name: "Pulled Over",
    category: "Güvenlik",
    summary: "Trafikte durdurulduğunda tek dokunuşla kayıt alıp yakınlarına haber veren uygulama.",
    year: "2025",
    glow: "#ef4444",
  },
  {
    id: "6751401289",
    name: "Wildfire Maps",
    category: "Hava ve uyarılar",
    summary: "Yakındaki orman yangınlarını harita üzerinde gösteren ve uyarı gönderen uygulama.",
    year: "2025",
    glow: "#f97316",
  },
  {
    id: "6751622826",
    name: "Family Calendar",
    category: "Verimlilik",
    summary: "Ailenin bütün planlarını renkli ve paylaşılan tek bir takvimde toplayan uygulama.",
    year: "2025",
    glow: "#38bdf8",
  },
  {
    id: "6751099409",
    name: "Pixel the World",
    category: "Oyun",
    summary: "Dünya haritası üzerinde herkesle birlikte piksel piksel resim yapılan çok oyunculu oyun.",
    year: "2025",
    glow: "#84cc16",
  },
  {
    id: "6751042434",
    name: "Tea for Men",
    category: "Sosyal",
    summary: "Erkekler için topluluk ve güvenli tanışma uygulaması.",
    year: "2025",
    glow: "#2563eb",
  },
  {
    id: "6749484568",
    name: "Sagu",
    category: "Yaşam tarzı",
    summary: "Kişisel uygulama projem.",
    year: "2025",
    glow: "#64748b",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  tags: string[];
  href?: string;
  image?: string;
  accent: [string, string];
};

export const projects: Project[] = [
  {
    slug: "yordem-panel",
    title: "Yordem Yönetim Paneli",
    category: "Firmaya özel ERP",
    year: "2026",
    summary:
      "Bir etiket üretim firmasının siparişten iş emrine, satın almadan sevkiyata, finanstan kaliteye kadar bütün akışını tek ekrandan yöneten sistem.",
    tags: ["Next.js", "Supabase", "25+ modül"],
    accent: ["#ff6a3d", "#ffb547"],
  },
  {
    slug: "yordem-etiket",
    title: "Yordem Etiket",
    category: "Kurumsal web sitesi",
    year: "2026",
    summary: "Etiket üreticisi için çok dilli kurumsal site ve sitenin Google'daki durumunu takip eden SEO raporlama aracı.",
    tags: ["Next.js", "SEO", "Çok dilli"],
    image: "/projects/yordem-etiket.jpg",
    accent: ["#3d7bff", "#5ee7ff"],
  },
  {
    slug: "linkedin-otomasyon",
    title: "LinkedIn Bağlantı Asistanı",
    category: "Satış otomasyonu",
    year: "2026",
    summary:
      "Panelden onaylanan bağlantı isteklerini ve mesajları insan hızında gönderen, kota ve güvenlik kurallarıyla kendini durduran asistan.",
    tags: ["Python", "Tarayıcı otomasyonu", "Panel entegrasyonu"],
    accent: ["#8b5cf6", "#ec4899"],
  },
  {
    slug: "yoga-ve-yagmur",
    title: "Yoga ve Yağmur",
    category: "Online eğitim sitesi",
    year: "2025",
    summary: "Online yoga dersleri veren bir eğitmen için sakin, nefes alan bir tasarımla hazırlanmış eğitim sitesi.",
    tags: ["Next.js", "Tasarım", "İçerik"],
    image: "/projects/yoga-ve-yagmur.jpg",
    accent: ["#22c55e", "#a3e635"],
  },
  {
    slug: "tufting-izmir",
    title: "Tufting İzmir",
    category: "Atölye vitrini",
    year: "2025",
    summary: "El yapımı dekoratif halı atölyesi için kişiye özel sipariş almaya odaklı, hafif ve hızlı vitrin sitesi.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/tufting-izmir.jpg",
    accent: ["#f43f5e", "#fb923c"],
  },
];

// İki ana hizmet: firmalar ve küçük işletmeler.
export const offers = [
  {
    key: "firma",
    eyebrow: "Firmalar için",
    title: "İşinize özel yazılım",
    body:
      "Hazır programlara uymayan iş akışınızı olduğu gibi yazılıma taşıyorum. Excel tablolarını, kâğıt formları ve WhatsApp gruplarını tek bir sisteme topluyoruz.",
    items: [
      "ERP ve üretim takibi",
      "Sipariş, satın alma ve sevkiyat",
      "Finans, kasa ve cari",
      "Kalite ve insan kaynakları",
      "Müşteri ve bayi portalları",
      "Mobil uygulama ve entegrasyonlar",
    ],
    cta: "Firmanız için konuşalım",
  },
  {
    key: "esnaf",
    eyebrow: "Küçük işletmeler ve esnaf için",
    title: "Çözüm ortağınız olayım",
    body:
      "Dükkânınız, servisiniz ya da salonunuz için hazır ama size göre ayarlanan uygulamalar. Kurulum, eğitim ve destek benden; siz işinize bakın.",
    items: [
      "Stok takibi ve POS",
      "Ön muhasebe",
      "Randevu ve rezervasyon",
      "Teknik servis ve oto servis takibi",
      "Web sitesi ve Google görünürlüğü",
      "Kurulum, eğitim ve sürekli destek",
    ],
    cta: "İşletmem için bilgi al",
  },
];

export const steps = [
  { title: "Dinlerim", body: "İşletmenize gelir, işin bugün nasıl yürüdüğünü yerinde görürüm." },
  { title: "Kurarım", body: "Hazır uygulamayı size göre ayarlar ya da size özel sistemi geliştiririm." },
  { title: "Öğretirim", body: "Ekibinize kullanımı gösterir, eski verilerinizi taşırım." },
  { title: "Yanınızdayım", body: "Güncellemeler ve destek devam eder; işiniz büyüdükçe yazılım da büyür." },
];

export const posts = [
  { title: "Esnaf için stok takibi: defterden telefona geçiş", tag: "Küçük işletme", status: "Yakında" },
  { title: "Bir üretim firmasının bütün akışını tek panele taşımak", tag: "Vaka çalışması", status: "Yakında" },
  { title: "Tek kişilik yazılım ekibi: yapay zekâ ile çalışma düzenim", tag: "Yapay zekâ", status: "Yakında" },
];

export const course = {
  badge: "Hazırlanıyor",
  title: "Cursor ile iOS uygulaması geliştir",
  body:
    "App Store'a 10 uygulama çıkarırken öğrendiklerimi adım adım bir eğitime dönüştürüyorum. Kod geçmişin olmasa bile yapay zekâ ile fikrini yayına taşıyabilmen için. İlk duyan sen ol.",
  points: ["Kurulumdan App Store'a", "Gerçek bir uygulama üzerinden", "Topluluk ve canlı oturumlar"],
};
