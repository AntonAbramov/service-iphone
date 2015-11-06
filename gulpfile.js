'use strict';

var gulp = require('gulp'),
  uglify = require('gulp-uglify'), // minify js
  jshint = require('gulp-jshint'), // linting
  sass = require('gulp-sass'), // Scss, sass
  autoprefixer = require('gulp-autoprefixer'), // add prefixes on specific css rules
  minifycss = require('gulp-minify-css'), // minify css
  nodemon = require('gulp-nodemon'),
  spritesmith = require('gulp.spritesmith'), // generate scss with sprites info
  concat = require('gulp-concat'), // concatinate files
  plumber = require('gulp-plumber'); // if any error gulp is not break



gulp.task('js', function () {
  return gulp.src('public/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('js-build', function () {
  return gulp.src('public/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});


// Lint js
gulp.task('jshint', function () {
  return gulp.src('public/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

//generate styles from scss files and minify it
gulp.task('sass', function () {
  return gulp.src('public/scss/**/*.scss')
    .pipe(sass({ style: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 30 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('public/css'));
});

//generate styles from scss files and minify it
gulp.task('sass-build', function () {
  return gulp.src('./public/scss/**/*.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('./public/css/'));
});

/*gulp.task('start', function () {
  nodemon({
    script: './bin/server', ext: 'js html', env: { 'NODE_ENV': 'development' }
  })
})*/

//watchers
gulp.task('watch', function () {
  gulp.watch('./public/scss/**/*.scss', ['sass-build']);
  gulp.watch('./public/js/**/*.js', ['jshint']);
});

//generate scss with sprites
gulp.task('sprite', function () {
  var spriteData = gulp.src('./public/img/icons/*.png').pipe(spritesmith({
    // This will filter out `fork-2x.png`, `github-2x.png`, ... for our retina spritesheet
    //   The normal spritesheet will now receive `fork.png`, `github.png`, ...
    retinaSrcFilter: ['./public/img/icons/*-2x.png'],
    imgName: '../img/sprite.png',
    retinaImgName: '../img/sprite-2x.png',
    cssName: '_sprite.scss'
  }));
  spriteData.img.pipe(gulp.dest('./public/img/')); // output path for the sprite
  spriteData.css.pipe(gulp.dest('./public/scss/base/')); // output path for the CSS
  return ;
});

//generate scss with sprites
gulp.task('sprite-build', function () {
  var spriteData = gulp.src('./public/img/icons/*.png').pipe(spritesmith({
    // This will filter out `fork-2x.png`, `github-2x.png`, ... for our retina spritesheet
    //   The normal spritesheet will now receive `fork.png`, `github.png`, ...
    retinaSrcFilter: ['./public/img/icons/*-2x.png'],
    imgName: '../img/sprite.png',
    retinaImgName: '../img/sprite-2x.png',
    cssName: '_sprite.scss'
  }));
  spriteData.img.pipe(gulp.dest('./dist/img/')); // output path for the sprite
  return ;
});

gulp.task('move', function () {
  gulp.src('./public/fonts/*').pipe(gulp.dest('./dist/fonts/'));
  gulp.src('./public/img/**/*').pipe(gulp.dest('./dist/img/'));
});

gulp.task('serve', ['sprite', 'sass-build', 'jshint', 'watch']);

gulp.task('default', ['sass'], function () {});

gulp.task('build', ['move', 'sprite-build', 'sass-build', 'js-build', 'jshint'], function () {});