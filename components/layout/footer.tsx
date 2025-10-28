import Link from "next/link";
import Image from "next/image";
import { Phone, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
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
                className="bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 p-2.5 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 p-2.5 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-500 p-2.5 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500/20 hover:bg-red-500/30 text-red-400 p-2.5 rounded-full transition-colors"
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
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} StudyZONE International. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
