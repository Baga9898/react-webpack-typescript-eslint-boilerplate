const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const MiniCssExtractPlugin   = require('mini-css-extract-plugin');
const path                   = require('path');
const TerserWebpackPlugin    = require('terser-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const target     = !production ? 'web' : 'browserslist';
const devtool    = !production ? 'source-map' : undefined;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        }
    }

    if (production) {
        config.minimizer = [
            new TerserWebpackPlugin(),
        ]
    }

    return config;
}

module.exports = {
    mode: production ? 'production' : 'development',
    target,
    devtool,
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: production ? '[name].[contenthash].js' : '[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    optimization: optimization(),
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'App name',
            template: './public/index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contenthash].css' : '[name].css',
        }),
    ],
    module: {
        rules: [
            // CSS & SASS
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    !production ? 'style-loader' : MiniCssExtractPlugin.loader, 
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')],
                            }
                        }
                    },
                    'sass-loader',
                ],
            },
            // Images & fonts
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|ico)(\?[a-z0-9=.]+)?$/,
                use: ['file-loader'],
            },
            // XML
            {
                test: /\.xml$/,
                use: ['xml-loader'],
            },
            // CSV
            {
                test: /\.csv$/,
                use: ['csv-loader'],
            },
        ],
    }
}