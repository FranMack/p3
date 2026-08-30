export function JsonLd({ domain }: { domain: string }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Proyectos 3",
            url: domain,
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Proyectos 3",
            url: domain,

            logo: {
              "@type": "ImageObject",
              url: `${domain}/icon-512.png`,
            },

            image: `${domain}/og-image.jpg`,

            description:
              "Sistema de detección de personas por inteligencia artificial para maquinaria pesada y vehículos industriales.",

            areaServed: "Argentina",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Proyectos 3",
            url: domain,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Embedded Linux",

            description:
              "Detección de personas en tiempo real con YOLOv8 para maquinaria pesada. Procesamiento local, instalación no invasiva, +100 equipos operativos en minería, construcción y petróleo.",

            image: `${domain}/og-image.jpg`,

            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              areaServed: "Argentina",
            },
          }),
        }}
      />
    </>
  );
}
