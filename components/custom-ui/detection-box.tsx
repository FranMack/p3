import { cn } from '@/lib/utils'

type Variant = 'scan' | 'warn' | 'alert'

const styles: Record<Variant, { border: string; label: string; text: string }> =
  {
    scan: {
      border: 'border-steel',
      label: 'bg-steel/90',
      text: 'text-navy-deep',
    },
    warn: {
      border: 'border-warn',
      label: 'bg-warn/90',
      text: 'text-navy-deep',
    },
    alert: {
      border: 'border-alert',
      label: 'bg-alert',
      text: 'text-alert-foreground',
    },
  }

/**
 * YOLO-style bounding box overlay. Positioned absolutely over an image via
 * inline `style` percentages so it scales with the container.
 */
export function DetectionBox({
  label,
  confidence,
  variant = 'scan',
  style,
  className,
  pulse = false,
}: {
  label: string
  confidence?: number
  variant?: Variant
  style?: React.CSSProperties
  className?: string
  pulse?: boolean
}) {
  const s = styles[variant]
  return (
    <div
      className={cn('pointer-events-none absolute', className)}
      style={style}
      aria-hidden="true"
    >
      <div
        className={cn(
          'relative h-full w-full border-2 border-dashed',
          s.border,
          pulse && 'animate-pulse-ring',
        )}
      >
        {/* solid corner brackets */}
        <span className={cn('absolute -left-px -top-px size-3 border-l-2 border-t-2', s.border)} />
        <span className={cn('absolute -right-px -top-px size-3 border-r-2 border-t-2', s.border)} />
        <span className={cn('absolute -bottom-px -left-px size-3 border-b-2 border-l-2', s.border)} />
        <span className={cn('absolute -bottom-px -right-px size-3 border-b-2 border-r-2', s.border)} />

        <span
          className={cn(
            'absolute -top-6 left-0 flex items-center gap-1.5 whitespace-nowrap px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider',
            s.label,
            s.text,
          )}
        >
          {label}
          {confidence != null && (
            <span className="opacity-80">{confidence}%</span>
          )}
        </span>
      </div>
    </div>
  )
}
