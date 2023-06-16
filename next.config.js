/** @type {import('next').NextConfig} */
var path = require('path');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.aglty.io',
			},
		],
	},
	sassOptions: {
		includePaths: [
			path.join(__dirname, 'styles'),
			path.join(__dirname, 'components'),
			path.join(__dirname, 'pages'),
		],
	},
}

module.exports = nextConfig
