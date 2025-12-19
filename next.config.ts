/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/adminProfile',
        permanent: true, 
      },
    ];
  },
};

module.exports = nextConfig;















// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//       transpilePackages: ['react-quill'],
// };

// export default nextConfig;