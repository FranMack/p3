"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  const showPrev = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + items.length) % items.length,
    );
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % items.length));

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <section className="relative  py-20 md:py-28 bg-foreground">
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
          {items.map((it, i) => (
            <figure
              key={it.title}
              className="group relative w-[85%] shrink-0 snap-start sm:w-[55%] lg:w-[38%]"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Ver ${it.title} en pantalla completa`}
                className="relative block aspect-4/3 w-full cursor-zoom-in overflow-hidden border border-border"
              >
                <img
                  src={it.src || "/placeholder.svg"}
                  alt={it.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/10 to-transparent" />
                <span className="absolute left-3 top-3 size-3 border-l-2 border-t-2 border-steel" />
                <span className="absolute right-3 top-3 size-3 border-r-2 border-t-2 border-steel" />
              </button>
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

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Cerrar"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-warn hover:text-warn"
          >
            <X className="size-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Anterior"
            className="absolute left-4 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center border border-border text-foreground transition-colors hover:border-warn hover:text-warn"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Siguiente"
            className="absolute right-4 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center border border-border text-foreground transition-colors hover:border-warn hover:text-warn"
          >
            <ChevronRight className="size-5" />
          </button>

          <figure
            className="max-h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[lightboxIndex].src || "/placeholder.svg"}
              alt={items[lightboxIndex].title}
              className="max-h-[80vh] w-auto max-w-full object-contain"
              crossOrigin="anonymous"
            />
            <figcaption className="mt-4 text-center">
              <h3 className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
                {items[lightboxIndex].title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {items[lightboxIndex].caption}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
