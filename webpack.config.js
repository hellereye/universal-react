'use strict';

var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var Css_PATH = path.resolve(ROOT_PATH, 'app/styles');

module.exports = {

    // devServer: {
    //     proxy: {
    //         '/api/*': {
    //             target: 'http://localhost:8082',
    //             secure: false
    //         }
    //     }
    // }

    devtool: '#source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './app/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/' //线上静态资源目录
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            //load flexboxgrid
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                include: /flexboxgrid/,

            }, {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: Css_PATH
            }, {
                test: /\.js?$/,
                loader: 'babel',
                include: path.join(__dirname, 'app'),
                exclude: path.join(__dirname, 'app/styles'), //排除对css的解析
                query: {
                    plugins: [
                        ['react-transform', {
                            'transforms': [{
                                transform: 'react-transform-hmr',
                                // If you use React Native, pass 'react-native' instead:
                                imports: ['react'],
                                // This is important for Webpack HMR:
                                locals: ['module']
                            }]
                        }],
                        ['transform-object-assign']
                    ]
                }
            }
        ]
    }
};