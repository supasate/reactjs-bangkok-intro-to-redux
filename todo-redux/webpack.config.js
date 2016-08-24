const path = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    entry: path.join(__dirname, 'src', 'index.js'),
    webpackdev: 'webpack-dev-server/client?http://localhost:8080',
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './',
    filename: '[name].[chunkhash].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
}
