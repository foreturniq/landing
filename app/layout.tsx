import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foreturniq.com"),
  title: {
    default: "Foreturn IQ - Golf Course Food & Beverage Pre-Ordering Platform",
    template: "%s | Foreturn IQ",
  },
  description:
    "Let golfers pre-order food and drinks before their round from their own phone. Your kitchen gets a timed order queue. More F&B revenue, no new hardware, no staff retraining.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://foreturniq.com",
    siteName: "Foreturn IQ",
    title: "Foreturn IQ - Golf Course Food & Beverage Pre-Ordering Platform",
    description:
      "Let golfers pre-order food and drinks before their round from their own phone. More F&B revenue, no new hardware, no staff retraining.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Foreturn IQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foreturn IQ - Golf Course F&B Pre-Ordering",
    description:
      "Let golfers pre-order food and drinks before their round. More revenue, no hardware, no retraining.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
