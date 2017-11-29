'use strict';

var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * Exports entry point
 * @type {{devtool: string, entry: *[], output: {path, filename: string, publicPath: string}, plugins: *[], module: {loaders: *[]}}}
 */
module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        chunkFilename: "[id].js",
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

    ],
    resolve: {
        modules: ['node_modules', './src'],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { "plugins": ['transform-decorators-legacy' ],"presets": ["react", "es2015", "stage-0"]}
            },
            {test: /\.json?$/, loader: 'json-loader'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})},
            {test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]'},
            {test: /\.csv?$/, loader: 'csv-loader'},
            {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader?name=fonts/[name].[ext]'}
        ]
    }
};
