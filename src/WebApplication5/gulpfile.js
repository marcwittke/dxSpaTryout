/// <binding BeforeBuild='concat, min' Clean='clean' />
"use strict";

var gulp = require("gulp"),
  rimraf = require("rimraf"),
  concat = require("gulp-concat"),
  cssmin = require("gulp-cssmin"),
  uglify = require("gulp-uglify");

var paths = {
  webroot: "./wwwroot/"
};

paths.html = paths.webroot + "lib/spa/html/**/*.html";
paths.concatHtmlDest = paths.webroot + "views.html";

paths.js = paths.webroot + "lib/spa/js/**/*.js";
paths.concatJsDest = paths.webroot + "js/site.js";
paths.concatMinJsDest = paths.webroot + "js/site.min.js";

paths.css = paths.webroot + "lib/spa/css/**/*.css";
paths.concatCssDest = paths.webroot + "css/site.css";
paths.concatMinCssDest = paths.webroot + "css/site.min.css";

gulp.task("clean:html", function (cb) {
    rimraf(paths.concatHtmlDest, cb);
});

gulp.task("clean:js", function (cb) {
  rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
  rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:html", "clean:js", "clean:css"]);

gulp.task("concat:html", function () {
    return gulp.src([paths.html], { base: "." })
      .pipe(concat(paths.concatHtmlDest))
      .pipe(gulp.dest("."));
});

gulp.task("concat:js", function () {
    return gulp.src([paths.js], { base: "." })
      .pipe(concat(paths.concatJsDest))
      .pipe(gulp.dest("."));
});

gulp.task("concat:css", function () {
    return gulp.src([paths.css], { base: "." })
      .pipe(concat(paths.concatCssDest))
      .pipe(gulp.dest("."));
});

gulp.task("min:js", function () {
  return gulp.src([paths.js], { base: "." })
    .pipe(concat(paths.concatMinJsDest))
    .pipe(uglify())
    .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
  return gulp.src([paths.css], { base: "." })
    .pipe(concat(paths.concatMinCssDest))
    .pipe(cssmin())
    .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);
gulp.task("concat", ["concat:html", "concat:js", "concat:css"]);