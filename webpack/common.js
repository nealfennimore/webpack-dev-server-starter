const { resolve } = require( 'path' );
const { publicPath } = require( './constants' );

module.exports = {
    entry: resolve( process.env.PWD, 'main.js' ),
    context: resolve( process.env.PWD ),
    output: {
        publicPath,
        path: resolve( __dirname, '../dist' ),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id]-[chunkhash].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.pcss'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
};
