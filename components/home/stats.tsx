"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Award, Building, Users } from "lucide-react";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return { count, ref };
}

export function Stats() {
  const stats = [
    {
      icon: Calendar,
      value: 28,
      suffix: " Yıl",
      label: "Tecrübe",
      color: "text-primary",
    },
    {
      icon: Award,
      value: 100,
      prefix: "%",
      label: "Müşteri Memnuniyeti",
      color: "text-secondary",
    },
    {
      icon: Building,
      value: 300,
      suffix: "+",
      label: "Resmi Temsilcilik",
      color: "text-primary",
    },
    {
      icon: Users,
      value: 31584,
      label: "Toplam Öğrenci",
      color: "text-secondary",
      separator: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-secondary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Rakamlarla StudyZONE
          </h2>
          <p className="text-lg opacity-90">
            Başarılarımız sizin güveninizle büyüyor
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <StatCard key={index} stat={stat} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, Icon }: { stat: any; Icon: any }) {
  const { count, ref } = useCountUp(stat.value);

  const formatNumber = (num: number) => {
    if (stat.separator) {
      return num.toLocaleString('tr-TR');
    }
    return num.toString();
  };

  return (
    <div
      ref={ref}
      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
          <Icon className="w-8 h-8" />
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          {stat.prefix}
          {formatNumber(count)}
          {stat.suffix}
        </div>
        <div className="text-sm md:text-base opacity-90 font-medium">
          {stat.label}
        </div>
      </div>
    </div>
  );
}
