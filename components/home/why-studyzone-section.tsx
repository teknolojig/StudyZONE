"use client";

import { ThumbsUp, SmilePlus, Award, Clock, Star, Users } from "lucide-react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function WhyStudyZoneSection() {
  const reasons: Reason[] = [
    {
      icon: <ThumbsUp className="w-10 h-10" />,
      title: "Kaliteli Hizmet",
      description: "Deneyimli ve profesyonel ekibimiz ve teknolojik altyapımız sayesinde oluşan gururumuz."
    },
    {
      icon: <SmilePlus className="w-10 h-10" />,
      title: "%100 Müşteri Memnuniyeti",
      description: "Müşteri memnuniyeti konusunda hassasiyet, en önemli prensibimizdir. Müşteri memnuniyet takip sistemine sahip Türkiye'nin tek acentayız!"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "CIEE Temsilciliği",
      description: "En köklü ve en güçlü sponsor olan CIEE'in resmi Türkiye temsilcisiyiz."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "7/24 Destek",
      description: "Bize her an ulaşabileceğiniz 7/24 Acil Durum Hattımız var."
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "En Popüler İşler",
      description: "Size çeşitli eyaletlerden en popüler işverenlerin en tercih edilen işlerini sunuyoruz."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Güvenilirlik",
      description: "Uluslararası pek çok akreditasyona sahibiz."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border-4 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-12 bg-white rounded-full"></div>
            <Star className="w-6 h-6 text-white fill-white" />
            <div className="h-1 w-12 bg-white rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-lg">
            NEDEN STUDYZONE'U TERCİH ETMELİSİNİZ ?
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            Yurtdışı eğitim ve Work & Travel programlarında güvenilir partneriniz
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="mb-5 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center">
                {reason.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-6 flex justify-center">
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-4 border-white/50">
            TÜM NEDENLER
          </button>
        </div>
      </div>
    </section>
  );
}
