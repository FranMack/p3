"use client";

import { useIsVisible } from "@/app/hooks/use-is-visible";
import { useCountUp } from "@/app/hooks/useCountUp";

export function WhyUsIntro() {
  const [ref, visible] = useIsVisible(0.3);

  const count = useCountUp(100, visible);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-warn" />
        <span className="font-mono text-xs font-semibold uppercase tracking-brand text-warn">
          Por qué Proyectos 3
        </span>
      </div>
      <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-balance text-navy-soft sm:text-4xl md:text-5xl">
        Pensado para
        <br />
        operar en el
        <br />
        mundo real.
      </h2>
      <div className="mt-10 border-l-2 border-brand-detect pl-6">
        <div className="font-display text-7xl leading-none text-brand-navy md:text-8xl">
          +{count}
        </div>
        <div className="label-eyebrow mt-3 text-brand-navy/70">
          Equipos instalados y operativos
        </div>
        <p className="mt-4 max-w-sm text-sm text-brand-navy/70">
          Validado en condiciones reales en clientes de petróleo y construcción,
          con acta de aceptación por cada instalación.
        </p>
      </div>
    </div>
  );
}
