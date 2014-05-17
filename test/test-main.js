var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

require.config({

  baseUrl: '/base/app',
  
  paths: {
      jquery: "../bower_components/jquery/dist/jquery.min",
      underscore: "../bower_components/underscore/underscore",
      backbone: "../bower_components/backbone/backbone",
      backboneLocalstorage: "../bower_components/backbone.localStorage/backbone.localStorage",
      mustache: "../bower_components/mustache/mustache",
      text: '../bower_components/requirejs-text/text'
  },

  deps: tests,
  callback: window.__karma__.start
});
