require('dotenv').config({ silent: true })
import autoprefixer from 'autoprefixer'
import CleanPlugin from 'clean-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import env from './determineEnv'

export default {
  entry: {
    bundle: [
      'babel-polyfill',
      'whatwg-fetch',
      './src/main.js',
    ],
    vendor: [
      'bootstrap/dist/css/bootstrap.min.css',
      'bootstrap/dist/js/bootstrap.min.js',
    ]
  },
  output: {
    path: './build',
    filename: '[name]-[hash].js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)(\?.*)?$/,
          /\.css$/,
          /\.scss/,
          /\.json$/,
          /\.svg$/
        ],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'sass', 'postcss']),
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.svg$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  postcss() {
    return [autoprefixer]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.DefinePlugin(env),
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.tmpl.html'),
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin('[name]-[hash].css'),
    new CleanPlugin('build'),
  ],
  resolve: {
    root: path.resolve('src'),
  },
}
