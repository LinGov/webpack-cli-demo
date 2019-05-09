const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const portfinder = require('portfinder');
const devConfig = require('./webpack.dev.conf');
const app = express();

const compiler = webpack(devConfig);
app.use(webpackDevMiddleware(compiler));

const PORT = (process.env.PORT && Number(process.env.PORT)) || 8080;
portfinder.basePort = PORT;

portfinder.getPortPromise().then((port) => {
  app.listen(port, function(err) {
    if (err) {
      console.log(err);
      return;
    }
  });
});
