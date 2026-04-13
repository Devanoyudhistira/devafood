const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bmqqribeuxnppfcxittg.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  experimental: {    
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
