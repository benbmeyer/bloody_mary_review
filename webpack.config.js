const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
  
}

module.exports = (env) => {
   const isProduction = env === 'production';
   const CSSExtract = new ExtractTextPlugin('styles.css');

   return {
   entry: ['babel-polyfill', './app.js' ],
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'bundle.js'
   },
   devtool: isProduction ? 'source-map' : 'inline-source-map',
   devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      inline: true,
      port: 8080
   },
   module: {
      rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ["@babel/preset-env", "@babel/preset-react"] }
            }, {
               test: /\.s?css$/,
               use: CSSExtract.extract({
                 use: [
                   {
                     loader: 'css-loader',
                     options: {
                       sourceMap: true
                     }
                   },
                   {
                     loader: 'sass-loader',
                     options: {
                       sourceMap: true
                     }
               }
            ]
         })
      }]
         
   }, 
   plugins: [
      CSSExtract,
      new HtmlWebpackPlugin({
         template: './bundle/index.html',
         chunksSortMode: 'dependency',
         inject: false
      }),
      new webpack.DefinePlugin({
         'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
         'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
         'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
         'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
         'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
         'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
       })
   ]
}
};