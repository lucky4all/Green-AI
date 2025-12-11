import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  reactCompiler: true,
  experimental: {
    authInterrupts: true
  }
  ,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: "max-age=63072000; includeSubDomains; preload" },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'off' },
          { key: 'Permissions-Policy', value: "camera=(), microphone=(), geolocation=()" },
          { key: 'Content-Security-Policy', value: "default-src 'self' https:; img-src 'self' data:; font-src 'self' https:; style-src 'self' 'unsafe-inline' https:; script-src 'self' 'unsafe-inline' https:; frame-ancestors 'none'; base-uri 'self'" }
        ]
      }
    ];
  }
};

export default nextConfig;
