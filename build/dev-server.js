const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const portfinder = require('portfinder');
const ora = require('ora');
const utils = require('./utils');
const chalk = require('chalk');
const devConfig = require('./webpack.dev.conf');
const app = express();
const spinner = ora('building for production...');
spinner.start();
const PORT = (process.env.PORT && Number(process.env.PORT)) || 8080;
portfinder.basePort = PORT;

const compiler = webpack(devConfig);

const devMiddleware = webpackDevMiddleware(compiler);
const hotMiddleware = webpackHotMiddleware(compiler);
app.use(devMiddleware);
app.use(hotMiddleware);
app.use('/static', express.static('./static'));

module.exports = portfinder
  .getPortPromise()
  .then((port) => port)
  .then((port) => {
    spinner.stop();
    const urls = utils.prepareUrls('http', '0.0.0.0', port);
    devMiddleware.waitUntilValid(function() {
      console.log();
      console.log(
        [
          `  App running at:`,
          `  - Local:   ${chalk.cyan(urls.localUrlForTerminal)}`,
          `  - Network: ${chalk.cyan(urls.lanUrlForTerminal)}`,
        ].join('\n'),
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
