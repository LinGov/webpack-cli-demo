const webpack = require('webpack');
const path = require('path');

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
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',
    }),
  ],
};
