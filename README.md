# 基本機能
オートリロードを行うgulpファイルとなっています．

使い方
1．Gulpファイルをデスクトップ直下においてください．

2．install-gulp.batをダブルクリック

3．gulpfile.jsを自分の設定したいプロジェクトパスとローカルプロキシに接続

4．gulp.batをダブルクリックすると起動

または
cd C:\Users\%username%\Desktop\Gulp　(gulpファイルの場所)
npx gulp

始めにstyle.scssをセーブするとgulpが動きgulpfile.jsで設定したcssファイルにstyle.cssを吐き出し
同時に設定したローカルサイトがオートリロードされます．


# 追加機能
node_modules\gulp-combine-media-queries\index.js内の
file.contents = new Buffer(cssJson);をコメントアウトし
npx gulp mediaQuery
を起動するとメディアクエリがまとまります．

