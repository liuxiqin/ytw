"use strict";
require.config({
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
        jquery: "../../bower_components/jquery/dist/jquery.min",
        underscore: "../../bower_components/underscore/underscore",
        backbone: "../../bower_components/backbone/backbone",
        backboneLocalstorage: "../../bower_components/backbone.localStorage/backbone.localStorage",
        mustache: "../../bower_components/mustache/mustache",
        text: '../../bower_components/requirejs-text/text'
    }
}), require(["backbone", "views/app", "routers/router"], function (Backbone, MainApp, Router) {
    new Router();
    Backbone.history.start();
    return new MainApp();
});