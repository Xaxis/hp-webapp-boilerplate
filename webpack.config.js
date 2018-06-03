/**
 * Webpack configuration
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'bundle_front-1': __dirname + '/app/src/init/init_front-1.js'
    },
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "bundle_commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    resolve: {
        modules: [
            __dirname + '/app/src/front',
            __dirname + '/app/src/libs/vendor'
        ],
        alias: {

            // Vendor dependencies (third party dependencies)
            'lodash':                   'lodash/lodash',

            // Frontend modules
            'demo-module':              'demo-module/demo-module'
        }
    },
    plugins: [

        // Automatically load the following modules (no need to import/require)
        new webpack.ProvidePlugin({
            _: 'lodash'
        })
    ]
};