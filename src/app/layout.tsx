import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  OrganizationJsonLd,
  SoftwareApplicationJsonLd,
} from "@/components/JsonLd";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dativo.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dativo — EU Data Act Compliance Platform",
    template: "%s | Dativo",
  },
  description:
    "Operational platform for connected product manufacturers to comply with the EU Data Act (Regulation (EU) 2023/2854). Equipment registry, data sharing, trade secret protection, and compliance audit trail.",
  keywords: [
    "EU Data Act",
    "Data Act compliance",
    "connected products",
    "data sharing platform",
    "industrial IoT",
    "manufacturing compliance",
    "Regulation EU 2023/2854",
    "trade secret protection",
    "FRAND compensation",
    "product data sharing",
  ],
  authors: [{ name: "Dativo" }],
  creator: "Dativo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dativo.dev",
    siteName: "Dativo",
    title: "Dativo — EU Data Act Compliance Platform",
    description:
      "Operational platform for connected product manufacturers to comply with the EU Data Act. Equipment registry, data sharing, and compliance audit trail.",
    images: [
      {
        url: "/opengraph/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dativo — EU Data Act Compliance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dativo — EU Data Act Compliance Platform",
    description:
      "Compliance platform for connected product manufacturers under the EU Data Act.",
    images: ["/opengraph/og-image.png"],
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
  alternates: {
    canonical: "https://dativo.dev",
  },
  icons: {
    icon: "/favicons/favicon-square.svg",
    apple: "/favicons/favicon-circle.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <OrganizationJsonLd />
        <SoftwareApplicationJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
