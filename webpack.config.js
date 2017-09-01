var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app-bundle.js'},
    resolve: {extensions: ['.js', '.jsx']},
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true}),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        new ExtractTextPlugin('bundle.css')
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] }) }
        ]
    },
    devServer: {
        noInfo: false,
        quiet: false,
        lazy: false,
        watchOptions: {
            poll: true
        }
    }
}