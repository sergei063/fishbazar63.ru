var packageJSON = require('./package.json')
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
//UglifyJSPlugin
/*const DEVELOPMENT = process.env.NODE_ENV === "development";
const PRODUCTION = process.env.NODE_ENV === "production";*/

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app-bundle.js',
    },
    resolve: { extensions: ['.js', '.jsx'] },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new ExtractTextPlugin('bundle.css'),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,

                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] }),
            },


            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: '/img',
                        },
                    },
                ],
            },
            {
                test: /\.(mp4|avi)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: '/video',
                        },
                    },
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|ttc)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: 'fonts',
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        noInfo: false,
        quiet: false,
        lazy: false,
        watchOptions: {
            poll: true,
        },
    },
}
