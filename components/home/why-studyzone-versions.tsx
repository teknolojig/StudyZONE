"use client";

import { ThumbsUp, SmilePlus, Award, Clock, Star, Users } from "lucide-react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

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

export function WhyStudyZoneVersions() {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Background with diagonal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/90"></div>

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-lg">
            NEDEN STUDYZONE'U TERCİH ETMELİSİNİZ ?
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        {/* Version 1: Clean Cards with Filled Circle Icons */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold border border-white/30">
              VERSION 1: Modern & Clean
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  {/* Icon - Filled Circle */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
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
        </div>

        {/* Version 2: Outlined Square Icons with Numbers */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold border border-white/30">
              VERSION 2: Professional with Numbers
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group border-l-4 border-white"
              >
                <div className="flex items-start gap-5">
                  {/* Icon - Outlined Square with Number */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center border-2 border-white/60 group-hover:border-white transition-all duration-300">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {reason.icon}
                      </div>
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-primary text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
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
        </div>

        {/* Version 3: Rotating Diamond Icons with Accent Lines */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold border border-white/30">
              VERSION 3: Dynamic & Animated
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover Accent Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex items-start gap-5 relative z-10">
                  {/* Icon - Rotating Diamond */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-white rounded-2xl rotate-45 flex items-center justify-center shadow-lg group-hover:rotate-[60deg] group-hover:scale-110 transition-all duration-500">
                      <div className="-rotate-45 text-primary group-hover:scale-110 transition-transform duration-300">
                        {reason.icon}
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
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
