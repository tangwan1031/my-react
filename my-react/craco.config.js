const path = require("path");
const CracoLessPlugin = require("craco-less");
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1DA57A",
              "@link-color": "#1890ff",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages/": path.resolve(__dirname, "./src/pages"),
    },
  },
  devServer: {
    port: 8086, //更改端口号
    // host: 也可以修改host
  },
};
