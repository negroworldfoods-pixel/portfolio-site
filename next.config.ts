import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ozsaxqicerbsltduruog.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**', // Restrict to your storage bucket
      },
    ],
  },
};

export default nextConfig;
