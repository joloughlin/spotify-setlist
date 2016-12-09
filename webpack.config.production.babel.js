import autoprefixer from 'autoprefixer'
import CleanPlugin from 'clean-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import env from './sample.env.js'

const getValuesFromProcessEnv = object => {
  return Object.keys(object).reduce((newObject, key) => {
    newObject[key] = process.env[object[key]]
    return newObject
  }, {})
}
const processedEnv = getValuesFromProcessEnv(env)

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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'sass', 'postcss']),
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      ...getValuesFromProcessEnv(env),
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/static/index.tmpl.html',
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
    root: `${__dirname}/src`,
  },
}
