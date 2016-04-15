var path = require('path'),
webpack = require('webpack'),
ExtractTextPlugin = require('extract-text-webpack-plugin'),
nodeExternals = require('webpack-node-externals'),// For excluding node_modules from bundle
precss       = require('precss'),
autoprefixer = require('autoprefixer'),
BASE_PATH = './',
SCSS_PATH = BASE_PATH + 'scss',
Styles_PATH = BASE_PATH + 'styles',
SCRIPTS_PATH = BASE_PATH + 'scripts',
SRC_PATH = BASE_PATH + 'src';

require('core-js');

/**
 * Might need this to import all css @imports  https://github.com/postcss/postcss-import
 */



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
		styles: [ __dirname + "/scss/main.scss"],
		app: [__dirname + "/src/index.js"]
	},
	devtool: "source-map",
	output: {
		path: __dirname + '/scripts/',//Absolute path
		publicPath: '/scripts/',//on client, served from  e.g. /js/index.js
		filename: "index.js",
		sourceMapFilename: "[file].map"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				include : [__dirname + '/src'],
				loader: 'babel-loader',
				presets: ['es2015']
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader?pack=cleaner!sass-loader?sourceMap=true&sourceMapContents=true')
			}
		]
	},
	postcss: function () {
		return {
			defaults: [precss, autoprefixer],
			cleaner:  [autoprefixer({browsers: ["last 2 versions"]})]
		};
	},
	plugins: [new ExtractTextPlugin('../styles/style.css',{allChunks:true})]
};