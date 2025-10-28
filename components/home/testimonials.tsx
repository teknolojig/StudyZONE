"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const testimonials = [
    {
      name: "Esin Bayramoğlu",
      text: "Yurtdışında eğitim hayallerimi gerçekleştirdim. Her aşamasıyla harika bir deneyimdi",
      country: "İngiltere",
      program: "Dil Okulu",
    },
    {
      name: "Ahmet Yılmaz",
      text: "StudyZONE sayesinde Amerika'da çalışma ve seyahat deneyimi yaşadım. Kesinlikle tavsiye ediyorum!",
      country: "ABD",
      program: "Work & Travel",
    },
    {
      name: "Zeynep Kaya",
      text: "Üniversite başvuru sürecimde her adımda yanımda oldular. Profesyonel ve güvenilir bir ekip.",
      country: "Kanada",
      program: "Üniversite",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Müşteri Yorumları
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Binlerce öğrencinin hayallerini gerçekleştirdik. İşte onlardan bazıları...
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 shadow-lg">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentIndex].program} • {testimonials[currentIndex].country}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prev}
                    className="rounded-full"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={next}
                    className="rounded-full"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
