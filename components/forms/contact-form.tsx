"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ContactForm({ title = "Bilgi Formu" }: { title?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Form submission logic will be added later
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Ad Soyad *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Adınız ve soyadınız"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">E-posta *</Label>
          <Input
            id="email"
            type="email"
            placeholder="ornek@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">Telefon *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(5__) ___ __ __"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="program">İlgilendiğiniz Program *</Label>
          <Select
            value={formData.program}
            onValueChange={(value) => setFormData({ ...formData, program: value })}
          >
            <SelectTrigger id="program">
              <SelectValue placeholder="Program seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dil-okulu">Dil Okulu</SelectItem>
              <SelectItem value="yaz-okulu">Yaz Okulu</SelectItem>
              <SelectItem value="universite">Üniversite</SelectItem>
              <SelectItem value="master">Master</SelectItem>
              <SelectItem value="sertifika">Sertifika ve Diploma</SelectItem>
              <SelectItem value="work-travel">Work & Travel</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message">Mesajınız</Label>
          <Textarea
            id="message"
            placeholder="Mesajınızı buraya yazabilirsiniz..."
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <Button type="submit" className="w-full" size="lg">
          Gönder
        </Button>
      </form>
    </div>
  );
}
