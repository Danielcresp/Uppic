var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
gulp.task('style', done => {
    gulp.src('index.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('src/css'));
        done();
});
gulp.task('assets',done=>{
    gulp.src('assets/*')
         .pipe( gulp.dest('public'));
         done();
})
gulp.task('scripts',done=>{
     browserify('./src/index.js')
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'))
    done();
})
gulp.task('default', gulp.series('style','assets','scripts'));


