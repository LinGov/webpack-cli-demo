const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AutoDLLPLugin = require('autodll-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const config = require('../config');
const utils = require('./utils');
const baseConfig = require('./webpack.base.conf');

Object.keys(baseConfig.entry).forEach(function(name) {
  baseConfig.entry[name] = ['./build/dev-client'].concat(
    baseConfig.entry[name],
  );
});

module.exports = merge(baseConfig, {
  devtool: config.dev.devtool,
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: true,
    }),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env'),
    }),
    new WebpackBuildNotifierPlugin({
      suppressSuccess: true,
    }),
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
