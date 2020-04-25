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
      '/all': 'http://localhost:3000',
      '/geoNamesData': 'http://localhost:3000',
      '/weatherURL': 'http://localhost:3000',
      '/pixabayURL': 'http://localhost:3000',
      '/weatherbit': 'http://localhost:3000',
      '/pixabay': 'http://localhost:3000',
    },
  },
});
