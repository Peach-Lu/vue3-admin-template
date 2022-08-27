const path = require("path");
module.exports = {
  publicPath: "./",
  outputDir: "docs",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "^/api": {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  // 配置方式二：和webpack属性完全一致，最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
      },
    },
  },
};
