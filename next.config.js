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
        // Environment variables accessible in the browser
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_IMAGE_BASE_URL: process.env.NEXT_PUBLIC_IMAGE_BASE_URL,
    },
    images: {
        domains: ['images.example.com'], // Add any external domains you need to load images from
    },
}

// Export the Next.js configuration object
module.exports = nextConfig;
