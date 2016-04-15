#### Run the webpack watcher (from inside the repo folder "webpack-es6-react-sass-boilerplate" or if renamed "assets")
`npm start`

##### Delete index.html if not needed
##### See main comment in src/index.js for javascript file usage

#### WordPress setup
In `scss/main.scss` make sure the `@import "./utils/wordpress-theme";` import is not commented out, and is the first import.
In `scss/utils/_wordpress-theme.scss` fill in your child theme details
In `webpack.config.js` make sure `WORDPRESS_CLIENT` is the constant being used by `new ExtractTextPlugin(WORDPRESS_CLIENT)` in "plugins"
Make sure the `functions.php` file has an enqueue script for the `assets/scripts/index.js` file. e.g.
```
/**
 * Load the main index.js script from assets
 */
function THEMENAME_scripts() {
	wp_enqueue_script( 'main-index', get_template_directory_uri() . '/assets/scripts/index.js', array(), '1.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'THEMENAME_scripts' );```

# webpack setup
### Install all npm dependencies (If it hasn't been done i.e. if You have an empty package.json - This will almost never be the case)
`npm install webpack webpack-livereload-plugin webpack-node-externals babel-core babel-loader babel-preset-es2015 babel-preset-react core-js postcss-loader autoprefixer precss node-sass sass-loader css-loader radium extract-text-webpack-plugin --save-dev`
`npm install react react-dom --save`
