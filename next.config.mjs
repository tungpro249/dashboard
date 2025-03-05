/** @type {import('next').NextConfig} */
const config = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000, // Kiểm tra thay đổi mỗi 1 giây
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default config;
