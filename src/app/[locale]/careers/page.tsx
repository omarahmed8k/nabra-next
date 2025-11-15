import CareersHero from "@/components/careers/careers-hero";
import CareersBenefits from "@/components/careers/careers-benefits";
import CareersApplicationForm from "@/components/careers/careers-application-form";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <CareersHero />
      <CareersBenefits />
      <CareersApplicationForm />
    </div>
  );
}
