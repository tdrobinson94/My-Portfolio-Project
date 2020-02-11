'use strict';

const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        uglifycss = require('gulp-uglifycss')

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/*.scss', ['sass']);
});


