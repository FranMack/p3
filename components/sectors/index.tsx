import { SectionHeading } from "../custom-ui/section-heading";
import { SectorCard } from "./sector-card";

export interface SectorProps {
  src: string;
  name: string;
  text: string;
}

const sectors: SectorProps[] = [
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
    src: "/images/vehicles/veh-forklift.jpg",
    name: "Logística",
    text: "Montacargas y camiones circulando junto a personal en depósitos, puertos y centros de distribución.",
  },
];

export function Sectors() {
  return (
    <section id="sectores" className="relative py-12 md:py-20 lg:py-28 bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleColor="text-foreground"
          eyebrow="Sectores"
          title="Donde el margen de error es cero"
          description="SafeMind opera en las industrias donde la maquinaria pesada y las personas comparten el mismo espacio."
        />

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {sectors.map((s, i) => (
            <SectorCard key={s.name} sector={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
