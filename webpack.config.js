const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/** Main const */
const PATHS = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist'),
}

module.exports = {
  /** 
   * babel-polyfill for solution problem with error below
   * ReferenceError: regeneratorRuntime is not defined */
  entry: {
    app: ['babel-polyfill', PATHS.src]
  },
  //Where files should be sent once they are bundled
  output: {
    path: PATHS.dist,
    filename: 'index.bundle.js'
  },
  //webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    hot: true
  },
  //Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new MiniCssExtractPlugin()],
}