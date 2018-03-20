const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const WebpackS3Plugin = require('webpack-s3-plugin');
const commonPaths = require('./commonPaths');

module.exports = {
  devtool: 'source-map',
  output: {
    path: commonPaths.outputPath,
    publicPath: process.env.S3_BASE_URL,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: commonPaths.postcssConfig,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: commonPaths.postcssConfig,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
    }),
    new UglifyJsWebpackPlugin({
      sourceMap: true,
    }),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CleanWebpackPlugin('build', {
      root: commonPaths.rootPath,
    }),
    new WebpackS3Plugin({
      // Exclude uploading of html
      exclude: /.*\.html$/,
      // s3Options are required
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
      },
      s3UploadOptions: {
        Bucket: process.env.S3_BUCKET_NAME,
      },
    }),
  ],
};
