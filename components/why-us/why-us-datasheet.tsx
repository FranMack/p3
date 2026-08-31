"use client";

import { useIsVisible } from "@/app/hooks/use-is-visible";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

export function WhyUsDatasheet() {
  const [ref, visible] = useIsVisible(0.2);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mt-10 overflow-hidden border border-brand-navy/20 bg-navy-soft">
        <div className="relative flex flex-col items-center gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center border border-warn/40 bg-warn/10 text-warn">
              <FileText className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-balance text-lg font-bold text-foreground sm:text-xl">
                ¿Necesitás el datasheet completo?
              </h3>
              <p className="mt-1 max-w-md text-pretty text-sm leading-relaxed text-steel-muted">
                Especificaciones técnicas detalladas, diagramas de instalación y
                casos de uso en un PDF listo para compartir con tu equipo de
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
  );
}
