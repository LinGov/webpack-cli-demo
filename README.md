# webpack-demo

## 代码风格

## library

- webpack-merge：合并 webpack 配置，抽取 development/production 公共配置。
- ora
- chalk
- happypack
- semver
- eventsource-polyfill
- portfinder
- http-proxy-middleware
- require-nocache
- uglify-es
- opn
- connect-history-api-fallback
- cross-env：屏蔽开发所处操作系统差异，提供一致的设置 Node 环境变量的命令。
- lint-staged

## loader

- url-loader
- css-loader
- vue-loader
- vue-style-loader
- sass-loader
- scss-loader
- babel-loader
- file-loader
- vg-sprite-loader
- eslint-loader

## webpack plugin

### 内置插件

- webpack.DefinePlugin
- webpack.HotModuleReplacementPlugin
- webpack.NoEmitOnErrorsPlugin
- webpack.optimize.ModuleConcatenationPlugin
- webpack.DllPlugin
- webpack.DllReferencePlugin
- webpack.LoaderOptionsPlugin

### 社区插件

- webpack-dev-middleware
- webpack-hot-middleware
- webpack-build-notifier
- friendly-errors-webpack-plugin
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#options)：在指定的 template 中动态插入 js 变量、通过内置变量动态生成/插入标签、压缩 html 格式。
- progress-bar-webpack-plugin
- mini-css-extract-plugin
- hard-source-webpack-plugin
- optimize-css-assets-webpack-plugin
- uglifyjs-webpack-plugin
- add-asset-html-webpack-plugin
- sw-precache-webpack-plugin
- webpack-parallel-uglify-plugin
- webpack-bundle-analyzer
