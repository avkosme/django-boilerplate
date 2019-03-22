const gulp = require('gulp'),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    gutil = require("gulp-util"),
    webpack = require("webpack"),
    merge = require('merge-stream'),
    argv = require('yargs').argv,
    uglify = require('gulp-uglify'),
    server = require('browser-sync').create(),
    del = require('del'),
    run = require('run-sequence'),
    plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    concat = require('gulp-concat');


sass.compiler = require('node-sass');

const settings = {
    "build": "../web/static/"
}


/**
 * Page style compiler
 */
gulp.task('page-style', function () {
    let sassStream = gulp.src('./src/frontend/sass/index.scss')
        .pipe(sass({ outputStyle: 'compressed' }));

    let lessStream = gulp.src('./src/frontend/less/page/antd.less')
        .pipe(less({ outputStyle: 'compressed' }));

    let sassSlickTheme = gulp.src('./node_modules/slick-carousel/slick/slick-theme.scss')
        .pipe(sass({ outputStyle: 'compressed' }));

    let sassSlick = gulp.src('./node_modules/slick-carousel/slick/slick.scss')
        .pipe(sass({ outputStyle: 'compressed' }));

    return merge(sassStream, lessStream, sassSlick, sassSlickTheme)
        .pipe(concat('index.css'))
        .pipe(plumber())
        .pipe(gulp.dest(settings.build + 'css'))
        .pipe(server.stream());
});


/**
 * Admin style compiler
 */
gulp.task('admin-style', function () {
    gulp.src([
        './src/admin/sass/**.scss',
    ])
        .pipe(sass({ outputStyle: 'compressed' })
            .on('error', sass.logError))
        .pipe(concat('admin.css'))
        .pipe(gulp.dest(settings.build + 'css'));
});


/**
 * react compiler
 */
gulp.task("webpack", function (callback) {
    webpackSrc = './src/frontend/react/webpack.dev';

    if (argv.production) {
        webpackSrc = './src/frontend/react/webpack.prod';
    }

    webpack(require(webpackSrc), function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});


/**
 * Js page compiler
 */
gulp.task('page-js', function () {
    let jsSrc = [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/slick-carousel/slick/slick.min.js',
        'src/frontend/js/index.js',
        'src/frontend/js/object-slideshow.js',
    ];

    let jsStream = gulp.src(jsSrc);

    let reactSrc = [
        'src/frontend/js/form.js',
        'src/frontend/js/vendors~main.form.js',
    ];

    let reactStream = gulp.src(reactSrc);
    return merge(jsStream, reactStream)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(settings.build + 'js'))
        .pipe(server.stream());
});


/**
 * Js page compiler (start after finished task webpack)
 */
gulp.task('page-js-production', ['webpack'], function () {
    let jsSrc = [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/slick-carousel/slick/slick.min.js',
        'src/frontend/js/index.js',
        'src/frontend/js/object-slideshow.js',
    ];

    let jsStream = gulp.src(jsSrc);

    if (argv.production) {
        jsStream.pipe(uglify());
    }

    let reactSrc = [
        'src/frontend/js/form.js',
        'src/frontend/js/vendors~main.form.js',
    ];

    if (argv.production) {
        reactSrc = [
            'src/frontend/js/form.js',
        ];
    }

    let reactStream = gulp.src(reactSrc);
    return merge(jsStream, reactStream)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(settings.build + 'js'))
        .pipe(server.stream());
});


/**
 * Admin compiler js
 */
gulp.task('admin-js', function () {
    let slideshowGallerySrc = [
        './src/admin/js/slideshow-gallery.js',
    ];

    let slideshowGallerySrcStream = gulp.src(slideshowGallerySrc);

    if (argv.production) {
        slideshowGallerySrcStream.pipe(uglify());
    }

    slideshowGallerySrcStream.pipe(concat('admin.js'))
        .pipe(gulp.dest(settings.build + 'js'));

});

gulp.task('default', [
    'page-style', 'admin-style', 'webpack', 'page-js', 'admin-style', 'admin-js'
]);


/**
 * Clean whole build dir
 */
gulp.task('clean', function () {
    return del(settings.build, { 'force': true });
});


/**
 * Clean pre production
 */
gulp.task('clean-production', function () {
    if (argv.production) {
        return del(settings.build + '/*.html', { 'force': true });
    }
});


/**
 * Build pug 
 */
gulp.task('html', function () {
    if (argv.production) {
        return
    }
    return gulp.src('src/frontend/pug/**.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(settings.build))
        .pipe(server.stream());
});


/**
 * Copy images
 */
gulp.task('copy-img', function () {
    return gulp.src(['src/frontend/img/**'])
        .pipe(gulp.dest(settings.build + 'img'));
});


/**
 * Copy images
 */
gulp.task('copy-css', function () {
    return gulp.src(['src/frontend/css/**'])
        .pipe(gulp.dest(settings.build + 'css'));
});


/**
 * Copy webfonts
 */
gulp.task('copy-webfonts', function () {
    return gulp.src('src/frontend/webfonts/**')
        .pipe(gulp.dest(settings.build + 'webfonts'));
});


/**
 * Copy doc
 */
gulp.task('copy-doc', function () {
    return gulp.src('src/frontend/doc/**')
        .pipe(gulp.dest(settings.build + 'doc'));
});


/**
 * Staging server
 */
gulp.task('serve', ['page-style'], function () {
    server.init({
        server: settings.build,
        notify: false,
        open: true,
        cors: true,
        ui: false,
        host: '0.0.0.0',
    });

    gulp.watch('src/frontend/pug/**/*.pug', ['html']).on('change', server.reload);
    gulp.watch('./src/frontend/sass/**/*.scss', ['page-style']).on('change', server.reload);
    gulp.watch('./src/frontend/less/**/*.less', ['page-style']).on('change', server.reload);
    gulp.watch('./src/frontend/js/**/*.js', ['page-js']).on('change', server.reload);
});


/**
 * Build
 */
gulp.task('build', function (done) {
    if (argv.production) {
        run(
            'clean',
            'page-style',
            'admin-style',
            'html',
            'page-js-production',
            'admin-js',
            'copy-img',
            'copy-css',
            'copy-webfonts',
            'copy-doc',
            'clean-production',
            done
        );

    } else {
        run(
            'clean',
            'page-style',
            'admin-style',
            'html',
            'page-js',
            'admin-js',
            'copy-img',
            'copy-css',
            'copy-webfonts',
            'copy-doc',
            'clean-production',
            done
        );
    }

});