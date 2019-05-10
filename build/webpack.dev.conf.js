const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AutoDLLPLugin = require('autodll-webpack-plugin');
const utils = require('./utils');
const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
  plugins: [
    new AutoDLLPLugin({
      path: utils.assetsPath('js'),
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
