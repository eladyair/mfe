// 3rd Parties
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Common Config
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}

module.exports = merge(commonConfig, devConfig)