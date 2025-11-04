"use client";

import { ThumbsUp, SmilePlus, Award, Clock, Star, Users } from "lucide-react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export function WhyStudyZoneV4() {
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
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(236, 88, 0, 0.3) 2%, transparent 0%),
                           radial-gradient(circle at 75px 75px, rgba(236, 88, 0, 0.3) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <Star className="w-4 h-4 fill-primary" />
            <span>Neden Biz?</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            NEDEN STUDYZONE'U TERCİH ETMELİSİNİZ?
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Yıllara dayanan tecrübemiz ve öğrenci odaklı yaklaşımımızla yanınızdayız
          </p>
        </div>

        {/* Reasons Grid - Stacked Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 hover:-translate-y-2">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-12 flex items-center justify-center shadow-xl group-hover:rotate-0 group-hover:scale-110 transition-all duration-500">
                  <span className="text-white font-black text-lg">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500">
                    <div className={`text-primary group-hover:scale-110 transition-transform duration-500`}>
                      {reason.icon}
                    </div>
                  </div>
                  {/* Decorative circle */}
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${reason.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
