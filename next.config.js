/* @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  distDir: "build",
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;