"use client";

import { useCountUp } from "@/app/hooks/useCountUp";
import { Download, FileText } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    t: "Funciona sin internet",
    d: "Procesamiento 100% local en el vehículo. Sincroniza al recuperar Wi-Fi, no antes.",
  },
  {
    t: "No invasivo",
    d: "No interviene la electrónica del equipo. Alimentación estándar 12/24V DC.",
  },
  {
    t: "Instalación llave en mano",
    d: "Cámaras, unidad de IA, monitor y plataforma web entregados y calibrados en campo.",
  },
  {
    t: "Dashboard personalizable",
    d: "Historial clasificado por nivel, video + GPS, y API REST para integrar con sus sistemas.",
  },
  {
    t: "Validado en campo",
    d: "Instalado y operativo en más de 100 equipos en petróleo y construcción.",
  },
  {
    t: "Soporte y garantía",
    d: "Soporte técnico in-situ y remoto durante el contrato. Garantía de hardware y software.",
  },
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const count = useCountUp(100, visible);

  return (
    <section id="ficha-tecnica" className="relative  py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1.3fr]">
          <div ref={ref}>
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
                Validado en condiciones reales en clientes de petróleo y
                construcción, con acta de aceptación por cada instalación.
              </p>
            </div>
          </div>

          <ul className="grid gap-px self-start sm:grid-cols-2">
            {reasons.map((r, i) => (
              <li key={r.t} className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs text-warn">
                    ·{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-brand-navy/20" />
                </div>
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-navy-soft">
                  {r.t}
                </h3>
                <p className="mt-2 text-sm text-brand-navy/70">{r.d}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 overflow-hidden border border-brand-navy/20 bg-navy-soft">
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
                  Especificaciones técnicas detalladas, diagramas de instalación
                  y casos de uso en un PDF listo para compartir con tu equipo de
                  seguridad o compras.
                </p>
              </div>
            </div>
            <Link
              href="/safeMind-ficha-tecnica.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 bg-warn px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-brand text-warn-foreground transition-colors hover:bg-warn/90"
            >
              <Download
                className="size-4 transition-transform group-hover:translate-y-0.5"
                aria-hidden="true"
              />
              Descargar PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
