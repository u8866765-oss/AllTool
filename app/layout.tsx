import type { Metadata } from "next";
import "./globals.css";
import AdsterraGlobal from "@/components/ads/AdsterraGlobal";
import MonetagGlobal from "@/components/ads/MonetagGlobal";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ToolNova - Free Online Tools",
  description:
    "Fast, simple and free online tools to compress images, convert files, create QR codes and simplify everyday tasks.",
  metadataBase: new URL("https://toolnova-global.pages.dev"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ToolNova - Free Online Tools",
    description: "All the tools you need. One simple place.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Google AdSense */}
        <Script
  id="google-adsense"
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6363719115069230"
  crossOrigin="anonymous"
  strategy="beforeInteractive"
/>

        {/* Existing Ad Networks */}
        <AdsterraGlobal />
        <MonetagGlobal />

        {/* Website Content */}
        {children}
      </body>
    </html>
  );
}
