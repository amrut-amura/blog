//= require backbone/underscore
//= require backbone/backbone
//= require backbone/backbone.radio
//= require backbone/backbone.marionette


console.log(Backbone);
console.log(Marionette);
window.App = new Backbone.Marionette.Application();
_.extend(App, {
	Collections: {},
	Models: {},
	Controllers: {},
	Routers: {},
	Layouts: {},
	Views:{},
	Constants: {},
	event: _.extend({}, Backbone.Events),
	base_url: ""
});


 

