import { BoundingBox } from "@/components/custom-ui/bounding-box";
import { SectionHeading } from "../custom-ui/section-heading";

const items = [
  { img: "/images/vehicles/veh-excavator.jpg", name: "Excavadoras" },
  { img: "/images/vehicles/veh-backhoe.jpg", name: "Retroexcavadoras" },
  { img: "/images/vehicles/veh-dumper.jpg", name: "Camiones fuera de ruta" },
  { img: "/images/vehicles/veh-truck.jpg", name: "Camiones de carga" },
  { img: "/images/vehicles/veh-loader.jpg", name: "Palas cargadoras" },
  { img: "/images/vehicles/veh-grader.jpg", name: "Motoniveladoras" },
  { img: "/images/vehicles/veh-crane.jpg", name: "Grúas" },
  { img: "/images/vehicles/veh-dozer.jpg", name: "Topadoras" },
  { img: "/images/vehicles/veh-roller.jpg", name: "Compactadoras" },
  { img: "/images/vehicles/veh-forklift.jpg", name: "Autoelevadores" },
];

export function Vehicles() {
  return (
    <section id="vehiculos" className="relative  py-28 md:py-36 bg-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6  md:items-start">
          <SectionHeading
            eyebrow="Vehículos compatibles"
            title="Se adapta a tu flota."
            description="SafeMind se instala en cualquier vehículo industrial sin intervenir en su electrónica. Alimentación estándar 12/24V DC y montaje mecánico externo — lo que hoy tenés operando en tu flota, mañana puede estar viendo con IA."
            className="max-w-xl"
          />
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {items.map((v, i) => (
            <li key={v.name} className="group">
              <div className="clip-corner overflow-hidden bg-brand-mist">
                <div className="relative aspect-square">
                  <img
                    src={v.img}
                    alt={v.name}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-brand-navy/40 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <BoundingBox
                      x={20 + (i % 3) * 5}
                      y={30}
                      w={35}
                      h={40}
                      label="PERSON"
                      confidence={0.92 + (i % 7) / 100}
                      delay={120}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 pb-4 pt-4">
                  <span className="font-display text-sm uppercase tracking-tight text-navy-soft font-semibold">
                    {v.name}
                  </span>
                  <span className="font-mono text-[10px] text-brand-navy/40">
                    ·{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
