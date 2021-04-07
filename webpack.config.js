const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const { DefinePlugin, optimize } = require("webpack");
const portfinder = require('portfinder');

const path = require("path");
const chalk = require("chalk");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const buildPath = "dist";

const excuteWebpackConfig = (env, port) => {
  const { NODE_ENV, APP } = env;
  console.log(chalk.yellow(`[运行环境：${NODE_ENV}] [项目：${APP}] [端口号：${port}] `));

  const isDevelopment = NODE_ENV == "development";
  //动态加载相关项目模块的配置文件
  const appConfig = require(`./config/projects/${APP}`);
  const envConfig = require("./config/env");
  const { getProxy, static_options } = require('./config/proxy');
  const proxy = getProxy(static_options);
  return {
    entry: path.resolve(__dirname, `src/projects/${APP}/index.js`),
    output: {
      path: path.resolve(__dirname, `${buildPath}/${APP}`),
      filename: "[name].[chunkhash:4].js"
    },
    extensions: ['.js', '.vue', '.json'],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      }
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
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
        favicon: "public/favicon.ico",
        filename: "index.html",
        title: appConfig.title,
      }),
      new CleanWebpackPlugin(),
      new optimize.AggressiveSplittingPlugin({
        minSize: 30000,
        maxSize: 50000,
        chunkOverhead: 0,
        entryChunkMultiplicator: 1
      }),
      new DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(NODE_ENV),
          ENV_CONFIG: JSON.stringify(envConfig[NODE_ENV]),
          APP_CONFIG: JSON.stringify(appConfig)
        },
      }),
      new VueLoaderPlugin(),
    ],
    devtool: isDevelopment ? "inline-source-map" : "nosources-source-map",
    devServer: {
      contentBase: path.resolve(__dirname, buildPath),
      compress: true,
      port: port,
      stats: "errors-only",
      open: true,
      proxy
    }
  };
}

module.exports = env => {
  return new Promise((resolve, reject) => {
    // 扫描端口们
    portfinder.getPort({ port: 3000, stopPort: 3999 }, (err, port) => {
      if (err) {
        reject();
      } else {
        resolve(excuteWebpackConfig(env, port));
      }
    });
  })
}

