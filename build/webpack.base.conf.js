const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV;

module.exports = {
  mode: env === 'production' ? 'production' : 'development',
  entry: {
    app: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..'),
      manifest: require('./vendor-manifest.json'),
    }),
  ],
};
