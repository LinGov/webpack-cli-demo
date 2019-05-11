const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AutoDLLPLugin = require('autodll-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base.conf');
const path = require('path');
const config = require('../config');
const utils = require('./utils');

const prodConfig = merge(baseConfig, {
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
  },
  /*
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  }, */
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    new AutoDLLPLugin({
      path: utils.assetsPath('js'),
      filename: '[name].dll.js',
      entry: {
        vendor: ['lodash'],
      },
      plugins: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
          uglifyOptions: {
            output: {
              comments: false,
              beautify: false,
            },
          },
        }),
      ],
    }),
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
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
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
      chunksSortMode: 'dependency',
    }),
    new OptimizeCssAssetsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*'],
      },
    ]),
  ],
});

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
  prodConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = prodConfig;
