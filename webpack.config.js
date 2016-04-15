var path = require('path'),
webpack = require('webpack'),
ExtractTextPlugin = require('extract-text-webpack-plugin'),
nodeExternals = require('webpack-node-externals'),// For excluding node_modules from bundle
BASE_PATH = './',
SCSS_PATH = BASE_PATH + 'scss',
CSS_PATH = BASE_PATH + 'css',
JS_PATH = BASE_PATH + 'js',
SRC_PATH = BASE_PATH + 'src';

require('core-js');



module.exports = {
	target: 'node',
	externals: [nodeExternals({
		//whitelist: ['jquery'] //- Which node_modules modules to allow in the bundling
	})],
	context: path.join(__dirname,'./'),
	resolve: {
		// When requiring in a file, search node_modules,src, and scss
		modulesDirectories: ["node_modules", "src", "scss"],
		extensions: ["", ".js", ".scss"]
	},
	entry: {
		app: [__dirname + "/src/index.js", __dirname + "/scss/main.scss"]
	},
	devtool: "source-map",
	output: {
		path: __dirname + '/js/',//Absolute path
		publicPath: '/js/',//on client, served from  e.g. /js/index.js
		filename: "index.js",
		sourceMapFilename: "[file].map"
	},
	devServer: {
		contentBase: "./css",
		inline: true,
		watch: true,
		hot: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				include : [__dirname + '/src'],
				loader: 'babel-loader',
				//query: {
				//	nonStandard: 'false',
				//	presets: ['es2015']
				//},
				presets: ['es2015']
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap=true&sourceMapContents=true')
			}
		]
	},
	plugins: [new ExtractTextPlugin('styles.css')]
};