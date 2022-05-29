const path = require('path');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: './src/sum.test.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
};