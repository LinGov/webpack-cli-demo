const webpack = require('webpack');
const rm = require('rimraf');
const path = require('path');
const prodConfig = require('./webpack.prod.conf');
const config = require('../config');

rm(
  path.join(config.build.assetsRoot, config.build.assetsSubDirectory),
  (err) => {
    if (err) throw err;
    webpack(prodConfig, (err, stats) => {
      if (err) throw err;
      process.stdout.write(
        stats.toString({
          colors: true,
          modules: false,
          children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
          chunks: false,
          chunkModules: false,
        }) + '\n\n',
      );
    });
  },
);
