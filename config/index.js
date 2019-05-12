const path = require('path');

module.exports = {
  dev: {
    devtool: 'cheap-module-eval-source-map',
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
  },
  build: {
    productionSourceMap: true,
    devtool: '#source-map',
    index: path.resolve(__dirname, '../index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    bundleAnalyzerReport: false,
  },
};
