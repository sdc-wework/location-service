const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  },
  plugins: [
    new Dotenv()
 ]
}