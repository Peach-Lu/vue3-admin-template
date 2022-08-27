const path = require('path');
module.exports = {
  publicPath: "/",
  outputDir: "docs",
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("components", path.resolve(__dirname, "@/components"));
  },
};
