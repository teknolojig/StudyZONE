# StudyZONE International Website

Modern ve performanslı yurtdışı eğitim danışmanlığı web sitesi.

## Teknolojiler

- **Next.js 16.0.0** - React framework (App Router)
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Modern CSS framework
- **shadcn/ui** - Yüksek kaliteli UI bileşenleri
- **Lucide React** - Vektörel iconlar

## Özellikler

- ✅ Modern ve responsive tasarım
- ✅ Mobil uyumlu
- ✅ SEO optimize edilmiş
- ✅ Yüksek performans
- ✅ Accessibility standartları
- ✅ Marka renkleri entegrasyonu (#e54413, #562281)
- ✅ Animasyonlu sayaçlar ve geçişler
- ✅ Form bileşenleri

## Kurulum

```bash
# Bağımlılıkları yükle
npm install --cache ~/.npm-temp-cache

# Development server'ı başlat
npm run dev

# Production build
npm run build

# Production server'ı başlat
npm start
```

## Proje Yapısı

```
studyzone-website/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Ana layout (Header, Footer)
│   ├── page.tsx             # Ana sayfa
│   ├── work-travel/         # Work & Travel sayfası
│   └── globals.css          # Global stiller
├── components/
│   ├── layout/              # Layout bileşenleri
│   │   ├── header.tsx
│   │   ├── topbar.tsx
│   │   └── footer.tsx
│   ├── home/                # Ana sayfa bileşenleri
│   │   ├── hero.tsx
│   │   ├── why-studyzone.tsx
│   │   ├── stats.tsx
│   │   └── testimonials.tsx
│   ├── forms/               # Form bileşenleri
│   │   └── contact-form.tsx
│   └── ui/                  # shadcn/ui bileşenleri
├── lib/
│   └── utils.ts             # Utility fonksiyonlar
└── public/
    └── logo.png             # StudyZONE logosu
```

## Sayfalar

### Ana Sayfa (/)
- Hero bölümü (Work & Travel 2026)
- Neden StudyZONE? (4 özellik kartı)
- Rakamlarla StudyZONE (Animasyonlu sayaçlar)
- Müşteri Yorumları (Carousel)
- İletişim Formu

### Work & Travel Sayfası (/work-travel)
- Hero bölümü
- Program tanıtımı
- Başvuru süreci (5 adım)
- Program avantajları
- Başvuru formu

## Renk Paleti

- **Primary:** #e54413 (Turuncu)
- **Secondary:** #562281 (Mor)

## Geliştirme

Proje http://localhost:3000 adresinde çalışmaktadır.

- Tüm iconlar Lucide React'ten alınmıştır (vektörel)
- Responsive tasarım: Mobile-first yaklaşım
- Form validasyonu client-side (sunucu entegrasyonu sonraya bırakıldı)
- Görseller için Next.js Image component kullanıldı
- Animasyonlar için Tailwind CSS transitions ve IntersectionObserver API kullanıldı

## Sonraki Adımlar

- [ ] Admin panel geliştirme
- [ ] Database entegrasyonu
- [ ] Form backend entegrasyonu
- [ ] Ek sayfalar (Dil Okulu, Üniversite, Master, vb.)
- [ ] Blog sistemi
- [ ] Çoklu dil desteği

## Lisans

© 2025 StudyZONE International. Tüm hakları saklıdır.
