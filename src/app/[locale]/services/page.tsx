import ServicesHero from "@/components/services/services-hero";
import ServicesGrid from "@/components/services/services-grid";
import ServicesProcess from "@/components/services/services-process";
import ServicesCTA from "@/components/services/services-cta";

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCTA />
    </div>
  );
}
