"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, MapPin, DollarSign, Briefcase, Award, X, Calendar, Home, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Job {
  id: string;
  createdTime: string;
  fields: {
    "Job Company Name": string;
    "Job Company Title"?: string;
    Sponsor: string;
    City: string;
    State: string;
    Position: string;
    "Hourly Wage": string;
    "Earliest Job Start Date"?: string;
    "Latest Job Start Date"?: string;
    "Earliest Job End Date"?: string;
    "Latest Job End Date"?: string;
    "Minimum Required English Level"?: string;
    Housing?: string;
    "Housing Fee"?: string;
    "Bonus Available?"?: string;
    "Any Requirement?"?: string;
    "Allocation"?: number;
    "Assigned"?: number;
    "Remaining Slot"?: number;
    "Kazanç Durumu"?: number;
    "İkinci İş İmkanı"?: number;
    "Aktivite/Sosyalleşme Olanağı"?: number;
    "Danışman Notu:"?: string;
    "Google Maps"?: string;
    "Youtube Link"?: string;
    Gallery?: Array<{
      id: string;
      url: string;
      filename: string;
      thumbnails?: {
        large?: { url: string };
        small?: { url: string };
      };
    }>;
  };
}

export function JobsCarousel() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<Array<{id: string; url: string; filename: string}>>([]);

  useEffect(() => {
    fetch('/api/airtable')
      .then(res => res.json())
      .then(data => {
        if (data.records) {
          setJobs(data.records);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching jobs:', err);
        setLoading(false);
      });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, jobs.length - 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, jobs.length - 4)) % Math.max(1, jobs.length - 4));
  };

  const openModal = (job: Job) => {
    setSelectedJob(job);
    const modal = document.getElementById('job-detail-modal') as HTMLDialogElement;
    modal?.showModal();
  };

  const closeModal = () => {
    setSelectedJob(null);
    const modal = document.getElementById('job-detail-modal') as HTMLDialogElement;
    modal?.close();
  };

  const calculateAverageRating = (job: Job) => {
    const ratings = [
      job.fields["Kazanç Durumu"],
      job.fields["İkinci İş İmkanı"],
      job.fields["Aktivite/Sosyalleşme Olanağı"]
    ].filter((rating): rating is number => rating !== undefined);

    if (ratings.length === 0) return 0;
    return ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
  };

  const openLightbox = (images: Array<{id: string; url: string; filename: string}>, index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
    // Hide the dialog modal when lightbox opens
    const modal = document.getElementById('job-detail-modal') as HTMLDialogElement;
    if (modal) {
      modal.style.display = 'none';
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
    // Show the dialog modal again when lightbox closes
    const modal = document.getElementById('job-detail-modal') as HTMLDialogElement;
    if (modal) {
      modal.style.display = 'block';
    }
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxImages.length]);

  if (loading) {
    return (
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/workandtravel/isler.jpg"
            alt="Popüler İşler"
            fill
            className="object-cover object-center"
            quality={60}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#01bbde]/70"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            POPÜLER VE GENİŞ İŞ YELPAZESİ
          </h2>
          <div className="text-white text-lg">Yükleniyor...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #06b6d4;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0891b2;
        }
      `}</style>
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/workandtravel/isler.jpg"
            alt="Popüler İşler"
            fill
            className="object-cover object-center"
            quality={60}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-cyan-600/70"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-2xl">
              POPÜLER VE GENİŞ İŞ YELPAZESİ
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-semibold drop-shadow-lg">
              Size ve kriterlerinize en uygun işe yerleştirme garantisi
            </p>
          </div>

          {/* Carousel - 5 cards visible */}
          <div className="relative max-w-[1400px] mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out gap-4"
                style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}
              >
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="w-[20%] flex-shrink-0 flex"
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
                      {/* Company Name - Secondary Renk */}
                      <div className="bg-secondary px-4 py-4 flex items-center justify-center min-h-[4rem]">
                        <h3 className="text-sm font-bold text-white leading-tight text-center">
                          {job.fields["Job Company Name"]}
                        </h3>
                      </div>

                      {/* Location */}
                      <div className="px-4 py-3 bg-white flex items-center gap-2 justify-center border-b border-gray-100">
                        <MapPin className="w-4 h-4 text-gray-600 flex-shrink-0" />
                        <span className="text-xs text-gray-700 font-medium">
                          {job.fields.City}, {job.fields.State}
                        </span>
                      </div>

                      {/* Info - 2x2 Grid */}
                      <div className="px-4 py-4 flex-1 flex flex-col bg-gray-50">
                        <div className="grid grid-cols-2 gap-2 mb-2.5">
                          {/* Position */}
                          <div className="bg-white p-2.5 rounded-lg border border-blue-100 flex flex-col items-center justify-center">
                            <Briefcase className="w-4 h-4 text-blue-600 mb-1" />
                            <span className="text-xs text-blue-700 font-bold text-center leading-tight">
                              {job.fields.Position}
                            </span>
                          </div>

                          {/* Wage */}
                          <div className="bg-green-50 p-2.5 rounded-lg border border-green-200 flex flex-col items-center justify-center">
                            <DollarSign className="w-4 h-4 text-green-600 mb-1" />
                            <span className="text-sm font-black text-green-700">
                              {job.fields["Hourly Wage"]}
                            </span>
                          </div>

                          {/* Rating - Ortalama Puan */}
                          {(() => {
                            const avgRating = calculateAverageRating(job);
                            if (avgRating > 0) {
                              return (
                                <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-200 flex flex-col items-center justify-center">
                                  <div className="flex items-center gap-0.5 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                      <svg
                                        key={i}
                                        className={`w-3 h-3 ${
                                          i < Math.round(avgRating) ? 'text-amber-400 fill-current' : 'text-gray-300 fill-current'
                                        }`}
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                      </svg>
                                    ))}
                                  </div>
                                  <span className="text-xs font-bold text-amber-700">
                                    {avgRating.toFixed(1)}
                                  </span>
                                </div>
                              );
                            }
                            return null;
                          })()}

                          {/* Sponsor Badge */}
                          <div className="bg-blue-50 px-2 py-2.5 rounded-lg border border-blue-100 flex flex-col items-center justify-center">
                            <Award className="w-4 h-4 text-blue-600 mb-1" />
                            <span className="text-xs font-bold text-blue-700 text-center leading-tight">
                              {job.fields.Sponsor}
                            </span>
                          </div>
                        </div>

                        {/* Button */}
                        <button
                          onClick={() => openModal(job)}
                          className="w-full mt-auto bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm"
                        >
                          Detayları Gör
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-cyan-600 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-cyan-600 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      <dialog
        id="job-detail-modal"
        className="fixed inset-0 z-[60] overflow-y-auto backdrop:bg-black/60"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          maxWidth: '100vw',
          maxHeight: '100vh',
          padding: 0
        }}
      >
        {selectedJob && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
              <div
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto custom-scrollbar"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#06b6d4 #f3f4f6'
                }}
              >
                {/* Header */}
                <div className="sticky top-0 bg-cyan-600 px-6 py-5 flex items-start justify-between rounded-t-2xl z-10 border-b-4 border-cyan-700">
                  <div className="flex-1 pr-8">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-3">
                      <Award className="w-4 h-4 text-white" />
                      <span className="text-sm font-bold text-white">{selectedJob.fields.Sponsor}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white leading-tight">
                      {selectedJob.fields["Job Company Name"]}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-white/90">
                      <MapPin className="w-4 h-4" />
                      <span className="font-semibold">
                        {selectedJob.fields.City}, {selectedJob.fields.State}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="flex-shrink-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Key Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                        <span className="text-xs font-semibold text-blue-600">Pozisyon</span>
                      </div>
                      <p className="text-base font-bold text-gray-900">{selectedJob.fields.Position}</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <span className="text-xs font-semibold text-green-600">Saatlik Ücret</span>
                      </div>
                      <p className="text-xl font-black text-green-700">{selectedJob.fields["Hourly Wage"]}</p>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Home className="w-5 h-5 text-amber-600" />
                        <span className="text-xs font-semibold text-amber-600">Konaklama</span>
                      </div>
                      <p className="text-sm font-bold text-gray-900">{selectedJob.fields.Housing || 'Belirtilmemiş'}</p>
                      {selectedJob.fields["Housing Fee"] && (
                        <p className="text-xs text-gray-600 mt-1">{selectedJob.fields["Housing Fee"]}</p>
                      )}
                    </div>
                  </div>




                  {/* Ratings */}
                  {(selectedJob.fields["Kazanç Durumu"] || selectedJob.fields["İkinci İş İmkanı"] || selectedJob.fields["Aktivite/Sosyalleşme Olanağı"]) && (
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl mb-6 border border-cyan-100">
                      <h4 className="font-bold text-gray-900 mb-3">Puanlama</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {selectedJob.fields["Kazanç Durumu"] && (
                          <div className="text-center">
                            <p className="text-xs text-gray-600 mb-1">Kazanç Durumu</p>
                            <div className="flex justify-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-3 h-3 rounded-full ${
                                    i < selectedJob.fields["Kazanç Durumu"]! ? 'bg-yellow-400' : 'bg-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                        {selectedJob.fields["İkinci İş İmkanı"] && (
                          <div className="text-center">
                            <p className="text-xs text-gray-600 mb-1">İkinci İş İmkanı</p>
                            <div className="flex justify-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-3 h-3 rounded-full ${
                                    i < selectedJob.fields["İkinci İş İmkanı"]! ? 'bg-blue-400' : 'bg-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                        {selectedJob.fields["Aktivite/Sosyalleşme Olanağı"] && (
                          <div className="text-center">
                            <p className="text-xs text-gray-600 mb-1">Aktivite/Sosyalleşme</p>
                            <div className="flex justify-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-3 h-3 rounded-full ${
                                    i < selectedJob.fields["Aktivite/Sosyalleşme Olanağı"]! ? 'bg-green-400' : 'bg-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Advisor Notes */}
                  {selectedJob.fields["Danışman Notu:"] && (
                    <div className="bg-yellow-50 p-5 rounded-xl mb-6 border-l-4 border-yellow-400">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-yellow-600" />
                        Danışman Notları
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                        {selectedJob.fields["Danışman Notu:"]}
                      </p>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {selectedJob.fields["Google Maps"] && (
                      <a
                        href={selectedJob.fields["Google Maps"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-700 font-semibold px-4 py-2 rounded-lg transition-colors border border-red-200"
                      >
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {selectedJob.fields["Youtube Link"] && (
                      <a
                        href={selectedJob.fields["Youtube Link"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-700 font-semibold px-4 py-2 rounded-lg transition-colors border border-red-200"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        <span className="text-sm">YouTube</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  {/* Gallery */}
                  {selectedJob.fields.Gallery && selectedJob.fields.Gallery.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-bold text-gray-900 mb-4">Galeri</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedJob.fields.Gallery.map((image, index) => (
                          <button
                            key={image.id}
                            onClick={() => openLightbox(
                              selectedJob.fields.Gallery!.map(img => ({
                                id: img.id,
                                url: img.url,
                                filename: img.filename
                              })),
                              index
                            )}
                            className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
                          >
                            <Image
                              src={image.thumbnails?.large?.url || image.url}
                              alt={image.filename}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                              <svg
                                className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                              </svg>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </dialog>

      {/* Lightbox Modal */}
      {lightboxOpen && typeof window !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white font-semibold">
              {lightboxIndex + 1} / {lightboxImages.length}
            </span>
          </div>

          {/* Previous Button */}
          {lightboxImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[85vh] w-full h-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImages[lightboxIndex]?.url}
              alt={lightboxImages[lightboxIndex]?.filename}
              fill
              className="object-contain"
              quality={100}
            />
          </div>

          {/* Next Button */}
          {lightboxImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          )}

          {/* Image Filename */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg max-w-md">
            <span className="text-white text-sm font-medium truncate block">
              {lightboxImages[lightboxIndex]?.filename}
            </span>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
