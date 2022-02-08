/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        disableStaticImages: true
    },
    compress: true,
    experimental: {
        workerThreads: true
    },
    webpack: (config) => {

        config.module.rules.push({
            test: /\.(png|jpe?g|gif|webp|avif|mp4)$/i,
            issuer: /\.(jsx?|tsx?|mdx)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        publicPath: "/_next",
                        name: "static/media/[name].[hash].[ext]",
                    },
                },
            ],
        })

        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {loader: "@svgr/webpack", options: {}},
                {
                    loader: "file-loader",
                    options: {
                        publicPath: "/_next",
                        name: "static/media/[name].[hash].[ext]",
                    },
                },
            ],
        })

        return config
    },
}

export default nextConfig