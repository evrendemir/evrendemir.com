// Sitedeki tüm metinler burada. Bir şeyi değiştirmek için yalnızca bu dosyayı düzenlemen yeterli.

export const profile = {
  name: "Evren Demir",
  firstName: "Evren",
  lastName: "Demir",
  location: "İzmir, Türkiye",
  email: "evren.demir.ed@gmail.com",
  available: true,
  intro:
    "Firmalara özel ERP ve yönetim yazılımları, esnafa randevu ve stok uygulamaları, bireylere fikirlerini hayata geçiren uygulamalar geliştiriyorum. Kendi uygulamasını yapmak isteyenlere de danışmanlık veriyorum.",
  // Girişte dönen "kime + ne" başlıkları
  pitches: [
    { who: "Firmalara", what: "özel ERP yazılımı" },
    { who: "Esnafa", what: "randevu ve stok uygulaması" },
    { who: "Girişimcilere", what: "yayına hazır MVP" },
    { who: "Fikri olana", what: "kendi uygulaması" },
    { who: "Öğrenmek isteyene", what: "birebir mentorluk" },
  ],
  // Girişteki "ne arıyorsun?" kısayolları
  paths: [
    { label: "İşletmem için", detail: "ERP, randevu, stok", href: "#cozumler" },
    { label: "Kendi fikrim için", detail: "Uygulama, MVP, e-ticaret", href: "#bireysel" },
    { label: "Öğrenmek istiyorum", detail: "Mentorluk ve danışmanlık", href: "#danismanlik" },
  ],
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

export const steps = [
  { title: "Dinlerim", body: "İşletmenize gelir, işin bugün nasıl yürüdüğünü yerinde görürüm." },
  { title: "Kurarım", body: "Hazır uygulamayı size göre ayarlar ya da size özel sistemi geliştiririm." },
  { title: "Öğretirim", body: "Ekibinize kullanımı gösterir, eski verilerinizi taşırım." },
  { title: "Yanınızdayım", body: "Güncellemeler ve destek devam eder; işiniz büyüdükçe yazılım da büyür." },
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

// Bireyler ve girişimciler için örnek projeler. Görseller Unsplash (ücretsiz lisans), /public/projects.
export type PersonalProject = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  tags: string[];
};

export const personalProjects: PersonalProject[] = [
  {
    slug: "pazar",
    title: "İkinci el moda pazar yeri",
    type: "Girişim MVP'si",
    summary: "Kullanıcıların dolabındaki kıyafetleri fotoğraflayıp sattığı, güvenli ödemeli pazar yeri.",
    tags: ["iOS + Android", "Ödeme", "Mesajlaşma"],
  },
  {
    slug: "diyet",
    title: "Yapay zekâ diyet asistanı",
    type: "Sağlık uygulaması",
    summary: "Yemeğin fotoğrafını çek, kalorisini ve besin değerlerini yapay zekâ hesaplasın, günlük hedefine göre öneri versin.",
    tags: ["Yapay zekâ", "Abonelik", "HealthKit"],
  },
  {
    slug: "finans",
    title: "Kişisel bütçe takibi",
    type: "Finans uygulaması",
    summary: "Harcamaları kategorilere ayıran, ay sonu tasarruf hedefini gösteren sade bir bütçe uygulaması.",
    tags: ["iOS", "Grafikler", "Widget"],
  },
  {
    slug: "eticaret",
    title: "El yapımı ürünler mağazası",
    type: "E-ticaret",
    summary: "Atölyesinden satış yapan bir tasarımcı için sipariş, kargo ve stok takibi olan online mağaza.",
    tags: ["Web", "Online ödeme", "Kargo entegrasyonu"],
  },
  {
    slug: "dugun",
    title: "Düğün ve etkinlik uygulaması",
    type: "Etkinlik",
    summary: "Dijital davetiye, LCV takibi, masa planı ve misafirlerin fotoğraf paylaştığı ortak albüm.",
    tags: ["Web + iOS", "QR kod", "Ortak albüm"],
  },
  {
    slug: "kulup",
    title: "Koşu kulübü topluluğu",
    type: "Topluluk uygulaması",
    summary: "Kulüp üyelerinin antrenmanlara katıldığı, rotaları ve sıralamayı paylaştığı topluluk uygulaması.",
    tags: ["Harita", "Bildirimler", "Sıralama"],
  },
  {
    slug: "aliskanlik",
    title: "Alışkanlık ve günlük",
    type: "Kişisel gelişim",
    summary: "Günlük hedefler, seri takibi ve kısa günlük notlarıyla alışkanlık kazandıran uygulama.",
    tags: ["iOS", "Widget", "iCloud senkron"],
  },
  {
    slug: "seyahat",
    title: "Seyahat planlayıcı",
    type: "Seyahat",
    summary: "Uçuş, otel ve gezilecek yerleri tek bir rotada toplayan, arkadaşlarla birlikte planlanan seyahat uygulaması.",
    tags: ["Harita", "Ortak plan", "Çevrimdışı"],
  },
];

export const consulting = {
  title: "Uygulamanızı kendiniz yapmak mı istiyorsunuz?",
  body:
    "Birebir görüşmelerle fikrinizi netleştiriyor, doğru araçları seçiyor ve yayına kadar adım adım ilerliyoruz. Cursor ve Claude gibi yapay zekâ araçlarıyla nasıl hızlı üretileceğini uygulamalı gösteriyorum.",
  packages: [
    { name: "Tek görüşme", detail: "60 dakikalık birebir görüşme: fikir, kapsam ve yol haritası." },
    { name: "Mentorluk", detail: "Haftalık görüşmelerle uygulamanızı birlikte yayına taşıyoruz." },
    { name: "Ekip danışmanlığı", detail: "Yazılım ekibinize mimari, süreç ve yapay zekâ araçları desteği." },
  ],
};

// Girişte portrenin yanında sırayla beliren bildirimler.
export const notifications = [
  { icon: "✓", title: "Randevu onaylandı", detail: "Saç + Sakal · Yarın 14:30 · Usta Emre", color: "#eab308" },
  { icon: "🛍", title: "Yeni sipariş geldi", detail: "El yapımı seramik kupa · ₺480", color: "#ec4899" },
  { icon: "🏋", title: "Yerin ayrıldı", detail: "HIIT · Bugün 19:00 · 12/14 kişi", color: "#f97316" },
  { icon: "🚀", title: "Uygulaman yayında", detail: "App Store incelemesi onaylandı", color: "#3b82f6" },
  { icon: "📦", title: "Kritik stok", detail: "Süt · 6 adet kaldı · siparişe eklendi", color: "#10b981" },
  { icon: "🍽", title: "Masa rezervasyonu", detail: "4 kişi · Cumartesi 20:30 · Teras", color: "#f59e0b" },
  { icon: "💬", title: "Mentorluk görüşmesi", detail: "Yarın 10:00 · App Store yayın planı", color: "#8b5cf6" },
  { icon: "🔧", title: "Aracınız hazır", detail: "Periyodik bakım tamamlandı", color: "#ef4444" },
];
