"use client";

import { useState } from "react";
import Image from "next/image";
import { WorkTravelForm } from "@/components/forms/work-travel-form";
import { WhyStudyZoneV3 } from "@/components/home/why-studyzone-v3";
import { StatsCounter } from "@/components/home/stats-counter";
import { TestimonialsCarousel } from "@/components/work-travel/testimonials-carousel";
import { Accreditations } from "@/components/work-travel/accreditations";
import { DraggableCardContainer, DraggableCardBody } from "@/components/ui/draggable-card";
import { CallNowModal } from "@/components/forms/call-now-modal";
import { CheckCircle2 } from "lucide-react";

export default function WorkTravelPage() {
  const [isCallNowModalOpen, setIsCallNowModalOpen] = useState(false);

  const handleCallNowClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only prevent default and show modal on desktop
    if (window.innerWidth >= 1024) {
      e.preventDefault();
      setIsCallNowModalOpen(true);
    }
    // On mobile, let the link work normally
  };
  const reasons = [
    "2-4 ay Amerika'da çalışma fırsatı",
    "1 ay seyahat izni ile ABD'yi keşfet",
    "İngilizce pratiği ve dil gelişimi",
    "Uluslararası iş deneyimi kazan",
    "CV'ne değer kat",
    "Farklı kültürlerden insanlarla tanış",
    "Bağımsızlık ve özgüven kazan",
    "Yeni arkadaşlıklar kur",
    "Amerika'yı keşfet ve deneyimle",
    "Çalışarak para kazan ve seyahat et"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/workandtravel/work-and-travel.webp"
            alt="Work & Travel 2026"
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-2xl whitespace-nowrap">
              WORK & TRAVEL 2026
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary drop-shadow-xl">
              Kayıtları Başladı!
            </h2>

            {/* Description */}
            <div className="space-y-3 text-base md:text-xl lg:text-2xl mb-6 drop-shadow-lg">
              <p className="font-semibold">
                Amerika seni bekliyor!
              </p>
              <p>
                2025 kontenjanları doldu, şimdi 2026 yazı için harekete geç. Çalış, gez, kazan!
              </p>
            </div>

            {/* Call to Action */}
            <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-base md:text-lg shadow-2xl animate-pulse">
              <span>🎯</span>
              <span>Erken kayıt fırsatlarını kaçırma!</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content - 2 Column Layout */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Why Join */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                WORK AND TRAVEL PROGRAMINA<br/>
                NEDEN KATILMALISINIZ?
              </h2>

              <p className="text-gray-700 text-base mb-6 leading-relaxed">
                Work and Travel her üniversite öğrencisinin en az bir kez yaşaması gereken eşsiz fırsatlarla dolu, unutulmayacak bir deneyimdir!
              </p>

              <div className="space-y-2 mb-6">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-24">
              <WorkTravelForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why StudyZONE Section */}
      <WhyStudyZoneV3 />

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* CIEE Sponsor Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/workandtravel/sponsorbg.jpg"
            alt="CIEE Sponsorlar"
            fill
            className="object-cover object-center"
            quality={95}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Left - CIEE Logo (1/3) */}
            <div className="flex justify-center md:justify-end">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl inline-block">
                <Image
                  src="/workandtravel/ciee.png"
                  alt="CIEE Logo"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right - Text Content (2/3) */}
            <div className="md:col-span-2 text-white">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                EN GÜÇLÜ SPONSORLARIN AYRICALIĞI İLE KATILIN !
              </h2>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                CIEE, 60 yıllık tecrübesi ve çok güçlü teknik altyapısı ile sponsorluk yapma yetkisi olan en köklü, en büyük ve en güçlü kuruluştur.
              </p>
              <a
                href="#form"
                className="inline-block bg-white text-gray-900 font-bold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-sm"
              >
                SPONSORLAR HAKKINDA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Early Registration Section */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Left - Text Content (2/3) */}
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ERKEN KAYIT AVANTAJLARINI KAÇIRMAYIN
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Work and Travel'a erken kayıt olun, hem 100 USD indirimden faydalanın hem de en iyi işlere yerleştirilme imkanından ve diğer tüm avantajlardan faydalanın!
              </p>
              <a
                href="#form"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-bold px-6 py-2.5 rounded-lg transition-colors shadow-lg text-sm"
              >
                ERKEN KAYIT AVANTAJLARI
              </a>
            </div>

            {/* Right - Draggable Cards (1/3) */}
            <div className="flex justify-center w-full">
              <DraggableCardContainer className="h-[380px] w-full max-w-[320px] md:max-w-md mx-auto">
                {/* Card 1 - Image: 1.png */}
                <DraggableCardBody
                  className="absolute left-1/2 -translate-x-[130px] top-0"
                  rotate="-10deg"
                >
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden w-52 border-8 border-white">
                    <div className="relative h-64">
                      <Image
                        src="/workandtravel/1.png"
                        alt="Erken Kayıt Avantajı 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </DraggableCardBody>

                {/* Card 2 - Icon: 100 USD İndirim */}
                <DraggableCardBody
                  className="absolute left-1/2 -translate-x-[98px] top-6"
                  rotate="6deg"
                >
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden w-52 border-8 border-white">
                    <div className="relative h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="font-bold text-lg">100 USD İndirim</p>
                        <p className="text-sm mt-2 px-4">Erken Kayıt İndirimi</p>
                      </div>
                    </div>
                  </div>
                </DraggableCardBody>

                {/* Card 3 - Image: 2.jpg */}
                <DraggableCardBody
                  className="absolute left-1/2 -translate-x-[66px] top-12"
                  rotate="-3deg"
                >
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden w-52 border-8 border-white">
                    <div className="relative h-64">
                      <Image
                        src="/workandtravel/2.jpg"
                        alt="Erken Kayıt Avantajı 2"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </DraggableCardBody>

                {/* Card 4 - Icon: En İyi İşler */}
                <DraggableCardBody
                  className="absolute left-1/2 -translate-x-[34px] top-18"
                  rotate="8deg"
                >
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden w-52 border-8 border-white">
                    <div className="relative h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="font-bold text-lg">En İyi İşler</p>
                        <p className="text-sm mt-2 px-4">Öncelikli Yerleştirme</p>
                      </div>
                    </div>
                  </div>
                </DraggableCardBody>

                {/* Card 5 - Image: 3.jpg */}
                <DraggableCardBody
                  className="absolute left-1/2 -translate-x-[2px] top-24"
                  rotate="-5deg"
                >
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden w-52 border-8 border-white">
                    <div className="relative h-64">
                      <Image
                        src="/workandtravel/3.jpg"
                        alt="Erken Kayıt Avantajı 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </DraggableCardBody>

                {/* Card 6 - Icon: İş Garantisi */}
                <DraggableCardBody
                  className="absolute left-1/2 translate-x-[30px] top-30"
                  rotate="3deg"
                >
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden w-52 border-8 border-white">
                    <div className="relative h-64 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="font-bold text-lg">Garanti</p>
                        <p className="text-sm mt-2 px-4">İş Garantisi</p>
                      </div>
                    </div>
                  </div>
                </DraggableCardBody>
              </DraggableCardContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Jobs Section */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden py-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/workandtravel/isler.jpg"
            alt="Popüler İşler"
            fill
            className="object-cover object-center"
            quality={95}
          />
          {/* Turquoise overlay */}
          <div className="absolute inset-0 bg-[#01bbde]/70"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            POPÜLER VE GENİŞ İŞ YELPAZESİ
          </h2>
          <p className="text-lg md:text-xl text-white">
            Size ve kriterlerinize en uygun işe yerleştirme garantisi
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* Customer Satisfaction Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/workandtravel/musterimemnuniyetibg.jpg"
            alt="Müşteri Memnuniyeti"
            fill
            className="object-cover object-center"
            quality={95}
          />
        </div>

        {/* Secondary color overlay */}
        <div className="absolute inset-0 bg-secondary/80 z-0"></div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            SİZİN MUTLULUĞUNUZ, BİZİM MUTLULUĞUMUZDUR
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
            Müşteri memnuniyeti konusunda hassasiyet, en önemli prensibimizdir.
          </p>
          <a
            href="#form"
            className="inline-block bg-white text-secondary font-bold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-sm"
          >
            MÜŞTERİ MEMNUNİYETİ ANLAYIŞIMIZ
          </a>
        </div>
      </section>

      {/* Accreditations Section */}
      <Accreditations />

      {/* Call to Action Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-r from-green-500 via-green-600 to-emerald-700 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-full bg-white blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-full bg-white blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
            {/* Left Side: Icon + Text */}
            <div className="flex items-center gap-4 md:gap-6 text-center md:text-left">
              <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-14 md:w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  İlk adımı şimdi atın!
                </h2>
                <p className="text-sm md:text-base text-white/90">
                  Tecrübeli ve güler yüzlü danışmanlarımız, 2026 işleri ve kayıt işlemleriyle ilgili bilgi vermek için iletişime geçmenizi bekliyor.
                </p>
              </div>
            </div>

            {/* Right Side: CTA Button */}
            <div className="flex-shrink-0">
              <a
                href="tel:+902129700070"
                onClick={handleCallNowClick}
                className="inline-flex items-center gap-3 bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                HEMEN ARAYIN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call Now Modal - Desktop only */}
      <CallNowModal
        isOpen={isCallNowModalOpen}
        onClose={() => setIsCallNowModalOpen(false)}
      />
    </>
  );
}
