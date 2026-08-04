import { Analytics } from "@vercel/analytics/next";
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

export const metadata: Metadata = {
  title: "SafeMind® — Detección de personas por IA para maquinaria pesada",
  description:
    "SafeMind es un sistema de detección de personas por inteligencia artificial para maquinaria pesada y vehículos industriales. Detección en tiempo real con YOLOv8, procesamiento local, instalación no invasiva. +100 equipos operativos en minería, construcción y petróleo.",
  generator: "v0.app",
  keywords: [
    "detección de personas",
    "seguridad industrial",
    "maquinaria pesada",
    "inteligencia artificial",
    "YOLOv8",
    "minería",
    "construcción",
    "petróleo",
    "SafeMind",
    "Proyectos 3",
  ],
  // Sitio de prueba: no debe indexarse hasta que se confirme el deploy definitivo
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
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
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
