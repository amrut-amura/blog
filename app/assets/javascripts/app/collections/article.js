App.Collections.article = Backbone.Collection.extend({
	url: '/articles/',
	model : App.Models.articlemodel,
	initialize:function(options){
		template: JST["app/templates/article_list"],
		this.on("change",function (argument) {
			// debugger;
				layout.getRegion('article_list').show(new App.Views.articleslistview({
				template: JST["app/templates/article_list"],
				collection: this
			}));
		});
	}
});