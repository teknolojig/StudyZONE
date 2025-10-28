"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Tag, TrendingUp } from "lucide-react";

interface Campaign {
  id: number;
  title: string;
  school: string;
  country: string;
  discount: string;
  image: string;
  validUntil: string;
  tag?: string;
}

export function LanguageSchoolCampaigns() {
  const [activeIndex, setActiveIndex] = useState(0);

  const campaigns: Campaign[] = [
    {
      id: 1,
      title: "İngiltere Kış Kampanyası",
      school: "EC English",
      country: "İngiltere",
      discount: "%25 İndirim",
      image: "/campaigns/uk-winter.jpg",
      validUntil: "31 Ocak 2025",
      tag: "SON GÜNLER"
    },
    {
      id: 2,
      title: "Malta Özel Fırsatı",
      school: "ESE Malta",
      country: "Malta",
      discount: "2 Hafta Al, 1 Hafta Hediye",
      image: "/campaigns/malta-special.jpg",
      validUntil: "15 Şubat 2025",
      tag: "POPÜLER"
    },
    {
      id: 3,
      title: "Amerika Yaz Dönemi",
      school: "KAPLAN",
      country: "Amerika",
      discount: "%20 İndirim",
      image: "/campaigns/usa-summer.jpg",
      validUntil: "28 Şubat 2025",
      tag: "YENİ"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % campaigns.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [campaigns.length]);

  const activeCampaign = campaigns[activeIndex];

  return (
    <div className="bg-gradient-to-br from-white via-primary/5 to-secondary/5 rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Güncel Yurtdışı Dil Okulu Kampanyaları
          </h3>
          <Link
            href="/dil-okulu/kampanyalar"
            className="text-sm font-semibold hover:text-white/80 transition-colors flex items-center gap-1 group"
          >
            Tümü
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Campaign Card */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured Campaign - Large Card */}
          <div className="md:col-span-2 relative group">
            <div className="relative h-64 rounded-xl overflow-hidden">
              {/* Placeholder gradient for missing images */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10"></div>

              {/* Campaign Tag */}
              {activeCampaign.tag && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                    {activeCampaign.tag}
                  </span>
                </div>
              )}

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-white rounded-xl px-4 py-2 shadow-lg">
                  <p className="text-primary font-black text-lg">{activeCampaign.discount}</p>
                </div>
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="transform transition-transform group-hover:translate-y-[-4px]">
                  <p className="text-primary font-semibold text-sm mb-2 flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    {activeCampaign.country} • {activeCampaign.school}
                  </p>
                  <h4 className="text-white text-2xl font-bold mb-3">
                    {activeCampaign.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-white/90 text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Son Başvuru: {activeCampaign.validUntil}
                    </p>
                    <Link
                      href="/dil-okulu/kampanyalar"
                      className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow-lg"
                    >
                      Detaylı Bilgi
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {campaigns.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to campaign ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Campaign List - Right Side */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4 pb-2 border-b border-gray-200">
              Diğer Kampanyalar
            </h4>
            {campaigns.map((campaign, index) => (
              <Link
                key={campaign.id}
                href="/dil-okulu/kampanyalar"
                onClick={() => setActiveIndex(index)}
                className={`block p-4 rounded-xl transition-all duration-300 border ${
                  index === activeIndex
                    ? "bg-primary/10 border-primary shadow-md"
                    : "bg-white border-gray-200 hover:border-primary/50 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-xs text-primary font-semibold mb-1">
                      {campaign.country}
                    </p>
                    <h5 className="text-sm font-bold text-gray-900 mb-1">
                      {campaign.school}
                    </h5>
                    <p className="text-xs text-gray-600">
                      {campaign.discount}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-colors ${
                    index === activeIndex ? "text-primary" : "text-gray-400"
                  }`} />
                </div>
              </Link>
            ))}

            {/* View All Button */}
            <Link
              href="/dil-okulu/kampanyalar"
              className="block w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-center py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg"
            >
              Tüm Kampanyaları Görüntüle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
