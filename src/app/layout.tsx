import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "Easy AI | Agentes Autônomos & Automação Extrema",
  description: "Implementação de Inteligência Artificial e Automação para empresas. Escalamos resultados e reduzimos custos operativos com Agentes de IA.",
  icons: {
    icon: "/brand/logo_black_icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body className="bg-background text-foreground antialiased min-h-screen selection:bg-primary/30 selection:text-primary-foreground">
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
