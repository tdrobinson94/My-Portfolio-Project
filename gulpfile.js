'use strict';

const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        uglifycss = require('gulp-uglifycss'),
        browserSync = require('browser-sync').create()

// SASS to CSS
function scss() {
  //where is the sass file
  return gulp.src('./src/sass/*.scss')
    //pass the file through the compiler
    .pipe(sass.sync().on('error', sass.logError))
    //save the file at this location
    .pipe(gulp.dest('./app/css'))
    //Stream changes to all browserSync
    .pipe(browserSync.stream());
}

// Minify CSS
function css() {
  return gulp.src('./app/css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });
  gulp.watch('./src/sass/*.scss', scss);
  gulp.watch('./app/*.html').on('change', browserSync.reload);
  gulp.watch('./src/js/*.js').on('change', browserSync.reload);

}

exports.css = css;
exports.scss = scss;
exports.watch = watch;
