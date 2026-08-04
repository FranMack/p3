import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * Shared PROYECTOS 3 logo asset used across the site.
 */
export function Logo({
  className,
  priority = false,
  sizes = "149px",
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={cn("relative block", className)}>
      <Image
        src="/images/logo_2.png"
        alt="PROYECTOS 3 — Servicios Inteligentes"
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain"
      />
    </div>
  );
}
