const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/resume.pdf"
      }
    ];
  }
};

module.exports = nextConfig;
