const paths = require('../paths');

// const webpack = require('webpack');

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
    filename: 'js/[name].bundle.js',
    path: paths.dist,
    publicPath: '/',
    clean: true,
    // module: true,
  },
  // resolve: {
  //   alias: {
  //     '@': `${paths.src}/modules`
  //   },
  //   extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
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
    //       from: `${paths.public}/assets`
    //     }
    //   ]
    // }),

    new HtmlWebpackPlugin({ 
      template: `${paths.src}/index.html`,
      filename: 'index.html',
      templateParameters: {        
        author: 'Buryak Evgeniy',
      }
    }), 
  ],
}