let gulp = require('gulp'),
    scss = require('gulp-sass'),
    browserSync = require('browser-sync'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify');

        gulp.task('scss', () => {
            return gulp.src(['scss/*.scss'])
                .pipe(scss({outputStyle: 'expanded'}).on('error', scss.logError))
                .pipe(gulp.dest('css'))
                .pipe(browserSync.reload({stream: true}))
        });

gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: "./"
        },
        notify: false
    })
});

gulp.task('minify', () => {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('cleanCSS', () => {
    gulp.src('css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', ['browser-sync', 'scss'], () => {
    gulp.watch('./scss/*.scss', ['scss']);
});