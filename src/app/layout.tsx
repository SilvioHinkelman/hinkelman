import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import Header from "@/components/Header";
import { TooltipProvider } from "@/ui/tooltip";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silvio Hinkelman",
  description: "Portfolio Silvio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
        <TooltipProvider delayDuration={0} >          
          <Header />
          {children}
        </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
