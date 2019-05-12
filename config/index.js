const path = require('path');

module.exports = {
  dev: {
    devtool: 'cheap-module-eval-source-map',
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    port: 8080,
    proxyTable: {
      '/api': {
        target: 'http://localhost:8085',
        pathRewrite: {
          '^/api': '/',
        },
        changeOrigin: true,
      },
    },
    autoOpenBrowse: true,
  },
  build: {
    productionSourceMap: false,
    devtool: '#source-map',
    index: path.resolve(__dirname, '../index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    bundleAnalyzerReport: false,
  },
};
