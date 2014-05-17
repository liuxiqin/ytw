/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
    'mustache',
    'models/task',
    'text!templates/task.html'
], function ($, _, Backbone, Mustache, Task, taskTemplate) {
	'use strict';

	var AppView = Backbone.View.extend({
		
	    tagName: 'li',
	    className: 'task',

	    events: {
	        'click .activate': 'onActivate',
	        'click .close': 'onClose',
            'click .remove': 'onRemove'
	    },

	    initialize: function () {

	        this.listenTo(this.model, 'change', this.render);
	        this.listenTo(this.model, 'destroy', this.remove);
	    },

	    onActivate: function($event) {
	        this.model.activate();
	        this.remove();
	    },

	    onClose: function($event) {
	        this.model.close();
	        this.remove();
	    },

	    onRemove: function($event) {
	        this.model.destroy();
	        this.remove();
	    },

	    render: function () {

	        this.$el.html(Mustache.render(taskTemplate, this.model.toJSON()));

	        if (this.model.attributes.status == Task.STATUS_WAITING)
	            this.$el.addClass('waiting');
	        else if (this.model.attributes.status == Task.STATUS_ACTIVE)
	            this.$el.addClass('active');
	        else if (this.model.attributes.status == Task.STATUS_FINISHED)
	            this.$el.addClass('closed');

	        return this;
	    },

	});

	return AppView;
});