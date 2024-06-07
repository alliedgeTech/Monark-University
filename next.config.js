/**
 * @type {import('next').NextConfig}
 */
const path = require('path'); // Import the 'path' module

// Define the Next.js configuration object
const nextConfig = {
    sassOptions: {
        // Specify additional paths for Sass to look for imported files
        includePaths: [
            path.join(__dirname, 'styles'), // Adds the 'styles' directory in the root folder
            path.join(__dirname, 'public', 'images'), // Example: include 'public/images' for image paths
        ],
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || '',
        NEXT_PUBLIC_IMAGE_BASE_URL: process.env.NEXT_PUBLIC_IMAGE_BASE_URL || '',
    },
    images: {
        domains: ['images.example.com'], // Add any external domains you need to load images from
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com',
            },
        ],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Transpile node_modules
        config.module.rules.push({
            test: /\.js$/,
            include: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['next/babel', '@babel/preset-env'], // Include '@babel/preset-env'
                },
            },
        });

        return config;
    },
};

// Export the Next.js configuration object
module.exports = nextConfig;
