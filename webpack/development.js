const merge = require( 'webpack-merge' );
const ExtractCssChunks = require( 'extract-css-chunks-webpack-plugin' );
const { publicPath } = require( './constants' );
const common = require( './common' );

module.exports = merge(
    common,
    {
        mode: 'development',
        devtool: 'cheap-module-eval-source-map',
        output: {
            publicPath,
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.p?css$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: ExtractCssChunks.loader,
                            options: {
                                hot: true,
                            },
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                            },
                        },
                        'postcss-loader',
                    ],
                },
            ],
        },
        plugins: [
            new ExtractCssChunks( { hot: true } ),
        ],
        devServer: {
            publicPath,
            hot: true,
        },
    },
);
