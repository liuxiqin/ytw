/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
    'mustache',
    'text!templates/task.html'
], function ($, _, Backbone, Mustache, taskTemplate) {
	'use strict';

	// Our overall **AppView** is the top-level piece of UI.
	var AppView = Backbone.View.extend({
		
	    events: {
	        'click .toggle': 'toggleCompleted',
	        'dblclick label': 'edit',
	        'click .destroy': 'clear',
	        'keypress .edit': 'updateOnEnter',
	        'blur .edit': 'close'
	    },

	    // The TodoView listens for changes to its model, re-rendering. Since there's
	    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
	    // app, we set a direct reference on the model for convenience.
	    initialize: function () {
	        this.listenTo(this.model, 'change', this.render);
	        //this.listenTo(this.model, 'destroy', this.remove);
	        //this.listenTo(this.model, 'visible', this.toggleVisible);
	    },

	    // Re-render the titles of the todo item.
	    render: function () {

	        this.$el.html(this.template(this.model.toJSON()));
	        //this.$el.toggleClass('completed', this.model.get('completed'));
	        //this.toggleVisible();
	        //this.$input = this.$('.edit');

	        return this;
	    },

	});

	return AppView;
});