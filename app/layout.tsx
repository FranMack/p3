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
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN ?? "https://safemind.ar";
const TITLE = "SafeMind® | Detección de Personas por IA para Maquinaria Pesada";
const DESCRIPTION =
  "Sistema de detección de personas por inteligencia artificial para maquinaria pesada y vehículos industriales. Detección en tiempo real con YOLOv8, procesamiento local e instalación no invasiva. +100 equipos operativos en minería, construcción y petróleo.";
const OG_IMAGE = `${DOMAIN}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),

  title: {
    default: TITLE,
    template: "%s | SafeMind®",
  },
  description: DESCRIPTION,
  keywords: [
    "detección de personas",
    "seguridad industrial",
    "maquinaria pesada",
    "inteligencia artificial",
    "YOLOv8",
    "minería",
    "construcción",
    "petróleo",
    "oil and gas",
    "SafeMind",
    "prevención de accidentes",
    "visión artificial",
    "seguridad vial industrial",
    "Argentina",
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

  authors: [{ name: "SafeMind®", url: DOMAIN }],
  creator: "SafeMind®",
  publisher: "SafeMind®",

  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: DOMAIN,
    siteName: "SafeMind®",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "SafeMind® - Detección de Personas por IA para Maquinaria Pesada",
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
