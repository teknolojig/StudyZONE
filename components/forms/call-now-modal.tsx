"use client";

import { X, Phone } from "lucide-react";

interface CallNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CallNowModal({ isOpen, onClose }: CallNowModalProps) {
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
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl shadow-2xl max-w-4xl w-full pointer-events-auto animate-in zoom-in-95 duration-200 relative overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Modal Body - Horizontal Layout */}
          <div className="grid md:grid-cols-2 gap-8 p-4 md:p-12">
            {/* Left Side - Phone Icon */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Ring effect */}
                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>

                {/* Icon */}
                <div className="relative bg-white rounded-full p-12 md:p-16 shadow-xl">
                  <Phone className="w-24 h-24 md:w-32 md:h-32 text-green-500 animate-[ring_1s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center text-center md:text-left">
              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                HEMEN ARAYIN
              </h2>

              {/* Phone Number */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <p className="text-white/80 text-sm font-semibold mb-2 uppercase tracking-wide">
                  Ücretsiz Danışma Hattı
                </p>
                <a
                  href="tel:+902129700070"
                  className="text-3xl md:text-4xl font-black text-white hover:text-white/90 transition-colors block"
                >
                  0212-970 0070
                </a>
              </div>

              {/* Info Text */}
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                Tecrübeli danışmanlarımız size yardımcı olmaktan mutluluk duyacaktır.
              </p>

              {/* Call to Action Button */}
              <div>
                <a
                  href="tel:+902129700070"
                  className="inline-block bg-white text-green-600 font-bold text-lg px-10 py-4 rounded-full hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Şimdi Ara
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </dialog>
  );
}
