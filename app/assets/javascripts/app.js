//= require backbone/underscore
//= require backbone/backbone
//= require backbone/backbone.radio
//= require backbone/backbone.marionette


window.App = new Backbone.Marionette.Application();
_.extend(App, {
	Collections: {},
	Models: {},
	Controllers: {},
	Routers: {},
	Layouts: {},
	Views:{},
	Constants: {},
	Behavior:{},
	event: _.extend({}, Backbone.Events),
	base_url: ""
});
