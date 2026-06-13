import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RODINA Hotel & SPA | L'Art de Vivre",
  description:
    "Découvrez le luxe inégalé au RODINA Hotel & SPA. Des chambres élégantes, une gastronomie de classe mondiale, des soins spa revitalisants et un service exceptionnel au cœur de la ville.",
  keywords: [
    "luxury hotel",
    "RODINA Hotel",
    "hotel spa",
    "5-star hotel",
    "premium accommodation",
    "luxury spa",
    "fine dining",
    "event venue",
    "boutique hotel",
  ],
  authors: [{ name: "RODINA Hotel & SPA" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "RODINA Hotel & SPA | L'Art de Vivre",
    description:
      "Découvrez le luxe inégalé au RODINA Hotel & SPA. Chambres de luxe, gastronomie, spa et événements.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
