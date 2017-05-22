module.exports = function () {  
  var root = '';
  var app = root + 'src/';
  var index = root + 'index.html';

  var build = {
    path: 'dist/',
    app: 'build/app/',
    fonts: 'build/fonts',
    assetPath: 'build/assets/',
    assets: {
      lib: {
        js: 'lib.js',
        css: 'lib.css'
      }
    }
  };

  var images = {
    in: app + 'assets/images/**/*',
    out: app + 'assets/images/',
    imgMinOpts: {
        optimizationLevel: 5, 
        progressive: true, 
        interlaced: true 
    },
    sprites: {
        in: app + 'assets/images/sprites/**/*.png',
        out: {
            img: app + 'assets/images/sprites',
            css: app + 'assets/css/sass/_scss/partials/modules/sprites',
        }
    }
  }

  var fonts = {
    in: app + 'assets/fonts/*.*',
    out: app + 'assets/fonts/'
  };

  var sass = {
    in: app + 'assets/css/sass/**/*.scss',
    out: app + 'assets/css/',
    watch: app + 'assets/css/sass/**/**/*.scss',
    sassOpts: {
      outputStyle: 'nested',
      precision: 3,
      errLogToConsole: true,
      includePaths: ['bower_components/']
    }
  };

  var js = {
    in: app + 'assets/js/src/*.js',
    out: app + 'assets/js/',
    watch: app + 'assets/js/src/*.js'
  }

  var twig = {
      in: app + 'templates/pages/*.twig',
      out: app + 'dist/',
      watch: app + 'templates/**/*.twig'
  };

  var data = {
      in: app + 'data/data.json'
  };

  var browserSync = {
    dev: {
        injectChanges: true,
        // proxy: "",
        // host: "192.168.0.70",
        // comment server if using proxy
        server: { 
            baseDir: app
        },
        reloadOnRestart: true
    },
    // prod: {
    //   port: 3001,
    //   server: {
    //     baseDir: './' + build.path,
    //     middleware: [historyApiFallback()]
    //   }
    // }
  };

  var systemJs = {
    builder: {
      normalize: true,
      minify: true,
      mangle: true,
      globalDefs: { DEBUG: false }
    }
  };

  var config = {
    root: root,
    app: app,
    fonts: fonts,
    sass: sass,
    images: images,
    fonts: fonts,
    js: js,
    twig: twig,
    data: data,
    browserSync: browserSync,
    systemJs: systemJs
  };

  return config;

};