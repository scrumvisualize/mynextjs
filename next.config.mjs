/** @type {import('next').NextConfig} */

// const nextConfig = {};

// export default nextConfig;

export default {
  async rewrites() {
    return [
      {
        source: '/api/login',
        destination: '/app/api/login/route', // Matched parameters can be used in the destination
      },
    ];
  }
};