"use strict";

var Webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanPlugin = require("clean-webpack-plugin");
var path = require("path");

var nodeModulesPath = path.resolve(__dirname, "node_modules");
var assetsPath = path.resolve(__dirname, "public", "assets");
var mainPath = path.resolve(__dirname, "client");
var packageVersion = require("./package.json").version;

var config = {

  // Genera source maps
  devtool: "eval",

  // Entrades per les diferents "apps" (una per pagina.).
  entry: {
    "temps-ara": path.resolve(mainPath, "temps-ara.js"),
    "prediccio-per-hores": path.resolve(mainPath, "prediccio-per-hores.js"),
    "prediccio-per-dies": path.resolve(mainPath, "prediccio-per-dies.js"),
    "catalunya-prediccio": path.resolve(mainPath, "catalunya-prediccio.js"),
    "catalunya-temps-actual": path.resolve(mainPath, "catalunya-temps-actual.js"),
    "catalunya-resum-dades": path.resolve(mainPath, "catalunya-resum-dades.js"),
    "social-tweets": path.resolve(mainPath, "social-tweets.js"),
    "social-mapa-tweets": path.resolve(mainPath, "social-mapa-tweets.js"),
    "social-llista-tweets": path.resolve(mainPath, "social-llista-tweets.js"),
    "videos": path.resolve(mainPath, "videos.js")
  },
  output: {
    // Directori de sortida dels assets
    path: assetsPath,
    filename: "[name].[hash].js",
    chunkFilename: "[name].chunk.js",

    // Path de la URL publica a partir del qual estaran accesibles.
    // Exemple: http://localhost:8888/assets/
    // TODO - Modificar segun estemos en produccion o desarrollo
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      // Los modulos CSS requeridos por algun "entry" son extraidos y almacenados
      // en el fichero style.css.
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$|\.sass$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {
        test: /\.png$|\.svg$|\.jpg$|\.gif$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.eot$|\.woff$|\.ttf$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    // Netejem directori de sortida en cada build
    // Nota: "assetsPath" es absolut i necessitem indicar el segon parameter "context"
    // per indicar el rootPath.
    new CleanPlugin([assetsPath], "/"),
    // Extraemos los CSS a un fichero de estilos
    new ExtractTextPlugin("style.[hash].css"),
    // Minimizamos codigo JavaScript
    // TODO - Minimizar en produccion
    // new Webpack.optimize.UglifyJsPlugin({minimize: true}),
    // Generamos paginas HTML con referencias a los assets
    new HtmlWebpackPlugin({
      packageVersion: packageVersion,
      inject: false,
      template: "views/webpack/link-css.webpack.nunjucks.html",
      filename: "../../views/generated/link-css.nunjucks.html"
    }),
    new HtmlWebpackPlugin({
      packageVersion: packageVersion,
      inject: false,
      template: "views/webpack/link-js.webpack.nunjucks.html",
      filename: "../../views/generated/link-js_temps-ara.nunjucks.html",
      chunks: ["temps-ara"]
    }),
    new HtmlWebpackPlugin({
      packageVersion: packageVersion,
      inject: false,
      template: "views/webpack/link-js.webpack.nunjucks.html",
      filename: "../../views/generated/link-js_prediccio-per-hores.nunjucks.html",
      chunks: ["prediccio-per-hores"]
    }),
    new HtmlWebpackPlugin({
      packageVersion: packageVersion,
      inject: false,
      template: "views/webpack/link-js.webpack.nunjucks.html",
      filename: "../../views/generated/link-js_prediccio-per-dies.nunjucks.html",
      chunks: ["prediccio-per-dies"]
    }),
    new HtmlWebpackPlugin({
      packageVersion: packageVersion,
      inject: false,
      template: "views/webpack/link-js.webpack.nunjucks.html",
      filename: "../../views/generated/link-js_catalunya-prediccio.nunjucks.html",
      chunks: ["catalunya-prediccio"]
    }),
    new HtmlWebpackPlugin({
      packageVersion: packageVersion,
      inject: false,
      template: "views/webpack/link-js.webpack.nunjucks.html",
      filename: "../../views/generated/link-js_catalunya-temps-actual.nunjucks.html",
      chunks: ["catalunya-temps-actual"]
    }),
    new HtmlWebpackPlugin({
      packageVersion: packageVersion,
      inject: false,
      template: "views/webpack/link-js.webpack.nunjucks.html",
      filename: "../../views/generated/link-js_catalunya-resum-dades.nunjucks.html",
      chunks: ["catalunya-resum-dades"]
    }),
    new HtmlWebpackPlugin({
      packageVersion: packageVersion,
      inject: false,
      template: "views/webpack/link-js.webpack.nunjucks.html",
      filename: "../../views/generated/link-js_social-tweets.nunjucks.html",
      chunks: ["social-tweets"]
    }),
    new HtmlWebpackPlugin({
      packageVersion: packageVersion,
      inject: false,
      template: "views/webpack/link-js.webpack.nunjucks.html",
      filename: "../../views/generated/link-js_social-mapa-tweets.nunjucks.html",
      chunks: ["social-mapa-tweets"]
    }),
    new HtmlWebpackPlugin({
      packageVersion: packageVersion,
      inject: false,
      template: "views/webpack/link-js.webpack.nunjucks.html",
      filename: "../../views/generated/link-js_social-llista-tweets.nunjucks.html",
      chunks: ["social-llista-tweets"]
    }),
    new HtmlWebpackPlugin({
      packageVersion: packageVersion,
      inject: false,
      template: "views/webpack/link-js.webpack.nunjucks.html",
      filename: "../../views/generated/link-js_videos.nunjucks.html",
      chunks: ["videos"]
    })
  ]
};

module.exports = config;
