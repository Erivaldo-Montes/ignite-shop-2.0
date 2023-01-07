/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // registra o dominío para as imagems sejam otimizadas
  images: {
    domains: ['files.stripe.com'],
  },
}

module.exports = nextConfig
