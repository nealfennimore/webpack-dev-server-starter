const merge = require( 'webpack-merge' );
const ExtractCssChunks = require( 'extract-css-chunks-webpack-plugin' );
const common = require( './common' );

module.exports = merge(
    common,
    {
        mode: 'production',
        output: {
            filename: '[name].js',
            chunkFilename: '[id].js',
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.p?css$/,
                    exclude: /node_modules/,
                    use: [
                        ExtractCssChunks.loader,
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
            new ExtractCssChunks( {
                filename: '[name].css',
                chunkFilename: '[id].css',
            } ),
        ],
    },
);
