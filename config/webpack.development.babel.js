require('dotenv').config({ silent: true })
import autoprefixer from 'autoprefixer'
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
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint',
      }
    ],
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
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(css|scss)$/,
        loaders: ['style', 'css', 'sass', 'postcss'],
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
    ],
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
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    root: path.resolve('src'),
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
}
