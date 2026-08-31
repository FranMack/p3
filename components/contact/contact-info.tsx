"use client";

import { useIsVisible } from "@/app/hooks/use-is-visible";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const ContactInfo = () => {
  const [ref, isVisible] = useIsVisible(0.2);

  const items = [
    { icon: Phone, label: "Teléfono", value: "+54 9 11 0000-0000" },
    { icon: Mail, label: "Email", value: "info@proseind.com" },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Respuesta directa por WhatsApp",
    },
    {
      icon: MapPin,
      label: "Cobertura",
      value: "Instalación in-situ en todo el país",
    },
  ];

  return (
    <div ref={ref} className="mt-10 flex flex-col gap-5">
      {items.map((c, index) => (
        <div
          key={c.label}
          style={{ transitionDelay: `${index * 100}ms` }}
          className={`flex items-center gap-4 transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex size-11 shrink-0 items-center justify-center border border-border bg-navy-deep text-warn clip-corner">
            <c.icon className="size-5" />
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-brand text-steel-muted">
              {c.label}
            </p>
            <p className="text-sm font-medium text-foreground">{c.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
