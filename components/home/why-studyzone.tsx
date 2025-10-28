import { Award, Users, Globe, HeadphonesIcon } from "lucide-react";

export function WhyStudyzone() {
  const features = [
    {
      icon: Award,
      title: "28 Yıllık Tecrübe",
      description: "Sektörde çeyrek asırı aşkın deneyimimizle güvenilir hizmet sunuyoruz.",
    },
    {
      icon: Users,
      title: "%100 Müşteri Memnuniyeti",
      description: "Binlerce öğrencinin hayallerini gerçekleştirdik ve tam memnuniyet sağladık.",
    },
    {
      icon: Globe,
      title: "300+ Resmi Temsilcilik",
      description: "Dünya çapında geniş partnör ağımızla size en iyi seçenekleri sunuyoruz.",
    },
    {
      icon: HeadphonesIcon,
      title: "Ücretsiz Danışmanlık",
      description: "Yurtdışı eğitim sürecinizde profesyonel danışmanlık hizmeti veriyoruz.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Neden StudyZONE?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Yurtdışı eğitim hayallerinizi gerçekleştirmek için ihtiyacınız olan her şey burada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
