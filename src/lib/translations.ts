export type Language = 'tr' | 'en';

export const translations = {
  tr: {
    // Navigation
    nav: {
      course: 'Kurs',
      testimonials: 'Öğrenci Yorumları',
      pricing: 'Fiyatlandırma',
      faq: 'S.S.S.',
      cta: 'Hemen Başla',
    },
    
    // Hero Section
    hero: {
      badge: '🚀 2025\'in En İyi Fırsatı',
      title: 'Kod Yazmadan',
      titleHighlight: 'Ayda $100,000',
      titleEnd: 'Kazanan Uygulamalar Yap',
      subtitle: 'AI senin yerine kod yazıyor. Sen sadece fikrini söyle. Cursor ile sıfırdan App Store\'a.',
      cta: 'KURSA KATIL',
      ctaSecondary: 'Ücretsiz Ders İzle',
      stats: {
        students: 'Öğrenci',
        apps: 'Yayınlanan Uygulama',
        rating: 'Memnuniyet',
      },
      urgency: 'Son 23 kişilik kontenjan!',
    },
    
    // Income Proof
    income: {
      badge: '💰 Gerçek Kazançlar',
      title: 'Öğrencilerimiz',
      titleHighlight: 'Gerçekten Kazanıyor',
      subtitle: 'App Store\'dan elde edilen gerçek gelirler. Sırada sen varsın.',
      monthlyIncome: '/ay',
      totalEarned: 'Toplam kazanç',
      avgTime: 'Ortalama süre',
      avgTimeValue: '3 hafta',
      successRate: 'Başarı oranı',
    },
    
    // Before/After
    compare: {
      badge: '🔄 Karşılaştırma',
      title: 'Eski Yöntem vs',
      titleHighlight: 'Cursor ile',
      oldWay: {
        title: '❌ Eski Yöntem',
        items: [
          '4 yıl üniversite eğitimi',
          '10,000+ saat pratik',
          '$50,000+ bootcamp masrafı',
          'Yıllarca junior pozisyonunda',
          'Başkası için çalışmak',
        ],
      },
      newWay: {
        title: '✅ Cursor ile',
        items: [
          'Sadece 2-4 hafta',
          'Sıfır kod bilgisi',
          'Tek seferlik uygun fiyat',
          'Hemen kendi uygulamanı yap',
          'Pasif gelir kazan',
        ],
      },
    },
    
    // Course Content
    course: {
      badge: '📚 Kurs İçeriği',
      title: 'Neler',
      titleHighlight: 'Öğreneceksin?',
      subtitle: '100+ saat içerik, sıfırdan App Store\'a kadar her şey.',
      modules: [
        {
          title: 'Cursor AI Kurulumu',
          description: 'Cursor\'ı kurulum, ayarlar ve ilk adımlar',
          duration: '2 saat',
        },
        {
          title: 'Swift & UIKit Temelleri',
          description: 'AI ile kod yazmayı öğren, Swift dilini anla',
          duration: '15 saat',
        },
        {
          title: 'İlk Uygulamanı Yap',
          description: 'Sıfırdan çalışan bir uygulama geliştir',
          duration: '20 saat',
        },
        {
          title: 'UI/UX Tasarım',
          description: 'Profesyonel görünümlü arayüzler tasarla',
          duration: '12 saat',
        },
        {
          title: 'Veri Yönetimi',
          description: 'CoreData, API entegrasyonu ve bulut',
          duration: '18 saat',
        },
        {
          title: 'App Store\'a Yayınlama',
          description: 'Uygulamanı milyonlara ulaştır',
          duration: '8 saat',
        },
        {
          title: 'Monetizasyon',
          description: 'Reklam, abonelik ve satın alma entegrasyonu',
          duration: '10 saat',
        },
        {
          title: 'Pazarlama & Büyüme',
          description: 'ASO, sosyal medya ve kullanıcı kazanımı',
          duration: '15 saat',
        },
      ],
      totalHours: '100+ saat içerik',
      lifetime: 'Ömür boyu erişim',
    },
    
    // Testimonials
    testimonials: {
      badge: '⭐ Öğrenci Yorumları',
      title: 'Onlar Başardı,',
      titleHighlight: 'Sıra Sende',
      items: [
        {
          name: 'Ahmet K.',
          role: 'Eski Bankacı',
          image: '👨‍💼',
          text: 'Hayatımda 1 satır kod yazmamıştım. 3 hafta sonra App Store\'da uygulamam vardı. Şimdi ayda $4,200 kazanıyorum.',
          income: '$4,200/ay',
        },
        {
          name: 'Zeynep M.',
          role: 'Grafik Tasarımcı',
          image: '👩‍🎨',
          text: 'Tasarım bilgimi kodlamaya dönüştürdüm. 2 uygulama yayınladım, üçüncüsü yolda. Pasif gelirim artık maaşımı geçti.',
          income: '$7,800/ay',
        },
        {
          name: 'Murat T.',
          role: 'Üniversite Öğrencisi',
          image: '👨‍🎓',
          text: '21 yaşında kendi işimin patronuyum. Arkadaşlarım staj ararken ben uygulamamdan para kazanıyorum.',
          income: '$2,900/ay',
        },
        {
          name: 'Elif S.',
          role: 'Ev Hanımı',
          image: '👩‍🍳',
          text: 'Çocuklar uyuduktan sonra çalıştım. 6 ayda 3 uygulama yaptım. Artık eve katkıda bulunuyorum.',
          income: '$3,400/ay',
        },
        {
          name: 'Can B.',
          role: 'Emekli Mühendis',
          image: '👴',
          text: '58 yaşında yeni bir kariyer. Mekanik mühendisliğinden yazılıma geçtim. Hiç geç değil!',
          income: '$5,600/ay',
        },
        {
          name: 'Deniz A.',
          role: 'Fitness Koçu',
          image: '💪',
          text: 'Kendi fitness uygulamamı yaptım. Artık hem kurs satıyorum hem uygulama geliri alıyorum.',
          income: '$8,200/ay',
        },
      ],
    },
    
    // Pricing
    pricing: {
      badge: '💎 Fiyatlandırma',
      title: 'Geleceğine',
      titleHighlight: 'Yatırım Yap',
      oldPrice: '₺14,999',
      newPrice: '₺4,999',
      discount: '%67 İndirim',
      perMonth: 'veya aylık ₺599 x 12 ay',
      cta: 'HEMEN SATIN AL',
      guarantee: '30 gün para iade garantisi',
      features: [
        '100+ saat video içerik',
        'Ömür boyu erişim',
        'Özel Discord topluluğu',
        'Haftalık canlı yayınlar',
        'Birebir mentorluk (ilk 50 kişi)',
        'Tüm kaynak kodlar',
        'Sertifika',
        'Gelecek güncellemeler ücretsiz',
      ],
      urgency: 'Bu fiyat 48 saat sonra bitiyor!',
      spots: 'Sadece 23 kişilik yer kaldı',
    },
    
    // FAQ
    faq: {
      badge: '❓ Sık Sorulan Sorular',
      title: 'Merak',
      titleHighlight: 'Edilenler',
      items: [
        {
          q: 'Hiç kod bilmeden başlayabilir miyim?',
          a: 'Evet! Kurs tamamen sıfırdan başlayanlar için tasarlandı. Cursor AI senin için kod yazıyor, sen sadece ne istediğini söylüyorsun.',
        },
        {
          q: 'Ne kadar sürede uygulama yapabilirim?',
          a: 'Ortalama öğrencimiz 2-3 hafta içinde ilk uygulamasını yayınlıyor. Günde 2-3 saat ayırman yeterli.',
        },
        {
          q: 'Mac gerekli mi?',
          a: 'iOS uygulama geliştirmek için Mac gerekli. Ama merak etme, uygun fiyatlı seçenekleri de kursta anlatıyoruz.',
        },
        {
          q: 'Apple Developer hesabı lazım mı?',
          a: 'App Store\'a yayınlamak için evet ($99/yıl). Ama önce uygulamanı geliştirip test edebilirsin.',
        },
        {
          q: 'Para iade garantisi var mı?',
          a: 'Evet! 30 gün içinde memnun kalmazsan, soru sormadan %100 para iadesi yapıyoruz.',
        },
        {
          q: 'Kurs ne kadar süre erişilebilir?',
          a: 'Ömür boyu! Bir kez satın al, sonsuza kadar eriş. Tüm güncellemeler de ücretsiz.',
        },
        {
          q: 'Destek alabilir miyim?',
          a: 'Özel Discord topluluğumuz, haftalık canlı yayınlar ve birebir mentorluk seçeneği mevcut.',
        },
        {
          q: 'Gerçekten para kazanabilir miyim?',
          a: 'Öğrencilerimizin %78\'i ilk 3 ay içinde gelir elde etmeye başlıyor. Tabi ki başarı senin çabana bağlı.',
        },
      ],
    },
    
    // Footer
    footer: {
      brand: 'evrendemir.com',
      tagline: 'Kod yazmadan uygulama geliştir.',
      rights: '© 2025 Evren Demir. Tüm hakları saklıdır.',
      links: {
        privacy: 'Gizlilik Politikası',
        terms: 'Kullanım Şartları',
        contact: 'İletişim',
      },
    },
    
    // Common
    common: {
      learnMore: 'Daha Fazla',
      getStarted: 'Başla',
      watchVideo: 'Video İzle',
    },
  },
  
  en: {
    // Navigation
    nav: {
      course: 'Course',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      faq: 'FAQ',
      cta: 'Get Started',
    },
    
    // Hero Section
    hero: {
      badge: '🚀 Best Opportunity of 2025',
      title: 'Build Apps That Make',
      titleHighlight: '$100,000/month',
      titleEnd: 'Without Writing Code',
      subtitle: 'AI writes the code for you. You just share your idea. From zero to App Store with Cursor.',
      cta: 'JOIN THE COURSE',
      ctaSecondary: 'Watch Free Lesson',
      stats: {
        students: 'Students',
        apps: 'Published Apps',
        rating: 'Satisfaction',
      },
      urgency: 'Only 23 spots left!',
    },
    
    // Income Proof
    income: {
      badge: '💰 Real Earnings',
      title: 'Our Students Are',
      titleHighlight: 'Actually Earning',
      subtitle: 'Real income from the App Store. You\'re next.',
      monthlyIncome: '/month',
      totalEarned: 'Total earned',
      avgTime: 'Average time',
      avgTimeValue: '3 weeks',
      successRate: 'Success rate',
    },
    
    // Before/After
    compare: {
      badge: '🔄 Comparison',
      title: 'Old Way vs',
      titleHighlight: 'With Cursor',
      oldWay: {
        title: '❌ The Old Way',
        items: [
          '4 years of university',
          '10,000+ hours of practice',
          '$50,000+ bootcamp costs',
          'Years as a junior developer',
          'Working for someone else',
        ],
      },
      newWay: {
        title: '✅ With Cursor',
        items: [
          'Just 2-4 weeks',
          'Zero coding knowledge',
          'One-time affordable price',
          'Build your own app immediately',
          'Earn passive income',
        ],
      },
    },
    
    // Course Content
    course: {
      badge: '📚 Course Content',
      title: 'What You\'ll',
      titleHighlight: 'Learn',
      subtitle: '100+ hours of content, everything from zero to App Store.',
      modules: [
        {
          title: 'Cursor AI Setup',
          description: 'Installation, settings, and first steps with Cursor',
          duration: '2 hours',
        },
        {
          title: 'Swift & UIKit Basics',
          description: 'Learn to code with AI, understand Swift',
          duration: '15 hours',
        },
        {
          title: 'Build Your First App',
          description: 'Create a working app from scratch',
          duration: '20 hours',
        },
        {
          title: 'UI/UX Design',
          description: 'Design professional-looking interfaces',
          duration: '12 hours',
        },
        {
          title: 'Data Management',
          description: 'CoreData, API integration, and cloud',
          duration: '18 hours',
        },
        {
          title: 'App Store Publishing',
          description: 'Reach millions with your app',
          duration: '8 hours',
        },
        {
          title: 'Monetization',
          description: 'Ads, subscriptions, and in-app purchases',
          duration: '10 hours',
        },
        {
          title: 'Marketing & Growth',
          description: 'ASO, social media, and user acquisition',
          duration: '15 hours',
        },
      ],
      totalHours: '100+ hours of content',
      lifetime: 'Lifetime access',
    },
    
    // Testimonials
    testimonials: {
      badge: '⭐ Student Reviews',
      title: 'They Made It,',
      titleHighlight: 'You\'re Next',
      items: [
        {
          name: 'James K.',
          role: 'Former Banker',
          image: '👨‍💼',
          text: 'I had never written a line of code. 3 weeks later, my app was on the App Store. Now I make $4,200/month.',
          income: '$4,200/mo',
        },
        {
          name: 'Sarah M.',
          role: 'Graphic Designer',
          image: '👩‍🎨',
          text: 'I turned my design skills into coding. Published 2 apps, third is on the way. My passive income now exceeds my salary.',
          income: '$7,800/mo',
        },
        {
          name: 'Mike T.',
          role: 'College Student',
          image: '👨‍🎓',
          text: 'I\'m my own boss at 21. While my friends look for internships, I earn money from my app.',
          income: '$2,900/mo',
        },
        {
          name: 'Emily S.',
          role: 'Stay-at-home Mom',
          image: '👩‍🍳',
          text: 'I worked after the kids went to bed. Made 3 apps in 6 months. Now I contribute to our household.',
          income: '$3,400/mo',
        },
        {
          name: 'Robert B.',
          role: 'Retired Engineer',
          image: '👴',
          text: 'A new career at 58. Transitioned from mechanical engineering to software. It\'s never too late!',
          income: '$5,600/mo',
        },
        {
          name: 'Alex A.',
          role: 'Fitness Coach',
          image: '💪',
          text: 'Built my own fitness app. Now I sell courses and get app revenue.',
          income: '$8,200/mo',
        },
      ],
    },
    
    // Pricing
    pricing: {
      badge: '💎 Pricing',
      title: 'Invest In',
      titleHighlight: 'Your Future',
      oldPrice: '$999',
      newPrice: '$299',
      discount: '70% Off',
      perMonth: 'or $29/month x 12 months',
      cta: 'BUY NOW',
      guarantee: '30-day money-back guarantee',
      features: [
        '100+ hours of video content',
        'Lifetime access',
        'Private Discord community',
        'Weekly live sessions',
        'One-on-one mentorship (first 50)',
        'All source codes',
        'Certificate',
        'Free future updates',
      ],
      urgency: 'This price ends in 48 hours!',
      spots: 'Only 23 spots remaining',
    },
    
    // FAQ
    faq: {
      badge: '❓ Frequently Asked Questions',
      title: 'Common',
      titleHighlight: 'Questions',
      items: [
        {
          q: 'Can I start with zero coding knowledge?',
          a: 'Yes! The course is designed for complete beginners. Cursor AI writes the code for you, you just tell it what you want.',
        },
        {
          q: 'How long until I can build an app?',
          a: 'Our average student publishes their first app within 2-3 weeks. Just 2-3 hours a day is enough.',
        },
        {
          q: 'Do I need a Mac?',
          a: 'Yes, a Mac is required for iOS development. But don\'t worry, we cover affordable options in the course.',
        },
        {
          q: 'Do I need an Apple Developer account?',
          a: 'Yes, to publish on the App Store ($99/year). But you can develop and test your app first.',
        },
        {
          q: 'Is there a money-back guarantee?',
          a: 'Yes! If you\'re not satisfied within 30 days, we offer a 100% refund, no questions asked.',
        },
        {
          q: 'How long can I access the course?',
          a: 'Forever! Buy once, access forever. All updates are free too.',
        },
        {
          q: 'Can I get support?',
          a: 'Yes! Private Discord community, weekly live sessions, and one-on-one mentorship available.',
        },
        {
          q: 'Can I really make money?',
          a: '78% of our students start earning within the first 3 months. Of course, success depends on your effort.',
        },
      ],
    },
    
    // Footer
    footer: {
      brand: 'evrendemir.com',
      tagline: 'Build apps without writing code.',
      rights: '© 2025 Evren Demir. All rights reserved.',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact',
      },
    },
    
    // Common
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      watchVideo: 'Watch Video',
    },
  },
} as const;

export type Translations = typeof translations.tr;


