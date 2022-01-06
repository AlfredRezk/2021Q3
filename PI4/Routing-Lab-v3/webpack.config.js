const path = require('path');


module.exports = {
	entry: "./src/app.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, ""),
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, ""),
		},
		port: 3000,
		compress: true,
		hot: true,
		liveReload: true,
		open: true,
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	}
};