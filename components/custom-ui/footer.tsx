import { Logo } from "./logo";

const cols = [
  {
    title: "Navegación",
    links: [
      { label: "Quiénes somos", href: "#quienes-somos" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Servicios", href: "#servicios" },
      { label: "Galería", href: "#galeria" },
      { label: "Ficha técnica", href: "#ficha-tecnica" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Teléfono", href: "tel:+5491100000000" },
      { label: "Email", href: "mailto:info@proseind.com" },
      { label: "WhatsApp", href: "https://wa.me/5491100000000" },
      { label: "Cobertura", href: "#contacto" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo className="h-12 w-44.5" sizes="178px" />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Sistema de detección de personas por inteligencia artificial para
              maquinaria pesada y vehículos industriales. Procesamiento local,
              instalación no invasiva.
            </p>
            <p className="text-sm text-steel-muted">
              Desarrollado por Proyectos 3 / Servicios Inteligentes ·
              Instalación en campo: PROSEIND Seguridad Industrial.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-mono text-xs font-bold uppercase tracking-brand text-steel">
                {c.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      {...(l.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-steel-muted">
            © {new Date().getFullYear()} Proyectos 3. Todos los derechos
            reservados.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-brand text-steel-muted">
            Sistema de detección de personas · IA a bordo
          </p>
        </div>
      </div>
    </footer>
  );
}
