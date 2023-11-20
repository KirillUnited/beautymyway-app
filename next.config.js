/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: `@import "./src/styles/_mantine.scss";`,
    },
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return config
    },
}

module.exports = nextConfig
