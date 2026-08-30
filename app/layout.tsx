//import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/jsonLd";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const isStaging = process.env.NEXT_PUBLIC_IS_STAGING === "true";
const isProd = !isStaging;
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN ?? "https://proyectos3.com.ar";

const TITLE = "Proyectos 3: Detección de Personas por IA para Maquinaria Pesada";
const DESCRIPTION =
  "Proyectos 3 desarrolla SafeMind®, sistema de detección de personas por IA para maquinaria pesada. Funciona sin conectividad, instalación no invasiva y +100 equipos operativos en minería, construcción y petróleo.";
const OG_IMAGE = `${DOMAIN}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),

  title: {
    default: TITLE,
    template: "%s | Proyectos 3",
  },
  description: DESCRIPTION,
  keywords: [
  "Proyectos 3",
  "SafeMind",
  "sistema de detección de personas",
  "detección de personas maquinaria pesada",
  "seguridad industrial",
  "seguridad para maquinaria pesada",
  "inteligencia artificial industrial",
  "visión artificial industrial",
  "YOLOv8",
  "minería",
  "construcción",
  "petróleo",
  "oil and gas",
  "prevención de accidentes laborales",
  "seguridad vial industrial",
],

  robots: isProd
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
        noarchive: true,
        nosnippet: true,
      },

  alternates: isProd ? { canonical: DOMAIN } : undefined,

  authors: [{ name: "Proyectos 3", url: DOMAIN }],
  creator: "Proyectos 3",
  publisher: "Proyectos 3",
  applicationName: "Proyectos 3",

  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: DOMAIN,
    siteName: "Proyectos 3",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "SafeMind by Proyectos 3 - Detección de Personas por IA para Maquinaria Pesada",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },

  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1E2D3D",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <head>
        <JsonLd domain={DOMAIN} />
      </head>
      <body className="font-sans antialiased">
        {children}
        {/*process.env.NODE_ENV === "production" && <Analytics />*/}
      </body>
    </html>
  );
}