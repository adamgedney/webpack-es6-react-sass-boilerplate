##Using webpack to transpile with babel and support Common JS modules:
### The modules below also support the gulpfile that will run everything. This compiles scss to css as well
*Easier implementation actually. More along the Universal JS methodology lines
```npm install -g webpack```
```npm install -g gulp```
```npm install --save-dev gulp gulp-util gulp-autoprefixer gulp-rename gulp-plumber gulp-load-plugins gulp-livereload gulp-sourcemaps gulp-sass webpack babel-loader babel-core babel-preset-es2015 ```

// For React support (With radium for component style scoping & injection)
```npm install -S react react-dom```
```npm install --save-dev babel-preset-react radium```

–Then–

```npm run watch```