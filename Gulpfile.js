var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('style', done => {
    gulp.src('index.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('src/css'));
        done();
});
  
gulp.task('default', gulp.series('style'));


