"use client";

import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal } from "../custom-ui/reveal";
import { SectionHeading } from "../custom-ui/section-heading";

const fieldClass =
  "w-full border border-input bg-navy-deep px-4 py-3 text-sm text-foreground placeholder:text-steel-muted outline-none transition-colors focus:border-warn focus:ring-1 focus:ring-warn";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="relative bg-navy py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            titleColor="text-foreground"
            eyebrow="Contacto"
            title="Solicitá una demo para tu flota"
            description="Contanos qué equipos operás y en qué sector. Te contactamos para evaluar la instalación de SafeMind en tu maquinaria."
          />

          <div className="mt-10 flex flex-col gap-5">
            {[
              { icon: Phone, label: "Teléfono", value: "+54 9 11 0000-0000" },
              { icon: Mail, label: "Email", value: "contacto@safemind.com.ar" },
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
                  <p className="text-sm font-medium text-foreground">
                    {c.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="border border-border bg-navy-deep p-6 sm:p-8 clip-corner">
            {sent ? (
              <div className="flex min-h-80 flex-col items-center justify-center gap-4 text-center">
                <CheckCircle2 className="size-14 text-warn" />
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                  Mensaje enviado
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Gracias por tu interés en SafeMind. Nuestro equipo te va a
                  contactar a la brevedad para coordinar la demo.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="nombre"
                      className="text-sm font-medium text-steel"
                    >
                      Nombre *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      required
                      placeholder="Tu nombre"
                      className={fieldClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="empresa"
                      className="text-sm font-medium text-steel"
                    >
                      Empresa *
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      required
                      placeholder="Nombre de la empresa"
                      className={fieldClass}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="telefono"
                    className="text-sm font-medium text-steel"
                  >
                    Teléfono *
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    placeholder="+54 9 ..."
                    className={fieldClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="mensaje"
                    className="text-sm font-medium text-steel"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Contanos qué equipos operás y en qué sector..."
                    className={`${fieldClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-1 inline-flex h-12 items-center justify-center bg-warn px-7 text-sm font-semibold uppercase tracking-wide text-warn-foreground transition-colors hover:bg-warn/90 clip-corner"
                >
                  Solicitar demo
                </button>
                <p className="text-xs leading-relaxed text-steel-muted">
                  Al enviar aceptás ser contactado por el equipo de SafeMind. No
                  compartimos tus datos con terceros.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
