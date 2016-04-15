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
	SRC_PATH = BASE_PATH + 'src',

	/**
	 * Non WordPress clients: '../styles/style.css'
	 * WordPress clients: '../../style.css'
	 *
	 * Used by the ExtractTextPlugin in "plugins" for determining output location and name of the compiled css file
	 */
	WORDPRESS_CLIENT = '../../style.css',
	NON_WORDPRESS_CLIENT = '../styles/style.css';

require('core-js');

module.exports = {
	//target: 'node',
	externals: [nodeExternals({
		whitelist: ['react','react-dom'] //- Which node_modules modules to allow in the bundling
	})],
	context: path.join(__dirname,'./'),
	resolve: {
		// When requiring in a file, search node_modules,src, and scss
		modulesDirectories: ["node_modules", "src", "scss"],
		extensions: ["", ".js", ".jsx", ".scss"]
	},
	entry: {
		index: [
			__dirname + "/scss/main.scss",
			__dirname + "/src/index.js"
		]
	},
	devtool: "source-map",
	output: {
		path: __dirname + '/scripts/',//Absolute path
		publicPath: '/scripts/',//on client, served from  e.g. /scripts/index.js
		filename: "[name].js",
		sourceMapFilename: "[file].map"
	},
	module: {
		loaders: [
			/** ES6 transpiling w/ React **/
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				include : [__dirname + '/src'],
				loaders: ['babel-loader?presets[]=es2015,presets[]=react']
			},

			/** SCSS compiling 7 css autoprefixing **/
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
	plugins: [
		new ExtractTextPlugin(WORDPRESS_CLIENT)
	]
};