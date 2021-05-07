const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

module.exports = class ImportModules {
  // constructor () {}
  apply(compiler){
    compiler.hooks.normalModuleFactory.tap(pluginName, (normalModuleFactory) => {
      normalModuleFactory.hooks.parser.for('import').tap(pluginName, (...arg) => {
        console.log(arg)
        return false;
      })
    });
  }
}
