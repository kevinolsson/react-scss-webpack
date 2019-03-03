
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new LiveReloadPlugin({
      hostname: '127.0.0.1',
      port: '8080',
      appendScriptTag: true
    }),
    new Visualizer(),
  ]
}