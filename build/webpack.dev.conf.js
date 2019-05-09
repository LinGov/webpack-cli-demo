const baseConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  plugins: [
    new HtmlWebpackPlugin({
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
