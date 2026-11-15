import type { Metadata } from "next";
import "./globals.css";
import AdsterraGlobal from "@/components/ads/AdsterraGlobal";

export const metadata: Metadata = {
  title: "ToolNova – Free Online Tools",
  description:
    "Fast, simple and free online tools to compress images, convert files, create QR codes and simplify everyday digital tasks.",
  metadataBase: new URL("https://toolnova-global.pages.dev"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "ToolNova – Free Online Tools",
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
        <AdsterraGlobal />
        {children}
      </body>
    </html>
  );
}
