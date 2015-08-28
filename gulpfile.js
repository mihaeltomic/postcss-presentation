var gulp = require('gulp');
var postcss = require('gulp-postcss');

//Plugins
var mixins = require('postcss-mixins');
var simplevars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var customMedia = require('postcss-custom-media');
var cssnano = require('cssnano');
var pxtorem = require('postcss-pxtorem');
var autoprefixer = require('autoprefixer-core');
var atImport = require("postcss-import");

//Processors
gulp.task('css', function (){
  processors = [
    mixins,
    pxtorem({
      prop_white_list: [],
      selector_black_list: ['a', 'body']
    }),
    atImport ({
      from: "css/app.css"
    }),
    simplevars,
    nested,
    customMedia,
    // cssnano,
    autoprefixer ({ 
      browsers: ['last 4 version', 'IE 8'] 
    })
  ];
  return gulp.src('css/app.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist'))
  ;});

//Watch task
gulp.task('watch', ['css'],
  function () {
    gulp.watch('css/*.css', ['css']);
    gulp.watch(['*.html', '*.js']);
  })
