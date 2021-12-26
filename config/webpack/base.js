const paths = require('../paths');

const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /** 
   * babel-polyfill for solution problem with error below
   * ReferenceError: regeneratorRuntime is not defined */
  entry: {
    app: ['babel-polyfill', `${paths.src}/index.js`]
  },
  //Where files should be sent once they are bundled
  output: {
    filename: `${paths.assets}js/[name].[hash].js`,
    path: paths.dist,
    publicPath: '/',
    clean: true,
  },
  //webpack 5 comes with devServer which loads in development mode
  // devServer: {
  //   port: 3000,
  //   hot: true
  // },
  //Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      // JavaScript, React
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      // CSS, PostCSS, Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },      
    ]
  },
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: `${paths.assets}`
    //     }
    //   ]
    // }),
    new HtmlWebpackPlugin({ 
      template: './src/index.html' 
    }), 
    // new MiniCssExtractPlugin()
  ],
}