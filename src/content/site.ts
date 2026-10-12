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

// Sektörlere göre örnek çözümler. Görseller /public/solutions: çoğu yapay zekâ ile üretildi;
// spa, sürücü kursu, etüt, market, emlak ve fotoğraf görselleri Unsplash (ücretsiz lisans).
export type Solution = {
  slug: string;
  sector: string;
  product: string;
  features: string[];
  // Görselin üstündeki küçük uygulama kartı
  widget: { title: string; detail: string; status: string };
  color: string;
};

export const solutions: Solution[] = [
  {
    slug: "fitness",
    sector: "Fitness stüdyoları",
    product: "Ders rezervasyon uygulaması",
    features: ["Grup dersi kontenjanı", "Paket ve üyelik takibi", "Bekleme listesi ve hatırlatma"],
    widget: { title: "HIIT · 19:00", detail: "12 / 14 kişi", status: "Yerin ayrıldı" },
    color: "#f97316",
  },
  {
    slug: "berber",
    sector: "Berberler",
    product: "Online randevu sistemi",
    features: ["Usta ve hizmet seçimi", "WhatsApp ile hatırlatma", "Gelmeyen müşteri takibi"],
    widget: { title: "Saç + Sakal", detail: "Yarın 14:30 · Usta Emre", status: "Randevu onaylandı" },
    color: "#eab308",
  },
  {
    slug: "kuafor",
    sector: "Kuaför ve güzellik salonları",
    product: "Randevu ve müşteri kartı",
    features: ["Personel takvimi", "Müşteri geçmişi ve notlar", "Kampanya bildirimleri"],
    widget: { title: "Fön + Boya", detail: "Cuma 11:00 · Selin", status: "Randevu onaylandı" },
    color: "#ec4899",
  },
  {
    slug: "pilates",
    sector: "Pilates ve yoga stüdyoları",
    product: "Reformer seans planlayıcı",
    features: ["Alet bazlı rezervasyon", "Ders kredisi takibi", "Eğitmen programı"],
    widget: { title: "Reformer · 08:30", detail: "3 alet boş", status: "Seans ayrıldı" },
    color: "#14b8a6",
  },
  {
    slug: "dis",
    sector: "Diş klinikleri",
    product: "Hasta randevu ve takip",
    features: ["Doktor bazlı takvim", "Tedavi planı ve ödemeler", "SMS hatırlatma"],
    widget: { title: "Kontrol muayenesi", detail: "Pazartesi 10:15", status: "Hatırlatma gönderildi" },
    color: "#06b6d4",
  },
  {
    slug: "veteriner",
    sector: "Veteriner klinikleri",
    product: "Pati karnesi ve randevu",
    features: ["Aşı takvimi", "Evcil hayvan kartı", "Sahibe otomatik hatırlatma"],
    widget: { title: "Karma aşı · Zeytin", detail: "3 gün sonra", status: "Hatırlatma kuruldu" },
    color: "#22c55e",
  },
  {
    slug: "restoran",
    sector: "Restoranlar",
    product: "Masa rezervasyon sistemi",
    features: ["Masa planı", "Kapora ve iptal kuralları", "Özel gün notları"],
    widget: { title: "4 kişilik masa", detail: "Cumartesi 20:30 · Teras", status: "Rezervasyon alındı" },
    color: "#f59e0b",
  },
  {
    slug: "kafe",
    sector: "Kafeler",
    product: "QR menü ve sadakat kartı",
    features: ["Masadan QR ile sipariş", "Damga kartı", "Günün menüsü"],
    widget: { title: "Sadakat kartı", detail: "9 / 10 kahve", status: "Sıradaki bizden" },
    color: "#a16207",
  },
  {
    slug: "halisaha",
    sector: "Halı sahalar",
    product: "Saha kiralama uygulaması",
    features: ["Saat saat doluluk", "Kapora ile kesin kayıt", "Takım ve maç kayıtları"],
    widget: { title: "Saha 2 · 21:00", detail: "1 saat · 10 kişi", status: "Saha kiralandı" },
    color: "#16a34a",
  },
  {
    slug: "otel",
    sector: "Butik oteller ve pansiyonlar",
    product: "Oda rezervasyon motoru",
    features: ["Komisyonsuz direkt rezervasyon", "Doluluk takvimi", "Online ödeme"],
    widget: { title: "Deniz manzaralı oda", detail: "3 gece · 2 kişi", status: "Rezervasyon onaylandı" },
    color: "#0ea5e9",
  },
  {
    slug: "otoservis",
    sector: "Oto servisler",
    product: "Servis ve bakım takibi",
    features: ["Araç geçmişi", "Fotoğraflı işlem raporu", "Bakım zamanı hatırlatma"],
    widget: { title: "Periyodik bakım", detail: "35 ABC 123", status: "Aracınız hazır" },
    color: "#ef4444",
  },
  {
    slug: "teknikservis",
    sector: "Teknik servisler",
    product: "Arıza ve iş emri takibi",
    features: ["Cihaz kabul formu", "Müşteriye durum bildirimi", "Parça stoğu"],
    widget: { title: "Ekran değişimi", detail: "Kayıt #2481", status: "Onarım tamamlandı" },
    color: "#6366f1",
  },
  {
    slug: "spa",
    sector: "Spa ve masaj salonları",
    product: "Seans ve paket yönetimi",
    features: ["Terapist ve oda takvimi", "Hediye kartı", "Paket bakiyesi"],
    widget: { title: "Aromaterapi · 60 dk", detail: "Bugün 17:00", status: "Seans ayrıldı" },
    color: "#d97706",
  },
  {
    slug: "surucu",
    sector: "Sürücü kursları",
    product: "Direksiyon dersi planlayıcı",
    features: ["Eğitmen ve araç takvimi", "Ders hakkı takibi", "Sınav tarihi hatırlatma"],
    widget: { title: "Direksiyon dersi", detail: "Perşembe 09:00", status: "Ders planlandı" },
    color: "#3b82f6",
  },
  {
    slug: "egitim",
    sector: "Etüt merkezleri ve dershaneler",
    product: "Ders programı ve veli paneli",
    features: ["Haftalık program", "Yoklama ve ödev takibi", "Veliye bildirim"],
    widget: { title: "Matematik etüdü", detail: "Salı 16:00 · Derslik 3", status: "Veliye bildirildi" },
    color: "#8b5cf6",
  },
  {
    slug: "market",
    sector: "Market ve bakkallar",
    product: "Stok, kasa ve veresiye",
    features: ["Barkodlu satış", "Veresiye defteri", "Kritik stok uyarısı"],
    widget: { title: "Kritik stok", detail: "Süt · 6 adet kaldı", status: "Sipariş listesine eklendi" },
    color: "#10b981",
  },
  {
    slug: "emlak",
    sector: "Emlak ofisleri",
    product: "Portföy ve müşteri eşleştirme",
    features: ["İlan portföyü", "Talebe uygun eşleştirme", "Gösterim randevusu"],
    widget: { title: "3+1 · Karşıyaka", detail: "Gösterim yarın 18:00", status: "Müşteri eşleşti" },
    color: "#64748b",
  },
  {
    slug: "foto",
    sector: "Fotoğraf stüdyoları",
    product: "Çekim takvimi ve teslim",
    features: ["Çekim paketi seçimi", "Kapora", "Online fotoğraf teslimi"],
    widget: { title: "Ürün çekimi", detail: "Çarşamba 13:00", status: "Fotoğraflar hazır" },
    color: "#e11d48",
  },
];
