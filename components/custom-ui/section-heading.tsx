import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-warn" />
        <span className="font-mono text-xs font-semibold uppercase tracking-brand text-warn">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  )
}
