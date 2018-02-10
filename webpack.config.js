const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    library: 'MoneyInput',
    libraryTarget: 'umd',
  },
  entry: {
    index: './index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ],
          },
        },
      },
    ],
  },
  // externals: {
  //   ractive: 'Ractive',
  // },
};
