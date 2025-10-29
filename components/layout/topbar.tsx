import { Phone } from "lucide-react";
import Link from "next/link";

export function Topbar() {
  const topLinks = [
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/degerlerimiz", label: "Değerlerimiz" },
    { href: "/musteri-memnuniyeti", label: "Müşteri Memnuniyeti" },
    { href: "/akreditasyonlarimiz", label: "Akreditasyonlarımız" },
    { href: "/referanslarimiz", label: "Referanslarımız" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <div className="hidden lg:block absolute top-0 left-0 right-0 z-40 py-2 px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-sm text-white">
        <nav className="hidden md:flex items-center gap-4">
          {topLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <a href="tel:02129700070" className="font-semibold hover:text-primary transition-colors">
            0212-970 0070
          </a>
        </div>
      </div>
    </div>
  );
}
