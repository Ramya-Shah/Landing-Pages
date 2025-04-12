/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },

    eslint: {
        ignoreDuringBuilds: true,
    },

    output: undefined,
    images: {
        unoptimized: false,
    },
    compress: true,
    reactStrictMode: true,
};

module.exports = nextConfig;
