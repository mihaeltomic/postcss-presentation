var gulp = require('gulp');
var postcss = require('gulp-postcss');

//Plugins
var mixins = require('postcss-mixins');
var simplevars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var customMedia = require('postcss-custom-media');
var autoprefixer = require('autoprefixer-core');
var atImport = require("postcss-import");

//Defining processirs and dest
gulp.task('css', function (){
  var processors = [
    atImport ({
      from: "css/app.css"
    }),
    mixins,
    simplevars,
    nested,
    customMedia,
    autoprefixer ({ 
      browsers: ['last 6 version'] 
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
  })
