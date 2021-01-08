const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard");
const path = require("path");
const buildPath = "dist";

const { NODE_ENV } = process;
const isDevelopment = NODE_ENV == "development";

const devtool = isDevelopment ? "eval-source-map" : "hidden-source-map";

module.exports = {
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
        path: path.resolve(__dirname, buildPath),
        filename: "[name].[chunkhash:8].js"
    },
    module: {
        rules: [{
                test: /\.(js|ts)x?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(c|sc|sa)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass')
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|svg|ttf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public/index.html"),
            title: "rt-demo",
            filename: "index.html"
        }),
        new DashboardPlugin(dashboard.setData)
    ],
    // devtool: "inline-source-map",
    devtool: "nosources-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, buildPath),
        compress: true,
        port: 9696
    }
}
