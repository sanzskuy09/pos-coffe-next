/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/order/dashboard",
        permanent: false,
      },
    ];
  },
  env: {
    customKey: "ahsodhn234u9sfhgegasd98ueeqa354",
    BASE_URL: "http://localhost:5500/api/v1",
  },
};

export default nextConfig;
