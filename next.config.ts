import type { NextConfig } from "next";

// Content-Security-Policy, shipped in Report-Only mode first (see
// app/api/csp-report). After a week of clean reports in the Netlify function
// logs, switch the header key below to "Content-Security-Policy" to enforce it.
// Third parties: Google Tag Manager / GA4 (and the doubleclick.net endpoint GA
// uses for ads measurement). next/image proxies Unsplash through /_next/image.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com https://*.g.doubleclick.net https://www.google.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://analytics.google.com https://*.g.doubleclick.net",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "report-uri /api/csp-report",
  "report-to csp",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy-Report-Only", value: csp },
  { key: "Reporting-Endpoints", value: 'csp="/api/csp-report"' },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/foreturn-iq-vs-parparty",
        destination: "/phone-orders-vs-pre-orders",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/:file*.pkpass",
        headers: [
          { key: "Content-Type", value: "application/vnd.apple.pkpass" },
          { key: "Content-Disposition", value: "attachment" },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
