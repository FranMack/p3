import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="mt-10 flex flex-col gap-5">
      {[
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
      ].map((c) => (
        <div key={c.label} className="flex items-center gap-4">
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
