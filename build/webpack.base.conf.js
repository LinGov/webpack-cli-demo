const path = require('path');

const env = process.env.NODE_ENV;

module.exports = {
  mode: env === 'production' ? 'production' : 'development',
  entry: {
    app: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
};
