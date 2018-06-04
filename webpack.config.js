/**
 * Webpack configuration
 */
const webpack = require('webpack');
const path = require('path');

// Returns host based on environment
var getHost = function() {
    var host = "";
    switch (process.env.NODE_ENV) {
        case 'production' :
            host = '//localhost';
        break;
        case 'development' :
            host = '//localhost';
        break;
    }
    return host;
};


// Webpack configuration
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