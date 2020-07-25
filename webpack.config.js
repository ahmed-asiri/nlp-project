const path = require("path");
const webpack = require("webpack");


module.exports = {
    mode: "development",
    entry: "./src/client/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};