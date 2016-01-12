/*!!
*
* gulpfile.js
* @author: Jan Sanchez
*
*/

var gulp = require('gulp'),
complexity": "^0.3.2",
gulp-jshint": "^2.0.0",
jshint": "^2.8.0",
jshint-stylish": "^2.1.0",
run-sequence

/*!!
*
* Tarea para lintear el codigo Javascript 
*/

gulp.task('lint', function() {
return gulp.src(path.javascript.lint)
.pipe(plugins.jshint(options.js.lint.jshintrc))
.pipe(plugins.jshint.reporter(options.js.lint.reporterStyle))
.pipe(plugins.jshint.reporter(options.js.lint.reporter));
});

gulp.task('complexity', function(){
return gulp.src(path.javascript.complexity)
.pipe(plugins.complexity({breakOnErrors: false}));
});

gulp.task('js', function(cb) {
plugins.runSequence('clean:js', 'coffee', 'copy:js:test', 'clean:js:test', 'lint', 'complexity', cb);
});


gulp.task('watch', function () {

gulp.watch(path.watch.coffee, coffeeTasks);
});

/*!!
*
* Tareas por default
*
* tarea principal: gulp
*/

gulp.task('default', [], function (cb) {
plugins.runSequence('js', cb);
});

