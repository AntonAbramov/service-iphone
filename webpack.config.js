const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: "./frontend/js/main",
  output: {
    path: __dirname + '/public/js/',
    filename: "common.js"
    //filename: "common.[chunkhash].js"
  },

  devtool: NODE_ENV == 'development' ? 'inline-source-map' : null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.NoErrorsPlugin()/*,
    new AssetsPlugin({
      filename: 'assets.json',
      path: __dirname + '/public/'
    })*/

  ],

  resolve: {
    modulesDirectories : ['node_modules'],
    extensions: ['', '.js']
  },

  module: {
    loaders: [{
      test: /\.js?$/,
      loader: "babel"
    }]
  }
};

if (NODE_ENV === 'production') {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: true,
          unsafe: true
        }
      })
  )
}