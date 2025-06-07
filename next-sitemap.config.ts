// next-sitemap.config.js
module.exports = {
	siteUrl: "https://beshofy.com",
	generateRobotsTxt: true, // generate robots.txt
	sitemapSize: 7000,
	changefreq: "weekly", // tell seo how many times the website modifying
	priority: 0.7,
	// exclude: ["/private-page"],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
	},
};
