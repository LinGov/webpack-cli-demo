const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.conf');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = merge(baseConfig, {
  plugins: [
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
      template: 'index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
});
