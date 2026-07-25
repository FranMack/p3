import { cn } from '@/lib/utils'

/**
 * PROYECTOS 3 isotype — a faceted hexagonal mark with three converging
 * planes, paired with the "PROYECTOS 3" wordmark and the
 * "SERVICIOS INTELIGENTES" tagline. This is the company brand; SafeMind
 * is the product name used within the body copy.
 */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 40 40"
        className="size-8 shrink-0"
        role="img"
        aria-label="PROYECTOS 3 — Servicios Inteligentes"
        fill="none"
      >
        {/* faceted hexagon frame */}
        <path
          d="M20 2 5 11v18l15 9 15-9V11L20 2Z"
          className="stroke-steel"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity={0.35}
        />
        {/* three converging planes forming the "3" facet */}
        <path
          d="M20 2 5 11l15 9 15-9L20 2Z"
          className="fill-steel"
          opacity={0.9}
        />
        <path
          d="M5 11v18l15 9V20L5 11Z"
          className="fill-steel"
          opacity={0.45}
        />
        <path
          d="M35 11v18l-15 9V20l15-9Z"
          className="fill-steel"
          opacity={0.2}
        />
      </svg>
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            PROYECTOS <span className="text-steel">3</span>
          </span>
          <span className="text-[9px] font-medium tracking-brand text-steel-muted">
            SERVICIOS INTELIGENTES
          </span>
        </div>
      )}
    </div>
  )
}
