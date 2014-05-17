define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
	'models/task'
], function (_, Backbone, Store, Task) {
    'use strict';

    var TasksCollection = Backbone.Collection.extend({

        model: Task,

        localStorage: new Store('tasks-backbone'),

        comparator: function (item) {
            var d = item.get("createdDate");
            return - (d ? new Date(d).getTime() : 0);
        }
    });

    return new TasksCollection();
});