"use client";

import { WhyUsDatasheet } from "./why-us-datasheet";
import { WhyUsIntro } from "./why-us-intro";
import { WhyUsReasons } from "./why-us-reasons";

export function WhyUs() {
  return (
    <section id="ficha-tecnica" className="relative  py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1.3fr]">
          <WhyUsIntro />

          <WhyUsReasons />
        </div>

        <WhyUsDatasheet />
      </div>
    </section>
  );
}

export { WhyUsDatasheet } from "./why-us-datasheet";
export { WhyUsIntro } from "./why-us-intro";
export { WhyUsReasons } from "./why-us-reasons";
