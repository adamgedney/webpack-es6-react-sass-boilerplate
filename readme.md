##Using webpack to transpile with babel and support Common JS modules:
### The modules below also support the gulpfile that will run everything. This compiles scss to css as well

### Setup gulp for scss compiling & webpack(es6 & React transpiling) watch
#### React is using Radium for component style scoping & injection


```npm install -g webpack gulp```


```npm install -S react react-dom```


```npm install --save-dev gulp gulp-util gulp-autoprefixer gulp-rename gulp-plumber gulp-load-plugins gulp-livereload gulp-sourcemaps gulp-sass webpack babel-preset-react radium babel-loader babel-core babel-preset-es2015 ```

–Then–

```gulp watch```