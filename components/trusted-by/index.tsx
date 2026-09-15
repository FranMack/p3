import { SectionHeading } from "../custom-ui/section-heading";
import { LogoMarquee, type TrustedLogo } from "./logo-marquee";

const logos: TrustedLogo[] = [
  { src: "/images/logos/Techint.png", name: "Techint" },
  { src: "/images/logos/sacde.png", name: "Sacde" },
  { src: "/images/logos/aesa.png", name: "AESA" },
  { src: "/images/logos/ops.png", name: "OPS" },
  { src: "/images/logos/contreras-hermanos.png", name: "Contreras Hermanos" },
  { src: "/images/logos/alequip.png", name: "Alequip" },
  { src: "/images/logos/ribeiro.png", name: "Ribeiro" },
];

export function TrustedBy() {
  return (
    <section className="relative pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Clientes"
          title="Confían en nosotros"
          description="Empresas líderes de la región ya operan con Proyectos 3 en sus flotas."
        />
      </div>

      <div className="mt-10">
        <LogoMarquee logos={logos} />
      </div>
    </section>
  );
}
