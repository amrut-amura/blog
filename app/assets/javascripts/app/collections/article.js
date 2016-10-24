App.Collections.article = Backbone.Collection.extend({
	url: '/articles/',
	model : App.Models.articlemodel,
	initialize:function(options){
		console.log("collection is initialized");
	}
});