var gulp = require('gulp');
var babel = require("gulp-babel");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
  return gulp.src('src/client/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('../static/css'));
});

gulp.task('copy', function () {
  gulp.src([
    'node_modules/font-awesome/**',
    '!node_modules/font-awesome/**/*.map',
    '!node_modules/font-awesome/.npmignore',
    '!node_modules/font-awesome/*.txt',
    '!node_modules/font-awesome/*.md',
    '!node_modules/font-awesome/*.json'
  ])
    .pipe(gulp.dest('../static/vendor/font-awesome'))
});

gulp.task("default", ['sass', 'copy'], function () {
  return gulp.src("src/client/js/**/*.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest("../static/js"));
});