var babel = require('rollup-plugin-babel');
var nodeResolve = require('rollup-plugin-node-resolve');
var cjs = require('rollup-plugin-commonjs');
var replace = require('rollup-plugin-replace');

module.exports = {
  entry: 'src/index.js',
  exports: 'none',
  format: 'umd',
  plugins: [ replace({
    'process.env.NODE_ENV': JSON.stringify('development')
  }), cjs(), nodeResolve(), babel() ],
  dest: 'src/output.js',
  moduleName: 'myModule'
};
