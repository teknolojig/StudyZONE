"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";

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
    website: "https://greenheartexchange.org/"
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
    name: "WYSE",
    logo: "/workandtravel/akredite/wyse.webp",
    title: "WYSE Travel Confederation",
    description: "WYSE Travel Confederation, gençlik, öğrenci ve eğitim seyahati endüstrisinin küresel bir üyelik organizasyonudur.\n\nDünya çapında gençlerin ve öğrencilerin eğitim ve kültürel deneyimler yoluyla gelişmelerini destekleyen programlar sunmaktadır.\n\nEndüstri standartlarını belirlemek, en iyi uygulamaları paylaşmak ve gençlik seyahati sektöründe kalite ve güvenliği teşvik etmek için çalışmaktadır.",
    website: "https://www.wysetc.org/"
  },
  {
    id: 6,
    name: "Embassy",
    logo: "/workandtravel/akredite/embassy.jpg",
    title: "AMERİKAN KONSOLOSLUĞU",
    description: "Amerika Birleşik Devletleri Hükümeti'nin çeşitli kurumları tarafından oluşturulan İstanbul ABD Başkonsolosluğu, Amerikan ve Türk hükümeti ve halklar arasındaki ilişkileri ilerletmek için ekip olarak çalışmaktadır.\n\nTürkiye ile Amerikan ilişkilerini yürütme, aktif kamu diplomasisi programına sahip olma, Amerikan vatandaşlarına, vize almak isteyen Türk ve diğer milletlerin vatandaşlarına veya Amerika'ya göçmeyi hak eden ve iki ülke arasında ticaret ve yatırım teşvik eden Türk vatandaşlarına konsolosluk hizmetileri sağlamaktadır.\n\nÇeşitli çok taraflı kuruluşlar aracılığıyla karşılıklı siyasi, ekonomik ve güvenlik çıkarlarını korumaya çalışmaktadır.",
    website: "http://istanbul.usconsulate.gov/"
  }
];

export function Accreditations() {
  const [selectedAccreditation, setSelectedAccreditation] = useState<Accreditation | null>(null);

  const openModal = (accreditation: Accreditation) => {
    setSelectedAccreditation(accreditation);
    // Open DaisyUI modal
    const modal = document.getElementById('accreditation-modal') as HTMLDialogElement;
    modal?.showModal();
  };

  const closeModal = () => {
    setSelectedAccreditation(null);
    // Close DaisyUI modal
    const modal = document.getElementById('accreditation-modal') as HTMLDialogElement;
    modal?.close();
  };

  return (
    <>
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              AKREDİTASYONLARIMIZ
            </h2>
          </div>

          {/* Accreditations Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {accreditations.map((accreditation) => (
                <button
                  key={accreditation.id}
                  onClick={() => openModal(accreditation)}
                  className="group relative aspect-[16/9] bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary/50"
                >
                  <Image
                    src={accreditation.logo}
                    alt={accreditation.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styled Modal */}
      <dialog
        id="accreditation-modal"
        className="fixed inset-0 z-50 overflow-y-auto"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          maxWidth: '100vw',
          maxHeight: '100vh',
          padding: 0
        }}
      >
        {selectedAccreditation && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
              <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto animate-in zoom-in-95 duration-200">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-start justify-between rounded-t-2xl z-10">
                  <h3 className="text-2xl font-bold text-gray-900 pr-8">
                    {selectedAccreditation.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="px-6 py-6 pb-8">
                  <div className="space-y-4">
                    {selectedAccreditation.description.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {selectedAccreditation.website && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <a
                        href={selectedAccreditation.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-base"
                      >
                        <span>{selectedAccreditation.website}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
