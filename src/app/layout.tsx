import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
export const metadata: Metadata = {
  title: "Green AI - Corrector gramatical",
  description: "Corrige tus textos en español de manera rápida y precisa con Green AI, el corrector gramatical impulsado por inteligencia artificial.",
  icons: {
    icon: "/favicon.png",
  }/*,
  openGraph: {
    images: "/greenAI.png",
    type: "website",
    title: "Green AI - Corrector gramatical",
    description: "Corrige tus textos en español de manera rápida y precisa con Green AI, el corrector gramatical impulsado por inteligencia artificial.",
  },*/
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
