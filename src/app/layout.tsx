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
  openGraph: {
    type: "website",
    title: "Green AI - Corrector gramatical",
    description: "Corrige tus textos en español de manera rápida y precisa con Green AI, el corrector gramatical impulsado por inteligencia artificial.",
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
