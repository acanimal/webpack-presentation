"use strict";

var path = require("path");
var Webpack = require("webpack");

// Our configuration
module.exports = {

	// Define the entry point
	entry: path.resolve(__dirname, "js", "app.js"),

	// Output configuration
	output: {
		path: path.resolve(__dirname, "assets"),
		filename: "bundle.js"
	},

	module: {
		loaders: [
			// Inform about CSS loaders so that it can be bundled too
			{ test: /\.css$/, loader: "style-loader!css-loader" }
		]
	}
	
};
