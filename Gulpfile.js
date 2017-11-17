var gulp = require('gulp');
<<<<<<< HEAD
//var gulp = require('gulp-htmlmin');
var sass = require('gulp-sass');
//var gulp = require('gulp-inject');

=======
var gulp = require('gulp-htmlmin');
var sass = require('gulp-sass');
var gulp = require('gulp-inject');
>>>>>>> 03ad45588bf643edd4c42a58242e4692b3a0f42f
// Sass
gulp.task('styles', function() {
    gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

//Watch
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});