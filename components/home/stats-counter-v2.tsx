"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

export function StatsCounterV2() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    {
      value: 28,
      suffix: "",
      label: "Yıllık Tecrübe",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
        </svg>
      )
    },
    {
      value: 31584,
      suffix: "",
      label: "Toplam Öğrenci",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      )
    },
    {
      value: 366,
      suffix: "",
      label: "İşveren",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
        </svg>
      )
    },
    {
      value: 97,
      suffix: "%",
      label: "Vize Başarısı",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span className="tabular-nums">
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[500px] flex items-center overflow-hidden py-16 md:py-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/workandtravel/sponsorbg.jpg"
          alt="İstatistikler"
          fill
          className="object-cover object-center"
          quality={60}
          sizes="100vw"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95"></div>
      </div>

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 10px)`,
        }}></div>
      </div>

      {/* Floating Light Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-xl">
            RAKAMLARA GÜVEN
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            28 yıllık tecrübemiz ve binlerce mutlu öğrencimizle yanınızdayız
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glass Card Effect */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">

                {/* Icon Container */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500 group-hover:rotate-6">
                    {stat.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  {/* Number - Large and Bold */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-white/90 font-bold text-xs md:text-sm tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/30 rounded-tr-lg group-hover:border-white/60 transition-colors duration-300"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/30 rounded-bl-lg group-hover:border-white/60 transition-colors duration-300"></div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="h-0.5 w-20 bg-white/30 rounded-full"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="h-0.5 w-20 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
