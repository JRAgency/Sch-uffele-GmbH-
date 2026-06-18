import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import RevealObserver from "@/components/RevealObserver";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const siteUrl = "https://schaeuffele-gmbh.example"; // TODO Kunde: finale Domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Schäuffele GmbH | Werkzeug- und Formenbau in Brackenheim",
    template: "%s | Schäuffele GmbH",
  },
  description:
    "Präzisions-Spritzgießwerkzeuge für Thermo- und Duroplaste. Werkzeug- und Formenbau aus Brackenheim für die Elektro-/Elektronikindustrie und Automobilzulieferer.",
  keywords: [
    "Werkzeugbau",
    "Formenbau",
    "Spritzgießwerkzeuge",
    "Spritzgusswerkzeuge",
    "Duroplast",
    "Thermoplast",
    "Brackenheim",
    "Präzisionswerkzeuge",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: company.name,
    title: "Schäuffele GmbH | Werkzeug- und Formenbau",
    description:
      "Präzisions-Spritzgießwerkzeuge für Thermo- und Duroplaste — aus Brackenheim.",
    images: [{ url: "/img/konstruktion.jpg", width: 1200, height: 630, alt: company.name }],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#1f3a6e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${grotesk.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <RevealObserver />
        <JsonLd />
      </body>
    </html>
  );
}
