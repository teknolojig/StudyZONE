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
    // Check initial scroll position on mount
    setIsScrolled(window.scrollY > 50);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "Dil Okulu",
      href: "#",
      submenu: [
        {
          category: "Ülkeler",
          items: [
            { label: "Amerika", href: "#" },
            { label: "Avustralya", href: "#" },
            { label: "İngiltere", href: "#" },
            { label: "İrlanda", href: "#" },
            { label: "Kanada", href: "#" },
            { label: "Malta", href: "#" },
          ]
        },
        {
          category: "Okullar",
          items: [
            { label: "EC English", href: "#" },
            { label: "ELS", href: "#" },
            { label: "ESE", href: "#" },
            { label: "ILAC", href: "#" },
            { label: "KAPLAN INTERNATIONAL", href: "#" },
            { label: "Kings Colleges", href: "#" },
            { label: "St Giles", href: "#" },
            { label: "Tüm Okullar", href: "#", variant: "style1" },
          ]
        },
        {
          category: "Programlar",
          items: [
            { label: "Genel İngilizce", href: "#" },
            { label: "Yoğun İngilizce", href: "#" },
            { label: "Akademik İngilizce", href: "#" },
            { label: "İş İngilizcesi", href: "#" },
            { label: "Hukuk İngilizcesi", href: "#" },
            { label: "IELTS ve TOEFL Hazırlık", href: "#" },
          ]
        },
        {
          category: "Dil Okulu Hakkında",
          items: [
            { label: "Neden StudyZONE ?", href: "#" },
            { label: "Ücretsiz Hizmetlerimiz", href: "#" },
            { label: "2025 Fiyat Listesi", href: "#" },
            { label: "Referanslarımız", href: "#" },
            { label: "Sıkça Sorulan Sorular", href: "#" },
            { label: "8 Adımda Yurtdışında Dil Okulu", href: "#" },
          ]
        },
        {
          category: "Güncel Kampanyalar",
          type: "promo"
        }
      ],
    },
    {
      label: "Yaz Okulu",
      href: "#",
      submenu: [
        {
          category: "Ülkeler",
          items: [
            { label: "Almanya", href: "#" },
            { label: "Amerika", href: "#" },
            { label: "Fransa", href: "#" },
            { label: "İngiltere", href: "#" },
            { label: "İrlanda", href: "#" },
            { label: "İspanya", href: "#" },
            { label: "Kanada", href: "#" },
            { label: "Malta", href: "#" },
          ]
        },
        {
          category: "Okullar",
          items: [
            { label: "EC English", href: "#" },
            { label: "Emerald Cultural Institute", href: "#" },
            { label: "ILAC", href: "#" },
            { label: "Kaplan International", href: "#" },
            { label: "Kings Education", href: "#" },
            { label: "St Giles", href: "#" },
            { label: "Stafford House", href: "#" },
            { label: "Tüm Okullar", href: "#", variant: "style1" },
          ]
        },
        {
          category: "Programlar",
          items: [
            { label: "Genel Yaz Okulu", href: "#" },
            { label: "Akademik Yaz Okulu", href: "#" },
            { label: "Spor Yaz Okulu", href: "#" },
            { label: "Sanat Yaz Okulu", href: "#" },
          ]
        },
        {
          category: "Yaz Okulu Hakkında",
          items: [
            { label: "Değerli Velilere Mektup", href: "#" },
            { label: "Neden StudyZONE ?", href: "#" },
            { label: "Ücretsiz Hizmetlerimiz", href: "#" },
            { label: "Yaz Okulu Programı Nedir ?", href: "#" },
            { label: "Neden Mutlaka Katılmalısınız ?", href: "#" },
            { label: "Sıkça Sorulan Sorular", href: "#" },
            { label: "11 Adımda Yurtdışında Yaz Okulu", href: "#" },
            { label: "Erken Kayıt Neden Çok Önemli ?", href: "#" },
          ]
        },
        {
          category: "YAZ OKULLARINI FİLTRELEYİN",
          type: "promo"
        }
      ],
    },
    {
      label: "Üniversite",
      href: "#",
      submenu: [
        {
          category: "Ülkeler",
          items: [
            { label: "Almanya", href: "#" },
            { label: "Amerika", href: "#" },
            { label: "Avustralya", href: "#" },
            { label: "Çekya", href: "#" },
            { label: "İngiltere", href: "#" },
            { label: "Kanada", href: "#" },
            { label: "Macaristan", href: "#" },
            { label: "Polonya", href: "#" },
          ]
        },
        {
          category: "Üniversite Hakkında",
          items: [
            { label: "Değerli Velilere Mektup", href: "#" },
            { label: "Yurtdışı – Türkiye Karşılaştırması", href: "#" },
            { label: "Ülke Maliyet Karşılaştırması", href: "#" },
            { label: "Neden StudyZONE ?", href: "#" },
            { label: "Hizmetlerimiz", href: "#" },
            { label: "Referanslarımız", href: "#" },
            { label: "8 Adımda Yurtdışında Üniversite", href: "#" },
            { label: "YÖK Denklik Yönetmeliği", href: "#" },
            { label: "Sıkça Sorulan Sorular", href: "#" },
          ]
        }
      ],
    },
    {
      label: "Master",
      href: "#",
    },
    {
      label: "Sertifika ve Diploma",
      href: "#",
    },
    {
      label: "Work & Travel",
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
          : "lg:top-10 top-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "transition-all duration-500 ease-in-out rounded-2xl",
            isScrolled
              ? "max-w-6xl mx-auto bg-white shadow-xl px-6 py-2 border border-gray-200"
              : "bg-transparent px-0 py-0"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              isScrolled ? "h-14" : "h-20"
            )}
          >
            {/* Mobile Menu Button - Left - Hide when search is open on mobile */}
            {!isSearchOpen && (
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
            )}

            {/* Logo - Always visible on desktop, center on mobile when not searching */}
            {!isSearchOpen && (
              <Link href="/" className={cn("flex items-center relative z-10 lg:static absolute left-1/2 lg:left-auto lg:translate-x-0 -translate-x-1/2")}>
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
            )}

            {/* Mobile Search Button - Right - Hide when search is open */}
            {!isSearchOpen && (
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setActiveDropdown(null);
                }}
                className={cn(
                  "lg:hidden p-2 rounded-md transition-colors",
                  isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"
                )}
                aria-label="Search"
              >
                <Search
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isScrolled ? "text-gray-900" : "text-white drop-shadow-lg"
                  )}
                />
              </button>
            )}

          {/* Search Box - Shows when search is open */}
          {isSearchOpen ? (
            <div className={cn(
              "flex items-center gap-3 animate-in fade-in duration-200 transition-all",
              "lg:flex-1 lg:ml-6",
              // Mobile: full width
              "w-full lg:w-auto"
            )}>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Program, ülke veya okul arayın..."
                  className={cn(
                    "w-full border-2 border-gray-200 rounded-full focus:border-primary focus:outline-none transition-all bg-white",
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
                  "transition-colors rounded-full flex-shrink-0",
                  isScrolled
                    ? "text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5"
                    : "p-2 bg-white text-gray-600 hover:bg-gray-100 lg:bg-transparent lg:text-white lg:hover:bg-white/20"
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
                      ? "text-sm py-1.5 px-2.5 text-gray-700 hover:bg-primary/20 hover:text-primary"
                      : "text-base py-2 px-3 text-white hover:bg-primary/30 hover:text-white drop-shadow-lg",
                    isActive(item.href) && (isScrolled ? "bg-primary/20 text-primary" : "bg-primary/30 text-white")
                  )}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className={cn(
                    "transition-all duration-500 group-hover:rotate-180 flex-shrink-0",
                    isScrolled ? "w-3 h-3" : "w-4 h-4"
                  )} />}
                </Link>

                {/* Mega Menu for Dil Okulu, Yaz Okulu */}
                {(item.label === "Dil Okulu" || item.label === "Yaz Okulu") && item.submenu && activeDropdown === item.label && (
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
                            ? "max-w-6xl mx-auto bg-white shadow-xl px-6 py-2 border border-gray-200"
                            : "bg-white shadow-xl px-0 py-0 border border-gray-200"
                        )}>
                        <div className={cn(
                          "grid gap-0",
                          item.label === "Yaz Okulu" ? "grid-cols-5" : "grid-cols-5"
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
                                  item.label === "Dil Okulu" ? "/dil-okulu/kampanyalar" :
                                  item.label === "Yaz Okulu" ? "/yaz-okulu/filtrele" :
                                  "/universite/kampanyalar"
                                }
                                className="block"
                              >
                                <div className={cn(
                                  "relative rounded-lg overflow-hidden group cursor-pointer transition-all duration-500",
                                  item.label === "Yaz Okulu"
                                    ? (isScrolled ? "h-40" : "h-48")
                                    : (isScrolled ? "h-24" : "h-32"),
                                  item.label === "Yaz Okulu"
                                    ? "bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-primary/20"
                                    : "bg-gradient-to-br from-primary to-secondary"
                                )}>
                                  {item.label !== "Yaz Okulu" && (
                                    <>
                                      <div className="absolute inset-0 bg-black/20"></div>
                                      <div className="absolute top-2 right-2">
                                        <span className="bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold animate-pulse">
                                          HOT
                                        </span>
                                      </div>
                                    </>
                                  )}
                                  <div className={cn(
                                    "relative z-10 h-full flex flex-col items-center text-center",
                                    item.label === "Yaz Okulu" ? "text-gray-900 justify-between py-6 px-4" : "text-white justify-center p-3"
                                  )}>
                                    {item.label === "Dil Okulu" && (
                                      <>
                                        <div className="text-2xl mb-1">🎯</div>
                                        <h4 className="font-bold text-xs mb-1">Kış Dönemi</h4>
                                        <p className="text-[10px] font-semibold mb-1">%25'e Varan İndirim</p>
                                        <p className="text-[9px] opacity-90">Malta & İngiltere</p>
                                      </>
                                    )}
                                    {item.label === "Yaz Okulu" && (
                                      <>
                                        {/* Modern Search Icon */}
                                        <div>
                                          <div className={cn(
                                            "bg-primary/10 rounded-full flex items-center justify-center mx-auto",
                                            isScrolled ? "w-16 h-16" : "w-20 h-20"
                                          )}>
                                            <svg className={cn("text-primary", isScrolled ? "w-8 h-8" : "w-10 h-10")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                          </div>
                                        </div>
                                        {/* Hierarchical Text */}
                                        <div className="flex-1 flex flex-col justify-center">
                                          <p className={cn(
                                            "uppercase tracking-wider text-primary/70 font-bold",
                                            isScrolled ? "text-[10px] mb-2" : "text-xs mb-3"
                                          )}>YAZ OKULU SEÇİMİ</p>
                                          <h4 className={cn(
                                            "font-bold leading-snug text-gray-900 px-2",
                                            isScrolled ? "text-sm" : "text-base"
                                          )}>
                                            Size en uygun yaz okullarını<br/>
                                            <span className="text-primary">hemen bulun!</span>
                                          </h4>
                                        </div>
                                        <div className={cn(
                                          "bg-primary hover:bg-primary/90 text-white rounded-full font-bold transition-colors shadow-sm",
                                          isScrolled ? "px-5 py-2 text-xs" : "px-6 py-2.5 text-sm"
                                        )}>
                                          FİLTRELE
                                        </div>
                                      </>
                                    )}
                                  </div>
                                  <div className={cn(
                                    "absolute inset-0 transition-all",
                                    item.label === "Yaz Okulu"
                                      ? "bg-primary/0 group-hover:bg-primary/5"
                                      : "bg-white/0 group-hover:bg-white/10"
                                  )}></div>
                                </div>
                              </Link>

                              {item.label === "Dil Okulu" && (
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
                            <ul className={cn("transition-all duration-500", isScrolled ? "space-y-0.5" : "space-y-1")}>
                              {section.items?.map((subitem: any, subIdx: number) => (
                                <li key={`${item.label}-${section.category}-${subitem.href}-${subIdx}`}>
                                  <Link
                                    href={subitem.href}
                                    className={cn(
                                      "block rounded-lg transition-all duration-500",
                                      subitem.variant === "style1"
                                        ? cn(
                                            "bg-primary/10 text-primary font-semibold hover:bg-primary/20 text-center border border-primary/20",
                                            isScrolled ? "px-3 py-1.5 text-xs" : "px-3 py-1.5 text-sm"
                                          )
                                        : subitem.variant === "style2"
                                        ? cn(
                                            "border border-primary text-primary font-semibold hover:bg-primary/10 text-center",
                                            isScrolled ? "px-3 py-1.5 text-xs" : "px-3 py-1.5 text-sm"
                                          )
                                        : cn(
                                            isScrolled ? "px-2 py-1 text-sm" : "px-2.5 py-1.5 text-base",
                                            isActive(subitem.href)
                                              ? "bg-primary/25 text-primary font-semibold border-l-3 border-primary"
                                              : "text-gray-700 hover:bg-primary/20 hover:text-primary hover:translate-x-1"
                                          )
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

                {/* Üniversite Dropdown - 2 Column Grid */}
                {item.label === "Üniversite" && item.submenu && activeDropdown === item.label && (
                  <>
                    {/* Invisible hover bridge */}
                    <div
                      className="absolute left-0 right-0 h-4 z-40"
                      style={{ top: '100%' }}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                    />

                    <div
                      className="absolute left-0 z-50"
                      style={{ top: '100%', marginTop: '16px' }}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className={cn(
                        "transition-all duration-500 ease-in-out rounded-2xl bg-white shadow-xl border border-gray-200",
                        isScrolled
                          ? "px-6 py-2"
                          : "px-0 py-0"
                      )}>
                        <div className="grid grid-cols-2 gap-0 min-w-[700px]">
                          {item.submenu.map((section: any, idx: number) => (
                            <div key={`universite-${section.category}-${idx}`} className={cn(
                              "border-r border-gray-100 last:border-r-0 transition-all duration-500",
                              isScrolled ? "p-3" : "p-5",
                              idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                            )}>
                              <h3 className={cn(
                                "font-bold text-gray-500 uppercase tracking-wider pb-2 border-b border-primary/20 transition-all duration-500",
                                isScrolled ? "text-[9px] mb-2" : "text-[10px] mb-3"
                              )}>
                                {section.category}
                              </h3>
                              <ul className={cn("transition-all duration-500", isScrolled ? "space-y-1" : "space-y-1.5")}>
                                {section.items?.map((subitem: any, subIdx: number) => (
                                  <li key={`universite-${section.category}-${subitem.href}-${subIdx}`}>
                                    <Link
                                      href={subitem.href}
                                      className={cn(
                                        "block rounded-lg transition-all duration-500",
                                        isScrolled ? "px-2 py-1 text-sm" : "px-2.5 py-1.5 text-base",
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
                    </div>
                  </>
                )}

                {/* Regular Dropdown for other menus (not Dil Okulu, Yaz Okulu, Üniversite) */}
                {item.label !== "Dil Okulu" && item.label !== "Yaz Okulu" && item.label !== "Üniversite" && item.submenu && activeDropdown === item.label && (
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

          </div>

          {/* Mobile Navigation - Full Screen Modern Design */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-[100] bg-white animate-in fade-in slide-in-from-right duration-300">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Image
                  src="/logo.png"
                  alt="StudyZONE International"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-900" />
                </button>
              </div>

              {/* Mobile Menu Content - Scrollable */}
              <nav className="h-[calc(100vh-88px)] overflow-y-auto">
                <div className="p-6 space-y-2">
                  {menuItems.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between px-4 py-4 font-bold text-lg rounded-xl transition-all",
                          isActive(item.href)
                            ? "bg-primary text-white shadow-lg"
                            : "bg-gray-50 text-gray-900 hover:bg-gray-100 active:scale-95"
                        )}
                        onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        {item.submenu && (
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 transition-transform",
                              activeDropdown === item.label && "rotate-180"
                            )}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveDropdown(activeDropdown === item.label ? null : item.label);
                            }}
                          />
                        )}
                      </Link>

                      {/* Submenu */}
                      {item.submenu && activeDropdown === item.label && (
                        <div className="mt-2 ml-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
                          {item.submenu.map((subitem, idx) => {
                            // Handle sections with items
                            if ('items' in subitem && Array.isArray(subitem.items)) {
                              return (
                                <div key={`section-${idx}`} className="bg-gray-50 rounded-lg p-4">
                                  <div className="text-xs font-bold text-primary uppercase mb-3 tracking-wider">
                                    {subitem.category}
                                  </div>
                                  <div className="space-y-1">
                                    {subitem.items.map((linkItem, linkIdx) => (
                                      <Link
                                        key={`mobile-${idx}-${linkIdx}-${linkItem.href}`}
                                        href={linkItem.href}
                                        className={cn(
                                          "block px-3 py-2.5 text-sm rounded-lg transition-all",
                                          isActive(linkItem.href)
                                            ? "bg-primary/20 text-primary font-semibold"
                                            : "text-gray-700 hover:bg-white hover:text-primary"
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {linkItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              );
                            }
                            // Handle promo sections
                            if (subitem.type === "promo") {
                              return null;
                            }
                            return null;
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Menu Footer - Contact */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">Ücretsiz Danışma Hattı</p>
                      <a
                        href="tel:+902129700070"
                        className="text-lg font-bold text-primary hover:text-primary/80 transition-colors"
                      >
                        0212-970 0070
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>

    </header>
  );
}
