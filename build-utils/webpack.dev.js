const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              sourceMap: true
            }
          },
          {loader: 'sass-loader'}
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    port: 8080
  },
  devtool: 'cheap-module-eval-source-map',
});
