"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight, MapPin, Briefcase } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  shortText: string;
  fullText: string;
  program: string;
  workplace: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dilara Yücetepe",
    image: "/workandtravel/referanslar/dilara.jpg",
    shortText: "StudyZONE'a çok teşekkür ederim, Amerika'da her şey çok iyiydi. Çalıştım, gezdim, alışveriş yaptım ve dinlendim. Çalıştığım havuzdaki insanlar beni seviyordu ve sürekli yanıma gelip konuşuyorlardı...",
    fullText: "StudyZONE'a çok teşekkür ederim, Amerika'da her şey çok iyiydi. Çalıştım, gezdim, alışveriş yaptım ve dinlendim. Çalıştığım havuzdaki insanlar beni seviyordu ve sürekli yanıma gelip konuşuyorlardı. Arkadaşlarım da çok iyiydi. Sürekli parayı düşünmediğin sürece her şey çok güzel. Çünkü Amerika'da bazıları sürekli çalışıp para birikip travel yapmadan dönmek istiyor. Bence Work and Travel'da fırsatları değerlendiren birinin mutsuz olması imkansız.",
    program: "Work and Travel",
    workplace: "High Sierra Pools",
    location: "Amerika",
    rating: 5
  },
  {
    id: 2,
    name: "Seda Genç",
    image: "/workandtravel/referanslar/seda.jpg",
    shortText: "Work and Travel... Herkesin iyi ya da kötü bilip bilmeden konuştuğu program. Evet, ilk başta aklımda soru işaretleri vardı. Ya beğenmezsem ya umduğum gibi değilse diye...",
    fullText: "Work and Travel... Herkesin iyi ya da kötü bilip bilmeden konuştuğu program. Evet, ilk başta aklımda soru işaretleri vardı. Ya beğenmezsem ya umduğum gibi değilse diye. StudyZONE'a e-mail attım ve Arzu ablacımdan hemen yanıt aldım. Açıkcası o kadar güzel konuştu ki daha ilk görüşmede kendimi Amerika'ya gidip gelmiş kadar hissettim ve Lunaparkta çalışmaya karar verdim. Cedar Point'te buldum kendimi. Kendime yeni telefon da aldım ve parkta çalışmaktan, commonsta kalmaktan o kadar zevk almaya başladım ki Travel kısmını kısaltıp daha da çalışabilmeyi denedim. Arzu Ablama tekrar tekrar çok teşekkür ediyorum, ilgisi ve beni Cedar Point gibi güvenilir güzel mi güzel eğlenceli bir yere gönderdiği için.",
    program: "Work and Travel",
    workplace: "Cedar Point Amusement Park",
    location: "Amerika",
    rating: 5
  },
  {
    id: 3,
    name: "Samet Seçkin",
    image: "/workandtravel/referanslar/samet.jpg",
    shortText: "HARİKA! Yolculuk, ev, iş her şey süperdi. 4 kişi kaldık evde. Benim dışında Jamaikalı ve iki Slovakyalı arkadaşla beraber kaldım...",
    fullText: "HARİKA! Yolculuk, ev, iş her şey süperdi. 4 kişi kaldık evde. Benim dışında Jamaikalı ve iki Slovakyalı arkadaşla beraber kaldım. İşte tek çalıştım. Ev iş arası yarım saat mesafeydi ve bisikletimle 5 dk'da gidiyordum. Çok güzel günler. Spor salonum ve havuzum da vardı. Arzu Abla'ya çok teşekkür ederim. Tüm Studyzone'a sevgiler!",
    program: "Work and Travel",
    workplace: "High Sierra Pools",
    location: "Amerika",
    rating: 5
  },
  {
    id: 4,
    name: "Volkan Gümüşok",
    image: "/workandtravel/referanslar/volkan.jpg",
    shortText: "Arkadaşlar diğer şirketleri bilmem ama Work and Travel şirketlerini yüzeysel olarak araştırdım ve ekşi sözlükten yorumları okumuştum...",
    fullText: "Arkadaşlar diğer şirketleri bilmem ama Work and Travel şirketlerini yüzeysel olarak araştırdım ve ekşi sözlükten yorumları okumuştum programa başlamadan önce. Arkadaşlarımın önerileri ve okuduğum yorumlar sayesinde şirkete kaydoldum. İlgilerine çok teşekkür ederim. Şirketin önceliği sizsiniz arkadaşlar, bu konuda en ufak tereddütünüz olmasın. Her şey sizin isteklerinize göre ilerliyor. Yani 'şirket size bu işi uygun buldu, işiniz budur' değil. Önemli olan sen ne istiyorsun. İşte bunun tek adresi StudyZONE'dur. Teşekkürler StudyZONE ailesi.",
    program: "Work and Travel",
    workplace: "Arlington Hotel",
    location: "Amerika",
    rating: 5
  },
  {
    id: 5,
    name: "Cansu Çelik",
    image: "/workandtravel/referanslar/cansu.jpg",
    shortText: "Selamlar! İnsanın en önemli özelliği alışmakmış. Her şeye alışıyormuş. Yeni bi çevreye, yaşama, insanlara, dile...",
    fullText: "Selamlar! İnsanın en önemli özelliği alışmakmış. Her şeye alışıyormuş. Yeni bi çevreye, yaşama, insanlara, dile. Work and Travel ile geldiğim Amerika'ya öyle bi alıştım ki dönme zamanım geldi ama dönmek istemiyorum! Studyzone ekibine bundan dolayı çok teşekkür ederim.",
    program: "Work and Travel",
    workplace: "High Sierra Pools",
    location: "Amerika",
    rating: 5
  },
  {
    id: 6,
    name: "Enez Sarı",
    image: "/workandtravel/referanslar/enez.jpg",
    shortText: "Her şey şubat aylarında Taksim'de Work and Travel programı için Studyzone ofisine girmemle başladı...",
    fullText: "Her şey şubat aylarında Taksim'de Work and Travel programı için Studyzone ofisine girmemle başladı. Daha önceden araştırdığım ve birkaç WAT firması ile görüştüğüm için ne istediğimi ve nelere sahip olduğumu danışmanıma ilettim kendisi zaten tam donanıma sahip bir WAT danışmanı olduğu için her şey güzel başlamış oldu ve tercihimi hiç düşünmeden yaptım. Harika bir yaz geçirdim. Anlatırken bile gözlerim doluyor. Toplamda 6 eyalet ve 10 dan fazla şehir gezdik. Bu yazımı beni hem Türkiye de hem ABD'de asla yalnız bırakmayan Studyzone ailesine borçluyum.",
    program: "Work and Travel",
    workplace: "Hawthorn Suites",
    location: "Amerika",
    rating: 5
  },
  {
    id: 7,
    name: "İsmail Bulut",
    image: "/workandtravel/referanslar/ismail.jpg",
    shortText: "Yaklaşık 3 aydır Amerika'nın Seattle eyaletindeyim. Daha iki yıl öncesine kadar WAT'ın ne demek olduğunu bile bilmiyordum...",
    fullText: "Yaklaşık 3 aydır Amerika'nın Seattle eyaletindeyim. Daha iki yıl öncesine kadar WAT'ın ne demek olduğunu bile bilmiyordum. Buraya gelmeden önce bir sürü şirketin ismini duydum. Bu şirketlerin bazılarının insanları dolandırdığını ya da verilen sözlerin hiçbirini tutmadığını duyunca Amerika'ya korkuyla bakıp artık anca rüyamda giderdim diyordum. Taki arkadaşım vasıtasıyla StudyZONE'u tanıyıncaya dek. StudyZONE'la ilgili birçok kişiden sürekli olumlu yorumlar alınca arkadaşımın da vasıtasıyla StudyZONE'la telefonda konuşma fırsatını buldum. Şirketi ilk gördüğümde gerçekten doğru, emin bir yerde olduğumu hemen hissettim.",
    program: "Work and Travel",
    workplace: "Aramark Olympic Peninsula Sol Duc Hot Springs",
    location: "Amerika",
    rating: 5
  },
  {
    id: 8,
    name: "Ebru Bıyık",
    image: "/workandtravel/referanslar/ebru.jpg",
    shortText: "WAT yapmayı 2 senedir planlayan ben deli gibi şirket araştırdım. Herkesten duyduğum programının nasıl geçeceğinin tamamen danışmanına ve aracı şirketine bağlı olduğu idi...",
    fullText: "WAT yapmayı 2 senedir planlayan ben deli gibi şirket araştırdım. Herkesten duyduğum programının nasıl geçeceğinin tamamen danışmanına ve aracı şirketine bağlı olduğu idi. Uzun elemeler sonucu, Studyzone ile WAT yapmış 5-6 arkadaşımın da önerisiyle, Studyzone'da karar kıldım. Bu kadar ilgi ve alakayı ben bile beklemiyordum. Danışmanım Bengüsu Arslan benim tüm sürecimle kendisi için uğraşıyormuş gibi uğraştı. Her telefon görüşmemiz bol kahkahalı ve dolu dolu geçti. Gitmeden her bilgiye sahiptim. Çok memnun kaldım ve özellikle Bengüsu'ya minnettarım. Herkese gönül rahatlığıyla öneririm.",
    program: "Work and Travel",
    workplace: "High Sierra Pools",
    location: "Amerika",
    rating: 5
  },
  {
    id: 9,
    name: "Veli Yavuz",
    image: "/workandtravel/referanslar/veli.jpg",
    shortText: "Work and Travel programı benim için büyük bir deneyim oldu. Birçok konuda kendimi geliştirme imkanı buldum...",
    fullText: "Work and Travel programı benim için büyük bir deneyim oldu. Birçok konuda kendimi geliştirme imkanı buldum. Birçok şeyi burada ilk defa yaptım. İş ortamımda gerçekten süperdi. Bu konuda çok şanslıydım çünkü birçok arkadaşım işinden şikayetçiydi. Supervisorlarımız bize ilk günlerde çok destek oldular ve orada çalışan herkes yine bize çok yardımcı oldu. Hem dinleme konusunda hem de konuşma konusunda kendimi geliştirdiğimi düşünüyorum. Buradan özellikle benimle 2 sene boyunca her konuda ilgilenen, bana destek olan ve benim buraya gelmeme vesile olan Arzu Abla'ya ve Yusuf Abi'ye çok teşekkür ediyorum.",
    program: "Work and Travel",
    workplace: "Hyatt Regency Hotel",
    location: "Amerika",
    rating: 5
  }
];

export function TestimonialsCarouselV2() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsSwiping(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    const diff = Math.abs(touchStartX.current - touchEndX.current);
    if (diff > 10) {
      setIsSwiping(true);
    }
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;

    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setIsSwiping(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExpand = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    }
    // Desktop: show 3 cards
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <Star className="w-4 h-4 fill-primary" />
            <span>Öğrenci Deneyimleri</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            REFERANSLARIMIZ
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            28 yıldır StudyZONE'u tercih eden 35.000'e yakın öğrencinin mutluluğu en büyük güvencenizdir...
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          className="max-w-7xl mx-auto relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...(isMobile ? {
            onTouchStart: handleTouchStart,
            onTouchMove: handleTouchMove,
            onTouchEnd: handleTouchEnd
          } : {})}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-gray-700 hover:text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-110"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-gray-700 hover:text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-110"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ease-in-out">
            {getVisibleTestimonials().map((testimonial, index) => {
              const isExpanded = expandedCards.has(testimonial.id);

              return (
                <div
                  key={testimonial.id}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card Container */}
                  <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-primary/30 hover:-translate-y-2">

                    {/* Top Gradient Bar */}
                    <div className="h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>

                    {/* Card Body */}
                    <div className="p-6 md:p-8">
                      {/* User Info - Top */}
                      <div className="flex items-center gap-4 mb-6">
                        {/* Avatar with Badge */}
                        <div className="relative">
                          <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={80}
                              height={80}
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          {/* Verified Badge */}
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                        </div>

                        {/* Name and Details */}
                        <div className="flex-1">
                          <h3 className="font-black text-gray-900 text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                            {testimonial.name}
                          </h3>
                          {/* Stars */}
                          <div className="flex gap-0.5 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < testimonial.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "fill-gray-300 text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="w-12 h-12 text-primary/20" />
                      </div>

                      {/* Testimonial Text */}
                      <div className="mb-6">
                        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
                          isExpanded ? '' : 'line-clamp-4'
                        }`}>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {isExpanded ? testimonial.fullText : testimonial.shortText}
                          </p>
                        </div>
                        <button
                          onClick={(e) => toggleExpand(testimonial.id, e)}
                          className="text-primary text-sm font-bold mt-3 hover:underline transition-all inline-flex items-center gap-1 group/btn"
                        >
                          <span>{isExpanded ? "Daralt" : "Devamını Oku"}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                        </button>
                      </div>

                      {/* Location and Workplace Tags */}
                      <div className="flex flex-wrap gap-2">
                        <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span className="line-clamp-1">{testimonial.workplace}</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-xs font-semibold">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-primary to-secondary w-12 h-3 shadow-lg"
                    : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Siz de Onlar Gibi Olun!
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                35.000+ mutlu öğrencimizin hikayesine siz de katılın
              </p>
              <button className="px-10 py-4 bg-white text-primary font-black text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                TÜM REFERANSLARI GÖR
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
