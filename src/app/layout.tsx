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
    "Get accurate Level 2 EV charger installation quotes in New Jersey. Compare costs, discover PSE&G, JCP&L, and Atlantic City Electric rebates, and connect with licensed NJ electricians. Free, no-spam quotes in 2 minutes.",
  keywords: [
    "EV charger installation New Jersey",
    "Level 2 charger install NJ",
    "EV charger quotes NJ",
    "PSE&G EV rebate",
    "JCP&L EV charger",
    "licensed electrician NJ EV charger",
    "home EV charger installation cost NJ",
    "Tesla Wall Connector install NJ",
    "NEMA 14-50 outlet installation NJ",
  ],
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
      "Free Level 2 EV charger installation quotes from licensed NJ electricians. Compare costs, find rebates from PSE&G & JCP&L, and get installed fast.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PlugWise NJ — EV Charger Installation Quotes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlugWise NJ — EV Charger Installation Quotes",
    description:
      "Get accurate Level 2 EV charger installation quotes in New Jersey. Compare costs and rebates from licensed electricians.",
    images: ["/og-image.png"],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PlugWise NJ",
              description:
                "EV charger installation quote platform connecting New Jersey homeowners with licensed electricians.",
              url: "https://plugwisenj.com",
              areaServed: {
                "@type": "State",
                name: "New Jersey",
              },
              serviceType: "EV Charger Installation",
              offers: {
                "@type": "Offer",
                name: "Level 2 EV Charger Installation Quote",
                description:
                  "Free quotes for Level 2 EV charger installation from licensed NJ electricians.",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
