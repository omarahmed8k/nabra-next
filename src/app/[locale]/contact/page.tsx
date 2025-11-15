import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import ContactMap from "@/components/contact/contact-map";
import ContactCTA from "@/components/contact/contact-cta";

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      
      {/* Contact Form & Info */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <ContactMap />
      <ContactCTA />
    </div>
  );
}
