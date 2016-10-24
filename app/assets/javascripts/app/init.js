$(document).ready(function(){

	App.addInitializer(function(){
		this.models = {articlemodel: new App.Models.articlemodel()};
		this.controllers = {articlecontroller: new App.Controllers.articlecontroller()};
		this.routers = {articlerouter: new App.Routers.articlerouter({controller:this.controllers.articlecontroller}) };
		Backbone.history.start({pushState: true});
		console.log("App is started");	
	});
	App.start();
});