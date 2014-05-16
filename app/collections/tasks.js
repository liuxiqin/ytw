define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
	'models/task'
], function (_, Backbone, Store, Task) {
    'use strict';

    var TasksCollection = Backbone.Collection.extend({

        model: Task,

        localStorage: new Store('tasks-backbone')
    });

    return new TasksCollection();
});