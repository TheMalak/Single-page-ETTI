const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('*.sass')
        .pipe(sass({
            outputStyle: 'compressed',
            sourceComments: false
        }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));
