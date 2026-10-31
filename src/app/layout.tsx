import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content/copy";

const heading = Schibsted_Grotesk({ subsets: ["latin"], weight: ["600", "700", "800", "900"], variable: "--font-heading" });
const body = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  robots: { index: false, follow: false },
  openGraph: { title: site.title, description: site.description, type: "website", locale: "en_NZ", siteName: site.name },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  icons: { icon: "/icon.png" },
};

export const viewport: Viewport = { themeColor: "#1c2534" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
