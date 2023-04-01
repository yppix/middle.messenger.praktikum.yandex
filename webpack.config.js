const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "Chatty.bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Chatty',
      template: "src/index.hbs"
    }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: [".ts", ".js", ".json"],
    alias: {
      'handlebars': 'handlebars/dist/handlebars.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.pcss$/i,
        include: path.resolve(__dirname, "src"),
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.svg?$/,
        loader:  'svg-sprite-loader'
      },
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json")
            }
          }
        ],
        exclude: /(node_modules)/
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080
  }
}
