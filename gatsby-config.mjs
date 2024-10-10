import process from "node:process";
import dotenv from "dotenv";

dotenv.config();

const config = {
	siteMetadata: {
		title: `Portfolio`,
		siteUrl: `https://www.sebsv.com`,
	},
	plugins: [
		{
			resolve: "gatsby-source-contentful",
			options: {
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				spaceId: process.env.CONTENTFUL_SPACE_ID,
			},
		},
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-emotion",
		{
			resolve: "gatsby-plugin-google-gtag",
			options: {
				trackingIds: [process.env.GOOGLE_ANALYTICS_TRACKING_ID],
			},
		},
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-transformer-remark",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
	],
};

export default config;
