var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');
var lib = require('bower-files')({
  "overrides": {
    "bootstrap": {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
var browserSync = require('browser-sync').create();
var babelify = require('babelify');

var isProductionBuild = utilities.env.production;

// ======= Main Build ======= //
gulp.task("build", ["clean", "jshint"], function() {
  if (isProductionBuild) {
    gulp.start("buildMinJS");
  }
  else {
    gulp.start("buildJS");
  }
  gulp.start("buildCSS");
  gulp.start("bower");
});

gulp.task("clean", function() {
  return del(["build", "tmp"]);
});

// ======= Build JavaScript ======= //
gulp.task("buildMinJS", ["buildJS"], function() {
  return gulp.src("./build/js/app.js")
  .pipe(uglify())
  .pipe(gulp.dest("./build/js"));
});

gulp.task("buildJS", ["concatInterface"], function() {
  return browserify({ entries: ['./tmp/interfaceConcat.js']})
  .transform(babelify.configure({
    presets: ["es2015"]
  }))
  .bundle()
  .pipe(source("app.js"))
  .pipe(gulp.dest("./build/js"));
});

gulp.task("concatInterface", function() {
  return gulp.src(["js/*-interface.js"])
    .pipe(concat("interfaceConcat.js"))
    .pipe(gulp.dest("./tmp"));
});

// ======= Build CSS ======= //
gulp.task("buildCSS", function() {
  gulp.src(["css/*.css"])
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("./build/css"));
});

// ======= Bower ======= //
gulp.task("bower", ["bowerJS", "bowerCSS"]);

gulp.task("bowerJS", function() {
  return gulp.src(lib.ext("js").files)
    .pipe(concat("vendor.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"))
});

gulp.task("bowerCSS", function() {
  return gulp.src(lib.ext("css").files)
    .pipe(concat("vendor.css"))
    .pipe(gulp.dest("./build/css"))
});

// ======= JSHint ======= //
gulp.task('jshint', function() {
  return gulp.src(["js/*.js", "!js/jquery*"])
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});

// ======= Browser Sync ======= //
gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(["js/*.js"], ["jsWatch"]);
  gulp.watch(["css/*.css"], ["cssWatch"]);
  gulp.watch(["*.html"], ["htmlWatch"]);
  gulp.watch(["bower.json"], ["bowerWatch"]);
});

gulp.task("jsWatch", ["buildJS", "jshint"], function() {
  browserSync.reload("js/app.js");
});
gulp.task("cssWatch", ["buildCSS"], function() {
  browserSync.reload("css/styles.css");
});
gulp.task("htmlWatch", function() {
  browserSync.reload("index.html");
});
gulp.task("bowerWatch", ["bower"], function() {
  browserSync.reload();
});
