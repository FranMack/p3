"use client";

import { Camera, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { DetectionBox } from "../custom-ui/detection-box";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-end overflow-hidden pb-14 pt-28 md:items-center md:pb-0"
    >
      {/* Background image + AI feed treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-excavator.png"
          alt="Excavadora Komatsu operando en obra con un trabajador cercano"
          className="size-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />

        {/* Live detection overlays drawn over the scene */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative mx-auto h-full max-w-7xl">
            <DetectionBox
              label="PERSONA"
              confidence={98}
              variant="warn"
              pulse
              className="right-[10%] top-[46%] h-[34%] w-[13%] sm:right-[14%] sm:w-[10%]"
            />
            <DetectionBox
              label="MAQUINARIA"
              confidence={94}
              variant="scan"
              className="right-[24%] top-[30%] hidden h-[45%] w-[42%] md:block"
            />
          </div>
          {/* scan sweep line */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 overflow-hidden">
            <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-warn/15 to-transparent animate-scan" />
          </div>
        </motion.div>

        {/* HUD corner + REC indicator */}
        <div className="absolute right-4 top-24 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-steel sm:right-8">
          <span className="size-2 animate-pulse rounded-full bg-warn" />
          REC · IA ACTIVA
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-border bg-navy/60 px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-brand text-steel backdrop-blur-sm"
          >
            Sistema de detección de personas
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
          >
            Detectá personas{" "}
            <span className="text-warn">antes de que sea tarde</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg"
          >
            Inteligencia artificial a bordo de tu maquinaria pesada. SafeMind
            reconoce personas, ciclistas y vehículos en tiempo real, procesa
            todo de forma local y warna al operador en el momento exacto —{" "}
            <span className="text-foreground">sin depender de internet.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contacto"
              className="inline-flex h-12 items-center justify-center bg-warn px-7 text-sm font-semibold uppercase tracking-wide text-warn-foreground transition-colors hover:bg-warn/90 clip-corner"
            >
              Solicitar demo
            </a>
            <a
              href="#como-funciona"
              className="inline-flex h-12 items-center justify-center border border-steel/40 bg-navy/40 px-7 text-sm font-semibold uppercase tracking-wide text-foreground backdrop-blur-sm transition-colors hover:border-steel hover:bg-navy/70"
            >
              Ver cómo funciona
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border/60 pt-6"
          >
            {[
              { icon: Camera, label: "Hasta 4 cámaras · 360°" },
              { icon: Cpu, label: "Procesamiento local YOLOv8" },
              { icon: ShieldCheck, label: "Instalación no invasiva" },
            ].map((f) => (
              <li key={f.label} className="flex items-center gap-2.5">
                <f.icon className="size-5 text-warn" />
                <span className="text-sm font-medium text-steel">
                  {f.label}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
