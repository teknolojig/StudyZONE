"use client";

import { useState } from "react";
import Image from "next/image";
import { X, User, Mail, Phone, GraduationCap, MessageSquare, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { universities } from "@/lib/universities";

interface InfoFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InfoFormModal({ isOpen, onClose }: InfoFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <dialog
      open={isOpen}
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        maxWidth: '100vw',
        maxHeight: '100vh',
        padding: 0
      }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl max-w-6xl w-full pointer-events-auto animate-in zoom-in-95 duration-200 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-gray-300 hover:bg-gray-400 rounded-full p-2 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          {/* Modal Body */}
          <div className="pt-6 px-4 md:px-8 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Left Column - Form (exact copy from work-travel) */}
            <div className="bg-white rounded-xl shadow-xl p-4 md:p-8 border border-gray-100">
              <div className="mb-4 md:mb-6">
                <h3 className="text-gray-900 text-lg md:text-xl font-black mb-2 md:mb-3">
                  BİLGİ FORMU
                </h3>
                <p className="text-primary text-base md:text-lg font-semibold mb-1">
                  2026 işleri ve kayıt işlemleriyle ilgili bilgi almak için hemen formu doldurun!
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  Tecrübeli danışmanlarımız size yardımcı olmaktan mutluluk duyacaktır.
                </p>
                <p className="text-xs md:text-sm text-gray-700 mt-1 md:mt-2 font-medium">
                  Acele edin, fırsatı kaçırmayın!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Ad Soyad"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="pl-10 md:pl-11 h-10 md:h-12 bg-white border-gray-300 text-sm md:text-base"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="pl-10 md:pl-11 h-10 md:h-12 bg-white border-gray-300 text-sm md:text-base"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400" />
                  <Input
                    type="tel"
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="pl-10 md:pl-11 h-10 md:h-12 bg-white border-gray-300 text-sm md:text-base"
                  />
                </div>

                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400 z-10" />
                  <Select
                    value={formData.university}
                    onValueChange={(value) => setFormData({ ...formData, university: value })}
                  >
                    <SelectTrigger className="pl-10 md:pl-11 h-10 md:h-12 bg-gray-50 border-gray-300 text-sm md:text-base">
                      <SelectValue placeholder="Üniversiteniz" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {universities.map((uni) => (
                        <SelectItem
                          key={uni.value}
                          value={uni.value}
                          disabled={uni.value === "0"}
                        >
                          {uni.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Textarea
                    placeholder="Mesajınız"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="pl-11 bg-white border-gray-300 text-base resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90"
                >
                  BENİ BİLGİLENDİRİN
                </Button>
              </form>
            </div>

            {/* Right Column - Stats & Testimonial */}
            <div className="hidden lg:flex flex-col justify-center space-y-6">
              {/* Simple Stats - 4 in a row */}
              <div className="grid grid-cols-4 gap-2">
                <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                  <Star className="w-6 h-6 text-cyan-500 mx-auto mb-1" fill="currentColor" />
                  <div className="text-2xl font-black text-gray-900">28</div>
                  <div className="text-xs text-gray-600 font-medium">Yıl Tecrübe</div>
                </div>

                <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                  <svg className="w-6 h-6 text-cyan-500 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                  <div className="text-2xl font-black text-gray-900">%100</div>
                  <div className="text-xs text-gray-600 font-medium">Müşteri Memnuniyeti</div>
                </div>

                <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                  <svg className="w-6 h-6 text-cyan-500 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2"/>
                  </svg>
                  <div className="text-2xl font-black text-gray-900">300+</div>
                  <div className="text-xs text-gray-600 font-medium">Resmi Temsilcilik</div>
                </div>

                <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                  <GraduationCap className="w-6 h-6 text-cyan-500 mx-auto mb-1" />
                  <div className="text-2xl font-black text-gray-900">31.584</div>
                  <div className="text-xs text-gray-600 font-medium">Toplam Öğrenci</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/workandtravel/esin.jpg"
                      alt="Esin Bayramoğlu"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Esin Bayramoğlu</h4>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "Yurtdışında eğitim hayallerimi gerçekleştirdim. Her aşamasıyla harika bir deneyimdi. Londra ve seçtiğimiz okul tam da beklentilerime uygundu. Teşekkürler StudyZONE !"
                </p>
              </div>

              {/* Accreditation Logos */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: "CIEE", logo: "/workandtravel/akredite/ciee.jpg" },
                  { name: "GeoVisions", logo: "/workandtravel/akredite/geovisions.jpg" },
                  { name: "Greenheart", logo: "/workandtravel/akredite/greenheart.jpg" },
                  { name: "Janus", logo: "/workandtravel/akredite/janus.jpg" }
                ].map((accreditation) => (
                  <div
                    key={accreditation.name}
                    className="bg-white p-2 rounded-lg border border-gray-200 flex items-center justify-center aspect-square relative overflow-hidden"
                  >
                    <Image
                      src={accreditation.logo}
                      alt={accreditation.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
