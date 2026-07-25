"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { SectionHeading } from "../custom-ui/section-heading";

const items = [
  {
    src: "/images/camera-install.png",
    title: "Cámara IP PoE instalada",
    caption: "5MP · IP67 · visión nocturna infrarroja",
  },
  {
    src: "/images/monitor-cabin.png",
    title: "Monitor en cabina",
    caption: 'Pantalla 10,1" con warna visual y sonora',
  },
  {
    src: "/images/dashboard.png",
    title: "Plataforma web",
    caption: "Historial, mapa GPS y estadísticas",
  },
  {
    src: "/images/install-field.png",
    title: "Instalación en campo",
    caption: "Calibración y validación funcional",
  },
  {
    src: "/images/night-worker.png",
    title: "Detección nocturna",
    caption: "Reconocimiento con poca luz mediante IR",
  },
];

export function Gallery() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="relative border-y border-border bg-navy-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="En el terreno"
            title="El sistema, instalado y operando"
            className="max-w-xl"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Anterior"
              className="inline-flex size-11 items-center justify-center border border-border bg-navy-deep text-foreground transition-colors hover:border-warn hover:text-warn"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Siguiente"
              className="inline-flex size-11 items-center justify-center border border-border bg-navy-deep text-foreground transition-colors hover:border-warn hover:text-warn"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((it) => (
            <figure
              key={it.title}
              className="group relative w-[85%] shrink-0 snap-start sm:w-[55%] lg:w-[38%]"
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-border">
                <img
                  src={it.src || "/placeholder.svg"}
                  alt={it.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/10 to-transparent" />
                <span className="absolute left-3 top-3 size-3 border-l-2 border-t-2 border-steel" />
                <span className="absolute right-3 top-3 size-3 border-r-2 border-t-2 border-steel" />
              </div>
              <figcaption className="mt-4">
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
                  {it.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {it.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
