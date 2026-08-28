"use client";

import { cn } from "@/lib/utils";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CloudUpload,
  Radar,
  Server,
  Wrench,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "../custom-ui/reveal";
import { SectionHeading } from "../custom-ui/section-heading";

const pillars = [
  {
    icon: Radar,
    index: "01",
    title: "Detección",
    text: "IA en tiempo real con red neuronal YOLOv8 entrenada para entornos industriales. Reconoce personas, ciclistas y vehículos hasta 25 metros.",
    points: [
      "Red neuronal YOLOv8",
      "2 zonas configurables",
      "Alcance hasta 25 m",
    ],
    image: "/images/service-1.webp",
    alt: "Trabajador detectado por la IA con bounding box en tiempo real",
    caption: "DETECCIÓN ACTIVA · <40MS",
  },
  {
    icon: Server,
    index: "02",
    title: "Infraestructura",
    text: "Sistema robusto y no invasivo que no interviene la electrónica del vehículo. Procesa a bordo y funciona incluso sin conectividad.",
    points: [
      "Instalación no invasiva",
      "Procesamiento local",
      "Gabinete antivandálico",
    ],
    image: "/images/install-field.png",
    alt: "Gabinete de procesamiento instalado en campo",
    caption: "PROC. LOCAL · SIN INTERNET",
  },
  {
    icon: CloudUpload,
    index: "03",
    title: "Registro",
    text: "Grabación automática de cada evento con timestamp y GPS. Hasta 30 días de eventos a bordo y sincronización a la plataforma web.",
    points: [
      "Video + GPS por evento",
      "Hasta 30 días (~110GB)",
      "Plataforma web + API REST",
    ],
    image: "/images/dashboard.png",
    alt: "Plataforma web con el registro de eventos, timestamp y GPS",
    caption: "PLATAFORMA WEB · API REST",
  },
  {
    icon: Wrench,
    index: "04",
    title: "Soporte",
    text: "Instalación con calibración, validación funcional y acta de aceptación. Soporte técnico in-situ y remoto durante toda la vigencia del contrato.",
    points: [
      "Calibración en campo",
      "Soporte in-situ y remoto",
      "Garantía hardware y software",
    ],
    image: "/images/camera-install.png",
    alt: "Técnico instalando y calibrando el sistema en una máquina",
    caption: "INSTALACIÓN · CALIBRACIÓN EN CAMPO",
  },
];

type Pillar = (typeof pillars)[number];

// ─── Shared pieces ─────────────────────────────────────────────────────────────

function PillarText({
  pillar,
  compact,
}: {
  pillar: Pillar;
  compact?: boolean;
}) {
  const Icon = pillar.icon;
  return (
    <div className="flex flex-col gap-5">
      {!compact ? (
        <div className="space-y-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center border border-border bg-navy-deep text-warn clip-corner sm:size-12 md:size-16">
              <Icon className="size-5 md:size-7" />
            </div>
            <h3 className="min-w-0 font-display text-xl font-bold uppercase tracking-wide text-foreground sm:text-2xl md:text-3xl">
              {pillar.title}
            </h3>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground ">
            {pillar.text}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex size-11 items-center justify-center border border-border bg-navy-deep text-warn clip-corner">
            <Icon className="size-5" />
          </div>
          <p className="text-sm leading-relaxed text-foreground">
            {pillar.text}
          </p>
        </div>
      )}
      <ul className="flex flex-col gap-2.5 border-t border-border/60 pt-4">
        {pillar.points.map((pt) => (
          <li key={pt} className="flex items-center gap-2.5 text-sm text-steel">
            <Check className="size-3.5 shrink-0 text-warn" />
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PillarVisual({
  pillar,
  compact,
}: {
  pillar: Pillar;
  compact?: boolean;
}) {
  const isDetection = pillar.title === "Detección";
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={cn(
          "clip-corner relative w-full overflow-hidden ",
          compact ? "aspect-16/10" : "aspect-4/5 md:aspect-16/11",
        )}
      >
        <Image
          src={pillar.image}
          alt={pillar.alt}
          fill
          sizes={compact ? "100vw" : "(min-width: 1024px) 40vw, 100vw"}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
      </div>
      <p className="font-mono text-[10px] tracking-widest text-warn/60">
        {pillar.caption}
      </p>
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────────

const AUTO_ADVANCE_MS = 6000;

export function Services() {
  const [active, setActive] = useState(0);
  const activePillar = pillars[active];

  const goPrev = () =>
    setActive((prev) => (prev - 1 + pillars.length) % pillars.length);
  const goNext = () => setActive((prev) => (prev + 1) % pillars.length);

  // Auto-advance only on desktop (lg+); restarts whenever `active` changes.
  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const id = setTimeout(() => {
      setActive((prev) => (prev + 1) % pillars.length);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <section id="servicios" className="relative py-20 md:py-28 bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleColor="text-foreground"
          eyebrow="Qué ofrecemos"
          title="Una solución completa, de punta a punta"
          description="SafeMind no es solo software. Es hardware industrial, IA a bordo, registro en la nube y soporte en campo integrados en un mismo sistema."
        />

        {/* ── Desktop: tab selector + big visual panel ── */}
        <div className="mt-14 hidden lg:block">
          <Reveal className="flex items-stretch justify-between gap-6 border-b border-border">
            <div className="flex flex-wrap items-stretch gap-x-10">
              {pillars.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.title}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "group relative flex items-center gap-2.5 pb-4 font-display text-xl font-bold uppercase tracking-wide transition-colors",
                      isActive
                        ? "text-warn"
                        : "text-steel-muted hover:text-steel",
                    )}
                  >
                    <span className="font-mono text-xs font-normal tracking-widest opacity-60">
                      {p.index}
                    </span>
                    {p.title}
                    {isActive && (
                      <motion.span
                        layoutId="services-tab-underline"
                        className="absolute inset-x-0 -bottom-px h-0.5 bg-warn"
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mb-4 flex items-center gap-2 self-center">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Pilar anterior"
                className="flex size-9 items-center justify-center border border-border text-steel-muted transition-colors hover:border-warn hover:text-warn"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Pilar siguiente"
                className="flex size-9 items-center justify-center border border-border text-steel-muted transition-colors hover:border-warn hover:text-warn"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-16 pt-12 lg:grid-cols-2 lg:items-center"
            >
              <PillarText pillar={activePillar} />
              <PillarVisual pillar={activePillar} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Mobile / tablet: accordion ── */}
        <div className="mt-12 flex flex-col divide-y divide-border lg:hidden">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const isActive = i === active;
            return (
              <Reveal key={p.title} delay={i * 0.05} className="py-5">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <Icon
                      className={cn(
                        "size-5",
                        isActive ? "text-warn" : "text-steel-muted",
                      )}
                    />
                    <span
                      className={cn(
                        "font-display text-base font-bold uppercase tracking-wide",
                        isActive ? "text-warn" : "text-foreground",
                      )}
                    >
                      {p.title}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 text-steel-muted transition-transform duration-300",
                      isActive && "rotate-180 text-warn",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-6 pt-5">
                        <PillarText pillar={p} compact />
                        <PillarVisual pillar={p} compact />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
