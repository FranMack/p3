import type { MetadataRoute } from "next";

// Sitio de prueba: bloquear todos los crawlers hasta el deploy definitivo
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
