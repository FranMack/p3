import { SectionHeading } from "../custom-ui/section-heading";
import { ProblemGrid } from "./problem-grid";
import { ProblemImage } from "./problem-image";

export function Problem() {
  return (
    <section id="como-funciona" className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="El problema"
            title={<>Lo que el ojo humano no llega a ver</>}
            description="En obra, minería o campo petrolero, la seguridad depende de reaccionar a tiempo. SafeMind cubre lo que los espejos y la atención humana no pueden."
          />
          <ProblemGrid />
        </div>

        {/* Image with detection boxes drawing in on scroll */}
        <ProblemImage />
      </div>
    </section>
  );
}
