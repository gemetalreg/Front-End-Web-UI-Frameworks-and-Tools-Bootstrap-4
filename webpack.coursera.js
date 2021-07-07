const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "coursera"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/aboutus.html",
      filename: "aboutus.html",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/contactus.html",
      filename: "contactus.html",
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/bundle/]),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
        type: "javascript/auto",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/inline",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/inline",
      },
      {
        test: /\.css$/,
        use: [
          {
            // inject CSS to page
            loader: "style-loader",
          },
          {
            // Run postcss actions
            loader: "postcss-loader",
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [require("autoprefixer")];
                },
              },
            },
          },
          {
            // translates CSS into CommonJS modules
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            // inject CSS to page
            loader: "style-loader",
          },
          {
            // translates CSS into CommonJS modules
            loader: "css-loader",
          },
          {
            // Run postcss actions
            loader: "postcss-loader",
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [require("autoprefixer")];
                },
              },
            },
          },
          {
            // compiles Sass to CSS
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
