const webpack = require('webpack');
const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const vueLoaderConfig = require('./vue-loader.conf');
const utils = require('./utils');
const config = require('../config');
const env = process.env.NODE_ENV;
const devMode = env !== 'production';
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  mode: env === 'production' ? 'production' : 'development',
  entry: {
    /* app: [
      // 热重载
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&noInfo=true&reload=true',
      './src/main.js',
    ], */
    app: './src/main.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath:
      process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
      },
      {
        test: /\.js$/,
        use: ['thread-loader', 'babel-loader'],
        include: [
          resolve('src'),
          resolve('test'),
          resolve('node_modules/webpack-dev-server/client'),
        ],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // 'thread-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        include: [resolve('src/assets/images')],
        query: {
          limit: 8192,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    },
  },
  plugins: [
    new ProgressBarPlugin({
      format:
        '  build [:bar] ' +
        chalk.green.bold(':percent') +
        ' (:elapsed seconds)',
    }),
    /*   new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..'),
      manifest: require('./vendor-manifest.json'),
    }), */
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode
        ? utils.assetsPath('css/[name].css')
        : utils.assetsPath('css/[name].[hash].css'),
      chunkFilename: devMode
        ? utils.assetsPath('css/[id].css')
        : utils.assetsPath('css/[id].[hash].css'),
    }),
    new HardSourceWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new VueLoaderPlugin(),
  ],
};
