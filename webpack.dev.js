const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/client/index.js',
  output: {
    libraryTarget: 'umd',
    library: 'Client',
  },
  devServer: {
    proxy: {
      //to run with node server
    },
  },
});
