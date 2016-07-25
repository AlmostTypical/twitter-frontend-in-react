const validate = require('webpack-validator');
const path = require('path');
const bundleFolder = path.join(__dirname, 'public', 'js');

module.exports = validate({
  entry: {
    app: ['./src/app.js']
  },
  output: {
    filename: 'bundle.js',
    path: bundleFolder,
    publicPath: '/js/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'react', /*'react-hmre'*/ ]
        }
      }
    ]
  },
  // devServer: {
  //   hot: true,
  //   inline: true,
  //   stats: 'errors-only'
  // }
});
