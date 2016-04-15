### Setup gulp for scss compiling(& autoprefixing) & webpack(es6 & React transpiling) watch
#### React is using Radium for component style scoping & injection
Webpack supports Common JS modules to allow ```module.exports``` and ```require``` in the browser


```npm install -g webpack gulp```


```npm install -S react react-dom```


```npm install --save-dev gulp gulp-util gulp-autoprefixer gulp-rename gulp-plumber gulp-load-plugins gulp-livereload gulp-sourcemaps gulp-sass webpack babel-preset-react radium babel-loader babel-core babel-preset-es2015 ```

–Then–

```gulp watch```


=======================
### Install all npm dependencies (If it hasn't been done i.e. if You have an empty package.json)
`npm install webpack webpack-livereload-plugin webpack-node-externals babel-core babel-loader babel-preset-es2015 babel-preset-react core-js node-sass sass-loader css-loader radium extract-text-webpack-plugin --save-dev`
`npm install react react-dom --save`

#### Run the webpack watcher (from inside the repo folder "webpack-es6-react-sass-boilerplate" or if renamed "assets")
`npm start`
