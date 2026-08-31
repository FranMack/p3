import { SectionHeading } from "../custom-ui/section-heading";
import { VehicleCard } from "./vehicle-card";

const items = [
  { img: "/images/vehicles2/excavadora.webp", name: "Excavadoras" },
  { img: "/images/vehicles2/retropala.webp", name: "Retroexcavadoras" },
  { img: "/images/vehicles2/camion-volcador.webp", name: "Camiones volcadores" },
  { img: "/images/vehicles2/camion.webp", name: "Camiones de carga" },
  { img: "/images/vehicles2/pala-frontal.webp", name: "Palas cargadoras" },
  { img: "/images/vehicles2/motoniveladora.webp", name: "Motoniveladoras" },
  { img: "/images/vehicles2/veh-crane.jpg", name: "Grúas" },
  { img: "/images/vehicles2/veh-dozer.jpg", name: "Topadoras" },
  { img: "/images/vehicles2/compactador.webp", name: "Compactadoras" },
  { img: "/images/vehicles2/veh-forklift.jpg", name: "Autoelevadores" },
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
            <VehicleCard key={v.name} vehicle={v} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
