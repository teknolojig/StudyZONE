import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work and Travel USA 2026 | Amerika'da Çalış ve Gez Programı - StudyZONE",
  description: "Work and Travel USA 2026 kayıtları başladı! 2-4 ay Amerika'da çalış, 1 ay seyahat et. CIEE, Greenheart, GeoVisions resmi temsilcisi. Erken kayıt indirimleri ve iş garantisi.",
  keywords: ["work and travel", "work and travel 2026", "amerika", "WAT", "USA", "summer work travel", "J1 vize", "öğrenci değişim programı", "çalış gez"],
  authors: [{ name: "StudyZONE International" }],
  openGraph: {
    title: "Work and Travel USA 2026 | Amerika'da Çalış ve Gez",
    description: "2026 Work and Travel programına katıl! Amerika'da çalış, gez, para kazan. Erken kayıt avantajları.",
    url: "https://studyzone.com.tr/work-travel",
    siteName: "StudyZONE International",
    images: [
      {
        url: "/workandtravel/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Work and Travel USA 2026",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work and Travel USA 2026 | Amerika'da Çalış ve Gez",
    description: "2026 Work and Travel programına katıl! Amerika'da çalış, gez, para kazan.",
    images: ["/workandtravel/hero.jpg"],
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

export default function WorkTravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
