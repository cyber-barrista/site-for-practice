const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        userInfo: './src/server/user-router-and-pages/info-router-and-page/user-info-page/index.js',
        userReserve: './src/server/user-router-and-pages/reserve-router-and-page/user-reserve-page/index.js',
        userDish: './src/server/user-router-and-pages/dish-router-and-page/user-dish-page/index.js',
        adminInfo: './src/server/admin-router-and-pages/info-router-and-page/admin-info-page/index.js',
        adminReserve: './src/server/admin-router-and-pages/reserve-router-and-page/admin-reserve-page/index.js',
        adminDish: './src/server/admin-router-and-pages/dish-router-and-page/admin-dish-page/index.js',
        admin: './src/server/admin-authentication/page/index.js'
    },
    output: {
        filename: '[name]-bundle.js',
        path: '/siteForPractice/src/server/public',
        sourceMapFilename: 'sourceMap/[name].map'
    },
    devtool: 'source-map',
    //watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            }
        ]
    }
}
