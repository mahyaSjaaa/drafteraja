import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
      images: {
    domains: ['zqksipwraavhujicsndu.supabase.co'],
  },
  async headers() {
    const securityHeaders = [
      {
        key: "Content-Security-Policy",
        value: `
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vercel.app;
          style-src 'self' 'unsafe-inline' fonts.googleapis.com;
          font-src 'self' fonts.gstatic.com data:;
          img-src 'self' data: blob: zqksipwraavhujicsndu.supabase.co;
          connect-src *;
        `.replace(/\n/g, ""),
      },
      {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "Permissions-Policy",
        value: "geolocation=(), microphone=(), camera=()",
      },
    ];

    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
