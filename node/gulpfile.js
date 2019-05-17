const gulp = require("gulp"),
  less = require("gulp-less"),
  sass = require("gulp-sass"),
  gutil = require("gulp-util"),
  webpack = require("webpack"),
  merge = require("merge-stream"),
  argv = require("yargs").argv,
  uglify = require("gulp-uglify"),
  server = require("browser-sync").create(),
  del = require("del"),
  run = require("run-sequence"),
  plumber = require("gulp-plumber"),
  pug = require("gulp-pug"),
  concat = require("gulp-concat");

sass.compiler = require("node-sass");

const settings = {
  build: "../web/static/"
};

/**
 * My-app-style style compiler
 */
gulp.task("my-app-style", function() {
  let w3Stream = gulp
    .src("./src/app/sass/w3.scss")
    .pipe(sass({ outputStyle: "compressed" }));

  let loginStream = gulp
    .src("./src/app/sass/login.scss")
    .pipe(sass({ outputStyle: "compressed" }));

  return merge([w3Stream, loginStream])
    .pipe(concat("app.css"))
    .pipe(plumber())
    .pipe(gulp.dest(settings.build + "css"))
    .pipe(server.stream());
});

/**
 * Page style compiler
 */
gulp.task("page-style", function() {
  let sassStream = gulp
    .src("./src/frontend/sass/template.scss")
    .pipe(sass({ outputStyle: "compressed" }));

  return merge([sassStream])
    .pipe(concat("index.css"))
    .pipe(plumber())
    .pipe(gulp.dest(settings.build + "css"))
    .pipe(server.stream());
});


/**
 * React compiler
 */
gulp.task("webpack", function(callback) {
  webpackSrc = "./src/app/js/webpack.dev";

  if (argv.production) {
    webpackSrc = "./src/app/js/webpack.prod";
  }

  webpack(require(webpackSrc), function(err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log(
      "[webpack]",
      stats.toString({
        // output options
      })
    );
    callback();
  });
});

/**
 * Js page compiler
 */
gulp.task("page-js", function() {
  let jsSrc = [
    "src/frontend/js/main.js",
  ];

  let jsStream = gulp.src(jsSrc);

  if (argv.production) {
    jsStream.pipe(uglify());
  }

  let reactSrc = [];

  let reactStream = gulp.src(reactSrc);
  return merge(jsStream, reactStream)
    .pipe(concat("main.js"))
    .pipe(gulp.dest(settings.build + "js"))
    .pipe(server.stream());
});

/**
 * Js app compiler
 */
gulp.task("my-app-js", ["webpack"], function() {
  let jsSrc = ["src/app/js/src/bundles/sidebar.js"];

  let jsStream = gulp.src(jsSrc);

  if (argv.production) {
    jsStream.pipe(uglify());
  }

  let reactSrc = ["src/app/js/build/app.js"];

  if (argv.production) {
    reactSrc = ["src/app/js/build/app.js"];
  }

  let reactStream = gulp.src(reactSrc);
  return merge(jsStream, reactStream)
    .pipe(concat("app.js"))
    .pipe(gulp.dest(settings.build + "js"))
    .pipe(server.stream());
});


/**
 * Clean whole build dir
 */
gulp.task("clean", function() {
  return del(settings.build, { force: true });
});

/**
 * Clean pre production
 */
gulp.task("clean-production", function() {
  if (argv.production) {
    return del(settings.build + "/*.html", { force: true });
  }
});

/**
 * Build pug
 */
gulp.task("html", function() {
  if (argv.production) {
    return;
  }
  return gulp
    .src("src/frontend/pug/**.pug")
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest(settings.build))
    .pipe(server.stream());
});

/**
 * Copy images
 */
gulp.task("copy-img", function() {
  return gulp
    .src(["src/frontend/img/**"])
    .pipe(gulp.dest(settings.build + "img"));
});

/**
 * Copy images
 */
gulp.task("copy-css", function() {
  return gulp
    .src(["src/frontend/css/**"])
    .pipe(gulp.dest(settings.build + "css"));
});

/**
 * Copy webfonts
 */
gulp.task("copy-fonts", function() {
  return gulp
    .src("src/frontend/fonts/**")
    .pipe(gulp.dest(settings.build + "fonts"));
});

/**
 * Copy html
 */
gulp.task("copy-html", function() {
  return gulp
    .src("src/frontend/html/**")
    .pipe(gulp.dest(settings.build + "html"));
});

/**
 * Copy js
 */
gulp.task("copy-js", function() {
  return gulp
    .src("src/frontend/js/tinymce-ru.js")
    .pipe(gulp.dest(settings.build + "js"));
});

/**
 * Copy doc
 */
gulp.task("copy-doc", function() {
  return gulp
    .src("src/frontend/doc/**")
    .pipe(gulp.dest(settings.build + "doc"));
});

/**
 * Staging server
 */
gulp.task("serve", ["page-style"], function() {
  server.init({
    server: settings.build,
    notify: false,
    open: true,
    cors: true,
    ui: false,
    host: "0.0.0.0",
    reloadDelay: 1000
  });

  gulp.watch("src/frontend/pug/**/*.pug", ["html"]).on("change", server.reload);
  gulp
    .watch("./src/frontend/sass/**/*.scss", [
      "page-style",
      "copy-css",
      "copy-img",
      ""
    ])
    .on("change", server.reload);
  gulp
    .watch("./src/frontend/less/**/*.less", ["page-style"])
    .on("change", server.reload);
  gulp
    .watch("./src/frontend/js/**/*.js", ["page-js"])
    .on("change", server.reload);
});

/**
 * Build
 */
gulp.task("build", function(done) {
  if (argv.production) {
    run(
      "clean",
      "page-style",
      "my-app-style",
      "html",
      "my-app-js",
      "copy-img",
      "copy-css",
      "copy-fonts",
      "copy-doc",
      "copy-html",
      "copy-js",
      "clean-production",
      done
    );
  } else {
    run(
      "clean",
      "page-style",
      "my-app-style",
      "html",
      "page-js",
      "my-app-js",
      "copy-img",
      "copy-css",
      "copy-fonts",
      "copy-doc",
      "copy-html",
      "copy-js",
      "clean-production",
      done
    );
  }
});
