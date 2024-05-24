/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();
const nextConfig = withNextIntl({
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
})

module.exports = nextConfig
