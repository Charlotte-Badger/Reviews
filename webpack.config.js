const path = require('path');
const entryPath = path.join(__dirname, '/client/src/index.jsx');
const outputPath = path.join(__dirname, '/client/public');
const Dotenv = require('dotenv-webpack');
const S3Plugin = require('webpack-s3-plugin');

// process.env.AWS_ACCESS_KEY_ID = require('./AWS/s3config.js').AWS_ACCESS_KEY_ID;
// process.env.AWS_SECRET_ACCESS_KEY = require('./AWS/s3config.js').AWS_SECRET_ACCESS_KEY;

module.exports = {
  entry: entryPath,
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new Dotenv()
  ],
  output: {
    path: outputPath,
    filename: 'reviewBundle.js'
  },
  devtool: 'eval-cheap-source-map'
};
