require('dotenv').config({
  path: '.env.staging',
  silent: true,
});

const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin');
const path = require('path');
const webpack = require('webpack');
const env = require('./determineEnv');

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    config: {
      path: path.resolve('config', 'postcss.config.js'),
    },
  },
};

module.exports = {
  entry: {
    bundle: ['./src/index.js'],
  },
  output: {
    path: path.resolve('./build'),
    filename: '[name]-[hash].js',
    publicPath: `https://s3.amazonaws.com/${process.env.S3_BUCKET_NAME}/`,
  },
  module: {
    rules: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)(\?.*)?$/,
          /\.css$/,
          /\.scss/,
          /\.json$/,
          /\.svg$/,
        ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { modules: true, importLoaders: 2 },
            },
            postcssLoader,
            {
              loader: 'sass-loader',
              options: { includePaths: [path.resolve('src/constants')] },
            },
          ],
        }),
      },
      {
        test: /\.(css|scss)$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            postcssLoader,
          ],
        }),
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(env),
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.tmpl.html'),
    }),
    new ExtractTextPlugin({
      filename: '[name]-[hash].css',
    }),
    new CleanPlugin('build', {
      root: path.resolve('.'),
    }),
    new S3Plugin({
      // Exclude uploading of html
      exclude: /.*\.html$/,
      // s3Options are required
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.S3_REGION,
      },
      s3UploadOptions: {
        Bucket: process.env.S3_BUCKET_NAME,
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '*'],
    modules: [path.resolve('src'), 'node_modules'],
  },
};
