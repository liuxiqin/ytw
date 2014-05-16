var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

require.config({

  baseUrl: '/base/app',

  //shim: {
  //    underscore: {
  //        exports: "_"
  //    }, backbone: {
  //        deps: ["underscore", "jquery"], exports: "Backbone"
  //    }, backboneLocalstorage: {
  //        deps: ["backbone"], exports: "Store"
  //    }, mustache: {
  //        exports: "Mustache"
  //    }
  //},
  paths: {
      jquery: "../bower_components/jquery/dist/jquery.min",
      underscore: "../bower_components/underscore/underscore",
      backbone: "../bower_components/backbone/backbone",
      backboneLocalstorage: "../bower_components/backbone.localStorage/backbone.localStorage",
      mustache: "../bower_components/mustache/mustache",
      text: '../bower_components/requirejs-text/text'
  },

  // dynamically load all test files
  deps: tests,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});

require(["backbone"], function (Backbone) {
});
