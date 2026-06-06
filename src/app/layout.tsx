import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PlugWise NJ — EV Charger Installation Quotes in New Jersey",
  description:
    "PlugWise NJ helps New Jersey homeowners request Level 2 EV charger installation quotes from photos and connect with independent installation providers where available. Compare costs and discover rebate options.",
  authors: [{ name: "PlugWise NJ" }],
  creator: "PlugWise NJ",
  metadataBase: new URL("https://plugwisenj.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://plugwisenj.com",
    siteName: "PlugWise NJ",
    title: "PlugWise NJ — EV Charger Installation Quotes in New Jersey",
    description:
      "Request Level 2 EV charger installation quotes from your photos. Compare costs and rebate options. PlugWise NJ connects NJ homeowners with independent installation providers.",
  },
  twitter: {
    card: "summary",
    title: "PlugWise NJ — EV Charger Installation Quotes",
    description:
      "Request Level 2 EV charger quotes in New Jersey. Compare costs and rebate options. PlugWise NJ connects homeowners with independent installation providers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
