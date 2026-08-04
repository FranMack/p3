"use client";

import { Eye, EyeOff, Timer, TriangleAlert } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { DetectionBox } from "../custom-ui/detection-box";
import { Reveal } from "../custom-ui/reveal";
import { SectionHeading } from "../custom-ui/section-heading";

const problems = [
  {
    icon: EyeOff,
    title: "Puntos ciegos",
    text: "En vehículos de gran porte, los espejos y la observación humana no alcanzan a cubrir todo el entorno de la máquina.",
  },
  {
    icon: Eye,
    title: "Visibilidad limitada",
    text: "Durante maniobras críticas, una persona cercana puede pasar completamente desapercibida para el operador.",
  },
  {
    icon: Timer,
    title: "Tiempo de reacción",
    text: "El margen para reaccionar es mínimo. Cada segundo cuenta cuando hay una persona en la zona de trabajo.",
  },
  {
    icon: TriangleAlert,
    title: "Riesgo permanente",
    text: "Detectar a tiempo a alguien en el área de operación no siempre es simple, y el error no tiene margen.",
  },
];

export function Problem() {
  const imgRef = useRef<HTMLDivElement>(null);
  const inView = useInView(imgRef, { once: true, margin: "-120px" });

  return (
    <section id="problema" className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="El problema"
            title={<>Lo que el ojo humano no llega a ver</>}
            description="En obra, minería o campo petrolero, la seguridad depende de reaccionar a tiempo. SafeMind cubre lo que los espejos y la atención humana no pueden."
          />
          <div className="mt-10 grid gap-3 overflow-hidden border border-border  sm:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className="flex h-full flex-col gap-3 bg-navy-soft p-6"
              >
                <p.icon className="size-6 text-warn" />
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Image with detection boxes drawing in on scroll */}
        <div className="order-1 lg:order-2">
          <div
            ref={imgRef}
            className="relative aspect-[4/5] overflow-hidden border border-border clip-diagonal-b"
          >
            <img
              src="/images/workers-site.png"
              alt="Trabajadores con casco y chaleco reflectante junto a maquinaria pesada"
              className="size-full object-cover"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-navy-deep/25" />

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <DetectionBox
                label="PERSONA"
                confidence={97}
                variant="warn"
                pulse
                className="left-[16%] top-[34%] h-[46%] w-[26%]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <DetectionBox
                label="PERSONA"
                confidence={91}
                variant="warn"
                className="right-[18%] top-[40%] h-[40%] w-[24%]"
              />
            </motion.div>

            <div className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-steel">
              <span className="size-2 animate-pulse rounded-full bg-warn" />2
              personas detectadas · zona de riesgo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
