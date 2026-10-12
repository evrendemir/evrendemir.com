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
  { label: "App Store", href: "https://apps.apple.com/tr/developer/id1705740060" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export const about = {
  statement:
    "Kod yazmayı bir amaç değil, araç olarak görüyorum. Bir zeytinyağı fabrikasının, bir oto servisin ya da mahalledeki bir dükkânın gerçek derdini alıp her gün kullanılan bir ürüne dönüştürmek beni heyecanlandırıyor.",
  paragraphs: [
    "Bugüne kadar App Store'a 12 uygulama çıkardım: esnafın cebinden stok ve satış yönettiği uygulamalardan, siparişten sevkiyata bütün üretimi yöneten şirket içi sistemlere kadar.",
    "Yazılımı teslim edip gitmiyorum. Kurulumu, eğitimi ve sonrasındaki desteği üstleniyorum; işletme büyüdükçe yazılım da onunla birlikte büyüyor.",
  ],
  stats: [
    { value: 12, suffix: "", label: "App Store uygulaması" },
    { value: 25, suffix: "+", label: "panel modülü" },
    { value: 4.6, suffix: "★", label: "Pratik Stok Takip puanı", decimals: 1 },
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

// App Store'daki uygulamalar. Görseller /public/apps klasöründe, App Store'dan alındı.
export type App = {
  id: string;
  name: string;
  group: "esnaf" | "firma" | "topluluk";
  category: string;
  summary: string;
  url: string;
  rating?: { value: number; count: number };
  platform?: string;
  extra?: string;
};

const store = (id: string) => `https://apps.apple.com/tr/app/id${id}`;

export const apps: App[] = [
  {
    id: "6741438981",
    name: "Pratik Stok Takip",
    group: "esnaf",
    category: "Stok ve satış",
    summary: "Satış, stok giriş-çıkışı, sayım ve raporlar. Teknik servis, oto servis, üretim ve personel modülleriyle tek yerden.",
    url: store("6741438981"),
    rating: { value: 4.6, count: 74 },
  },
  {
    id: "6761792977",
    name: "PratikPos",
    group: "esnaf",
    category: "Satış noktası",
    summary: "Mağaza için kasa ekranı: satış yap, stoğu güncel tut, günün raporunu gör.",
    url: store("6761792977"),
    platform: "Mac",
  },
  {
    id: "6740820848",
    name: "Pratik Muhasebe",
    group: "esnaf",
    category: "Ön muhasebe",
    summary: "Gelir, gider ve cari hesapları sade bir arayüzle takip etmek için.",
    url: store("6740820848"),
  },
  {
    id: "6754558335",
    name: "Pratik Randevu",
    group: "esnaf",
    category: "Randevu",
    summary: "Kuaförden kliniğe, randevuyla çalışan her işletme için takvim ve müşteri takibi.",
    url: store("6754558335"),
  },
  {
    id: "6751212404",
    name: "Pratik Teknik Servis",
    group: "esnaf",
    category: "Servis takibi",
    summary: "Teknik servisler için arıza kaydı, iş takibi ve müşteri bilgilendirmesi.",
    url: store("6751212404"),
  },
  {
    id: "6744290824",
    name: "Desktop Oto Servis",
    group: "esnaf",
    category: "Oto servis",
    summary: "Tamir ve bakım servisleri için masaüstü programla entegre çalışan, müşteriye detaylı rapor sunan uygulama.",
    url: store("6744290824"),
  },
  {
    id: "6477217921",
    name: "OliveOs",
    group: "firma",
    category: "Zeytinyağı üretimi",
    summary: "Zeytinyağı üreticileri için ham zeytin girişinden üretim, depo ve kalite raporlarına kadar takip.",
    url: store("6477217921"),
    extra: "+ OliveOs Otomasyon",
  },
  {
    id: "6464317869",
    name: "MT Global",
    group: "firma",
    category: "Müşteri portalı",
    summary: "Firmanın müşterilerinin kendi bilgilerini takip ettiği uygulama ve ekibin kullandığı yönetim uygulaması.",
    url: store("6464317869"),
    extra: "+ MT Global Admin",
  },
  {
    id: "6773259816",
    name: "Akm Stone",
    group: "firma",
    category: "Ürün kataloğu",
    summary: "Doğal taş firmasının stoktaki taşlarını fotoğraflarıyla müşterilerine sunduğu katalog uygulaması.",
    url: store("6773259816"),
  },
  {
    id: "6754556514",
    name: "VetWork",
    group: "topluluk",
    category: "Meslek ağı",
    summary: "Veterinerlerin ve veteriner adaylarının vakalar üzerine haberleşip birbirine yardım ettiği platform.",
    url: store("6754556514"),
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
    "App Store'a 12 uygulama çıkarırken öğrendiklerimi adım adım bir eğitime dönüştürüyorum. Kod geçmişin olmasa bile yapay zekâ ile fikrini yayına taşıyabilmen için. İlk duyan sen ol.",
  points: ["Kurulumdan App Store'a", "Gerçek bir uygulama üzerinden", "Topluluk ve canlı oturumlar"],
};
