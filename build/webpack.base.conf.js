const webpack = require('webpack');
const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const utils = require('./utils');
const config = require('../config');
const env = process.env.NODE_ENV;

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  mode: env === 'production' ? 'production' : 'development',
  entry: {
    app: [
      // 热重载
      // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/main.js',
    ],
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
        test: /\.js$/,
        loader: 'babel-loader',
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
  plugins: [
    /*   new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..'),
      manifest: require('./vendor-manifest.json'),
    }), */
    new HardSourceWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
