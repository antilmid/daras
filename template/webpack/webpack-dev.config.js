const path = require('path');
const fs = require('fs');

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
      { test: /\.less$/, use: [
        'style-loader', 
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]_[hash]'
            }
          }
        },
        'less-loader'] },
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
    before: function (app, server, compiler) {
      app.get('/api/component-info', function (req, res) {
        const components = {};
        const sourcePath = path.resolve(__dirname, '../src');
        const dir = fs.readdirSync( sourcePath );
        (dir || []).map(dirName => {
          components[dirName] = path.resolve(sourcePath, dirName, 'index.js');
        });
        res.json(components);
      });
    },
    contentBase: path.resolve(__dirname, '../devTool/cache'),
    hot: true,
    port: 9000
  }
}