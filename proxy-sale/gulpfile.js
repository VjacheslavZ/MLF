 //все настройки GULP
var gulp = require('gulp'), //подключение модуля GULP
	sass   = require('gulp-sass'),//подключаем пакет gulp-sass,  для компилирования Sass в CSS
	uglify = require('gulp-uglifyjs'),
	concat = require('gulp-concat'),
  tinypng = require('gulp-tinypng'),//конкатенация js файлов
  autoprefixer = require('gulp-autoprefixer');
  // browserSync = require('browser-sync');
  //дописываем здесь подключенные модули 

gulp.task('build', function () {
    gulp.src([
        './dist/img/**/*.jpg', 
        './dist/img/**/*.png'])
        .pipe(tinypng('RbhqmyaCJjX2WwlAXxedkwEZ5h6jrrRh'))
        .pipe(gulp.dest('app/img/'));//выгружаем сконвертированные картинки
});

gulp.task('sass', function () { //функции которые будет выполнять таск название 'sass' 
  return gulp.src('dist/sass/**/*.scss')//gulp.src обрабатываем все файлы с расширением .scss во всех  папках
    .pipe(sass({outputStyle: ''}).on('error', sass.logError)) // преобраз. sass в css //compressed
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('app/css/')); //.pipe(gulp.dest('app/css/')); выгружаем результат в папку app/css/
    // .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
});

gulp.task('scripts', function() {
 return gulp.src([
  'dist/js/*.js'
  ])
  .pipe(concat('libs.min.js'))//конкатенация
  .pipe(uglify())//минификируем js файлы
  .pipe(gulp.dest('app/js'))//и выгружем их ы app/js 
  
});

// gulp.task('browser-sync', function() { // Создаем таск browser-sync
//     browserSync({ // Выполняем browser Sync
//         server: { // Определяем параметры сервера
//             baseDir: 'app' // Директория для сервера - app
//         },
//         notify: false // Отключаем уведомления
//     });
// });


gulp.task('watch',['sass', 'scripts'], function(){//создаем таск который следит за изменениями выполняем таск 'sass' 'scripts'
	gulp.watch('dist/sass/**/*.scss', ['sass']);
	gulp.watch('dist/js/*.js', ['scripts']);
});


gulp.task('default', ['watch']);//  выполняеться при набратии команды GULP  

