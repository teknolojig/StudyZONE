"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/workandtravel/hero-bg.jpg"
          alt="Work & Travel 2026"
          fill
          className="object-cover"
          priority
          quality={65}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            WORK & TRAVEL 2026
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Kayıtları Başladı!
          </h2>
          <div className="space-y-4 mb-8">
            <p className="text-xl md:text-2xl font-semibold">
              Amerika seni bekliyor!
            </p>
            <p className="text-lg md:text-xl">
              2025 kontenjanları doldu, şimdi 2026 yazı için harekete geç. Çalış, gez, kazan!
            </p>
            <p className="text-lg md:text-xl flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-primary" />
              <span className="text-yellow-400 font-bold">
                Erken kayıt fırsatlarını kaçırma!
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6"
            >
              BİLGİ FORMU
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white font-bold text-lg px-8 py-6"
            >
              BİZ SİZİ ARAYALIM
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
