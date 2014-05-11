define([
	'underscore',
	'backbone'
], function (_, Backbone) {
    'use strict';

    var Task = Backbone.Model.extend({

        defaults: {
            title: '',
            status: 0
        }
    }, {

    });

    return Task;
});