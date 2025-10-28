import { Hero } from "@/components/home/hero";
import { WhyStudyzone } from "@/components/home/why-studyzone";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";
import { ContactForm } from "@/components/forms/contact-form";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyStudyzone />
      <Stats />
      <Testimonials />
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ücretsiz Danışmanlık
              </h2>
              <p className="text-lg text-gray-600">
                Yurtdışı eğitim hayallerinizi gerçekleştirmek için formu doldurun,
                uzman ekibimiz en kısa sürede sizinle iletişime geçsin.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
