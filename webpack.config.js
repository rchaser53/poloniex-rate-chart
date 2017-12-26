const webpack = require('webpack');
const path = require("path");

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, './src'),
  entry: {
    hoge: "./entry.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.html', '.js']
  },
  module: {
    rules:[{
      test: /\.html$/,
      loaders:[
        'html-loader'
      ]
    },
  ]}
};