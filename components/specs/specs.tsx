"use client";

import {
  Camera,
  ChevronDown,
  Cpu,
  Database,
  Download,
  FileText,
  Globe,
  MonitorPlay,
  Radar,
  Thermometer,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "../custom-ui/reveal";
import { SectionHeading } from "../custom-ui/section-heading";

type Group = {
  category: string;
  icon: LucideIcon;
  summary: string;
  rows: [string, string][];
};

const groups: Group[] = [
  {
    category: "Cámaras",
    icon: Camera,
    summary: "IP PoE 5MP · IP67 · visión nocturna",
    rows: [
      ["Tipo", "IP PoE · 5MP · IP67 (polvo, lluvia, vibración)"],
      ["Campo de visión", "100° por cámara · visión nocturna infrarroja"],
      ["Cantidad", "Hasta 4 cámaras · cobertura 360° o zonas específicas"],
    ],
  },
  {
    category: "Detección",
    icon: Radar,
    summary: "IA YOLOv8 · hasta 25 m · zonas configurables",
    rows: [
      ["Alcance", "Hasta 25 metros · configurable"],
      ["Motor de IA", "Red neuronal convolucional YOLOv8"],
      [
        "Zonas",
        "2 independientes: advertencia (warna progresiva) y alarma (grabación + alarma continua)",
      ],
    ],
  },
  {
    category: "Procesamiento",
    icon: Cpu,
    summary: "CPU 4 núcleos dedicada · gabinete antivandálico",
    rows: [
      ["Unidad", "CPU de 4 núcleos dedicada a IA"],
      ["Gabinete", "Antivandálico"],
      ["Alimentación", "12 / 24 V DC"],
    ],
  },
  {
    category: "Monitor",
    icon: MonitorPlay,
    summary: '10,1" HDMI · warnas visuales y sonoras',
    rows: [
      ["Pantalla", '10,1" HDMI con parlantes integrados'],
      ["warnas", "Visual y sonora diferenciada por nivel de riesgo"],
    ],
  },
  {
    category: "Registro",
    icon: Database,
    summary: "Hasta 30 días a bordo · GPS + timestamp",
    rows: [
      ["Grabación", "Automática con timestamp y GPS por evento"],
      ["Almacenamiento", "Hasta 30 días de eventos a bordo (~110 GB)"],
      ["Buffer", "Continuo de las últimas 24 horas"],
      ["Historial", "Clasificado por nivel de riesgo para auditoría"],
    ],
  },
  {
    category: "Plataforma web",
    icon: Globe,
    summary: "Acceso remoto · dashboard · API REST",
    rows: [
      ["Sincronización", "Automática por Wi-Fi al detectar red"],
      [
        "Acceso remoto",
        "Historial completo (video + ubicación) y configuración",
      ],
      ["Analítica", "Dashboard personalizable con estadísticas"],
      ["Integración", "API REST para sistemas propios del cliente"],
    ],
  },
  {
    category: "Operación",
    icon: Thermometer,
    summary: "Opera 100% sin internet · -20 °C a +60 °C",
    rows: [
      ["Temperatura cámaras", "-20 °C a +60 °C"],
      ["Temperatura CPU (cabina)", "0 °C a 50 °C"],
      [
        "Conectividad",
        "Funciona 100% sin internet · sincroniza al recuperar conexión",
      ],
    ],
  },
];

export function Specs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="ficha-tecnica"
      className="relative border-y border-border bg-navy py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ficha técnica"
          title="Datasheet SafeMind®"
          description="Especificaciones técnicas del sistema completo, validadas en condiciones reales de operación. Expandí cada módulo para ver el detalle."
        />

        <Reveal className="mt-12 divide-y divide-border border border-border">
          {groups.map((g, gi) => {
            const isOpen = open === gi;
            const Icon = g.icon;
            return (
              <div key={g.category} className="bg-navy">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : gi)}
                    aria-expanded={isOpen}
                    aria-controls={`spec-panel-${gi}`}
                    className="flex w-full items-center gap-4 px-4 py-4 text-left transition-colors hover:bg-navy-soft/60 sm:px-5"
                  >
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center border transition-colors ${
                        isOpen
                          ? "border-warn/50 bg-warn/10 text-warn"
                          : "border-border bg-navy-deep text-steel"
                      }`}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-xs font-bold uppercase tracking-brand text-foreground">
                        {g.category}
                      </span>
                      <span className="mt-0.5 block truncate text-sm text-steel-muted">
                        {g.summary}
                      </span>
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-steel transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-warn" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`spec-panel-${gi}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <dl className="border-t border-border">
                        {g.rows.map((r, ri) => (
                          <div
                            key={r[0]}
                            className={`grid grid-cols-1 gap-1 px-4 py-3.5 sm:grid-cols-3 sm:gap-4 sm:px-5 ${
                              ri % 2 === 0 ? "bg-navy" : "bg-navy-soft/40"
                            }`}
                          >
                            <dt className="text-sm font-medium text-steel-muted">
                              {r[0]}
                            </dt>
                            <dd className="text-sm leading-relaxed text-foreground sm:col-span-2">
                              {r[1]}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>

        {/* Download CTA */}
        <Reveal delay={0.1} className="mt-10">
          <div className="relative overflow-hidden border border-warn/30 bg-navy-deep">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, var(--color-warn) 0, var(--color-warn) 1px, transparent 1px, transparent 12px)",
              }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center border border-warn/40 bg-warn/10 text-warn">
                  <FileText className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-balance text-lg font-bold text-foreground sm:text-xl">
                    Descargá la ficha técnica completa
                  </h3>
                  <p className="mt-1 max-w-md text-pretty text-sm leading-relaxed text-steel-muted">
                    Especificaciones, diagramas de instalación y casos de uso en
                    un PDF listo para compartir con tu equipo de seguridad.
                  </p>
                </div>
              </div>
              <a
                href="#contacto"
                className="group inline-flex shrink-0 items-center justify-center gap-2 bg-warn px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-brand text-warn-foreground transition-colors hover:bg-warn/90"
              >
                <Download
                  className="size-4 transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
                Descargar PDF
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
