const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	mode: "development",
	entry: {
		main: path.resolve(__dirname, "src/app.js"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		clean: true,
		assetModuleFilename: "[name][ext]",
	},

	// loaders (allow you to bundle other files not only JS files)
	module: {
		rules: [
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{ test: /\.(svg|ico|png|jpg|gif|jpeg)$/, type: "asset/resource" },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	// plugins (adding different functionality to webpack)

	plugins: [
		new HtmlWebpackPlugin({
			title: "Contacts",
			filename: "index.html",
			template: path.resolve(__dirname, "src/template.html"),
		}),
	],

	// Dev server configuration
	devtool: "inline-source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 5002, //default port 8080
		open: true,
		hot: true,
		liveReload: true,
	},
};