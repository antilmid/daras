const path = require('path');

module.exports = {
  mode:'development',
  entry: path.resolve(__dirname, '../devTool/index.js'),
  output: {
    path: path.resolve(__dirname, '../devTool/cache'),
    filename: 'dist.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|jpeg)$/, use: 'url-loader?limit=8192&name=images/[name].[hash].[ext]'},
      { test: /\.js$/, use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              '@babel/preset-react'
            ]
          }
        }
      ]},
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../devTool/cache'),
    // hot: true,
    port: 9000
  }
}