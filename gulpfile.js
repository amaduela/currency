var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('bootstrap', function() {
	return gulp.src('./node_modules/bootstrap/scss/**/**')
	  .pipe(gulp.dest(('src/scss/bootstrap/')));
});

gulp.task('scss', function () {
	gulp.src('src/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(cssnano())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('js', function(){
  return gulp.src('src/js/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('listen', function() {
	gulp.watch('src/scss/**/*.scss', ['scss']);
	gulp.watch('src/js/*.js', ['js']);
});