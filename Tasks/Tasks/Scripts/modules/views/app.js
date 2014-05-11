/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
    'mustache',
    'collections/tasks',
    'models/task',
    'views/task',
    'text!templates/stats.html'
], function ($, _, Backbone, Mustache, Tasks, Task, TaskView, template) {
    'use strict';

    var AppView = Backbone.View.extend({

        el: '#taskapp',

        events: {
            'submit #new-task-form': 'createOnEnter'
        },

        initialize: function () {

            this.$newTaskInput = this.$("#new-task-title");

            this.$footer = this.$('#footer');
            this.$main = this.$('#main');

            this.$waiting = this.$("#waiting-tasks>ul");
            this.$active = this.$("#active-tasks>ul");
            this.$finished = this.$("#finished-tasks>ul");

            this.listenTo(Tasks, 'change', this.renderTask);
            this.listenTo(Tasks, 'reset', this.renderTasks);
            this.listenTo(Tasks, 'all', this.render);

            Tasks.fetch({ reset: true });
        },

        render: function () {
            this.$footer.html(Mustache.render(template, { count: Tasks.length }));
            return this;
        },

        renderTask: function (task) {
            var $container;
            if (task.attributes.status == Task.STATUS_WAITING) {
                $container = this.$waiting;
            } else if (task.attributes.status == Task.STATUS_ACTIVE) {
                $container = this.$active;
            } else if (task.attributes.status == Task.STATUS_FINISHED) {
                $container = this.$finished;
            }

            if (typeof $container != 'undefined') {
                var view = new TaskView({ model: task });
                $container.append(view.render().el);
            }
        },

        renderTasks: function () {
            _.each([this.$waiting, this.$active, this.$finished], function (i) { i.html(''); });
            Tasks.each(this.renderTask, this);
        },

        createOnEnter: function ($event) {
            console.log($event);
            Tasks.create({
                title: this.$newTaskInput.val(),
                status: Task.STATUS_WAITING
            });
            this.$newTaskInput.val('');
            return false;
        }
    });

    return AppView;
});