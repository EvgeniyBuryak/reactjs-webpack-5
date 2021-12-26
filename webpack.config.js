const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
      // {            
      //   test: /\.(scss|css)$/,
      //   use: [
      //       'style-loader',
      //       // MiniCssExtractPlugin.loader,
      //       {
      //           loader: 'css-loader',
      //           options: { sourceMap: true }
      //       }, {
      //           loader: 'postcss-loader',
      //           options: {
      //               sourceMap: true,
      //               postcssOptions: {
      //                   plugins: [
      //                       [ 'autoprefixer', { /* Options */ }, ],
      //                   ],
      //               },
      //           },
      //       }, {
      //           loader: 'sass-loader',
      //           options: { sourceMap: true }
      //       }
      //   ]
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //       MiniCssExtractPlugin.loader,
      //       {
      //         loader: 'css-loader',
      //         options: { sourceMap: true }
      //       }
            
      //   ]
      // }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ 
      template: './src/index.html' 
    }), 
    // new MiniCssExtractPlugin()
  ],
}