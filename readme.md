### Setup gulp for scss compiling(& autoprefixing) & webpack(es6 & React transpiling) watch
#### React is using Radium for component style scoping & injection
Webpack supports Common JS modules to allow ```module.exports``` and ```require``` in the browser


```npm install -g webpack gulp```


```npm install -S react react-dom```


```npm install --save-dev gulp gulp-util gulp-autoprefixer gulp-rename gulp-plumber gulp-load-plugins gulp-livereload gulp-sourcemaps gulp-sass webpack babel-preset-react radium babel-loader babel-core babel-preset-es2015 ```

–Then–

```gulp watch```


=======================
### Install all npm dependencies
`npm install webpack webpack-dev-server webpack-livereload-plugin webpack-node-externals babel-core babel-loader babel-preset-es2015 babel-preset-react core-js node-sass sass-loader css-loader radium extract-text-webpack-plugin --save-dev`
`npm install react react-dom --save`
