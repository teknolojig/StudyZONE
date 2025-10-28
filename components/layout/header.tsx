"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
        {
          category: "Ülkeler",
          items: [
            { label: "Almanya", href: "/yaz-okulu/almanya" },
            { label: "Amerika", href: "/yaz-okulu/amerika" },
            { label: "Fransa", href: "/yaz-okulu/fransa" },
            { label: "İngiltere", href: "/yaz-okulu/ingiltere" },
            { label: "İrlanda", href: "/yaz-okulu/irlanda" },
            { label: "İspanya", href: "/yaz-okulu/ispanya" },
            { label: "Kanada", href: "/yaz-okulu/kanada" },
            { label: "Malta", href: "/yaz-okulu/malta" },
          ]
        },
        {
          category: "Okullar",
          items: [
            { label: "EC English", href: "/yaz-okulu/ec-english" },
            { label: "Emerald Cultural Institute", href: "/yaz-okulu/emerald" },
            { label: "ILAC", href: "/yaz-okulu/ilac" },
            { label: "Kaplan International", href: "/yaz-okulu/kaplan" },
            { label: "Kings Education", href: "/yaz-okulu/kings" },
            { label: "St Giles", href: "/yaz-okulu/st-giles" },
            { label: "Stafford House", href: "/yaz-okulu/stafford-house" },
            { label: "TÜM OKULLAR", href: "/yaz-okulu/okullar", variant: "style1" },
          ]
        },
        {
          category: "Programlar",
          items: [
            { label: "Genel Yaz Okulu", href: "/yaz-okulu/genel" },
            { label: "Akademik Yaz Okulu", href: "/yaz-okulu/akademik" },
            { label: "Spor Yaz Okulu", href: "/yaz-okulu/spor" },
            { label: "Sanat Yaz Okulu", href: "/yaz-okulu/sanat" },
          ]
        },
        {
          category: "Yaz Okulu Hakkında",
          items: [
            { label: "Değerli Velilere Mektup", href: "/yaz-okulu/velilere-mektup" },
            { label: "Neden StudyZONE ?", href: "/yaz-okulu/neden-studyzone" },
            { label: "Ücretsiz Hizmetlerimiz", href: "/yaz-okulu/hizmetlerimiz" },
            { label: "Yaz Okulu Programı Nedir ?", href: "/yaz-okulu/program-nedir" },
            { label: "Neden Mutlaka Katılmalısınız ?", href: "/yaz-okulu/neden-katilmali" },
            { label: "Sıkça Sorulan Sorular", href: "/yaz-okulu/sss" },
            { label: "11 Adımda Yurtdışında Yaz Okulu", href: "/yaz-okulu/11-adim" },
            { label: "Erken Kayıt Neden Çok Önemli ?", href: "/yaz-okulu/erken-kayit" },
          ]
        },
        {
          category: "YAZ OKULLARINI FİLTRELEYİN",
          type: "promo"
        }
      ],
    },
    {
      label: "ÜNİVERSİTE",
      href: "/universite",
      submenu: [
        {
          category: "Ülkeler",
          items: [
            { label: "Almanya", href: "/universite/almanya" },
            { label: "Amerika", href: "/universite/amerika" },
            { label: "Avustralya", href: "/universite/avustralya" },
            { label: "Çekya", href: "/universite/cekya" },
            { label: "İngiltere", href: "/universite/ingiltere" },
            { label: "Kanada", href: "/universite/kanada" },
            { label: "Macaristan", href: "/universite/macaristan" },
            { label: "Polonya", href: "/universite/polonya" },
          ]
        },
        {
          category: "Üniversite Hakkında",
          items: [
            { label: "Değerli Velilere Mektup", href: "/universite/velilere-mektup" },
            { label: "Yurtdışı – Türkiye Karşılaştırması", href: "/universite/karsilastirma" },
            { label: "Ülke Maliyet Karşılaştırması", href: "/universite/maliyet-karsilastirma" },
            { label: "Neden StudyZONE ?", href: "/universite/neden-studyzone" },
            { label: "Hizmetlerimiz", href: "/universite/hizmetlerimiz" },
            { label: "Referanslarımız", href: "/universite/referanslar" },
            { label: "8 Adımda Yurtdışında Üniversite", href: "/universite/8-adim" },
            { label: "YÖK Denklik Yönetmeliği", href: "/universite/yok-denklik" },
            { label: "Sıkça Sorulan Sorular", href: "/universite/sss" },
          ]
        }
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
          ? "top-4"
          : "top-10"
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "transition-all duration-500 ease-in-out rounded-2xl",
            isScrolled
              ? "max-w-5xl mx-auto bg-white shadow-xl px-6 py-2 border border-gray-200"
              : "bg-transparent px-0 py-0"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              isScrolled ? "h-14" : "h-20"
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
                  isScrolled ? "h-9" : "h-12"
                )}
                priority
              />
            </Link>

          {/* Search Box - Shows when search is open */}
          {isSearchOpen ? (
            <div className={cn(
              "flex-1 flex items-center gap-3 animate-in fade-in duration-200 rounded-2xl transition-all",
              isScrolled ? "ml-6 px-0" : "ml-8 px-6 py-3 bg-white shadow-lg"
            )}>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Program, ülke veya okul arayın..."
                  className={cn(
                    "w-full border-2 border-gray-200 rounded-full focus:border-primary focus:outline-none transition-all",
                    isScrolled ? "pl-4 pr-12 py-2.5 text-sm" : "pl-6 pr-14 py-3.5 text-base"
                  )}
                  autoFocus
                />
                <button
                  className={cn(
                    "absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white rounded-full transition-all",
                    isScrolled ? "p-2" : "p-2.5"
                  )}
                >
                  <Search className={cn(isScrolled ? "w-4 h-4" : "w-5 h-5")} />
                </button>
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className={cn(
                  "text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 flex-shrink-0",
                  isScrolled ? "p-1.5" : "p-2"
                )}
              >
                <X className={cn(isScrolled ? "w-5 h-5" : "w-6 h-6")} />
              </button>
            </div>
          ) : (
            /* Desktop Navigation */
            <nav className={cn(
              "hidden lg:flex items-center transition-all duration-500",
              isScrolled ? "gap-3" : "gap-6"
            )}>
            {menuItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => {
                  setActiveDropdown(item.label);
                  setIsSearchOpen(false);
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 font-semibold transition-all duration-500 rounded-lg relative whitespace-nowrap",
                    isScrolled
                      ? "text-xs py-1.5 px-2.5 text-gray-700 hover:bg-primary/20 hover:text-primary"
                      : "text-sm py-2 px-3 text-white hover:bg-primary/30 hover:text-white drop-shadow-lg",
                    isActive(item.href) && (isScrolled ? "bg-primary/20 text-primary" : "bg-primary/30 text-white")
                  )}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className={cn(
                    "transition-all duration-500 group-hover:rotate-180 flex-shrink-0",
                    isScrolled ? "w-3 h-3" : "w-4 h-4"
                  )} />}
                </Link>

                {/* Mega Menu for DİL OKULU, YAZ OKULU */}
                {(item.label === "DİL OKULU" || item.label === "YAZ OKULU") && item.submenu && activeDropdown === item.label && (
                  <>
                    {/* Invisible hover bridge */}
                    <div
                      className="absolute left-0 right-0 h-4 z-40"
                      style={{ top: '100%' }}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                    />

                    <div
                      className="fixed left-0 right-0 z-50"
                      style={{ top: isScrolled ? '92px' : '120px' }}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="container mx-auto px-4">
                        <div className={cn(
                          "transition-all duration-500 ease-in-out rounded-2xl",
                          isScrolled
                            ? "max-w-5xl mx-auto bg-white shadow-xl px-6 py-2 border border-gray-200"
                            : "bg-white shadow-xl px-0 py-0 border border-gray-200"
                        )}>
                        <div className={cn(
                          "grid gap-0",
                          item.label === "YAZ OKULU" ? "grid-cols-5" : "grid-cols-5"
                        )}>
                      {item.submenu.map((section: any, idx: number) => (
                        <div
                          key={`${item.label}-${section.category}-${idx}`}
                          className={cn(
                            "border-r border-gray-100 last:border-r-0 transition-all duration-500",
                            isScrolled ? "p-3" : "p-5",
                            section.type === "promo" ? "bg-gradient-to-br from-primary/5 to-secondary/5" : idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                          )}
                        >
                          <h3 className={cn(
                            "font-bold text-gray-500 uppercase tracking-wider pb-2 border-b border-primary/20 transition-all duration-500",
                            isScrolled ? "text-[9px] mb-2" : "text-[10px] mb-3"
                          )}>
                            {section.category}
                          </h3>

                          {/* Promo Section */}
                          {section.type === "promo" ? (
                            <div className={cn("transition-all duration-500", isScrolled ? "space-y-2" : "space-y-3")}>
                              <Link
                                href={
                                  item.label === "DİL OKULU" ? "/dil-okulu/kampanyalar" :
                                  item.label === "YAZ OKULU" ? "/yaz-okulu/filtrele" :
                                  "/universite/kampanyalar"
                                }
                                className="block"
                              >
                                <div className={cn(
                                  "relative bg-gradient-to-br from-primary to-secondary rounded-lg overflow-hidden group cursor-pointer transition-all duration-500",
                                  item.label === "YAZ OKULU"
                                    ? (isScrolled ? "h-40" : "h-48")
                                    : (isScrolled ? "h-24" : "h-32")
                                )}>
                                  <div className="absolute inset-0 bg-black/20"></div>
                                  {item.label !== "YAZ OKULU" && (
                                    <div className="absolute top-2 right-2">
                                      <span className="bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold animate-pulse">
                                        HOT
                                      </span>
                                    </div>
                                  )}
                                  <div className="relative z-10 p-3 h-full flex flex-col justify-center items-center text-white text-center">
                                    {item.label === "DİL OKULU" && (
                                      <>
                                        <div className="text-2xl mb-1">🎯</div>
                                        <h4 className="font-bold text-xs mb-1">Kış Dönemi</h4>
                                        <p className="text-[10px] font-semibold mb-1">%25'e Varan İndirim</p>
                                        <p className="text-[9px] opacity-90">Malta & İngiltere</p>
                                      </>
                                    )}
                                    {item.label === "YAZ OKULU" && (
                                      <>
                                        <div className="text-3xl mb-2">🔍</div>
                                        <h4 className="font-bold text-sm mb-2">Yüzlerce okul ve program arasında kaybolmayın, size en uygun yaz okullarını hemen bulun !</h4>
                                        <div className="bg-white text-primary px-4 py-2 rounded-full text-xs font-bold">
                                          YAZ OKULLARINI FİLTRELE
                                        </div>
                                      </>
                                    )}
                                  </div>
                                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all"></div>
                                </div>
                              </Link>

                              {item.label === "DİL OKULU" && (
                                <>
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
                                </>
                              )}
                            </div>
                          ) : (
                            /* Regular menu items */
                            <ul className={cn("transition-all duration-500", isScrolled ? "space-y-1" : "space-y-1.5")}>
                              {section.items?.map((subitem: any, subIdx: number) => (
                                <li key={`${item.label}-${section.category}-${subitem.href}-${subIdx}`}>
                                  <Link
                                    href={subitem.href}
                                    className={cn(
                                      "block rounded-lg transition-all duration-500",
                                      isScrolled ? "px-2 py-1 text-[10px]" : "px-2.5 py-1.5 text-[11px]",
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
                      </div>
                    </div>
                  </>
                )}

                {/* ÜNİVERSİTE Dropdown - 2 Column Grid */}
                {item.label === "ÜNİVERSİTE" && item.submenu && activeDropdown === item.label && (
                  <>
                    {/* Invisible hover bridge */}
                    <div
                      className="absolute left-0 right-0 h-4 z-40"
                      style={{ top: '100%' }}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                    />

                    <div
                      className="absolute top-full left-0 mt-0 pt-2 bg-white shadow-xl rounded-xl py-5 px-5 min-w-[550px] animate-in fade-in slide-in-from-top-2 duration-200 border border-gray-100"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                    <div className="grid grid-cols-2 gap-0">
                      {item.submenu.map((section: any, idx: number) => (
                        <div key={`universite-${section.category}-${idx}`} className={cn(
                          "border-r border-gray-100 last:border-r-0 p-5",
                          idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                        )}>
                          <h3 className="font-bold text-gray-500 uppercase tracking-wider text-[10px] mb-3 pb-2 border-b border-primary/20">
                            {section.category}
                          </h3>
                          <ul className="space-y-1.5">
                            {section.items?.map((subitem: any, subIdx: number) => (
                              <li key={`universite-${section.category}-${subitem.href}-${subIdx}`}>
                                <Link
                                  href={subitem.href}
                                  className={cn(
                                    "block rounded-lg transition-all",
                                    "px-2.5 py-1.5 text-[11px]",
                                    isActive(subitem.href)
                                      ? "bg-primary/25 text-primary font-semibold border-l-3 border-primary"
                                      : "text-gray-700 hover:bg-primary/20 hover:text-primary hover:translate-x-1"
                                  )}
                                >
                                  {subitem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  </>
                )}

                {/* Regular Dropdown for other menus (not DİL OKULU, YAZ OKULU, ÜNİVERSİTE) */}
                {item.label !== "DİL OKULU" && item.label !== "YAZ OKULU" && item.label !== "ÜNİVERSİTE" && item.submenu && activeDropdown === item.label && (
                  <div
                    className="absolute top-full right-0 mt-0 pt-2 bg-white shadow-xl rounded-xl py-3 min-w-[220px] animate-in fade-in slide-in-from-top-2 duration-200 border border-gray-100"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.submenu.map((subitem: any, subIdx: number) => (
                      <Link
                        key={`${item.label}-dropdown-${subitem.href}-${subIdx}`}
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
          )}

          {/* Right Side Actions */}
          {!isSearchOpen && (
            <div className="hidden lg:flex items-center gap-2">
              {/* Search Icon */}
              <button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  setActiveDropdown(null);
                }}
                className={cn(
                  "rounded-full transition-all duration-500 relative",
                  isScrolled ? "p-1.5 hover:bg-primary/10" : "p-2 hover:bg-white/20"
                )}
              >
                <Search
                  className={cn(
                    "transition-all duration-500",
                    isScrolled ? "w-4 h-4 text-gray-600 hover:text-primary" : "w-5 h-5 text-white drop-shadow-lg"
                  )}
                />
              </button>

            </div>
          )}

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
                      {item.submenu.map((subitem, idx) => {
                        // Handle DİL OKULU submenu structure (sections with items)
                        if ('items' in subitem && Array.isArray(subitem.items)) {
                          return (
                            <div key={`section-${idx}`} className="mb-3">
                              <div className="text-xs font-bold text-gray-500 uppercase mb-1 px-2">
                                {subitem.category}
                              </div>
                              {subitem.items.map((linkItem, linkIdx) => (
                                <Link
                                  key={`mobile-${idx}-${linkIdx}-${linkItem.href}`}
                                  href={linkItem.href}
                                  className={cn(
                                    "block px-2 py-2 text-sm transition-colors",
                                    isActive(linkItem.href) ? "text-primary font-semibold" : "text-gray-600 hover:text-primary"
                                  )}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {linkItem.label}
                                </Link>
                              ))}
                            </div>
                          );
                        }
                        // Handle simple submenu structure (direct links)
                        if ('href' in subitem) {
                          return (
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
                          );
                        }
                        // Handle promo type sections
                        return null;
                      })}
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
