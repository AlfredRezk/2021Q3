
const WebpackStripLoader = require("strip-loader");
let devConfig = require("./webpack.config.js");

let stripLoader = {
	test: [/\.js$/, /\.es6$/],
	exclude: /node_modules/,
	use: {
		loader: WebpackStripLoader.loader('console.log'),
	},
};

devConfig.module.rules.push(stripLoader);
module.exports = devConfig;