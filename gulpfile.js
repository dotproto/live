// == DEPS =====================================================================
// 
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// == PATHS ====================================================================
var source = {
  html: ['./lib/templates/**/*.html'],
  style: ['./lib/styles/**/*.styl']
};

var target = {
  html: './dist',
  style: './dist/style'
}

// == TASKS ====================================================================
gulp.task('html', function() {
  gulp.src(source.html)
    .pipe(gulp.dest(target.html));
});

gulp.task('style', function () {
  gulp.src(source.style)
    .pipe(stylus())
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('watch', function() {
  gulp.watch([source.html], ['html']);
  gulp.watch([source.style], ['style']);
});

// watch files for changes and reload
gulp.task('sync', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });
  gulp.watch(['**/*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'dist'}, reload);
});

gulp.task('default', ['html', 'style', 'watch', 'sync']);