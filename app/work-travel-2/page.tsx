"use client";

import { useState } from "react";
import Image from "next/image";
import { WorkTravelForm } from "@/components/forms/work-travel-form";
import { WhyStudyZoneV4 } from "@/components/home/why-studyzone-v4";
import { StatsCounterV2 } from "@/components/home/stats-counter-v2";
import { TestimonialsCarouselV2 } from "@/components/work-travel/testimonials-carousel-v2";
import { AccreditationsV2 } from "@/components/work-travel/accreditations-v2";
import { DraggableCardContainer, DraggableCardBody } from "@/components/ui/draggable-card";
import { CallNowModal } from "@/components/forms/call-now-modal";
import { InfoFormModal } from "@/components/forms/info-form-modal";
import { CheckCircle2 } from "lucide-react";

export default function WorkTravelPage() {
  const [isCallNowModalOpen, setIsCallNowModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleCallNowClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only prevent default and show modal on desktop
    if (window.innerWidth >= 1024) {
      e.preventDefault();
      setIsCallNowModalOpen(true);
    }
    // On mobile, let the link work normally
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Work and Travel USA 2026',
    description: 'Work and Travel USA programı ile Amerika\'da çalış, gez, para kazan',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'StudyZONE International',
      url: 'https://studyzone.com.tr',
    },
    areaServed: 'TR',
    serviceType: 'Work and Travel Program',
    offers: {
      '@type': 'Offer',
      description: 'Work and Travel USA 2026 programı',
      priceCurrency: 'USD',
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section - Modern & Fun Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary/80">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Vector Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-1/4 left-10 w-16 h-16 text-white/20 animate-float" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
          <svg className="absolute top-1/3 right-20 w-14 h-14 text-white/20 animate-float animation-delay-1000" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <svg className="absolute bottom-1/4 left-1/4 w-14 h-14 text-white/20 animate-float animation-delay-2000" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
          </svg>
          <svg className="absolute bottom-1/3 right-1/4 w-16 h-16 text-white/20 animate-float animation-delay-3000" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          <svg className="absolute top-1/2 right-10 w-12 h-12 text-white/20 animate-float animation-delay-4000" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <svg className="absolute bottom-20 left-1/3 w-14 h-14 text-white/20 animate-float animation-delay-5000" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
          </svg>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30 animate-bounce-slow">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
              </svg>
              <span className="text-white font-bold text-sm md:text-base">2025 Kontenjanları Doldu!</span>
            </div>

            {/* Main Title - Single Line */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-white drop-shadow-2xl">WORK & TRAVEL 2026</span>
              </h1>
            </div>

            {/* Subtitle with Animation */}
            <div className="relative inline-block mb-10">
              <div className="absolute inset-0 bg-primary blur-xl opacity-50 animate-pulse"></div>
              <h2 className="relative text-3xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-xl">
                Kayıtları Başladı!
              </h2>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
              {/* Benefit 1 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <svg className="w-12 h-12 mx-auto mb-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
                <div className="text-white font-bold text-lg mb-2">100 USD İndirim</div>
                <div className="text-white/80 text-sm">Erken Kayıt Avantajı</div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <svg className="w-12 h-12 mx-auto mb-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                </svg>
                <div className="text-white font-bold text-lg mb-2">İş Garantisi</div>
                <div className="text-white/80 text-sm">En İyi İşler Sizin</div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <svg className="w-12 h-12 mx-auto mb-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <div className="text-white font-bold text-lg mb-2">Öncelikli Yerleştirme</div>
                <div className="text-white/80 text-sm">Erken Başvuru Avantajı</div>
              </div>
            </div>

            {/* CTA Buttons - Eye-Catching Design */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* BİLGİ AL Button - Pulsing White Button */}
              <button
                onClick={() => setIsFormModalOpen(true)}
                className="group relative px-10 py-5 bg-white text-primary font-black text-xl rounded-2xl shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-300 overflow-hidden animate-pulse hover:animate-none"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Ripple effect circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-primary/10 rounded-2xl scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                </div>

                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/>
                  </svg>
                  <span className="tracking-wide">BİLGİ AL</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-ping"></div>
                </span>
              </button>

              {/* HEMEN ARAYIN Button - Glowing Border Button */}
              <button
                onClick={() => setIsCallNowModalOpen(true)}
                className="group relative px-10 py-5 bg-gradient-to-r from-secondary/20 to-primary/20 backdrop-blur-md border-3 border-white text-white font-black text-xl rounded-2xl hover:from-secondary/30 hover:to-primary/30 transition-all duration-300 overflow-hidden hover:scale-110 shadow-2xl hover:shadow-white/30"
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Border glow animation */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.7)]"></div>

                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-7 h-7 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="tracking-wide">HEMEN ARAYIN</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Modern */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/60 text-sm font-medium">Keşfet</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
              <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll"></div>
            </div>
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

      {/* Stats Counter Section */}
      <StatsCounterV2 />

      {/* Why StudyZONE Section */}
      <WhyStudyZoneV4 />

      {/* CIEE Sponsor Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/workandtravel/sponsorbg.jpg"
            alt="CIEE Sponsorlar"
            fill
            className="object-cover object-center"
            quality={60}
            sizes="100vw"
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
                        quality={60}
                        sizes="(max-width: 768px) 208px, 208px"
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
                        quality={60}
                        sizes="(max-width: 768px) 208px, 208px"
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
                        quality={60}
                        sizes="(max-width: 768px) 208px, 208px"
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
            quality={60}
            sizes="100vw"
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
      <TestimonialsCarouselV2 />

      {/* Customer Satisfaction Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/workandtravel/musterimemnuniyetibg.jpg"
            alt="Müşteri Memnuniyeti"
            fill
            className="object-cover object-center"
            quality={60}
            sizes="100vw"
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
      <AccreditationsV2 />

      {/* Call to Action Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-r from-green-500 via-green-600 to-emerald-700 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-full bg-white blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-full bg-white blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 max-w-6xl mx-auto">
            {/* Left Side: Icon + Text */}
            <div className="flex items-start md:items-center gap-4 md:gap-6 text-left">
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
            <div className="flex-shrink-0 w-full md:w-auto">
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

      {/* Info Form Modal */}
      <InfoFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
      />

      {/* Call Now Modal - Desktop only */}
      <CallNowModal
        isOpen={isCallNowModalOpen}
        onClose={() => setIsCallNowModalOpen(false)}
      />
    </>
  );
}
