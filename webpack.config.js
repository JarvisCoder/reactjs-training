var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		main: [
			'./src/components/main.js'
		]
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'public'),
		publicPath: '/public/'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader/"
			},
			{
				test: /\.scss$/,
				include: /node_modules/,
				loader: "style-loader!css-loader!sass"
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10000'
			}
		]
	}
}