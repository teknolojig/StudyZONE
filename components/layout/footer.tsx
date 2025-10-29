"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Instagram, Facebook, Linkedin, Youtube, Headphones, Edit } from "lucide-react";
import { InfoFormModal } from "@/components/forms/info-form-modal";
import { CallMeModal } from "@/components/forms/call-me-modal";
import { CallNowModal } from "@/components/forms/call-now-modal";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isCallMeModalOpen, setIsCallMeModalOpen] = useState(false);
  const [isCallNowModalOpen, setIsCallNowModalOpen] = useState(false);

  const handleCallNowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Only show modal on desktop, on mobile make phone call
    if (window.innerWidth >= 1024) {
      setIsCallNowModalOpen(true);
    } else {
      // On mobile, trigger phone call
      window.location.href = 'tel:+902129700070';
    }
  };

  return (
    <footer className="text-gray-300 bg-footer-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="StudyZONE International"
                width={180}
                height={60}
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              StudyZONE olarak 28 yıldır yurtdışı eğitim danışmanlığı hizmetleri sunuyor ve dünyanın 17 farklı ülkesinden 300'e yakın eğitim kurumunun resmi temsilciliğini yapıyoruz.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-yellow-400">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Ücretsiz Danışma Hattı</span>
              </div>
              <a
                href="tel:+902129700070"
                className="text-xl font-bold text-white hover:text-yellow-400 transition-colors inline-block"
              >
                0212-970 0070
              </a>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* KURUMSAL */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 uppercase">Kurumsal</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/degerlerimiz" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Değerlerimiz
                </Link>
              </li>
              <li>
                <Link href="/akreditasyonlarimiz" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Akreditasyonlarımız
                </Link>
              </li>
              <li>
                <Link href="/referanslarimiz" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Referanslarımız
                </Link>
              </li>
              <li>
                <Link href="/insan-kaynaklari" className="text-gray-400 hover:text-white transition-colors text-sm">
                  İnsan Kaynakları
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVİSLERİMİZ */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 uppercase">Servislerimiz</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/yurtdisinda-dil-okulu" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Yurtdışında Dil Okulu
                </Link>
              </li>
              <li>
                <Link href="/yurtdisinda-yaz-okulu" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Yurtdışında Yaz Okulu
                </Link>
              </li>
              <li>
                <Link href="/yurtdisinda-universite" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Yurtdışında Üniversite
                </Link>
              </li>
              <li>
                <Link href="/yurtdisinda-master" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Yurtdışında Master
                </Link>
              </li>
              <li>
                <Link href="/yurtdisinda-sertifika" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Yurtdışında Sertifika
                </Link>
              </li>
              <li>
                <Link href="/work-travel" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Work and Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* MÜŞTERİ MEMNUNİYETİ */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 uppercase">Müşteri Memnuniyeti</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/musteri-memnuniyeti" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Müşteri Memnuniyeti
                </Link>
              </li>
              <li>
                <Link href="/musteri-memnuniyeti-anayasasi" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Müşteri Memnuniyeti Anayasası
                </Link>
              </li>
              <li>
                <Link href="/hakli-musteri-hatti" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Haklı Müşteri Hattı
                </Link>
              </li>
              <li>
                <Link href="/sikayetim-var" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Şikayetim Var
                </Link>
              </li>
              <li>
                <Link href="/sikayetlerin-degerlendirilmesi" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Şikayetlerin Değerlendirilmesi
                </Link>
              </li>
              <li>
                <Link href="/sikayet-ve-oneri-formu" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Şikayet ve Öneri Formu
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#1a2332]">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} StudyZONE International. Tüm hakları saklıdır.
          </p>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="lg:container lg:mx-auto lg:px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-0">
            {/* Bilgi Formu - Always visible */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsFormModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 bg-secondary hover:brightness-110 text-white font-bold px-4 py-4 transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <Edit className="w-5 h-5 animate-pulse group-hover:scale-110 transition-transform" />
              <span className="whitespace-nowrap text-sm md:text-base animate-pulse">BİLGİ FORMU</span>
            </button>

            {/* Biz Sizi Arayalım - Hidden on mobile */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsCallMeModalOpen(true);
              }}
              className="hidden lg:flex items-center justify-center gap-2 bg-primary hover:brightness-110 text-white font-bold px-4 py-4 transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <Headphones className="w-5 h-5 animate-pulse group-hover:scale-110 transition-transform" />
              <span className="whitespace-nowrap text-sm md:text-base animate-pulse">BİZ SİZİ ARAYALIM</span>
            </button>

            {/* Hemen Arayın - Always visible, modal on desktop, direct call on mobile */}
            <button
              type="button"
              onClick={handleCallNowClick}
              className="flex items-center justify-center gap-2 bg-green-500 hover:brightness-110 text-white font-bold px-4 py-4 transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <Phone className="w-5 h-5 animate-pulse group-hover:scale-110 transition-transform" />
              <span className="whitespace-nowrap text-sm md:text-base animate-pulse">HEMEN ARAYIN</span>
            </button>
          </div>
        </div>
      </div>

      {/* Info Form Modal */}
      <InfoFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
      />

      {/* Call Me Modal */}
      <CallMeModal
        isOpen={isCallMeModalOpen}
        onClose={() => setIsCallMeModalOpen(false)}
      />

      {/* Call Now Modal - Desktop only */}
      <CallNowModal
        isOpen={isCallNowModalOpen}
        onClose={() => setIsCallNowModalOpen(false)}
      />
    </footer>
  );
}
