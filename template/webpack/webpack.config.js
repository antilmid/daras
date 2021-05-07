const fs = require('fs');
const path = require('path');
const ImportModules = require('./plugin/import-modules');

const sourcePath = path.resolve(__dirname, '../src');
const dir = fs.readdirSync( sourcePath );

const entry = {};
(dir || []).map(dirName => {
  entry[dirName] = path.resolve(sourcePath, dirName, 'index.js');
});
console.log(entry)


module.exports = env => {
  console.log(env)
  return {
    mode: "development",
    entry,
    output: {
      library: 'myLib',
      libraryTarget:'commonjs2',
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js',
      pathinfo: true,
      // externals: [/node_modules/]
      // publicPath: path.resolve(__dirname, '../node_modules')
    },
    plugins:[new ImportModules()]
  };
}