"use client";

import { useIsVisible } from "@/app/hooks/use-is-visible";
import { ContactFormData, contactSchema } from "@/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const fieldClass =
  "w-full border border-input bg-navy-deep px-4 py-3 text-sm text-foreground placeholder:text-steel-muted outline-none transition-colors focus:border-warn focus:ring-1 focus:ring-warn";

const errorClass = "text-xs text-red-400 mt-1";

const errorFieldClass =
  "border-red-400 focus:border-red-400 focus:ring-red-400";

export const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [ref, isVisible] = useIsVisible(0.2);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setServerError(null);
    try {
      const res = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setServerError(
          json.error ?? "Error al enviar el mensaje. Intentá de nuevo.",
        );
        return;
      }
      setSent(true);
    } catch {
      setServerError("Error de red. Revisá tu conexión e intentá de nuevo.");
    }
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: "100ms" }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="border border-border bg-navy-deep p-6 sm:p-8 clip-corner">
        {sent ? (
          <div className="flex min-h-80 flex-col items-center justify-center gap-4 text-center">
            <CheckCircle2 className="size-14 text-warn" />
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
              Mensaje enviado
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Gracias por tu interés en Proyectos 3. Nuestro equipo te va a
              contactar a la brevedad para coordinar la demo.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-steel">
                Nombre *
              </label>
              <input
                id="name"
                placeholder="Tu nombre"
                className={`${fieldClass} ${errors.name ? errorFieldClass : ""}`}
                {...register("name")}
              />
              {errors.name && (
                <p className={errorClass}>{errors.name.message}</p>
              )}
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-steel"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@empresa.com"
                  className={`${fieldClass} ${errors.email ? errorFieldClass : ""}`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className={errorClass}>{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-steel"
                >
                  Teléfono
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+54 9 ..."
                  className={fieldClass}
                  {...register("phone")}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-steel"
              >
                Mensaje *
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Contanos qué equipos operás y en qué sector..."
                className={`${fieldClass} resize-none ${errors.message ? errorFieldClass : ""}`}
                {...register("message")}
              />
              {errors.message && (
                <p className={errorClass}>{errors.message.message}</p>
              )}
            </div>
            {serverError && (
              <p className="rounded border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm text-red-400">
                {serverError}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-1 inline-flex h-12 items-center justify-center gap-2 bg-warn px-7 text-sm font-semibold uppercase tracking-wide text-warn-foreground transition-colors hover:bg-warn/90 disabled:opacity-60 clip-corner"
            >
              {isSubmitting && <Loader2 className="size-4 animate-spin" />}
              Enviar Mensaje
            </button>
            <p className="text-xs leading-relaxed text-steel-muted">
              Al enviar aceptás ser contactado por el equipo de Proyectos 3. No
              compartimos tus datos con terceros.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
