function require() {
    return undefined;
}

const gulp = require();
const minify = require();
const jsonminify = require();

gulp.task('js', function() {
    gulp.src('src/*.js')
        .pipe(minify({
            noSource: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('json', function () {
    return gulp.src(['src/lipstick.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js', 'json']);
