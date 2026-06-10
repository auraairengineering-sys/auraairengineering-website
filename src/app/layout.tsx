import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "industrial humidification",
    "high-pressure misting systems",
    "outdoor cooling",
    "dust suppression systems",
    "fogging systems",
    "evaporative cooling",
    "farm climate control",
    "PLC SCADA automation",
    "environmental control systems",
    "Aura Air Engineering",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  slogan: site.tagline,
  areaServed: ["North America", "South America", "Middle East", "Africa", "Asia-Pacific", "Australia"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phones.usaHref,
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: site.phones.indiaHref,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: "English",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
