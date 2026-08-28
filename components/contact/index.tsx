import { SectionHeading } from "../custom-ui/section-heading";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";

export function Contact() {
  return (
    <section id="contacto" className="relative bg-navy py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            titleColor="text-foreground"
            eyebrow="Contacto"
            title="Solicitá una demo para tu flota"
            description="Contanos qué equipos operás y en qué sector. Te contactamos para evaluar la instalación de SafeMind en tu maquinaria."
          />

          <ContactInfo />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
