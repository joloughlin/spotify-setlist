const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const determineEnv = require('./determineEnv');
const commonPaths = require('./commonPaths');

module.exports = {
  entry: commonPaths.appEntry,
  output: {
    filename: '[name]-[hash].js',
  },
  module: {
    rules: [
      {
        exclude: [/\.html$/, /\.(js|jsx)(\?.*)?$/, /\.css$/, /\.svg$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        query: {
          name: 'static/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(determineEnv),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.htmlTemplate,
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '*'],
    modules: [commonPaths.srcFolder, 'node_modules'],
  },
};
