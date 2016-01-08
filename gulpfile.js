// Include gulp
var gulp = require('gulp');

// Load all plugins in package.json
var plugin = require('gulp-load-plugins')();
var webpack = require('webpack');
var gutil = require('gulp-util');

const webpackConfig = require('./webpack.config.js');

// Path vars
const BASE_PATH = './';

const SCSS_PATH = BASE_PATH + 'scss',
 		CSS_PATH = BASE_PATH + 'css',
 		JS_PATH = BASE_PATH + 'js',
 		SRC_PATH = BASE_PATH + 'src',
 		MIN_PATH = SRC_PATH + 'min';



//=================================//
// CSS
//=================================//
// SASS -- Compile, autoprefix, build sourcemap, livereload (w/out refresh)
gulp.task('sass-compile-prefix', function() {
	return gulp.src(SCSS_PATH + '/main.scss')
		.pipe(plugin.plumber({errorHandler:onError}))
		.pipe(plugin.sourcemaps.init())
		.pipe(plugin.sass())
		.pipe(plugin.autoprefixer(['last 2 versions', 'safari 5','ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']))
		.pipe(plugin.sourcemaps.write('./'))// relative to gulp.dest below
		.pipe(gulp.dest(CSS_PATH))
		.pipe(plugin.livereload());
});

//CSS -- minify
gulp.task('css',['sass-compile-prefix'],function(){
	return gulp.src(CSS_PATH + '/main.css')
		// No need to rename and copy - not minifying. Just initiate livereload
	//	.pipe(plugin.plumber({errorHandler:onError}))
	//	.pipe(plugin.rename('style.css'))
	//	.pipe(gulp.dest(CSS_PATH))
		.pipe(plugin.livereload());
});



//=================================//
// React Build -- Not Used LEGACY
//=================================//
gulp.task('build', function(){
	return gulp.src(SRC_PATH + '/*.js')
		.pipe(plugin.plumber({errorHandler:onError}))
		.pipe(plugin.react())
		//.pipe(plugin.concat(MIN_PATH))
		//.pipe(plugin.uglify(MIN_PATH))
		.pipe(gulp.dest(JS_PATH));
});



//=================================//
// Webpack - Babel & React
//=================================//
gulp.task("webpack", function() {
	webpack(webpackConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		// Spits too many messages to console. Annoying
		//gutil.log("[webpack]", stats.toString({
		//	// output options
		//}));
	});
});


//====================//
// Pure Babel - Be sure to update babel presets and gulp-babel
//====================//
gulp.task('src-babel', function () {
	return gulp.src(SRC_PATH + '/**/*.js')
		.pipe(plugin.sourcemaps.init())
		.pipe(babel({presets:['es2015']}))
		.pipe(plugin.sourcemaps.write('./'))
		.pipe(gulp.dest(JS_PATH));
});



//=================================//
// Watch  ( usage: $ gulp watch )
//=================================//
gulp.task('watch', function() {
	plugin.livereload.listen();

	// Watch scss files
	gulp.watch(SCSS_PATH + '/**/*.scss', ['css']);
	gulp.watch(SRC_PATH + '/**/*.js', ['webpack']);
});






//=================================//
// DEBUG to console
//=================================//
gulp.task('debug', function() {
	debug = true;
	gulp.start('watch');
});


/**
 * Error handler/beeper
 * @param e
 */
function onError(e){
	console.log(e);
	this.emit('end')
}