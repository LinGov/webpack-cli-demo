const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const portfinder = require('portfinder');
const chalk = require('chalk');
const devConfig = require('./webpack.dev.conf');
const app = express();

const PORT = (process.env.PORT && Number(process.env.PORT)) || 8080;
portfinder.basePort = PORT;

const compiler = webpack(devConfig);

const devMiddleware = webpackDevMiddleware(compiler);
app.use(devMiddleware);

module.exports = new Promise((resolve, reject) => {
  portfinder.getPortPromise().then((port) => {
    devMiddleware.waitUntilValid(function() {
      console.log();
      console.log(
        [`  App running at:`, `  - Local:   ${chalk.cyan(port)}`].join('\n'),
      );
      console.log();
    });
    app.listen(port, function(err) {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
});
