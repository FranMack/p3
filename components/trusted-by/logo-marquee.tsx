"use client";

import Image from "next/image";

export interface TrustedLogo {
  src: string;
  name: string;
}

export function LogoMarquee({ logos }: { logos: TrustedLogo[] }) {
  const track = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <span className="sr-only">
        Empresas que confían en nosotros: {logos.map((l) => l.name).join(", ")}
      </span>

      <div
        aria-hidden="true"
        className="animate-marquee flex w-max gap-10 hover:[animation-play-state:paused] motion-reduce:animate-none sm:gap-16"
      >
        {track.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="group relative h-14 w-32 shrink-0 sm:h-16 sm:w-40"
          >
            {/* single-pass scan sweep, only on hover */}
            <span className="motion-reduce:hidden pointer-events-none absolute inset-x-0 top-[-30%] h-px bg-warn/80 opacity-0 shadow-[0_0_12px_2px_rgba(255,176,32,0.45)] transition-[top,opacity] duration-700 ease-out group-hover:top-[130%] group-hover:opacity-100" />
            <Image
              src={logo.src}
              alt=""
              fill
              sizes="160px"
              className="object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
