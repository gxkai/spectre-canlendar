const path = require('path');

const resolve = dir => path.join(__dirname, dir);
const baseURL = process.env.VUE_APP_BASE_API;

module.exports = {
  publicPath: baseURL,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/_variables.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'));
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    port: 10000
  },
  pluginOptions: {
    mock: {
      entry: './mock/index.js',
      debug: false,
      disable: false
    },
    autoRouting: {
      chunkNamePrefix: 'page-'
    }
  }
};
