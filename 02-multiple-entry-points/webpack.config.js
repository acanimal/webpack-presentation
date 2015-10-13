"use strict";

var path = require("path");
var Webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


// Our configuration
module.exports = {

	// Define the entry point
	entry: {
		app1: path.resolve(__dirname, "js", "app1.js"),
		app2: path.resolve(__dirname, "js", "app2.js")
	},

	// Output configuration
	output: {
		path: path.resolve(__dirname, "assets"),
		filename: "[name].js",
		chunkFilename: "[id].js"
	},

	module: {
		loaders: [
			// Inform CSS modules must be bundled in another file.
			{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
		]
	},

	plugins: [
		// Extract all CSS content to a file
    new ExtractTextPlugin("[name].css")
	]

};
