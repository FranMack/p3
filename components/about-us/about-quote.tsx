"use client";

import { useIsVisible } from "@/app/hooks/use-is-visible";
import { Quote } from "lucide-react";

export function AboutQuote() {
  const [ref, isVisible] = useIsVisible(0.2);

  return (
    <div
      ref={ref}
      className={`mt-8 flex gap-4 border-l-2 border-warn bg-navy-soft p-6 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <Quote className="size-6 shrink-0 text-warn" />
      <p className="text-base italic leading-relaxed text-pretty text-foreground/90">
        Creemos que la tecnología tiene que bajar al campo, no quedarse en la
        oficina. Por eso diseñamos sistemas como SafeMind pensando primero en el
        operador y en la operación, y después en el software.
      </p>
    </div>
  );
}
