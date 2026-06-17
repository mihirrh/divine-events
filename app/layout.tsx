import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://divineevents.co.uk"),
  title: {
    default: "Divine Events | Luxury Asian Wedding Decor & Mandap Hire UK",
    template: "%s | Divine Events",
  },
  description:
    "Premier luxury Asian wedding decor and mandap hire across Leicester, Birmingham, London & UK. Bespoke Hindu, Sikh & Muslim wedding ceremonies. Award-winning event production.",
  keywords: [
    "mandap hire Leicester",
    "Asian wedding decor UK",
    "luxury wedding mandap",
    "Hindu wedding decor",
    "Sikh wedding decor",
    "Muslim wedding decor",
    "Indian wedding Leicester",
    "wedding stage hire",
    "Asian wedding DJ",
    "wedding reception decor",
    "mandap hire Birmingham",
    "mandap hire London",
    "South Asian wedding",
    "luxury event production",
  ],
  authors: [{ name: "Divine Events" }],
  creator: "Divine Events",
  publisher: "Divine Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://divineevents.co.uk",
    siteName: "Divine Events",
    title: "Divine Events | Luxury Asian Wedding Decor & Mandap Hire UK",
    description:
      "Premier luxury Asian wedding decor and mandap hire across Leicester, Birmingham, London & UK. Bespoke Hindu, Sikh & Muslim wedding ceremonies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Divine Events - Luxury Asian Wedding Decor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Events | Luxury Asian Wedding Decor & Mandap Hire UK",
    description:
      "Premier luxury Asian wedding decor and mandap hire across Leicester, Birmingham, London & UK.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4AF37" />
      </head>
      <body className="antialiased bg-luxury-cream text-luxury-charcoal">
        {children}
      </body>
    </html>
  );
}

// Made with Bob
