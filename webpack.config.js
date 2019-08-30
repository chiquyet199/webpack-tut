const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * This plugin responsible for adding bundle js file to a specific template
 * In case the bundle file name changed everytime compiling
 * If you have any CSS assets in webpack's output (for example, CSS extracted 
 *  with the MiniCssExtractPlugin) then these will be included with <link> tags 
 *  in the <head> element of generated HTML.
 */
const htmlPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: './index.html',
})

module.exports = {
  entry: {main: './src/index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [htmlPlugin],
}
