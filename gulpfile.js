// Variables
var server = {
    host: 'localhost',
    port: '8001',
    https: false
}

// Global Packages
var gulp = require('gulp');

// Stylesheet Packages
var sass = require('gulp-sass');

// Webserver packages
var browserSync = require('browser-sync').create();

// Stylesheet Tasks
gulp.task('sass-dev', function () {
    return gulp.src([
        './sass/*.scss',
      ])
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());      
});

// Watch Tasks
gulp.task('watch',['sass-dev'], function () {
    browserSync.init({
        server: "."
    });
    gulp.watch('./sass/*.scss', ['sass-dev']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

//Default task
gulp.task('default', ['watch']);