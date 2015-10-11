/**
*
*	Dependencies
*
*	All plugins are found and maintained in the package.json
*	This keeps the gulpfile smaller
**/

module.exports = {

	// Code Quality
	jshint: require('gulp-jshint'),
	jscs: require('gulp-jscs'),
	autoprefixer: require('gulp-autoprefixer'),

	// React && Browserify
	rt: require('gulp-react-templates'),
	browserify: require('browserify'),

	// Utils
	map: require('map-stream'),
	source: require('vinyl-source-stream'),
	install: require('gulp-install'),
	rename: require('gulp-rename'),
	merge: require('merge-stream'),
	gutil: require('gulp-util'),

	// build
	uglify: require('gulp-uglify'),

	dest: require('gulp-dest'),

	// sequence gulp tasks
	gulpSequence: require('gulp-sequence'),

	//cl args
	argv: require('minimist')(process.argv.slice(2)),

	// unit testing
	// karma: require('gulp-karma'),

	path: require('path')
};