/** @type {import('next').NextConfig} */

const withAntdLess = require("next-plugin-antd-less");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withAntdLess({
  lessVarsFilePath: "./assets/styles/variables.less",
  ...nextConfig,
  webpack(config) {
    return config;
  },
});
