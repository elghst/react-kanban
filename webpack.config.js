const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index.bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.bundle.css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'assets/template.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
