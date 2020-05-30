const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg|xml)$/i,
                use: "file-loader"
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader"
                },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: "../dist"
    },
    resolve: {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
    },
    plugins: [
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, "../")
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        })
    ]
}
