import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import AnalyticsProvider from "./components/AnalyticsProvider";
import { CONTENT_GROUPS } from "./lib/analytics";
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
    default: "Foreturn IQ - Golf Course F&B Pre-Ordering for General Managers & F&B Directors",
    template: "%s | Foreturn IQ",
  },
  description:
    "The pre-ordering platform built for golf course GMs, assistant managers, and F&B directors. Let golfers order food and drinks before their round. Your kitchen gets a timed queue. No hardware, no retraining.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://foreturniq.com",
    siteName: "Foreturn IQ",
    title: "Foreturn IQ - Golf Course F&B Pre-Ordering for General Managers & F&B Directors",
    description:
      "The pre-ordering platform built for golf course GMs, assistant managers, and F&B directors. More F&B revenue, no new hardware, no staff retraining.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Foreturn IQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foreturn IQ - Golf Course F&B Pre-Ordering for GMs & F&B Directors",
    description:
      "Built for golf course general managers and F&B directors. More revenue per round, no hardware, no retraining.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GA_DEBUG = process.env.NODE_ENV !== "production";

// Inline init so content_group is set before the first page_view fires.
const gaInit = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  var groups = ${JSON.stringify(CONTENT_GROUPS)};
  var path = location.pathname.replace(/\\/+$/, '') || '/';
  gtag('set', { content_group: groups[path] || 'other' });
  gtag('config', '${GA_ID}'${GA_DEBUG ? ", { debug_mode: true }" : ""});
`;

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
      <body className="min-h-full flex flex-col">
        {children}
        <AnalyticsProvider />
      </body>
      {GA_ID && (
        <>
          <Script id="ga-init" strategy="afterInteractive">
            {gaInit}
          </Script>
          <Script
            id="ga-lib"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
        </>
      )}
    </html>
  );
}
