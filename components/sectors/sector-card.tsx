"use client";

import Image from "next/image";
import { SectorProps } from ".";
import { Reveal } from "../custom-ui/reveal";

interface SectorCardProps {
  sector: SectorProps;
  index: number;
}

export const SectorCard = ({ sector, index }: SectorCardProps) => {
  return (
    <Reveal
      key={sector.name}
      delay={index * 0.08}
      className="group relative aspect-square sm:aspect-3/4 overflow-hidden border border-border"
    >
      <Image
        src={sector.src || "/placeholder.svg"}
        alt={sector.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-navy-deep via-navy-deep/50 to-transparent sm:bg-linear-to-t" />
      {/* mobile: full overlay for centered text legibility */}
      <div className="absolute inset-0 bg-navy-deep/40 sm:hidden" />

      <div className="absolute inset-0 flex items-center justify-center sm:hidden">
        <h3 className="font-display text-base font-bold uppercase tracking-wide text-foreground text-center px-2">
          {sector.name}
        </h3>
      </div>

      <div className="hidden sm:block absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-center gap-2">
          <span className="h-px w-6 bg-warn" />

          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
            {sector.name}
          </h3>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-steel opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {sector.text}
        </p>
      </div>
    </Reveal>
  );
};
