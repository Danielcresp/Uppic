var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
gulp.task('style', done => {
    gulp.src('index.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('assets'));
        done();
});
gulp.task('assets',done=>{
    gulp.src('assets/*')
         .pipe( gulp.dest('public'));
         done();
})

function compile(watch){
    var bundle = watchify(browserify('./src/index.js'));
    function rebundle(){
        bundle
        .transform(babelify)
        .bundle()
        .on('error',function(err){console.log(err); this.emit('end') })
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public'));
    }
    if(watch){
        bundle.on('update',function(){
            console.log('--> Bundling...');
            rebundle();
        })
    }
    rebundle();
}
// gulp.task('scripts',done=>{
//      browserify('./src/index.js')
//     .transform(babelify)
//     .bundle()
//     .pipe(source('index.js'))
//     .pipe(rename('app.js'))
//     .pipe(gulp.dest('public'))
//     done();
// })
gulp.task('build',done=>{
    return compile();
    done();
});
gulp.task('watch',done =>{
    return compile(true);
    done();
});
gulp.task('default', gulp.series('style','assets'));


