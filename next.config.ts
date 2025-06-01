import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "export",
	basePath: "/Beshofy",
	assetPrefix: "/Beshofy/",
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	trailingSlash: true,
};

export default nextConfig;
