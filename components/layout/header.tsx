"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "DİL OKULU",
      href: "/dil-okulu",
      submenu: [
        {
          category: "Ülkeler",
          items: [
            { label: "Amerika", href: "/dil-okulu/amerika" },
            { label: "Avustralya", href: "/dil-okulu/avustralya" },
            { label: "İngiltere", href: "/dil-okulu/ingiltere" },
            { label: "İrlanda", href: "/dil-okulu/irlanda" },
            { label: "Kanada", href: "/dil-okulu/kanada" },
            { label: "Malta", href: "/dil-okulu/malta" },
          ]
        },
        {
          category: "Okullar",
          items: [
            { label: "EC English", href: "/dil-okulu/ec-english" },
            { label: "ELS", href: "/dil-okulu/els" },
            { label: "ESE", href: "/dil-okulu/ese" },
            { label: "ILAC", href: "/dil-okulu/ilac" },
            { label: "KAPLAN INTERNATIONAL", href: "/dil-okulu/kaplan" },
            { label: "Kings Colleges", href: "/dil-okulu/kings" },
            { label: "St Giles", href: "/dil-okulu/st-giles" },
            { label: "TÜM OKULLAR", href: "/dil-okulu/okullar", variant: "style1" },
          ]
        },
        {
          category: "Programlar",
          items: [
            { label: "Genel İngilizce", href: "/dil-okulu/genel-ingilizce" },
            { label: "Yoğun İngilizce", href: "/dil-okulu/yogun-ingilizce" },
            { label: "Akademik İngilizce", href: "/dil-okulu/akademik-ingilizce" },
            { label: "İş İngilizcesi", href: "/dil-okulu/is-ingilizcesi" },
            { label: "Hukuk İngilizcesi", href: "/dil-okulu/hukuk-ingilizcesi" },
            { label: "IELTS ve TOEFL Hazırlık", href: "/dil-okulu/ielts-toefl" },
          ]
        },
        {
          category: "Dil Okulu Hakkında",
          items: [
            { label: "Neden StudyZONE ?", href: "/dil-okulu/neden-studyzone" },
            { label: "Ücretsiz Hizmetlerimiz", href: "/dil-okulu/hizmetlerimiz" },
            { label: "2025 Fiyat Listesi", href: "/dil-okulu/fiyat-listesi" },
            { label: "Referanslarımız", href: "/dil-okulu/referanslar" },
            { label: "Sıkça Sorulan Sorular", href: "/dil-okulu/sss" },
            { label: "8 Adımda Yurtdışında Dil Okulu", href: "/dil-okulu/8-adim" },
          ]
        },
        {
          category: "Güncel Kampanyalar",
          type: "promo"
        }
      ],
    },
    {
      label: "YAZ OKULU",
      href: "/yaz-okulu",
      submenu: [
        { label: "Ülkeler", href: "/yaz-okulu/ulkeler" },
        { label: "Okullar", href: "/yaz-okulu/okullar" },
        { label: "Programlar", href: "/yaz-okulu/programlar" },
        { label: "Hakkında", href: "/yaz-okulu/hakkinda" },
      ],
    },
    {
      label: "ÜNİVERSİTE",
      href: "/universite",
      submenu: [
        { label: "Ülkeler", href: "/universite/ulkeler" },
        { label: "Hakkında", href: "/universite/hakkinda" },
      ],
    },
    {
      label: "MASTER",
      href: "/master",
    },
    {
      label: "SERTİFİKA VE DİPLOMA",
      href: "/sertifika-ve-diploma",
    },
    {
      label: "WORK & TRAVEL",
      href: "/work-travel",
    },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "top-0 bg-white shadow-lg"
          : "top-10 bg-transparent"
      )}
    >
      <div
        className={cn(
          "transition-all duration-500 ease-in-out",
          isScrolled ? "mx-4 rounded-none" : "mx-auto max-w-7xl rounded-2xl backdrop-blur-md bg-white/10"
        )}
      >
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              isScrolled ? "h-16" : "h-20"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center relative z-10">
              <Image
                src="/logo.png"
                alt="StudyZONE International"
                width={180}
                height={60}
                className={cn(
                  "w-auto transition-all duration-500",
                  isScrolled ? "h-10" : "h-12"
                )}
                priority
              />
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-semibold transition-all duration-300 py-2 px-3 rounded-lg relative",
                    isScrolled
                      ? "text-gray-700 hover:bg-primary/20 hover:text-primary"
                      : "text-white hover:bg-primary/30 hover:text-white drop-shadow-lg",
                    isActive(item.href) && (isScrolled ? "bg-primary/20 text-primary" : "bg-primary/30 text-white")
                  )}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />}
                </Link>

                {/* Dil Okulu Mega Menu */}
                {item.label === "DİL OKULU" && item.submenu && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-0 pt-2 bg-white shadow-2xl rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 border border-gray-100"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-5 gap-0 w-[1100px]">
                      {item.submenu.map((section: any, idx: number) => (
                        <div
                          key={section.category}
                          className={cn(
                            "p-5 border-r border-gray-100 last:border-r-0",
                            section.type === "promo" ? "bg-gradient-to-br from-primary/5 to-secondary/5" : idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                          )}
                        >
                          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 pb-2 border-b border-primary/20">
                            {section.category}
                          </h3>

                          {/* Güncel Kampanyalar Promo Section */}
                          {section.type === "promo" ? (
                            <div className="space-y-3">
                              <Link href="/dil-okulu/kampanyalar" className="block">
                                <div className="relative h-32 bg-gradient-to-br from-primary to-secondary rounded-lg overflow-hidden group cursor-pointer">
                                  <div className="absolute inset-0 bg-black/20"></div>
                                  <div className="absolute top-2 right-2">
                                    <span className="bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold animate-pulse">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="relative z-10 p-3 h-full flex flex-col justify-center items-center text-white text-center">
                                    <div className="text-2xl mb-1">🎯</div>
                                    <h4 className="font-bold text-xs mb-1">Kış Dönemi</h4>
                                    <p className="text-[10px] font-semibold mb-1">%25'e Varan İndirim</p>
                                    <p className="text-[9px] opacity-90">Malta & İngiltere</p>
                                  </div>
                                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all"></div>
                                </div>
                              </Link>

                              <div className="space-y-1.5">
                                <Link href="/dil-okulu/kampanyalar" className="block p-2 bg-white rounded-lg border border-primary/20 hover:border-primary hover:shadow-md transition-all group">
                                  <div className="flex items-center gap-2">
                                    <span className="text-lg">🇬🇧</span>
                                    <div className="flex-1">
                                      <p className="text-[10px] font-bold text-gray-900">EC English</p>
                                      <p className="text-[9px] text-primary">%20 İndirim</p>
                                    </div>
                                  </div>
                                </Link>

                                <Link href="/dil-okulu/kampanyalar" className="block p-2 bg-white rounded-lg border border-secondary/20 hover:border-secondary hover:shadow-md transition-all group">
                                  <div className="flex items-center gap-2">
                                    <span className="text-lg">🇲🇹</span>
                                    <div className="flex-1">
                                      <p className="text-[10px] font-bold text-gray-900">ESE Malta</p>
                                      <p className="text-[9px] text-secondary">2+1 Hafta</p>
                                    </div>
                                  </div>
                                </Link>
                              </div>

                              <Link href="/dil-okulu/kampanyalar" className="block w-full bg-gradient-to-r from-primary to-secondary text-white text-center py-2 rounded-lg font-bold text-[10px] hover:shadow-lg transition-all">
                                Tüm Kampanyalar →
                              </Link>
                            </div>
                          ) : (
                            /* Regular menu items */
                            <ul className="space-y-1.5">
                              {section.items?.map((subitem: any) => (
                                <li key={subitem.href}>
                                  <Link
                                    href={subitem.href}
                                    className={cn(
                                      "block px-2.5 py-1.5 rounded-lg text-[11px] transition-all duration-200",
                                      subitem.variant === "style1"
                                        ? "bg-primary text-white font-bold shadow-sm hover:shadow-md hover:scale-105"
                                        : subitem.variant === "style2"
                                        ? "border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white shadow-sm hover:scale-105"
                                        : isActive(subitem.href)
                                        ? "bg-primary/25 text-primary font-semibold border-l-3 border-primary"
                                        : "text-gray-700 hover:bg-primary/20 hover:text-primary hover:translate-x-1"
                                    )}
                                  >
                                    {subitem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular Dropdown for other menus */}
                {item.label !== "DİL OKULU" && item.submenu && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-0 pt-2 bg-white shadow-xl rounded-xl py-3 min-w-[220px] animate-in fade-in slide-in-from-top-2 duration-200 border border-gray-100"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.submenu.map((subitem: any) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className={cn(
                          "block px-4 py-2.5 text-sm transition-all duration-200 mx-2 rounded-lg",
                          isActive(subitem.href)
                            ? "bg-primary/25 text-primary font-semibold"
                            : "text-gray-700 hover:bg-primary/20 hover:text-primary hover:translate-x-1"
                        )}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search Icon */}
          <button
            className={cn(
              "hidden lg:block p-2 rounded-full transition-colors",
              isScrolled ? "hover:bg-primary/10" : "hover:bg-white/20"
            )}
          >
            <Search
              className={cn(
                "w-5 h-5 transition-colors",
                isScrolled ? "text-gray-600 hover:text-primary" : "text-white drop-shadow-lg"
              )}
            />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-gray-900" : "text-white drop-shadow-lg")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-gray-900" : "text-white drop-shadow-lg")} />
            )}
          </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-200 bg-white rounded-b-lg shadow-xl">
              {menuItems.map((item) => (
                <div key={item.href} className="py-2">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between px-2 py-2 font-semibold transition-colors",
                      isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary"
                    )}
                    onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className={cn(
                            "block px-2 py-2 text-sm transition-colors",
                            isActive(subitem.href) ? "text-primary font-semibold" : "text-gray-600 hover:text-primary"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
