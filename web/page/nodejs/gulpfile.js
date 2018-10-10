const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const { src, dest, series } = require('gulp');

const paths = {
  styles: {
    src: 'src/client/sass/styles.scss',
    dest: '../static/css'
  },
  scripts: {
    src: 'src/client/js/**/*.js',
    dest: '../static/js'
  }
};


function styles(done) {
  src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest(paths.styles.dest));
  done();
}

function copy(done) {
  src([
    'node_modules/font-awesome/**',
    '!node_modules/font-awesome/**/*.map',
    '!node_modules/font-awesome/.npmignore',
    '!node_modules/font-awesome/*.txt',
    '!node_modules/font-awesome/*.md',
    '!node_modules/font-awesome/*.json'
  ])
    .pipe(dest('../static/vendor/font-awesome'))
  done();
}

function scripts(done) {
  src(paths.scripts.src)
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest(paths.scripts.dest));
  done();
}

exports.default = series(styles, copy, scripts);
