const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const MiniCssExtractPlugin   = require('mini-css-extract-plugin');
const path                   = require('path');

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        }
    }
    return config;
}

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    optimization: optimization(),
    devServer: {
        port: 3000,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'App name',
            template: './public/index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    module: {
        rules: [
            // CSS
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
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