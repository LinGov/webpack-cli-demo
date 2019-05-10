const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['lodash'],
  },
  output: {
    path: path.resolve(__dirname, '../static/js'),
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      inject: true,
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',
    }),
  ],
};
