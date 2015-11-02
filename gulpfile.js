var files = [
	'./**/*.js',
	'!node_modules/**',
	'!./gulpfile.js'
];

var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');

/**
 * Starts server and auto restarts if needed.
 */

gulp.task('nodemon', function() {

	nodemon({
		script: './dist/server.js',
		tasks: 'js',
		ignore: ['gulpfile.js'],
		ext: 'js',
		env: {
			'NODE_ENV': 'dev'
		}
	});

});


/**
 * Cleans dist directory.
 */
gulp.task('clean', function() {

	gulp.src('./dist', {read: false})
		.pipe(clean());

});

/**
 * Transforms .js files to es5 uses babel.
 * 
 * @see https://babeljs.io/
 */
gulp.task('js', ['clean'], function() {

	gulp.src(files)
		.pipe(babel())
		.pipe(gulp.dest('dist'));

});

/**
 * Default task 
 */
gulp.task('default', ['js', 'nodemon']);