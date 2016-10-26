App.Collections.article = Backbone.Collection.extend({
	url: '/articles/',
	model : App.Models.articlemodel,
	initialize:function(options){
		template: JST["app/templates/article_list"],
		this.listenTo(this,"add push remove",function (options) {
			layout.getRegion('article_list').show(new App.Views.articleslistview({
				template: JST["app/templates/article_list"],
				collection: self.articlecollection
			}));
		});
	}
});