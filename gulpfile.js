var gulp = require('gulp');
const connect = require('gulp-connect');

//Webサーバー
gulp.task('connect', function() {
  connect.server({
    root: 'app',//ルートディレクトリ
    livereload: true //ライブリロード
  });
});

//'html'に、htmlファイルをリロードする処理を登録
gulp.task('reload', function () {
gulp.src('./app/*.html')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html', './app/css/*.css', './app/js/*.js'], ['reload']);
});

//デフォルトタスクに登録
gulp.task('default', ['connect', 'watch']);
