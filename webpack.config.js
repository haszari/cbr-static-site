
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const paths = [
   '/'
];

module.exports = {
   entry: {
      main: "./src/entry.jsx",
   },
   output: {
      path: __dirname + "/dist/",
      filename: "bundle.js",
      libraryTarget: 'umd' // needed for StaticSiteGeneratorPlugin to work correctly
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
            test: /\.css/,
            loader: ExtractTextPlugin.extract(
               'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
            ),
            include: __dirname + '/src'
         },
         {
            test: /\.scss$/,
            loader: 
               ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
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
      new ExtractTextPlugin("styles.css"),
      // `main` is the bundle name sepcified in the `entry` section above.
      new StaticSiteGeneratorPlugin('main', paths, {
         // Properties here are merged into `locals`
         // passed to the exported render function
         greet: 'Hello'
      }),
      // new HtmlWebpackPlugin({
      //    template: 'src/index.html'      
      // }),
      new CopyWebpackPlugin([
         { from: 'src/css/fontello', to: 'css/fontello' },
      ]),
   ]
};