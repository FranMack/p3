import { MessageCircle } from 'lucide-react'

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5491100000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20SafeMind"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-0 overflow-hidden border border-steel/30 bg-navy/90 py-3 pl-3 pr-3 text-foreground shadow-lg backdrop-blur-md transition-all hover:border-warn hover:pr-4 clip-corner"
    >
      <span className="relative flex size-7 items-center justify-center">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-warn/40" />
        <MessageCircle className="relative size-6 text-warn" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-2.5 group-hover:max-w-[10rem]">
        Escribinos
      </span>
    </a>
  )
}
