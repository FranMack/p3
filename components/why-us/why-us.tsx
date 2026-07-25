"use client";

import {
  BadgeCheck,
  Download,
  FileText,
  Headset,
  LayoutDashboard,
  Package,
  PlugZap,
  WifiOff,
} from "lucide-react";
import { Counter, Reveal } from "../custom-ui/reveal";
import { SectionHeading } from "../custom-ui/section-heading";

const reasons = [
  {
    icon: WifiOff,
    title: "Funciona sin internet",
    text: "Todo el procesamiento es local, a bordo del vehículo. Sincroniza al recuperar conexión.",
  },
  {
    icon: PlugZap,
    title: "No invasivo",
    text: "No interviene la electrónica del vehículo. Se instala sin alterar los sistemas de fábrica.",
  },
  {
    icon: Package,
    title: "Instalación all-in-one",
    text: "Cámaras, procesamiento, monitor y plataforma en una sola solución integrada.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard personalizable",
    text: "Estadísticas, historial y configuración remota desde la plataforma web con API REST.",
  },
  {
    icon: BadgeCheck,
    title: "Validado en campo real",
    text: "Más de 100 equipos operativos en clientes de petróleo y construcción.",
  },
  {
    icon: Headset,
    title: "Soporte y garantía",
    text: "Soporte técnico in-situ y remoto, con garantía de hardware y software.",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Equipos instalados y operativos" },
  { value: 25, suffix: " m", label: "Alcance de detección configurable" },
  { value: 30, suffix: " días", label: "De eventos almacenados a bordo" },
  { value: 360, suffix: "°", label: "Cobertura con 4 cámaras" },
];

export function WhyUs() {
  return (
    <section id="por-que" className="relative bg-navy-deep py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Por qué SafeMind"
          title="Pensado para la realidad del campo"
          description="No es un prototipo de laboratorio. Es un sistema probado en las condiciones más exigentes de la industria."
        />

        <Reveal className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-navy p-6 text-center sm:p-8">
              <div className="font-display text-4xl font-bold text-warn sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>

        <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={(i % 3) * 0.08}
              className="flex flex-col gap-3 bg-navy p-6 md:p-7"
            >
              <r.icon className="size-6 text-warn" />
              <h3 className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-8">
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
                    ¿Necesitás el datasheet completo?
                  </h3>
                  <p className="mt-1 max-w-md text-pretty text-sm leading-relaxed text-steel-muted">
                    Especificaciones técnicas detalladas, diagramas de
                    instalación y casos de uso en un PDF listo para compartir
                    con tu equipo de seguridad o compras.
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
