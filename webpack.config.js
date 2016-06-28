    'use strict';

    var path = require('path');
    var webpack = require('webpack');

    var ROOT_PATH = path.resolve(__dirname);
    var Css_PATH = path.resolve(ROOT_PATH, 'app/css');

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
            './app/index.js',
            //app: path.resolve(ROOT_PATH, 'app/index.js'),
            //vendors: ['jquery', 'moment'], //打包成vendors.js，公共的
        ],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'app.js',
            //filename: '[name].[hash].js'
            publicPath: '/' //线上静态资源目录
        },
        plugins: [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        ],
        module: {
            loaders: [{
                    test: /\.eot/,
                    loader: 'file?prefix=font/'
                },
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
                    exclude: path.join(__dirname, 'app/css'), //排除对css的解析
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