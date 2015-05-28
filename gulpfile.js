var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');

/**
 * Cleans dist directory
 */
gulp.task('clean', function() {

	return gulp.src('./dist', {read: false})
		.pipe(clean());

});

/**
 * Transforms .js files to es5 uses babel
 * 
 * @see https://babeljs.io/
 */
gulp.task('js', ['clean'], function() {

	var src = [
		'./**/*.js',
		'!node_modules/**',
		'!./gulpfile.js'
	];

	return gulp.src(src)
		.pipe(babel())
		.pipe(gulp.dest('dist'));

});

/**
 * Default task 
 */
gulp.task('default', ['js']);