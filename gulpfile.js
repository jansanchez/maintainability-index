/*!!
 *
 * gulpfile.js
 * @author: Jan Sanchez
 *
 */

var gulp = require('gulp'),
	mi = require('gulp-complexity'),
	jshint = require('gulp-jshint'),
	sequential = require('run-sequence');

var lint = {
	jshintrc: '.jshintrc',
	reporterStyle: 'jshint-stylish',
	reporter: 'fail'
};

var path = 'source/**/**/*.js';

var jsTasks = ['js'];


/*!!
 *
 * Tarea para lintear el código Javascript
 */

gulp.task('lint', function() {
	return gulp.src(path)
	.pipe(jshint(lint.jshintrc))
	.pipe(jshint.reporter(lint.reporterStyle))
	.pipe(jshint.reporter(lint.reporter));
});

gulp.task('mi', function(){
	return gulp.src(path)
	.pipe(mi({breakOnErrors: false}));
});

gulp.task('js', function(cb) {
	sequential('lint', 'mi', cb);
});


gulp.task('watch', function () {
	gulp.watch(path, jsTasks);
});

/*!!
 *
 * Tareas por default
 *
 * tarea principal: gulp
 */

gulp.task('default', function (cb) {
	sequential('js', cb);
});

