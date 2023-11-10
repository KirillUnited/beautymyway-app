/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: `@import "./src/styles/_mantine.scss";`,
    },
}

module.exports = nextConfig
