import Hero from "@/components/home-page/hero";
import Partners from "@/components/home-page/partners";
import Services from "@/components/home-page/services";
import About from "@/components/home-page/about";
import Testimonials from "@/components/home-page/testimonials";
import FAQ from "@/components/home-page/faq";
import CTASection from "@/components/home-page/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}

