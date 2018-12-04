var PATH = require('path');

var basePath = PATH.resolve(__dirname + '/src/client/');
var outputPath = PATH.resolve(__dirname + '/public/');

module.exports = {
	entry: {
		app: ['babel-polyfill', PATH.join(basePath + '/PrimeNumberApp.js')]
	},
	output: {
		filename: '[name].bundle.js',
		path: PATH.join(outputPath + '/build/')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_nodules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							compact: true
						}
					}
				]
			},
			{
				test: /\.(s*)css$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			}
		]
	}
};
