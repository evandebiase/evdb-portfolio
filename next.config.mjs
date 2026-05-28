/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }
    ]
  },
  async redirects() {
    // The Work page is now the landing page at /. Keep the old /projects
    // URL working for anyone who bookmarked or linked it.
    return [
      { source: "/projects", destination: "/", permanent: true }
    ];
  }
};

export default nextConfig;
