const CopyWebpackPlugin = require("copy-webpack-plugin");

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: "utils/**/*",
              to: "../",
              info: { minimized: true },
            },
            {
              from: "config/**/*",
              to: "../",
              info: { minimized: true },
            },
          ],
        }),
      );
    }

    return config;
  },
};

module.exports = nextConfig;