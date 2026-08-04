"use client";

import { BoundingBox, ScanLine } from "@/components/custom-ui/bounding-box";
import {
  Cpu,
  Database,
  MonitorPlay,
  ScanSearch,
  Siren,
  Video,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "../custom-ui/section-heading";

// ─── Data ──────────────────────────────────────────────────────────────────────

const steps = [
  {
    icon: Video,
    title: "Cámaras",
    text: "Hasta 4 cámaras IP captan el entorno de la máquina en 360° o zonas específicas.",
  },
  {
    icon: Cpu,
    title: "Procesamiento local",
    text: "Una unidad dedicada procesa el video a bordo con IA, sin depender de internet.",
  },
  {
    icon: ScanSearch,
    title: "Detección",
    text: "La red neuronal YOLOv8 reconoce personas, ciclistas y vehículos en tiempo real.",
  },
  {
    icon: Siren,
    title: "Alarma",
    text: "warna visual y sonora diferenciada según el nivel de riesgo de la zona.",
  },
  {
    icon: MonitorPlay,
    title: "Verificación visual",
    text: 'El operador confirma la situación en el monitor de cabina de 10,1".',
  },
  {
    icon: Database,
    title: "Registro",
    text: "Cada evento se graba con timestamp y GPS para auditoría y análisis.",
  },
];

// ─── Step Visuals ──────────────────────────────────────────────────────────────

/** Shared photo card used by the steps that don't need extra overlays. */
function PhotoCard({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="clip-corner relative aspect-4/5 w-80 overflow-hidden border border-border bg-navy-soft">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="320px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
      </div>
      <p className="font-mono text-[10px] tracking-widest text-warn/60">
        {caption}
      </p>
    </div>
  );
}

function VisualCameras() {
  return (
    <PhotoCard
      src="/images/camera-install.png"
      alt="Cámara IP instalada en maquinaria pesada"
      caption="4× IP CAM · 360°"
    />
  );
}

function VisualCPU() {
  return (
    <PhotoCard
      src="/images/install-field.png"
      alt="Gabinete de procesamiento instalado en campo"
      caption="PROC. LOCAL · SIN INTERNET"
    />
  );
}

function VisualDetection() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative aspect-4/5 w-80 overflow-hidden border border-border bg-navy-deep">
        <Image
          src="/images/night-worker.png"
          alt="Trabajador con casco y chaleco reflectante detectado por la IA"
          fill
          sizes="320px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
        <ScanLine />
        <BoundingBox
          x={20}
          y={8}
          w={58}
          h={80}
          label="PERSON"
          confidence={0.97}
          delay={280}
        />
        <div className="absolute bottom-1.5 right-2 font-mono text-[9px] text-warn/70">
          &lt;&nbsp;40ms
        </div>
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-1 top-1 h-3 w-3 border-l border-t border-warn/30" />
          <span className="absolute right-1 top-1 h-3 w-3 border-r border-t border-warn/30" />
          <span className="absolute bottom-1 left-1 h-3 w-3 border-b border-l border-warn/30" />
          <span className="absolute bottom-1 right-1 h-3 w-3 border-b border-r border-warn/30" />
        </div>
      </div>
      <div className="flex items-center gap-2 font-mono text-[10px]">
        <motion.span
          className="text-warn"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 0.85, repeat: Infinity }}
        >
          ●
        </motion.span>
        <span className="tracking-widest text-warn/60">DETECCIÓN ACTIVA</span>
      </div>
    </div>
  );
}

function VisualAlarm() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative aspect-4/5 w-80 overflow-hidden border border-warn/40 bg-navy-deep">
        <Image
          src="/images/sector-construction.png"
          alt="Obra de construcción con alerta de zona de riesgo activada"
          fill
          sizes="320px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warn/25 via-navy-deep/55 to-navy-deep/15" />
        <div className="absolute inset-0 flex items-center justify-center">
          {[100, 70, 44].map((size, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-warn"
              style={{ width: size, height: size }}
              animate={{ opacity: [0.15, 0.6, 0.15], scale: [1, 1.08, 1] }}
              transition={{
                duration: 2.2,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          <motion.div
            className="relative z-10 flex size-14 items-center justify-center rounded-full bg-warn"
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
          >
            <Siren className="size-6 text-warn-foreground" />
          </motion.div>
        </div>
      </div>
      <div className="flex items-center gap-3 font-mono text-[10px]">
        <span className="border border-warn px-2 py-0.5 tracking-widest text-warn">
          ZONA ROJA
        </span>
        <span className="tracking-widest text-warn/55">NIVEL ALTO</span>
      </div>
    </div>
  );
}

function VisualMonitor() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div>
        <div className="relative h-60 w-88 overflow-hidden rounded-sm border-2 border-border bg-navy-deep">
          <div className="absolute inset-0.75 overflow-hidden bg-navy">
            <Image
              src="/images/monitor-cabin.png"
              alt="Monitor de 10,1 pulgadas instalado en la cabina del operador"
              fill
              sizes="352px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-navy-deep/20" />
            <ScanLine delay={700} />
            <BoundingBox
              x={12}
              y={4}
              w={76}
              h={88}
              label="PERSON"
              confidence={0.95}
              delay={550}
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-navy-deep/80 px-2 py-0.5">
              <div className="flex items-center gap-1.5">
                <motion.span
                  className="text-[8px] text-warn"
                  animate={{ opacity: [1, 0.25, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                >
                  ●
                </motion.span>
                <span className="font-mono text-[8px] text-warn">LIVE</span>
              </div>
              <span className="font-mono text-[8px] text-muted-foreground">
                CAM-B
              </span>
            </div>
          </div>
          <div className="absolute inset-x-0 top-0 h-0.5 bg-warn/25" />
        </div>
        <div className="mx-auto mt-1 h-4 w-12 bg-border/35" />
        <div className="mx-auto h-1 w-24 bg-border/25" />
      </div>
      <p className="font-mono text-[10px] tracking-widest text-warn/60">
        MONITOR 10.1&quot; · CABINA
      </p>
    </div>
  );
}

function VisualLog() {
  const entries = [
    { time: "14:23:07.412", type: "ALERT ", msg: "PERSON DETECTED" },
    { time: "14:23:07.418", type: "GPS   ", msg: "-34.6037, -58.3816" },
    { time: "14:23:07.425", type: "RECORD", msg: "EVENT #0412 SAVED" },
  ];
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative aspect-4/5 w-80 overflow-hidden border border-border bg-navy-deep">
        <Image
          src="/images/dashboard.png"
          alt="Plataforma web mostrando el registro de eventos con timestamp y GPS"
          fill
          sizes="320px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 space-y-1.5 p-3">
          {entries.map((e, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-1.5 border border-border/60 bg-navy-deep/85 px-2 py-1 font-mono text-[8px]"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.18 + 0.08 }}
            >
              <span className="shrink-0 text-muted-foreground/50">
                {e.time}
              </span>
              <span className="shrink-0 font-bold text-warn">{e.type}</span>
              <span className="truncate text-steel-muted/75">{e.msg}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <p className="font-mono text-[10px] tracking-widest text-warn/60">
        TIMESTAMP · GPS · AUDITORÍA
      </p>
    </div>
  );
}

const VISUALS = [
  VisualCameras,
  VisualCPU,
  VisualDetection,
  VisualAlarm,
  VisualMonitor,
  VisualLog,
];

// ─── Main Component ────────────────────────────────────────────────────────────

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { rootMargin: "-35% 0px -45% 0px", threshold: 0 },
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const Visual = VISUALS[active];

  return (
    <section
      id="como-funciona"
      className="relative  bg-navy py-20 md:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
        titleColor="text-foreground"
          eyebrow="Cómo funciona"
          title="Del entorno al registro, en milisegundos"
          description="Un flujo continuo que convierte lo que ven las cámaras en decisiones de seguridad accionables para el operador."
        />

        <div className="mt-20 flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* ── Steps list ── */}
          <ol className="relative flex-1 pb-[20vh]">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === active;
              const isPast = i < active;

              return (
                <li
                  key={step.title}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className={`relative flex gap-5 ${i < steps.length - 1 ? "pb-14" : ""}`}
                >
                  {/* Timeline column: circle + connector */}
                  <div className="relative z-10 flex shrink-0 flex-col items-center">
                    {/* Step circle */}
                    <div
                      className={[
                        "relative flex size-11 items-center justify-center rounded-full border-2 transition-all duration-300",
                        isActive
                          ? "border-warn bg-navy-deep"
                          : isPast
                            ? "border-warn/35 bg-navy"
                            : "border-border bg-navy",
                      ].join(" ")}
                    >
                      <Icon
                        className={[
                          "size-4 transition-colors duration-300",
                          isActive
                            ? "text-warn"
                            : isPast
                              ? "text-warn/40"
                              : "text-muted-foreground/30",
                        ].join(" ")}
                      />
                      {/* Pulse ring for active step */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border border-warn"
                          animate={{ scale: [1, 1.75], opacity: [0.55, 0] }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      )}
                    </div>

                    {/* Connector line to next step */}
                    {i < steps.length - 1 && (
                      <div className="relative mt-1.5 w-px grow bg-border/45">
                        <motion.div
                          className="absolute inset-x-0 top-0 bg-warn"
                          animate={{ height: isPast ? "100%" : "0%" }}
                          transition={{ duration: 0.55, ease: "easeInOut" }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={[
                      "min-w-0 flex-1 pb-2 pt-1 transition-opacity duration-300",
                      isActive
                        ? "opacity-100"
                        : isPast
                          ? "opacity-45"
                          : "opacity-25",
                    ].join(" ")}
                  >
                    {/* Step number */}
                    <p
                      className={[
                        "mb-2 font-mono text-[10px] font-bold tracking-widest transition-colors duration-300",
                        isActive ? "text-warn" : "text-muted-foreground/35",
                      ].join(" ")}
                    >
                      {isActive && <span className="mr-1.5">▶</span>}
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>

                    {/* Mobile inline visual (shown for active step only) */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-6 flex lg:hidden"
                      >
                        <Visual />
                      </motion.div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
          {/* ── Sticky visual panel (desktop only) ── */}
          <div className="hidden lg:block lg:w-[42%] lg:shrink-0 ">
            <div className="clip-corner sticky top-[calc(50vh-260px)] flex h-144 flex-col items-center justify-center overflow-hidden border border-border bg-navy-deep">
              {/* Subtle grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(oklch(0.62 0.015 235) 1px, transparent 1px), linear-gradient(90deg, oklch(0.62 0.015 235) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              {/* Step counter */}
              <p className="mb-6 font-mono text-[10px] tracking-[0.28em] text-warn/45">
                PASO {String(active + 1).padStart(2, "0")} / 06
              </p>
              {/* Visual */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  <Visual />
                </motion.div>
              </AnimatePresence>
              {/* Progress dots */}
              <div className="mt-8 flex items-center gap-2">
                {steps.map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-px bg-warn"
                    animate={{
                      width: i === active ? 28 : 8,
                      opacity: i === active ? 1 : 0.2,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
