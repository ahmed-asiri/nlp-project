const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Template } = require("webpack");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/client/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        open: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/views/index.html'
        }),
        new WorkboxPlugin.GenerateSW({
            swDest: "sw.js",
            skipWaiting: true,
            clientsClaim: true
        })
    ]
};