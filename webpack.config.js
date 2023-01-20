const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv                 = require('dotenv-webpack');
const ESLintWebpackPlugin    = require('eslint-webpack-plugin');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const ImageMinimizerPlugin   = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin   = require('mini-css-extract-plugin');
const TerserWebpackPlugin    = require('terser-webpack-plugin');
const path                   = require('path');

const production = process.env.NODE_ENV === 'production';
const mode       = production ? 'production' : 'development';
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
            new ImageMinimizerPlugin({
                minimizer: {
                  implementation: ImageMinimizerPlugin.sharpMinify,
                    options: {
                        encodeOptions: {
                            jpeg: {
                              quality: 100,
                            },
                            webp: {
                              lossless: true,
                            },
                            avif: {
                              lossless: true,
                            },
                            png: {},
                            gif: {},
                        },
                    },
                },
            }),
        ]
    }

    return config;
}

module.exports = {
    mode,
    target,
    devtool,
    entry: {
        main: ['@babel/polyfill', path.resolve(__dirname, './src/index.tsx')]
    },
    output: {
        filename: production ? '[name].[contenthash].js' : '[name].js',
        path: path.resolve(__dirname, './dist'),
        assetModuleFilename: 'assets/[hash][ext]',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
        new ESLintWebpackPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
        new Dotenv(),
    ],
    module: {
        rules: [
            // Js|x, ts|x
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                        "@babel/preset-env",
                        "@babel/preset-react",
                        "@babel/preset-typescript",
                        ],
                    }
                }
            },
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
            // Fonts
            {
                test: /\.(woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]',
                }
            },
            // Images
            {
                test: /\.(jpe?g|png|gif|svg|ico|webp)(\?[a-z0-9=.]+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]',
                }
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