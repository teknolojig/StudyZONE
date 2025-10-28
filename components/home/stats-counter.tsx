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
      color: "from-cyan-400 to-cyan-500"
    },
    {
      value: 31584,
      suffix: "",
      label: "Toplam Öğrenci",
      color: "from-cyan-400 to-cyan-500"
    },
    {
      value: 366,
      suffix: "",
      label: "İşveren",
      color: "from-cyan-400 to-cyan-500"
    },
    {
      value: 97,
      suffix: "%",
      label: "Vize Başarısı",
      color: "from-cyan-400 to-cyan-500"
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
      className="py-12 md:py-16 bg-white border-t border-b border-gray-200"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Number */}
              <div className={`text-4xl md:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="text-gray-700 font-semibold text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
