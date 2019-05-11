const path = require('path');

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
  },
  build: {
    index: path.resolve(__dirname, '../index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    bundleAnalyzerReport: true,
  },
};
