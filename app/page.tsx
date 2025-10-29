import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StudyZONE International | Yurtdışı Eğitim Danışmanlığı - 28 Yıllık Tecrübe",
  description: "28 yıldır yurtdışı eğitim danışmanlığı hizmetleri sunuyoruz. 17 ülkeden 300+ eğitim kurumunun resmi temsilcisi. Dil okulu, yaz okulu, üniversite, master ve Work & Travel programları.",
  keywords: ["yurtdışı eğitim", "dil okulu", "yaz okulu", "üniversite", "master", "work and travel", "eğitim danışmanlığı", "study abroad", "StudyZONE"],
  authors: [{ name: "StudyZONE International" }],
  openGraph: {
    title: "StudyZONE International | Yurtdışı Eğitim Danışmanlığı",
    description: "28 yıllık tecrübeyle yurtdışı eğitim hayallerinizi gerçekleştirin. 17 ülke, 300+ okul.",
    url: "https://studyzone.com.tr",
    siteName: "StudyZONE International",
    images: [
      {
        url: "/home.jpg",
        width: 1200,
        height: 630,
        alt: "StudyZONE International Yurtdışı Eğitim",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyZONE International | Yurtdışı Eğitim Danışmanlığı",
    description: "28 yıllık tecrübeyle yurtdışı eğitim hayallerinizi gerçekleştirin.",
    images: ["/home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'StudyZONE International',
    description: '28 yıldır yurtdışı eğitim danışmanlığı hizmetleri sunuyoruz',
    url: 'https://studyzone.com.tr',
    logo: 'https://studyzone.com.tr/logo.png',
    telephone: '+90-212-970-0070',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR',
      addressLocality: 'İstanbul',
    },
    sameAs: [
      'https://facebook.com/studyzone',
      'https://instagram.com/studyzone',
      'https://linkedin.com/company/studyzone',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home.jpg"
            alt="Yurtdışı Eğitim Danışmanlığı"
            fill
            className="object-cover object-center"
            priority
            fetchPriority="high"
            quality={65}
            sizes="100vw"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 drop-shadow-2xl whitespace-nowrap">
              YURTDIŞI EĞİTİM DANIŞMANLIĞI
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed drop-shadow-lg max-w-3xl mx-auto font-light">
              StudyZONE olarak, <span className="font-bold text-primary">28 yıldır</span> yurtdışı eğitim danışmanlığı hizmetleri sunmakta ve dünyanın <span className="font-bold text-primary">17 farklı ülkesinden 300'ün</span> üzerinde eğitim kurumunun resmi temsilciliğini yapmaktayız.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <span>Hakkımızda</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/50 hover:border-white font-bold text-lg px-10 py-7 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>İletişim</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
}
