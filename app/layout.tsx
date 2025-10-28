import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Topbar } from "@/components/layout/topbar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudyZONE International - Yurtdışı Eğitim Danışmanlığı",
  description: "28 yıllık tecrübemizle yurtdışı eğitim hayallerinizi gerçekleştiriyoruz. Dil okulu, üniversite, master ve Work & Travel programları için ücretsiz danışmanlık.",
  keywords: "yurtdışı eğitim, dil okulu, work and travel, üniversite, master, yaz okulu",
  authors: [{ name: "StudyZONE International" }],
  openGraph: {
    title: "StudyZONE International - Yurtdışı Eğitim Danışmanlığı",
    description: "28 yıllık tecrübemizle yurtdışı eğitim hayallerinizi gerçekleştiriyoruz.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Topbar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
