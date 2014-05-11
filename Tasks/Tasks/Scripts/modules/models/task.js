﻿define([
	'underscore',
	'backbone'
], function (_, Backbone) {
    'use strict';

    var constants = {
        STATUS_WAITING: 1,
        STATUS_ACTIVE: 2,
        STATUS_FINISHED: 3
    };

    var Task = Backbone.Model.extend({

        defaults: {
            title: '',
            status: constants.STATUS_WAITING
        },
        activate: function () {
            this.save({
                status: Task.STATUS_ACTIVE
            });
        },
        close: function () {
            this.save({
                status: Task.STATUS_FINISHED
            });
        }
    }, constants);

    return Task;
});