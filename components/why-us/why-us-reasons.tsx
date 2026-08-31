"use client";

import { useIsVisible } from "@/app/hooks/use-is-visible";

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

export function WhyUsReasons() {
  const [ref, visible] = useIsVisible(0.2);

  return (
    <ul ref={ref} className="grid gap-px self-start sm:grid-cols-2">
      {reasons.map((r, i) => (
        <li
          key={r.t}
          style={{ transitionDelay: `${i * 100}ms` }}
          className={`p-6 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
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
  );
}
