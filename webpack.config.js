var path = require("path");
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './static_source/js/main.js', 
  output: {
    path: path.resolve('./static/js/'),
    filename: "compiled.js"
  },
  plugins: [],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ],
  }
}
