import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dativo.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dativo — EU Data Act Compliance for Connected Product Manufacturers",
    template: "%s | Dativo",
  },
  description:
    "Dativo helps industrial manufacturers comply with the EU Data Act. Automate product data sharing with customers and third parties under Articles 3–6.",
  keywords: [
    "EU Data Act",
    "Data Act compliance",
    "connected products",
    "industrial manufacturing",
    "data sharing",
    "OEM compliance",
  ],
  openGraph: {
    title: "Dativo — EU Data Act Compliance Platform",
    description:
      "Automate EU Data Act compliance for connected product manufacturers. Manage data sharing obligations with customers and authorized third parties.",
    url: "https://dativo.dev",
    siteName: "Dativo",
    locale: "en_EU",
    type: "website",
    images: [
      {
        url: "/opengraph/banner.png",
      },
    ],
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
