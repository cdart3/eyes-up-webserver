"use strict";

/**	TODO
*	write mocha tests
	gulp tasks that do
*	linting
*	uglifying
*	browserifying
**/

//var lintconfig = require('./.gulpconfig/config/lint.conf.js');
var config = {

	// test

	src: [
		'./renderClient.js',
		'./app/js/**/*.js',
		'./elements/**/*.js',
		'!./elements/**/*.rt.js'
	],

	reactTemplatePaths: [
		'./elements/**/*.rt'
	]

};

// ====================================
//        BUILD DEPENDENCIES       ||||
// ====================================

var gulp = require('gulp'),
	$ = require('./.gulpconfig/plugins'),
	// vm = require('vm'),
	vars = $.argv,
	opts = {
		plugins : $
	}

	// check out these files
	// // utils = require('./.gulpconfig/utils'),
	// lint = require('./.gulpconfig/tasks/lint')(gulp,opts);

// browserify main script for client side iso rendering
gulp.task('browserify', function() {
	return $.browserify({debug:true})
			.add('./renderClient')
			.bundle()
			.pipe($.source('./renderClient.js'))
			.pipe($.rename('clientbundle.js'))
			.pipe(gulp.dest('app/dist/'));
});

// compiles react-templates syntax to regular js for React components
gulp.task("rt", ['browserify'] ,function(cb) {
	console.log('building react templates');
	return gulp.src(config.reactTemplatePaths)
			.pipe($.rt({modules: "commonjs"}).on("error", console.error))
			.pipe(gulp.dest("./elements", {ext:".js"}));
});

// uglify this bad boy
gulp.task('uglify', function() {
	return gulp.src('./app/dist/clientbundle.js')
				.pipe($.uglify())
				.pipe($.rename('clientbundle.min.js'))
				.pipe(gulp.dest('./app/dist/'));
});

gulp.task("react-build-iso", function() {
	return $.gulpSequence(["rt"],["uglify"])(function() {
		console.log('iso tasks complete');
	});
});

// linting tasks ========================================================

// gulp.task("watch", (['browserify','rt','uglify','react-build-iso']), function() {

// 	gulp.watch([
// 		'app/js/**/*.js',
// 		'elements/**/*.rt',
// 		'elements/**/*.js',
// 		'!elements/ReactPage/*.js',
// 		'!elements/**/*.rt.js'
// 	], 
// 	['react-build-iso']);

// 	gulp.watch(['app/js/clientbundle.js'],['uglify']);
// });


gulp.task('default', ['react-build-iso']);





