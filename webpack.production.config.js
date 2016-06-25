'use strict';

var path = require('path');
var webpack = require('webpack');
var del = require('del');

var ROOT_PATH = path.resolve(__dirname);
var Css_PATH = path.resolve(ROOT_PATH, 'app/styles');

class CleanPlugin {
    constructor(options) {
        this.options = options;
    }

    apply() {
        del.sync(this.options.files);
    }
}

module.exports = {
    entry: './app/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.min.js'
    },
    plugins: [
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
        loaders: [
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

                exclude: path.join(__dirname, 'app/styles'),
                query: {
                    plugins: [
                        ['transform-object-assign']
                    ]
                }
            }
        ]
    }
};