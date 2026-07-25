"use client";

import { Cpu, Handshake, MapPinned, Quote, ShieldCheck } from "lucide-react";
import argMap from "../../public/images/map.png";
import { Counter, Reveal } from "../custom-ui/reveal";
import { SectionHeading } from "../custom-ui/section-heading";

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
    <section
      id="quienes-somos"
      className="relative border-y border-border bg-co py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Text column */}
          <div>
            <SectionHeading
              eyebrow="Quiénes somos"
              title={<>Tecnología industrial con raíces en la Patagonia</>}
              description="Proyectos 3 es una empresa de base tecnológica nacida en Neuquén, en el corazón de la actividad petrolera, gasífera y minera de Argentina. Desarrollamos soluciones de inteligencia artificial pensadas para el terreno: para la maquinaria real, en las condiciones reales de operación de la industria pesada."
            />

            <Reveal
              delay={0.1}
              className="mt-8 flex gap-4 border-l-2 border-warn bg-navy-deep/60 p-6"
            >
              <Quote className="size-6 shrink-0 text-warn" />
              <p className="text-base italic leading-relaxed text-pretty text-foreground/90">
                Creemos que la tecnología tiene que bajar al campo, no quedarse
                en la oficina. Por eso diseñamos sistemas como SafeMind pensando
                primero en el operador y en la operación, y después en el
                software.
              </p>
            </Reveal>
          </div>

          {/* Stylized map column: Argentina silhouette with Neuquén pin */}
          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-4/5 overflow-hidden border border-border bg-navy-deep clip-diagonal-b sm:aspect-5/4 lg:aspect-4/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,var(--color-navy-soft)_0%,transparent_60%)]" />

              <img
                src={argMap.src}
                alt="Mapa de Argentina con Neuquén destacado"
                className="absolute inset-0 size-full object-cover opacity-90"
                crossOrigin="anonymous"
              />

          

              
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-steel">
                <span className="size-2 animate-pulse rounded-full bg-warn" />
                Origen de operaciones
              </div>
            </div>

          
          </Reveal>
        </div>

        {/* Stat band */}
        <Reveal className="mt-14 bg-navy-soft grid grid-cols-2 gap-px overflow-hidden  lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-navy-deep p-6 text-center sm:p-8">
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
              <p className="mt-2 text-sm leading-snug text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>

    
      </div>
    </section>
  );
}
