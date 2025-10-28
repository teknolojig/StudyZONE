"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

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

export function TestimonialsCarousel() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const toggleExpand = (id: number) => {
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

  const getCurrentTestimonials = () => {
    const start = currentPage * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            REFERANSLARIMIZ
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            28 yıldır StudyZONE'u tercih eden 35.000'e yakın öğrencinin mutluluğu en büyük güvencenizdir...
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getCurrentTestimonials().map((testimonial) => {
              const isExpanded = expandedCards.has(testimonial.id);

              return (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Card Body */}
                  <div className="p-6">
                    {/* Quote Icon and Stars */}
                    <div className="flex justify-between items-start mb-4">
                      <Quote className="w-10 h-10 text-[#01bbde]/20 flex-shrink-0" />
                      {/* Stars */}
                      <div className="flex gap-0.5">
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

                    {/* Testimonial Text */}
                    <div className="mb-4 min-h-[160px]">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {isExpanded ? testimonial.fullText : testimonial.shortText}
                      </p>
                      <button
                        onClick={() => toggleExpand(testimonial.id)}
                        className="text-[#01bbde] text-sm font-bold mt-3 hover:underline transition-all inline-block"
                      >
                        {isExpanded ? "Daralt" : "Devamı"}
                      </button>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-4"></div>

                    {/* User Info */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#01bbde]/20 flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1">
                        <h3 className="font-bold text-[#01bbde] text-base mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-gray-600 mb-0.5">{testimonial.program}</p>
                        <p className="text-xs text-primary font-semibold line-clamp-1">
                          {testimonial.workplace}
                        </p>
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer with Hover Effect */}
                  <div className="h-1 bg-gradient-to-r from-[#01bbde] to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentPage
                    ? "bg-[#01bbde] w-10 h-3"
                    : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-[#01bbde] text-[#01bbde] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#01bbde] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
            TÜM REFERANSLARIMIZ
          </button>
        </div>
      </div>
    </section>
  );
}
