"use client";

import { ThumbsUp, SmilePlus, Award, Clock, Star, Users } from "lucide-react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function WhyStudyZoneV1() {
  const reasons: Reason[] = [
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Kaliteli Hizmet",
      description: "Deneyimli ve profesyonel ekibimiz ve teknolojik altyapımız sayesinde oluşan gururumuz."
    },
    {
      icon: <SmilePlus className="w-6 h-6" />,
      title: "%100 Müşteri Memnuniyeti",
      description: "Müşteri memnuniyeti konusunda hassasiyet, en önemli prensibimizdir. Müşteri memnuniyet takip sistemine sahip Türkiye'nin tek acentayız!"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "CIEE Temsilciliği",
      description: "En köklü ve en güçlü sponsor olan CIEE'in resmi Türkiye temsilcisiyiz."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "7/24 Destek",
      description: "Bize her an ulaşabileceğiniz 7/24 Acil Durum Hattımız var."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "En Popüler İşler",
      description: "Size çeşitli eyaletlerden en popüler işverenlerin en tercih edilen işlerini sunuyoruz."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Güvenilirlik",
      description: "Uluslararası pek çok akreditasyona sahibiz."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary"></div>
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, rgba(229, 68, 19, 0.95) 0%, rgba(229, 68, 19, 0.85) 50%, rgba(86, 34, 129, 0.95) 100%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-lg">
            NEDEN STUDYZONE'U TERCİH ETMELİSİNİZ ?
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        {/* Reasons Grid - Horizontal Cards with Icon on Left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                {/* Icon - Left Side - Filled Circle */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>

                {/* Content - Right Side */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            TÜM NEDENLER
          </button>
        </div>
      </div>
    </section>
  );
}
