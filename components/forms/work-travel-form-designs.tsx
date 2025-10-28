"use client";

import { useState } from "react";

// DESIGN 1: Minimal & Clean (Bordered Inputs)
export function FormDesign1() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-6">
          ÜCRETSİZ BİLGİ ALIN
        </h2>

        <form className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Ad Soyad *</span>
            </label>
            <input
              type="text"
              placeholder="Adınız ve soyadınız"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">E-posta *</span>
            </label>
            <input
              type="email"
              placeholder="ornek@email.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Telefon *</span>
            </label>
            <input
              type="tel"
              placeholder="0555 123 45 67"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* University */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Üniversite</span>
            </label>
            <select className="select select-bordered w-full" defaultValue="">
              <option value="" disabled>Üniversitenizi seçin</option>
              <option>Boğaziçi Üniversitesi</option>
              <option>İstanbul Üniversitesi</option>
              <option>ODTÜ</option>
              <option>Diğer</option>
            </select>
          </div>

          {/* Program */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">İlgilendiğiniz Program *</span>
            </label>
            <select className="select select-bordered w-full" defaultValue="" required>
              <option value="" disabled>Program seçin</option>
              <option>Work and Travel 2026</option>
              <option>Erasmus</option>
              <option>Au Pair</option>
              <option>Dil Eğitimi</option>
            </select>
          </div>

          {/* Message */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Mesajınız</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Sorularınızı buraya yazabilirsiniz..."
            ></textarea>
          </div>

          {/* Submit */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">
              BİLGİ TALEBİ GÖNDER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// DESIGN 2: Modern with Icons & Floating Labels
export function FormDesign2() {
  return (
    <div className="card bg-gradient-to-br from-white to-gray-50 shadow-2xl border border-gray-200">
      <div className="card-body">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            ÜCRETSİZ BİLGİ ALIN
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Formu doldurun, size hemen dönüş yapalım
          </p>
        </div>

        <form className="space-y-5">
          {/* Name */}
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Ad Soyad *" required />
            </label>
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="email" className="grow" placeholder="E-posta *" required />
            </label>
          </div>

          {/* Phone */}
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 14 12.5v1A1.5 1.5 0 0 1 12.5 15h-1C5.159 15 1 10.841 1 4.5V3.5Z" clipRule="evenodd" />
              </svg>
              <input type="tel" className="grow" placeholder="Telefon *" required />
            </label>
          </div>

          {/* University */}
          <div className="form-control">
            <select className="select select-bordered w-full" defaultValue="">
              <option value="" disabled>📚 Üniversitenizi seçin</option>
              <option>Boğaziçi Üniversitesi</option>
              <option>İstanbul Üniversitesi</option>
              <option>ODTÜ</option>
              <option>Diğer</option>
            </select>
          </div>

          {/* Program */}
          <div className="form-control">
            <select className="select select-bordered w-full" defaultValue="" required>
              <option value="" disabled>🎯 Program seçin *</option>
              <option>Work and Travel 2026</option>
              <option>Erasmus</option>
              <option>Au Pair</option>
              <option>Dil Eğitimi</option>
            </select>
          </div>

          {/* Message */}
          <div className="form-control">
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="💬 Sorularınızı buraya yazabilirsiniz..."
            ></textarea>
          </div>

          {/* Submit */}
          <div className="form-control mt-6">
            <button className="btn btn-primary btn-lg w-full">
              BİLGİ TALEBİ GÖNDER
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// DESIGN 3: Colorful with Primary Color Accents
export function FormDesign3() {
  return (
    <div className="card bg-base-100 shadow-2xl border-t-4 border-primary">
      <div className="card-body">
        <div className="bg-primary/10 rounded-lg p-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            ÜCRETSİZ BİLGİ ALIN
          </h2>
          <div className="badge badge-primary">Hemen arayalım!</div>
        </div>

        <form className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-gray-700">Ad Soyad</span>
              <span className="label-text-alt text-error">*</span>
            </label>
            <input
              type="text"
              placeholder="Adınız ve soyadınız"
              className="input input-primary input-bordered w-full focus:input-primary"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-gray-700">E-posta</span>
              <span className="label-text-alt text-error">*</span>
            </label>
            <input
              type="email"
              placeholder="ornek@email.com"
              className="input input-primary input-bordered w-full focus:input-primary"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-gray-700">Telefon</span>
              <span className="label-text-alt text-error">*</span>
            </label>
            <input
              type="tel"
              placeholder="0555 123 45 67"
              className="input input-primary input-bordered w-full focus:input-primary"
              required
            />
            <label className="label">
              <span className="label-text-alt text-gray-500">Size en kısa sürede ulaşalım</span>
            </label>
          </div>

          {/* University - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700">Üniversite</span>
              </label>
              <select className="select select-primary select-bordered w-full" defaultValue="">
                <option value="" disabled>Seçiniz</option>
                <option>Boğaziçi Üniversitesi</option>
                <option>İstanbul Üniversitesi</option>
                <option>ODTÜ</option>
                <option>Diğer</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700">Sınıf</span>
              </label>
              <select className="select select-primary select-bordered w-full" defaultValue="">
                <option value="" disabled>Seçiniz</option>
                <option>1. Sınıf</option>
                <option>2. Sınıf</option>
                <option>3. Sınıf</option>
                <option>4. Sınıf</option>
                <option>Mezun</option>
              </select>
            </div>
          </div>

          {/* Program */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-gray-700">Program</span>
              <span className="label-text-alt text-error">*</span>
            </label>
            <select className="select select-primary select-bordered w-full" defaultValue="" required>
              <option value="" disabled>İlgilendiğiniz programı seçin</option>
              <option>Work and Travel 2026</option>
              <option>Erasmus</option>
              <option>Au Pair</option>
              <option>Dil Eğitimi</option>
            </select>
          </div>

          {/* Message */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-gray-700">Mesajınız</span>
            </label>
            <textarea
              className="textarea textarea-primary textarea-bordered h-24"
              placeholder="Öğrenmek istediğiniz detaylar..."
            ></textarea>
            <label className="label">
              <span className="label-text-alt text-gray-500">Opsiyonel</span>
            </label>
          </div>

          {/* Privacy Checkbox */}
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-3">
              <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" required />
              <span className="label-text text-xs">
                <a href="#" className="link link-primary">KVKK Aydınlatma Metni</a>'ni okudum, kabul ediyorum.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="form-control mt-6">
            <button className="btn btn-primary btn-lg w-full gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              FORMU GÖNDER
            </button>
          </div>

          <div className="alert alert-info mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-sm">Formunuz alındıktan sonra 24 saat içinde size dönüş yapacağız!</span>
          </div>
        </form>
      </div>
    </div>
  );
}

// Preview Component to show all 3 designs
export function FormDesignsPreviewer() {
  const [selectedDesign, setSelectedDesign] = useState<1 | 2 | 3>(1);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Design Selector */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-6">Form Tasarımı Seçin</h1>
        <div className="btn-group">
          <button
            className={`btn ${selectedDesign === 1 ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setSelectedDesign(1)}
          >
            Tasarım 1: Minimal
          </button>
          <button
            className={`btn ${selectedDesign === 2 ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setSelectedDesign(2)}
          >
            Tasarım 2: Modern
          </button>
          <button
            className={`btn ${selectedDesign === 3 ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setSelectedDesign(3)}
          >
            Tasarım 3: Colorful
          </button>
        </div>
      </div>

      {/* Show Selected Design */}
      <div className="max-w-2xl mx-auto">
        {selectedDesign === 1 && <FormDesign1 />}
        {selectedDesign === 2 && <FormDesign2 />}
        {selectedDesign === 3 && <FormDesign3 />}
      </div>
    </div>
  );
}
