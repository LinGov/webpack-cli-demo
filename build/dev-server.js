const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const devConfig = require('./webpack.dev.conf');
const app = express();

const compiler = webpack(devConfig);
app.use(webpackDevMiddleware(compiler));

app.listen(8080, function(err) {
  if (err) {
    console.log(err);
    return;
  }
});
