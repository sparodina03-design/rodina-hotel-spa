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
  title: "MH HOTEL | Luxury Redefined",
  description:
    "Experience unparalleled luxury at MH Hotel. Discover elegantly designed rooms, world-class dining, rejuvenating spa treatments, and exceptional service in the heart of the city.",
  keywords: [
    "luxury hotel",
    "MH Hotel",
    "5-star hotel",
    "premium accommodation",
    "luxury spa",
    "fine dining",
    "event venue",
    "boutique hotel",
  ],
  authors: [{ name: "MH Hotel" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "MH HOTEL | Luxury Redefined",
    description:
      "Experience unparalleled luxury at MH Hotel. World-class rooms, dining, spa, and events.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
