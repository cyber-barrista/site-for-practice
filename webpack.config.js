const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        userInfo: './src/frontend/user-info/index.js',
        userReserve: './src/frontend/user-reserve/index.js',
        userDish: './src/frontend/user-dish/index.js',
        adminInfo: './src/frontend/admin-info/index.js',
        adminReserve: './src/frontend/admin-reserve/index.js',
        adminDish: './src/frontend/admin-dish/index.js',
        admin: './src/frontend/admin/index.js'
    },
    output: {
        filename: '[name]-bundle.js',
        path: '/siteForPractice/public',
        sourceMapFilename: 'sourceMap/[name].map'
    },
    devtool: 'source-map',
    watch: true,
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
    },
    performance: {
        hints: false
    },
    mode: 'development'
}
