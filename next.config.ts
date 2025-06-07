import type { NextConfig } from "next";
// import withPWA from "next-pwa";
// import type { PWAConfig } from "next-pwa";

const nextConfig: NextConfig = {
	/* config options here */
	// output: "export",
	// basePath: "/Beshofy",
	// assetPrefix: "/Beshofy/",
	// images: {
	// 	unoptimized: true,
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// 			hostname: '**',
	// 		},
	// 	],
	// },
	// trailingSlash: true,
	reactStrictMode: true, // help discover bugs through developing
	// swcMinify: true, // decrease code size in production using swc
};

// const pwaConfig: PWAConfig = {
const withPWA = require("next-pwa")({
	dest: "public",
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === "development",
});

export default withPWA({
	...nextConfig,
	// pwa: pwaConfig,
});

// export default withPWA({
// 	...nextConfig,
// 	pwa: {
// 		dest: "public",
// 		register: true,
// 		skipWaiting: true,
// 		disable: process.env.NODE_ENV === "development",
// 	},
// });

// export default nextConfig;
