"use client";

import { Cpu, Handshake, MapPinned, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../custom-ui/section-heading";
import { AboutMap } from "./about-map";
import { AboutQuote } from "./about-quote";

// TODO: reemplazar con info real de la empresa (año de fundación, cantidad de
// equipos si no coincide con la cifra ya usada en "Clients", y alcance geográfico)
type Stat =
  | { kind: "year"; value: number; label: string }
  | { kind: "count"; value: number; suffix: string; label: string }
  | { kind: "text"; text: string; label: string };

const stats: Stat[] = [
  { kind: "year", value: 2021, label: "Fundada" },
  {
    kind: "count",
    value: 100,
    suffix: "+",
    label: "Equipos con SafeMind instalado",
  },
  { kind: "text", text: "Petróleo, gas y construcción", label: "Sectores" },
  {
    kind: "text",
    text: "Neuquén, Patagonia y expansión nacional",
    label: "Alcance",
  },
];

const values = [
  { icon: MapPinned, label: "Cercanía de campo" },
  { icon: Cpu, label: "Ingeniería propia" },
  { icon: ShieldCheck, label: "Foco en seguridad operativa" },
  { icon: Handshake, label: "Soporte real, no solo venta" },
];

export function AboutUs() {
  return (
    <section id="quienes-somos" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Text column */}
          <div>
            <SectionHeading
              eyebrow="Quiénes somos"
              title={<>Tecnología industrial con raíces en la Patagonia</>}
              description="Proyectos 3 es una empresa de base tecnológica nacida en Neuquén, en el corazón de la actividad petrolera, gasífera y minera de Argentina. Desarrollamos soluciones de inteligencia artificial pensadas para el terreno: para la maquinaria real, en las condiciones reales de operación de la industria pesada."
            />

            <AboutQuote />
          </div>

          {/* Stylized map column: Argentina silhouette with Neuquén pin */}
          <AboutMap />
        </div>

        {/* Stat band */}
        {/*<Reveal className="mt-14  grid grid-cols-2 gap-px overflow-hidden  lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className=" p-6 text-center sm:p-8">
              <div className="font-display text-3xl font-bold text-warn sm:text-4xl">
                {s.kind === "year" && (
                  // TODO: reemplazar con el año real de fundación
                  <span>{s.value}</span>
                )}
                {s.kind === "count" && (
                  <Counter to={s.value} suffix={s.suffix} />
                )}
                {s.kind === "text" && (
                  <span className="block text-lg leading-snug sm:text-xl">
                    {s.text}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-snug text-navy">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>*/}
      </div>
    </section>
  );
}

export { AboutMap } from "./about-map";
export { AboutQuote } from "./about-quote";
