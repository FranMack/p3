"use client";

import { useIsVisible } from "@/app/hooks/use-is-visible";
import Image from "next/image";
import argMap from "../../public/images/map.png";

export function AboutMap() {
  const [ref, isVisible] = useIsVisible(0.2);

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
      }`}
    >
      <div className="relative aspect-4/5 overflow-hidden clip-diagonal-b sm:aspect-5/4 lg:aspect-4/5">
        <div className="absolute inset-0" />
        <Image
          src={argMap}
          alt="Mapa de Argentina con Neuquén destacado"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover opacity-90"
        />
      </div>
    </div>
  );
}
