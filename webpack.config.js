
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
   entry: "./src/entry.jsx",
   output: {
      path: __dirname + "/dist/",
      filename: "bundle.js"
   },
   devtool: 'source-map',
   module: {
      loaders: [
         { 
            test: /\.jsx?$/, 
            exclude: /node_modules/, 
            loader: "babel",
            query: {
               presets: ['es2015', 'react']
            },
         },
         { 
            test: /\.css$/, 
            loader: "style!css" 
         },
         {
            test: /\.scss$/,
            loader: 'style!css!sass'
         },
         {
            test: /\.html$/,
            loader: 'html-loader'
         },
         {
            test: [/\.jpg$/, /\.svg$/, /\.png$/],
            loader: 'file-loader'
         }
      ]
   },
   // this helps generate an html file for our generated bundle filename
   plugins: [
      new HtmlWebpackPlugin({
         template: 'src/index.html'      
      }),
      new CopyWebpackPlugin([
         { from: 'src/css/fontello', to: 'css/fontello' },
      ]) 
   ]
};