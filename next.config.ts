/** @type {import('next').NextConfig} */
const nextConfig = {
    // Ignore TypeScript errors during build
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      ignoreBuildErrors: true,
    },
    
    // Ignore ESLint errors during build
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    
    output: undefined,
    images: {
      unoptimized: false,
      domains: [
        "source.unsplash.com",
        "images.unsplash.com",
        "ext.same-assets.com",
        "ugc.same-assets.com",
      ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "source.unsplash.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "ext.same-assets.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "ugc.same-assets.com",
          pathname: "/**",
        },
      ],
    },
    compress: true,
    
    // Enable React strict mode for better performance
    reactStrictMode: true,
    
    // Enable SWC minification
 };
  
  module.exports = nextConfig;
  