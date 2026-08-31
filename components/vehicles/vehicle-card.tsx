"use client";

import { useIsVisible } from "@/app/hooks/use-is-visible";
import Image from "next/image";

interface Vehicle {
  img: string;
  name: string;
}

export const VehicleCard = ({
  vehicle,
  index,
}: {
  vehicle: Vehicle;
  index: number;
}) => {
  const [ref, isVisible] = useIsVisible(0.2);

  return (
    <li
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="clip-corner overflow-hidden bg-brand-mist">
        <div className="relative aspect-square">
          <Image
            src={vehicle.img}
            alt={vehicle.name}
            width={900}
            height={900}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-brand-navy/40 mix-blend-multiply transition-opacity group-hover:opacity-0" />
        </div>

        <div className="flex items-center justify-between px-4 pb-4 pt-4">
          <span className="font-display text-sm font-semibold uppercase tracking-tight text-navy-soft">
            {vehicle.name}
          </span>
          <span className="font-mono text-[10px] text-brand-navy/40">
            ·{String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </li>
  );
};
