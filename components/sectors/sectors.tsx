import { Reveal } from "../custom-ui/reveal";
import { SectionHeading } from "../custom-ui/section-heading";

const sectors = [
  {
    src: "/images/sector-oil.png",
    name: "Petróleo y gas",
    text: "Vehículos y equipos en yacimientos, con detección en entornos remotos y sin conectividad.",
  },
  {
    src: "/images/sector-construction.png",
    name: "Construcción",
    text: "Obras con múltiples máquinas y personal a pie compartiendo el mismo espacio de trabajo.",
  },
  {
    src: "/images/sector-mining.png",
    name: "Minería",
    text: "Equipos de gran porte en operaciones a cielo abierto y condiciones extremas.",
  },
  {
    src: "/images/hero-excavator.png",
    name: "Maquinaria pesada",
    text: "Excavadoras, camiones y equipos industriales donde el punto ciego es un riesgo diario.",
  },
];

export function Sectors() {
  return (
    <section id="sectores" className="relative bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sectores"
          title="Donde el margen de error es cero"
          description="SafeMind opera en las industrias donde la maquinaria pesada y las personas comparten el mismo espacio."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 0.08}
              className="group relative aspect-[3/4] overflow-hidden border border-border"
            >
              <img
                src={s.src || "/placeholder.svg"}
                alt={s.name}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-warn" />
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                    {s.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-steel opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
