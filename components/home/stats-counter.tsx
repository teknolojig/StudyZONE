"use client";

import { useEffect, useState, useRef } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  color: string;
}

export function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    {
      value: 28,
      suffix: "",
      label: "Yıllık Tecrübe",
      color: "from-cyan-500 to-teal-600"
    },
    {
      value: 31584,
      suffix: "",
      label: "Toplam Öğrenci",
      color: "from-cyan-500 to-teal-600"
    },
    {
      value: 366,
      suffix: "",
      label: "İşveren",
      color: "from-cyan-500 to-teal-600"
    },
    {
      value: 97,
      suffix: "%",
      label: "Vize Başarısı",
      color: "from-cyan-500 to-teal-600"
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
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-gray-50 border-2 border-gray-100 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-100/50 hover:-translate-y-1">
                {/* Content */}
                <div className="text-center">
                  {/* Number */}
                  <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-3 bg-gradient-to-br from-cyan-500 to-teal-600 bg-clip-text text-transparent">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-gray-700 font-bold text-sm md:text-base tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
