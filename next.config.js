/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // svg 사용하기 위한 설정
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

module.exports = nextConfig;
