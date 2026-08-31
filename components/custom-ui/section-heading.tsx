"use client";
import { useIsVisible } from "@/app/hooks/use-is-visible";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowColor = "text-warn",
  titleColor = "text-navy-soft",
  descriptionColor = "text-muted-foreground",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  eyebrowColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  className?: string;
}) {
  const [ref, isVisible] = useIsVisible(0.25);
  return (
    <div
      ref={ref}
      className={cn(
        "flex max-w-2xl flex-col gap-4 transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-warn" />
        <span
          className={cn(
            "font-mono text-xs font-semibold uppercase tracking-brand",
            eyebrowColor,
          )}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-5xl",
          titleColor,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-relaxed text-pretty md:text-lg",
            descriptionColor,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
