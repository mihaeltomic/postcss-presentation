var gulp = require('gulp');
var postcss = require('gulp-postcss');
var mixins = require('postcss-mixins');
var simplevars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var customMedia = require('postcss-custom-media');
var cssnano = require('cssnano');
var pxtorem = require('postcss-pxtorem');
var autoprefixer = require('autoprefixer-core');

gulp.task('css', function (){
  processors = [
    pxtorem({
      prop_white_list: [],
      selector_black_list: ['a', 'body']
    }),
    mixins,
    simplevars,
    nested,
    customMedia,
    // cssnano,
    autoprefixer ({ 
      browsers: ['last 4 version', 'IE 8'] 
    })
  ];
  return gulp.src('css/style.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist'))
;});

gulp.task('watch', ['css'],
  function () {
    gulp.watch('css/*.css', ['css']);
    gulp.watch(['*.html', '*.js']);
  })
