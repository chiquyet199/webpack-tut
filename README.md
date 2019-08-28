## Zero configuration
Webpack will look for .src/index.js and bundle to ./dist/main.js
## Flag
`--output` overwrite destination final js file
`--watch` recompile after src file changed
## Transpile js code from ES6 -> ES5
`npm install babel-core babel-loader babel-preset-env --save-dev`
We have two options for configuring babel-loader:
  using a configuration file `webpack.config.js`
  using `--module-bind `in your npm scripts
