var gulp = require('gulp');
var shell = require('gulp-shell');
var clean = require('gulp-clean');
var dirs = {
    js_src: [
        './app/src/**/*.js'
    ],
    js_src_exclude: [
        '!./app/dist{,/**}',
        '!./app/src/vendor{,/**}',
        '!./app/**/*.min.js'
    ],
    vendor_dir: './app/src/libs/vendor'
};


/*
 * Dependency tasks
 */

// Deletes dependency directory and all dependency files (node_modules)
gulp.task('dependency-clean', function() {
    return gulp.src(dirs.vendor_dir, {read: false})
        .pipe(clean());
});

// Installs frontend npm dependencies
gulp.task('dependency-install', ['dependency-clean'], shell.task(
    [
        'npm install',
        'ln -s ../../../node_modules/ app/src/libs/vendor'
    ],
    {cwd: './', verbose: true})
);


/*
 * JavaScript build tasks
 */

// Compiles and minifies frontend JavaScript using webpack
gulp.task('js-build', ['dependency-install'], shell.task(
    [
        'npm run build:prod'
    ],
    {cwd: './', verbose: true})
);

// JS watch task used during "gulp watch" task
gulp.task('js-watch', ['dependency-install'], shell.task(
    [
        'npm run build:dev'
    ],
    {cwd: './', verbose: true})
);


/*
 * Frontend watch
 */
gulp.task('watch', ['js-watch']);


/*
 * Compile for production
 */
gulp.task('build', ['js-build']);


/*
 * Default task
 */
gulp.task('default', ['watch']);
