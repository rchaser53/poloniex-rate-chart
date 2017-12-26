const webpack = require('webpack');
const path = require("path");

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, './src'),
  entry: {
    hoge: "./ts/chart.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules:[{
      test: /\.ts$/,
      loaders:[
        'ts-loader'
      ],
      exclude: [
        "node_modules"
      ]
    },
  ]}
};