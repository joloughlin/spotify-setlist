const path = require('path');

module.exports = {
  appEntry: path.resolve('src/index.jsx'),
  htmlTemplate: path.resolve('src/index.tmpl.html'),
  outputPath: path.resolve('build'),
  postcssConfig: path.resolve('config', 'postcss.config.js'),
  rootPath: path.resolve('.'),
  srcFolder: path.resolve('src'),
};
