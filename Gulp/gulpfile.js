const gulp = require("gulp"),
sass = require("gulp-sass"),
connect = require("gulp-connect-php"),
cache = require("gulp-cached"),
progeny = require("gulp-progeny"),
browserSync = require("browser-sync"),
mediaQuery = require("gulp-combine-media-queries"),
// localProxy
proxyPath = "localProxy名",
projectPath = "プロジェクトのファイルパス";
// style.scssをタスクを作成する
gulp.task("compile", function () {
  // style.scssファイルを取得
  gulp.src(projectPath + "/assets/scss/**/*.scss")
  // Sassのコンパイルを実行
  .pipe(cache("compile"))
  .pipe(progeny())
  .pipe(sass({outputStyle:"expanded"}))
  .on("error", sass.logError)
  // cssフォルダー以下に保存
  .pipe(gulp.dest(projectPath + "/assets/css"));
});

gulp.task("connect-sync", function() {
  connect.server({
    port:8001,
    base:projectPath
  }, function (){
    browserSync({
      proxy: proxyPath
    });
  });
});

gulp.task("reload", function(){
  browserSync.reload();
});


// style.scssの監視タスクを作成する
gulp.task("default",["connect-sync"], function () {
  // style.scssファイルを監視
  gulp.watch(projectPath + "/assets/scss/**/*.scss",["compile"]);
  gulp.watch(projectPath + "/**",["reload"]); // ブラウザの自動リロード
});

gulp.task("mediaQuery", function () {
  gulp.src(projectPath + "/assets/css/style.css")
    .pipe(mediaQuery({
      log: true
    }))
    .pipe(gulp.dest(projectPath + "/assets/css"));
});
