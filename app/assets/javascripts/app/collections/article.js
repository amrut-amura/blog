App.Collections.article = Backbone.Collection.extend({
	url: '/articles/',
	model : App.Models.articlemodel,
	initialize:function(options){
		template: JST["app/templates/article_list"]
	}
});