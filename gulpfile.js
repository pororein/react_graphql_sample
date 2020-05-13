// 必要プラグインの読み込み (var gulp = ~ でも可)
const gulp = require("gulp");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");

// webpackの設定ファイルの読み込み
const webpackConfig = require("./webpack.config");

// タスクの定義。 ()=> の部分はfunction() でも可
gulp.task('compile', () => {
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest("dist"));
});

gulp.task('minify', () => {
  return gulp.src(['./dist/bundle.js', '!./dist/bundle.min.js'])
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest("dist"));
});

gulp.task('default', gulp.series('compile', 'minify'));
