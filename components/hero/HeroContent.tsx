
import { Camera, Cpu, ShieldCheck } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="animate-hero-enter-up [animation-delay:0ms] inline-flex items-center gap-2 border border-border bg-navy/60 px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-brand text-steel backdrop-blur-sm">
          Sistema de detección de personas
        </span>

        <h1 className="mt-5 animate-hero-enter-up [animation-delay:80ms] font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
          Detectá personas{" "}
          <span className="text-warn">antes de que sea tarde</span>
        </h1>

        <p className="mt-6 max-w-xl animate-hero-enter-up [animation-delay:160ms] text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
          Inteligencia artificial a bordo de tu maquinaria pesada. SafeMind
          reconoce personas, ciclistas y vehículos en tiempo real, procesa todo
          de forma local y alerta al operador en el momento exacto —{" "}
          <span className="text-foreground">sin depender de internet.</span>
        </p>

        <div className="mt-8 flex animate-hero-enter-up flex-col gap-3 [animation-delay:240ms] sm:flex-row">
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
        </div>

        <ul className="mt-10 flex animate-hero-enter-fade flex-wrap gap-x-8 gap-y-4 border-t border-border/60 pt-6 [animation-delay:360ms]">
          {[
            { icon: Camera, label: "Hasta 4 cámaras · 360°" },
            { icon: Cpu, label: "Procesamiento local YOLOv8" },
            { icon: ShieldCheck, label: "Instalación no invasiva" },
          ].map((f) => (
            <li key={f.label} className="flex items-center gap-2.5">
              <f.icon className="size-5 text-warn" />
              <span className="text-sm font-medium text-steel">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
