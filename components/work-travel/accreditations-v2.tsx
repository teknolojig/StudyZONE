"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink, Award, Shield, CheckCircle } from "lucide-react";

interface Accreditation {
  id: number;
  name: string;
  logo: string;
  title: string;
  description: string;
  website?: string;
}

const accreditations: Accreditation[] = [
  {
    id: 1,
    name: "CIEE",
    logo: "/workandtravel/akredite/ciee.jpg",
    title: "CIEE HAKKINDA",
    description: "CIEE, Amerika'nın en eski ve en büyük kar amacı gütmeyen, yurtdışında çalışma ve kültürlerarası değişim organizasyonu ve sivil toplum kuruluşudur.\n\n1947 yılından bu yana, mevcut olan en kapsamlı, alakalı ve değerli değişim programlarını sunarak, binlerce kişinin dünyanın küresel açıdan bağımsız ve kültürel farklılıklarını, bilgi ve gerekli yaşam ve çalışma becerilerini kazanmasını sağlar.",
    website: "http://www.ciee.org/who/"
  },
  {
    id: 2,
    name: "GeoVisions",
    logo: "/workandtravel/akredite/geovisions.jpg",
    title: "GeoVisions",
    description: "GeoVisions liderleri uluslararası eğitim ve kültürel değişim programlarında 117 yıllık bir deneyime sahiptir.\n\nGeoVisions, 2001 yılında Amerika Birleşik Devletleri'nde Summer Work and Travel sponsoru olarak kurulmuştur.",
    website: "https://www.geovisions.org/geovisions"
  },
  {
    id: 3,
    name: "Greenheart",
    logo: "/workandtravel/akredite/greenheart.jpg",
    title: "GREENHEART HAKKINDA",
    description: "Greenheart Exchange, ABD'de 1985'ten beri Amerikalıları uluslararası öğrencilerle buluşturan kültürel değişim programları sunmaktadır.\n\nGreenheart'ın çeşitli programları, bütün milletlerin insanları arasında kültürlerarası anlayışı ve diplomasiyi teşvik eder.\n\nGreenheart, kar amacı gütmeyen Greenheart International'ın bir bölümüdür. Work and Travel gibi bazı J-1 öğrenci değişim programlarının ABD Dışişleri Bakanlığı'nın belirlemiş olduğu sponsorluklarındandır.",
    website: "https://www.greenheart-exchange.com/"
  },
  {
    id: 4,
    name: "Janus",
    logo: "/workandtravel/akredite/janus.jpg",
    title: "Janus International",
    description: "Work and Travel sponsorlarından biri olan Janus International, her yıl tüm ABD genelinde otel, mağaza, restoran, tatil köyü ve cankurtaranlık işleri için binlerce Work and Travel katılımcısını işe almaktadır.",
    website: "https://www.janus-international.com/"
  },
  {
    id: 5,
    name: "Embassy",
    logo: "/workandtravel/akredite/embassy.jpg",
    title: "AMERİKAN KONSOLOSLUĞU",
    description: "Amerika Birleşik Devletleri Hükümeti'nin çeşitli kurumları tarafından oluşturulan İstanbul ABD Başkonsolosluğu, Amerikan ve Türk hükümeti ve halklar arasındaki ilişkileri ilerletmek için ekip olarak çalışmaktadır.\n\nTürkiye ile Amerikan ilişkilerini yürütme, aktif kamu diplomasisi programına sahip olma, Amerikan vatandaşlarına, vize almak isteyen Türk ve diğer milletlerin vatandaşlarına veya Amerika'ya göçmeyi hak eden ve iki ülke arasında ticaret ve yatırım teşvik eden Türk vatandaşlarına konsolosluk hizmetileri sağlamaktadır.\n\nÇeşitli çok taraflı kuruluşlar aracılığıyla karşılıklı siyasi, ekonomik ve güvenlik çıkarlarını korumaya çalışmaktadır.",
    website: "http://istanbul.usconsulate.gov/"
  }
];

export function AccreditationsV2() {
  const [selectedAccreditation, setSelectedAccreditation] = useState<Accreditation | null>(null);

  const openModal = (accreditation: Accreditation) => {
    setSelectedAccreditation(accreditation);
    document.getElementById('accreditation-modal-v2')?.classList.remove('hidden');
  };

  const closeModal = () => {
    setSelectedAccreditation(null);
    document.getElementById('accreditation-modal-v2')?.classList.add('hidden');
  };

  return (
    <>
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Güvenilir Ortaklarımız</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              AKREDİTASYONLARIMIZ
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dünya çapında tanınmış ve güvenilir kuruluşlarla ortaklık
            </p>
          </div>

          {/* Accreditations Grid - Hexagon Style */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {accreditations.map((accreditation, index) => (
                <button
                  key={accreditation.id}
                  onClick={() => openModal(accreditation)}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card Container */}
                  <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-primary/30 aspect-square hover:scale-105 hover:-translate-y-2">

                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Logo Container */}
                    <div className="absolute inset-0 p-6 flex items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={accreditation.logo}
                          alt={accreditation.name}
                          width={150}
                          height={150}
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Hover Info Badge */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-white text-center">
                        <p className="font-bold text-sm mb-1">{accreditation.name}</p>
                        <div className="flex items-center justify-center gap-1 text-xs text-white/90">
                          <ExternalLink className="w-3 h-3" />
                          <span>Detayları Gör</span>
                        </div>
                      </div>
                    </div>

                    {/* Verified Badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-300 rounded-tl-lg"></div>
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-300 rounded-br-lg"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div
        id="accreditation-modal-v2"
        className="hidden fixed inset-0 z-50 overflow-y-auto"
      >
        {selectedAccreditation && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-300">

                {/* Decorative Header Background */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-3xl"></div>

                {/* Modal Header */}
                <div className="relative px-6 md:px-8 pt-8 pb-6 border-b border-gray-200">
                  <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-colors z-10"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                        {selectedAccreditation.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600 font-semibold">Onaylı Partner</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="px-6 md:px-8 py-6 pb-8">
                  <div className="space-y-4">
                    {selectedAccreditation.description.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {selectedAccreditation.website && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <a
                        href={selectedAccreditation.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                      >
                        <span>Web Sitesini Ziyaret Et</span>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
