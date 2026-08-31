"use client";
import { useIsVisible } from "@/app/hooks/use-is-visible";
import Image from "next/image";

export const ProblemImage = () => {
  const [ref, isVisible] = useIsVisible(0.5);
  return (
    <div
      ref={ref}
      className={`order-1 lg:order-2 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"} transition-all duration-700 ease-out `}
    >
      <div className="relative aspect-4/5 overflow-hidden border border-border clip-diagonal-b">
        <Image
          src="/images/the-problem.webp"
          alt="Trabajadores con casco y chaleco reflectante junto a maquinaria pesada"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/25" />
      </div>
    </div>
  );
};
