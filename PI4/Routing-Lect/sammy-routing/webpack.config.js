const path = require('path');

module.exports = {
	entry: "./app.js",

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, ""),
	},

	devServer: {
		static: {
			directory: path.join(__dirname, ""),
		},
		port: 3000,
		compress: true,
		hot: true,
		open: true,
	},
	module: {
		rules: [{ test: /\.js$/, use: "babel-loader" }],
	},
	mode: "development",
};