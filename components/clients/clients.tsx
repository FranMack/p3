import { CheckCircle2 } from "lucide-react";
import { Reveal } from "../custom-ui/reveal";

const badges = [
  "Sector petróleo y gas",
  "Sector construcción",
  "Funcionamiento validado en condiciones reales",
  "Acta de aceptación por instalación",
];

export function Clients() {
  return (
    <section className="relative border-y border-border bg-navy py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center gap-8 text-center">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-5xl font-bold text-warn sm:text-6xl">
              +100
            </span>
            <span className="max-w-xs text-left text-sm font-medium leading-snug text-steel sm:text-base">
              equipos instalados y operativos en clientes industriales
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <CheckCircle2 className="size-4 text-warn" />
                {b}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-col items-center gap-4 border-t border-border/60 pt-8 sm:flex-row sm:gap-10">
            <span className="font-mono text-[11px] uppercase tracking-brand text-steel-muted">
              Desarrollado por
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                PROYECTOS <span className="text-warn">3</span>
              </span>
              <span className="text-sm font-medium tracking-brand text-steel-muted">
                SERVICIOS INTELIGENTES
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span className="text-sm font-medium text-steel">
                Instalación en campo:{" "}
                <span className="font-semibold text-foreground">
                  PROSEIND Seguridad Industrial
                </span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
