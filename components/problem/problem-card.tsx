"use client";

import { useIsVisible } from "@/app/hooks/use-is-visible";
import { ProblemCardProps } from "./problem-grid";

export function ProblemCard({ problem, index }: { problem: ProblemCardProps; index: number }) {
  const [ref, isVisible] = useIsVisible(0.2);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`flex h-full flex-col gap-3 bg-navy-soft p-6 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <problem.icon className="size-6 text-warn" />
      <h3 className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
        {problem.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {problem.text}
      </p>
    </div>
  );
}
