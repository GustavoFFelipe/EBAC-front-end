const { parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

/**compriminco styles  */
function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}

/* comprimindo images*/
function images(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}
/* comprimindo javascript*/
function minifyJS(){
    return gulp.src('./src/scripts/*.js')
    .pipe(gulp.dest(uglify()))
    .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.parallel(styles, images,minifyJS );
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(minifyJS))
}
