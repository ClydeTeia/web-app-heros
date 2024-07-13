/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        hostname: "www.google.com",
        hostname: "upload.wikimedia.org",
        port: "",
      },
    ],
  },
  images: { unoptimized: true }, // to make npm run dev work
  output: "export", // to export index.html at build times
};

export default nextConfig;
