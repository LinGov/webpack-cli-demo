const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.conf');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const config = require('../config');

module.exports = merge(baseConfig, {
  plugins: [
    new webpack.optimize.SplitChunksPlugin({
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        element: {
          name: 'element',
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          chunks: 'initial',
          // 默认组的优先级为负数，以允许任何自定义缓存组具有更高的优先级（默认值为0）
          priority: -10,
        },
      },
    }),
    new ParallelUglifyPlugin({
      cache: './cache',
      uglifyJS: {
        output: {
          comments: false,
          beautify: false,
        },
        compress: {
          warnings: false,
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: config.build.index,
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
});
