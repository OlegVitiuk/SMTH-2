var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var imagemin = require('gulp-imagemin');

gulp.task('css',function () {
    gulp.src([
        './source/css/fonts.css',
        './source/css/reset.css',
        './source/css/styles.css'
    ])
        .pipe(concat('app.css'))
        .pipe(cssMin())
        .pipe(gulp.dest('./build/css'));
});
gulp.task('scripts',function () {
    gulp.src([
        './source/js/scripts.js'
    ])
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('images',function () {
    gulp.src([
        './source/images/*'
    ])
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
});

gulp.task('default',['css','scripts','images']);