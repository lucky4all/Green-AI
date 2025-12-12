import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Green AI - Corrector gramatical",
  description: "Corrige tus textos en español de manera rápida y precisa con Green AI, el corrector gramatical impulsado por inteligencia artificial.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "corrector gramatical",
    "IA",
    "inteligencia artificial",
    "corrección de textos",
    "español",
    "gramática",
    "ortografía",
    "redacción",
    "herramienta de escritura",
    "mejora de textos",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    },
  },
  openGraph: {
    type: "website",
    title: "Green AI - Corrector gramatical",
    description: "Corrige tus textos en español de manera rápida y precisa con Green AI, el corrector gramatical impulsado por inteligencia artificial.",
    url: "https://green-ai-rho.vercel.app",
    siteName: "Green AI",
    images: [
      {
        url: "/favicon.png",
        width: 800,
        height: 600,
      },
    ],
  }
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <head></head>
      <body>
        <header>
          <NavBar />
        </header>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
