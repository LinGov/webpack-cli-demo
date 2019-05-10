const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.conf');
const AutoDLLPLugin = require('autodll-webpack-plugin');

module.exports = merge(baseConfig, {
  plugins: [
    new AutoDLLPLugin({
      filename: '[name].dll.js',
      entry: {
        vendor: ['lodash'],
      },
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
