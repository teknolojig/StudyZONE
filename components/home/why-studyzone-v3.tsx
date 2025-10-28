"use client";

import { ThumbsUp, SmilePlus, Award, Clock, Star, Users } from "lucide-react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export function WhyStudyZoneV3() {
  const reasons: Reason[] = [
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Kaliteli Hizmet",
      description: "Deneyimli ve profesyonel ekibimiz ve teknolojik altyapımız sayesinde oluşan gururumuz.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <SmilePlus className="w-6 h-6" />,
      title: "%100 Müşteri Memnuniyeti",
      description: "Müşteri memnuniyeti konusunda hassasiyet, en önemli prensibimizdir. Müşteri memnuniyet takip sistemine sahip Türkiye'nin tek acentayız!",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "CIEE Temsilciliği",
      description: "En köklü ve en güçlü sponsor olan CIEE'in resmi Türkiye temsilcisiyiz.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "7/24 Destek",
      description: "Bize her an ulaşabileceğiniz 7/24 Acil Durum Hattımız var.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "En Popüler İşler",
      description: "Size çeşitli eyaletlerden en popüler işverenlerin en tercih edilen işlerini sunuyoruz.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Güvenilirlik",
      description: "Uluslararası pek çok akreditasyona sahibiz.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/90"></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 10px, transparent 10px, transparent 20px)`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-3xl font-black text-white mb-4 drop-shadow-lg">
            NEDEN STUDYZONE'U TERCİH ETMELİSİNİZ ?
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-20 bg-white/50 rounded-full"></div>
            <Star className="w-6 h-6 text-white fill-white" />
            <div className="h-1 w-20 bg-white/50 rounded-full"></div>
          </div>
        </div>

        {/* Reasons Grid - Horizontal Cards with Icon on Left */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-transparent relative overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="flex items-start gap-5 relative z-10">
                {/* Icon - Left Side - Hexagon Shape with Individual Colors */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl rotate-45 flex items-center justify-center shadow-lg group-hover:rotate-[60deg] group-hover:scale-110 transition-all duration-500`}>
                    <div className="-rotate-45 text-white group-hover:scale-110 transition-transform duration-300">
                      {reason.icon}
                    </div>
                  </div>
                </div>

                {/* Content - Right Side */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="group relative inline-flex items-center gap-3 bg-white text-primary px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/20 hover:border-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="relative z-10">TÜM NEDENLER</span>
            <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
