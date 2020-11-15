const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    allowedHosts: ["smart-contest.com"]
  },
  entry: ["./src/js/index.js", "./src/css/style.css"],
  output: {
    filename: "js/app.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  watch: true,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/index.html"
      // filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    new CopyPlugin([{ from: "src/assets", to: "assets" }])
  ],
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 1000
  },
  externals: [
    {
      window: "window"
    }
  ],
  target: "web",
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        //IMAGE LOADER
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets"
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              outputPath: "css",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader"
        ]
      }
    ]
  }
};
