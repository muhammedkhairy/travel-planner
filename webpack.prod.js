const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/client/index.js',
  output: {
    filename: 'bundle-[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'Client',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({}), new OptimizeCssAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new WorkboxPlugin.GenerateSW(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
});
