"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { universities } from "@/lib/universities";
import { User, Mail, Phone, GraduationCap, MessageSquare } from "lucide-react";

export function WorkTravelForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Form submission logic will be added later
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">BİLGİ FORMU</h3>
        <p className="text-primary text-lg font-semibold mb-1">
          2026 işleri ve kayıt işlemleriyle ilgili bilgi almak için hemen formu doldurun!
        </p>
        <p className="text-sm text-gray-600">
          Tecrübeli danışmanlarımız size yardımcı olmaktan mutluluk duyacaktır.
        </p>
        <p className="text-sm text-gray-700 mt-2 font-medium">
          Acele edin, fırsatı kaçırmayın!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Ad Soyad"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="pl-11 h-12 bg-gray-50 border-gray-300 text-base"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="pl-11 h-12 bg-gray-50 border-gray-300 text-base"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="tel"
            placeholder="Telefon"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="pl-11 h-12 bg-gray-50 border-gray-300 text-base"
          />
        </div>

        <div className="relative">
          <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
          <Select
            value={formData.university}
            onValueChange={(value) => setFormData({ ...formData, university: value })}
          >
            <SelectTrigger className="pl-11 h-12 bg-gray-50 border-gray-300 text-base">
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
            className="pl-11 bg-gray-50 border-gray-300 text-base resize-none"
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
  );
}
