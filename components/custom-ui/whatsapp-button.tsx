const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="size-5 shrink-0 fill-current"
  >
    <path d="M20.5 3.5A11.8 11.8 0 0 0 12.04 0C5.46.02.12 5.34.12 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.7a11.8 11.8 0 0 0 5.73 1.47h.01c6.58 0 11.92-5.33 11.92-11.9 0-3.18-1.24-6.17-3.46-8.37Zm-8.46 18.3h-.01a9.8 9.8 0 0 1-4.98-1.36l-.36-.21-3.74 1.01 1-3.64-.24-.37a9.8 9.8 0 0 1-1.5-5.23C2.21 6.51 6.54 2.2 12.04 2.2c2.63 0 5.1 1.03 6.95 2.88a9.76 9.76 0 0 1 2.88 6.92c0 5.5-4.34 9.8-9.83 9.8Zm5.71-7.35c-.31-.15-1.82-.9-2.1-1-.28-.1-.48-.16-.68.15-.2.31-.78 1-.95 1.2-.17.2-.35.22-.66.08-.31-.15-1.29-.48-2.45-1.53-.9-.8-1.5-1.79-1.68-2.1-.17-.31-.02-.48.13-.63.13-.13.31-.35.46-.52.15-.17.2-.29.31-.49.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.94-2.25-.25-.6-.5-.52-.68-.52h-.58c-.2 0-.52.08-.8.38-.28.31-1.06 1.03-1.06 2.52s1.09 2.94 1.24 3.14c.15.2 2.14 3.26 5.18 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.35Z" />
  </svg>
);

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5491100000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20SafeMind"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.32)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#20c05c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
    >
      <WhatsAppIcon />
    </a>
  );
}
