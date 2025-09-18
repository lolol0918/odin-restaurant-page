// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // where your code starts
  output: {
    filename: "main.js", // name of the bundle
    path: path.resolve(__dirname, "dist"),
    clean: true, // clears old files in dist before each build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // take from src
    }),
  ],
  devServer: {
    static: "./dist", // tell dev server to serve files from dist
    open: true,       // auto-open browser when running `npx webpack serve`
  },
};
