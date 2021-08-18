const { src, dest } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const bulk = require("gulp-sass-bulk-importer");
const prefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean-css");
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");

gulp.task("css:build", function () {
  return src("src/blocks/**/*.scss")
    .pipe(map.init())
    .pipe(bulk())
    .pipe(sass())
    .pipe(prefixer())
    .pipe(clean())
    .pipe(concat("style.css"))
    .pipe(dest("styles"));
});


gulp.task('watch', function () {
  gulp.watch("src/blocks/**/*.scss", gulp.series('css:build'));
});
