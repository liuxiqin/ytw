var allTestFiles = [];
var TEST_REGEXP = /(main-test|Spec)\.js$/;

var pathToModule = function (path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        allTestFiles.push(pathToModule(file));
    }
});


require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/app',
  
  shim: {
      underscore: {
          exports: "_"
      }, backbone: {
          deps: ["underscore", "jquery"], exports: "Backbone"
      }, backboneLocalstorage: {
          deps: ["backbone"], exports: "Store"
      }, mustache: {
          exports: "Mustache"
      }
  },
  paths: {
      jquery: "../bower_components/jquery/dist/jquery.min",
      underscore: "../bower_components/underscore/underscore"
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
