"use client";

import { ThumbsUp, SmilePlus, Award, Clock, Star, Users } from "lucide-react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function WhyStudyZoneV2() {
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
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            NEDEN BİZ?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            NEDEN STUDYZONE'U TERCİH ETMELİSİNİZ ?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Yurtdışı eğitim ve Work & Travel programlarında güvenilir partneriniz
          </p>
        </div>

        {/* Reasons Grid - Horizontal Cards with Icon on Left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group border-l-4 border-primary"
            >
              <div className="flex items-start gap-5">
                {/* Icon - Left Side - Outlined Square with Gradient Border */}
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {reason.icon}
                    </div>
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary to-secondary text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                </div>

                {/* Content - Right Side */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
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
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            TÜM NEDENLER
          </button>
        </div>
      </div>
    </section>
  );
}
