"use client";

import { ProblemCardProps } from "./problem-grid";


export function ProblemCard({ problem }: { problem: ProblemCardProps }) {
  return (
    <div className="flex h-full flex-col gap-3 bg-navy-soft p-6">
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
