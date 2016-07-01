'use strict';

var path = require('path');
var webpack = require('webpack');
var del = require('del');

var ROOT_PATH = path.resolve(__dirname);
var Css_PATH = path.resolve(ROOT_PATH, 'app/css');

class CleanPlugin {
    constructor(options) {
        this.options = options;
    }

    apply() {
        del.sync(this.options.files);
    }
}

module.exports = {
    entry:
    // [
    //     "app": path.resolve(ROOT_PATH, 'app/index.js'),
    //     "vendors": ['jquery', 'moment'], //打包成vendors.js，公共的
    // ]
        './app/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.min.js'
            //filename: '[name].[hash].js'
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new CleanPlugin({
            files: ['dist/*']
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        })
    ],
    module: {
        loaders: [{
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader'
            }, {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader?limit=8192'
            },
            //load flexboxgrid
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                include: /flexboxgrid/
            }, {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: Css_PATH
            }, {
                test: /\.js?$/,
                loader: 'babel',
                include: path.join(__dirname, 'app'),
                exclude: path.join(__dirname, 'app/css'),
                exclude: /node_modules/,
                query: {
                    plugins: [
                        ['transform-object-assign']
                    ]
                }
            },
        ]
    }
};