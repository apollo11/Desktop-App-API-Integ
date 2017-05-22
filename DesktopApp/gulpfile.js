// grab our gulp packages
var gulp            = require('gulp'),
    browserSync     = require('browser-sync').create(),
    glob            = require("glob"),
    gutil           = require('gulp-util'),
    // sourcemaps      = require('gulp-sourcemaps'),
    rename          = require('gulp-rename'),
    del             = require('del');  
    bower           = require('gulp-bower'),

    // twig            = require('gulp-twig'),
    // data            = require('gulp-data'),
    path            = require('gulp-path'),

    // jshint          = require('gulp-jshint'),
    include         = require("gulp-include"),
    uglify          = require('gulp-uglify'),

    sass            = require('gulp-sass'),
    // sassLint        = require('gulp-sass-lint'),
    cssnano         = require('gulp-cssnano'),
    combineMq       = require('gulp-combine-mq'),
    // autoprefixer    = require('gulp-autoprefixer'),
    spritesmith     = require('gulp.spritesmith-multi'),

    imagemin        = require('gulp-imagemin'),
    cache           = require('gulp-cache');

var config          = require('./gulp.config')();  

var path = {
    src:        "app/src/",
    dist:       "app/dist/",
    assets:     "assets/",
    bower:      "bower_components/"
};

// define the default task and add the watch task to it
gulp.task('default', ['serve']);

// clean the contents of the distribution directory
gulp.task('clean', function () {  
  return del(distPath);
});

// bower
gulp.task('bower', function () {
    return bower();
});

// De-caching for Data files
function requireUncached( $module ) {
    delete require.cache[require.resolve( $module )];
    return require( $module );
}

// html: twig
gulp.task('twig', function() {
    return gulp.src(config.twig.in)
        .pipe(data(function(file) {
            return requireUncached('./' + config.data.in);
        }))
        .pipe(twig())
        .pipe(rename(function(opt) {
            opt.basename = opt.basename.replace(/\.html/, '');
            extname = '.html';
            return opt;
        }))
        .pipe(gulp.dest(config.twig.out));
});

// copy fonts
gulp.task('fonts', function () {  
  return gulp
    .src(config.fonts.in)
    .pipe(gulp.dest(config.fonts.out));
});

// compress images
gulp.task('images', function () {
    return gulp.src(config.images.in)
        .pipe(cache(imagemin(config.images.imgMinOpts)))
        .pipe(gulp.dest(config.images.out));
});

// process icon sprites
gulp.task('sprite', function () {
    var spriteData = gulp.src(config.images.sprites.in)
        .pipe(spritesmith(
            {
                spritesmith: function (options, sprite) {
                    options.imgPath = '../images/sprites/' + options.imgName;
                    options.cssName = sprite + '.scss';
                    options.padding = 2;
                    cssSpritesheetName = 'sp-' + sprite;
                }
            }
        ))
            .on('error', function (err) {
                console.log(err);
            });
    return (
        spriteData.img.pipe(gulp.dest(config.images.sprites.out.img)),
        spriteData.css.pipe(gulp.dest(config.images.sprites.out.css))
    );
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src(config.js.in)
        // .pipe(include(
        //     {
        //         includePaths: ['bower_components']
        //     }
        // ))
        //     .on('error', console.log)
        .pipe(gulp.dest(config.js.out))
        .pipe(rename(
            { suffix: '.min' }
        ))
        .pipe(uglify()
            .on('error', function(err) {
                gutil.log(gutil.colors.red('[Error]'), err.toString());
                this.emit('end');
            })
        )
        .pipe(gulp.dest(config.js.out));
});

// create a task that ensures the `js` task is complete
// before reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

// process sass
gulp.task('sass', function () {
    return gulp.src(config.sass.in)
        .pipe(sass(config.sass.sassOpts))
            .on('error', sass.logError)
        .pipe(combineMq({
            beautify: true
        }))
        // .pipe(autoprefixer({
        //     grid: false
        // }))
        .pipe(gulp.dest(config.sass.out))
        .pipe(browserSync.stream())
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest(config.sass.out));
});

// Static server
gulp.task('serve', function () {
    // browserSync.init(config.browserSync.dev);
    gulp.watch(config.sass.watch, ['sass']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch(config.js.watch, ['js-watch']);
    // gulp.watch(config.images.sprites.in, ['sprite']);
    // gulp.watch(config.twig.watch, ['twig']).on('change', browserSync.reload);
});