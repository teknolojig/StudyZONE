"use client";

import { useState } from "react";
import { User, Mail, Phone, GraduationCap, MessageSquare, Send } from "lucide-react";

// DESIGN 1: Classic with Icons (Bordered)
export function FormStyle1() {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-8">
      <h3 className="text-2xl font-bold mb-2 text-gray-800">BİLGİ FORMU</h3>
      <p className="text-[#e55f14] font-semibold mb-1">
        2026 işleri ve kayıt işlemleriyle ilgili bilgi almak için hemen formu doldurun!
      </p>
      <p className="text-sm text-gray-600 mb-6">
        Tecrübeli danışmanlarımız size yardımcı olmaktan mutluluk duyacaktır.
      </p>

      <form className="space-y-4">
        {/* Ad Soyad */}
        <div>
          <div className="flex items-center gap-2 border-2 border-gray-300 rounded-lg px-4 py-3 focus-within:border-[#e55f14] transition-colors">
            <User className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              className="flex-1 outline-none text-gray-700"
              placeholder="Ad Soyad"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <div className="flex items-center gap-2 border-2 border-gray-300 rounded-lg px-4 py-3 focus-within:border-[#e55f14] transition-colors">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              className="flex-1 outline-none text-gray-700"
              placeholder="Email"
              required
            />
          </div>
        </div>

        {/* Telefon */}
        <div>
          <div className="flex items-center gap-2 border-2 border-gray-300 rounded-lg px-4 py-3 focus-within:border-[#e55f14] transition-colors">
            <Phone className="w-5 h-5 text-gray-400" />
            <input
              type="tel"
              className="flex-1 outline-none text-gray-700"
              placeholder="Telefon"
              required
            />
          </div>
        </div>

        {/* Üniversite */}
        <div>
          <div className="relative">
            <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
            <select
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 pl-12 outline-none focus:border-[#e55f14] transition-colors text-gray-700 appearance-none bg-white"
              defaultValue=""
            >
              <option value="" disabled>Üniversiteniz</option>
              <option>Boğaziçi Üniversitesi</option>
              <option>İstanbul Üniversitesi</option>
              <option>ODTÜ</option>
              <option>Ankara Üniversitesi</option>
              <option>Hacettepe Üniversitesi</option>
              <option>Diğer</option>
            </select>
          </div>
        </div>

        {/* Mesaj */}
        <div>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 pointer-events-none" />
            <textarea
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 pl-12 outline-none focus:border-[#e55f14] transition-colors resize-none text-gray-700"
              placeholder="Mesajınız"
              rows={4}
            ></textarea>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#e55f14] hover:bg-[#d15512] text-white font-bold py-3 rounded-lg transition-colors shadow-lg"
        >
          BENİ BİLGİLENDİRİN
        </button>
      </form>
    </div>
  );
}

// DESIGN 2: Modern Gradient Card
export function FormStyle2() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl border-2 border-gray-200 p-8">
      <div className="bg-[#e55f14]/10 rounded-lg p-4 mb-4">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">BİLGİ FORMU</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#e55f14] text-white px-3 py-1 rounded-full text-sm font-semibold">
            Ücretsiz Danışmanlık
          </span>
          <span className="border-2 border-[#e55f14] text-[#e55f14] px-3 py-1 rounded-full text-sm font-semibold">
            24 Saat İçinde Dönüş
          </span>
        </div>
      </div>

      <p className="text-[#e55f14] font-semibold mb-1 text-sm">
        2026 işleri ve kayıt işlemleriyle ilgili bilgi almak için hemen formu doldurun!
      </p>

      <form className="space-y-4 mt-4">
        {/* Ad Soyad */}
        <div>
          <label className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
            <User className="w-4 h-4" />
            Ad Soyad
          </label>
          <input
            type="text"
            placeholder="Adınız ve Soyadınız"
            className="w-full border-2 border-[#e55f14] rounded-lg px-4 py-3 outline-none focus:border-[#d15512] transition-colors text-gray-700"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
            <Mail className="w-4 h-4" />
            Email
          </label>
          <input
            type="email"
            placeholder="ornek@email.com"
            className="w-full border-2 border-[#e55f14] rounded-lg px-4 py-3 outline-none focus:border-[#d15512] transition-colors text-gray-700"
            required
          />
        </div>

        {/* Telefon */}
        <div>
          <label className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
            <Phone className="w-4 h-4" />
            Telefon
          </label>
          <input
            type="tel"
            placeholder="0555 123 45 67"
            className="w-full border-2 border-[#e55f14] rounded-lg px-4 py-3 outline-none focus:border-[#d15512] transition-colors text-gray-700"
            required
          />
        </div>

        {/* Üniversite */}
        <div>
          <label className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
            <GraduationCap className="w-4 h-4" />
            Üniversite
          </label>
          <select
            className="w-full border-2 border-[#e55f14] rounded-lg px-4 py-3 outline-none focus:border-[#d15512] transition-colors text-gray-700 appearance-none bg-white"
            defaultValue=""
          >
            <option value="" disabled>Üniversitenizi seçin</option>
            <option>Boğaziçi Üniversitesi</option>
            <option>İstanbul Üniversitesi</option>
            <option>ODTÜ</option>
            <option>Ankara Üniversitesi</option>
            <option>Hacettepe Üniversitesi</option>
            <option>Diğer</option>
          </select>
        </div>

        {/* Mesaj */}
        <div>
          <label className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
            <MessageSquare className="w-4 h-4" />
            Mesajınız
          </label>
          <textarea
            className="w-full border-2 border-[#e55f14] rounded-lg px-4 py-3 outline-none focus:border-[#d15512] transition-colors resize-none text-gray-700"
            placeholder="Öğrenmek istediğiniz detaylar..."
            rows={4}
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#e55f14] hover:bg-[#d15512] text-white font-bold py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          BENİ BİLGİLENDİRİN
        </button>
      </form>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 mt-4 flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-blue-500 w-6 h-6 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span className="text-sm text-gray-700">Acele edin, fırsatı kaçırmayın!</span>
      </div>
    </div>
  );
}

// DESIGN 3: Compact with Floating Labels
export function FormStyle3() {
  return (
    <div className="bg-white rounded-xl shadow-2xl border-t-4 border-[#e55f14] p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">BİLGİ FORMU</h3>
        <p className="text-[#e55f14] font-semibold text-sm">
          2026 işleri ve kayıt işlemleriyle ilgili bilgi almak için hemen formu doldurun!
        </p>
        <p className="text-xs text-gray-600 mt-1">
          Tecrübeli danışmanlarımız size yardımcı olmaktan mutluluk duyacaktır.
        </p>
      </div>

      <form className="space-y-3">
        {/* Ad Soyad */}
        <div>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Ad Soyad *"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 pl-10 text-sm outline-none focus:border-[#e55f14] transition-colors text-gray-700"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="email"
              placeholder="Email *"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 pl-10 text-sm outline-none focus:border-[#e55f14] transition-colors text-gray-700"
              required
            />
          </div>
        </div>

        {/* Telefon */}
        <div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="tel"
              placeholder="Telefon *"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 pl-10 text-sm outline-none focus:border-[#e55f14] transition-colors text-gray-700"
              required
            />
          </div>
        </div>

        {/* Üniversite */}
        <div>
          <div className="relative">
            <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10 pointer-events-none" />
            <select
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 pl-10 text-sm outline-none focus:border-[#e55f14] transition-colors text-gray-700 appearance-none bg-white"
              defaultValue=""
            >
              <option value="" disabled>Üniversiteniz</option>
              <option>Boğaziçi Üniversitesi</option>
              <option>İstanbul Üniversitesi</option>
              <option>ODTÜ</option>
              <option>Ankara Üniversitesi</option>
              <option>Hacettepe Üniversitesi</option>
              <option>Diğer</option>
            </select>
          </div>
        </div>

        {/* Mesaj */}
        <div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
            <textarea
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 pl-10 text-sm outline-none focus:border-[#e55f14] transition-colors resize-none text-gray-700"
              placeholder="Mesajınız"
              rows={3}
            ></textarea>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#e55f14] hover:bg-[#d15512] text-white font-bold py-2.5 rounded-lg transition-colors shadow-lg"
        >
          BENİ BİLGİLENDİRİN
        </button>

        <p className="text-xs text-center text-gray-600 mt-3">
          <span className="font-semibold text-red-600">Acele edin, fırsatı kaçırmayın!</span>
          <br />
          Kontenjanlar sınırlıdır.
        </p>
      </form>
    </div>
  );
}

// Preview Component
export function FormStylePreviewer() {
  const [selectedStyle, setSelectedStyle] = useState<1 | 2 | 3>(1);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Style Selector */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Form Tasarımını Seçin</h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base">Aşağıdaki butonlarla 3 farklı tasarımı görüntüleyin</p>

          <div className="inline-flex gap-2 bg-white p-2 rounded-lg shadow-md">
            <button
              className={`px-6 py-2.5 text-sm font-bold rounded-md transition-all ${
                selectedStyle === 1
                  ? 'bg-[#e55f14] text-white shadow-md'
                  : 'bg-transparent text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedStyle(1)}
            >
              Tasarım 1
            </button>
            <button
              className={`px-6 py-2.5 text-sm font-bold rounded-md transition-all ${
                selectedStyle === 2
                  ? 'bg-[#e55f14] text-white shadow-md'
                  : 'bg-transparent text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedStyle(2)}
            >
              Tasarım 2
            </button>
            <button
              className={`px-6 py-2.5 text-sm font-bold rounded-md transition-all ${
                selectedStyle === 3
                  ? 'bg-[#e55f14] text-white shadow-md'
                  : 'bg-transparent text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedStyle(3)}
            >
              Tasarım 3
            </button>
          </div>
        </div>

        {/* Preview Area */}
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 text-center">
            <span className="inline-block bg-[#e55f14] text-white px-4 py-2 rounded-full text-sm font-semibold">
              {selectedStyle === 1 && "Classic with Icons"}
              {selectedStyle === 2 && "Modern Gradient"}
              {selectedStyle === 3 && "Compact & Clean"}
            </span>
          </div>

          {selectedStyle === 1 && <FormStyle1 />}
          {selectedStyle === 2 && <FormStyle2 />}
          {selectedStyle === 3 && <FormStyle3 />}
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="font-bold text-lg mb-2 text-gray-800">
              {selectedStyle === 1 && "📋 Tasarım 1: Classic with Icons"}
              {selectedStyle === 2 && "✨ Tasarım 2: Modern Gradient"}
              {selectedStyle === 3 && "⚡ Tasarım 3: Compact & Clean"}
            </h4>
            <p className="text-sm text-gray-600">
              {selectedStyle === 1 && "İkonlar inputların içinde, bordered stil, klasik ve temiz görünüm."}
              {selectedStyle === 2 && "Badge'ler, alert, gradient arka plan, label'lar üstte, modern ve dikkat çekici."}
              {selectedStyle === 3 && "Kompakt tasarım, küçük input'lar, minimal alan kullanımı, form sticky yapılabilir."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
