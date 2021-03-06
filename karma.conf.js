/// <reference path= />
// Karma configuration
// Generated on Fri May 16 2014 15:16:37 GMT+0300 (Kaliningrad Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'app/**/*.js', included: false},
      { pattern: 'test/**/*Spec.js', included: false },
      { pattern: 'bower_components/backbone/backbone.js', included: false },
      { pattern: 'bower_components/backbone.localStorage/backbone.localStorage.js', included: false },
      { pattern: 'bower_components/mustache/mustache.js', included: false },
      { pattern: 'bower_components/requirejs-text/text.js', included: false },
      { pattern: 'app/templates/*', included: false },
       "bower_components/jquery/dist/jquery.min.js",
       "bower_components/requirejs/require.js",
       "bower_components/underscore/underscore.js",
      'test/test-main.js',
    ],


    // list of files to exclude
    exclude: [
      'app/main.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
