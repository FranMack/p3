"use client";

import Image from "next/image";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-end overflow-hidden pb-14 pt-28 md:items-center md:pb-0"
    >
      {/* Background image + AI feed treatment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-excavator.png"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover object-[50%_8%] scale-[1.22] md:hidden"
        />
        <Image
          src="/images/hero-excavator.png"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="hidden object-cover md:block md:object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-deep via-transparent to-navy-deep/40" />
      </div>
      <HeroContent />
    </section>
  );
}
