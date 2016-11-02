App.Views.articleslistview = Marionette.CollectionView.extend({
	events:{
		"click #edit_article":"edit_article",
		"click #delete_article":"delete_article",
		"click #show_article":"show_article"
	},
	childView: App.Views.articleitemview,
	edit_article:function(event) {
		event.preventDefault();
		var article_id = $(event.currentTarget).data('article');
		Backbone.history.navigate("articles/"+article_id+"/edit",true);
	},
	delete_article:function(event){
		event.preventDefault();
		var article_id = $(event.currentTarget).data('article');
		var article_model = this.collection.get(article_id);
		article_model.destroy().done({
			success:function (model,response,options) {
				Backbone.history.navigate("articles/",true);
			},
			error:function(model,response) {
				console.log("error while deleting article");
			}
		});
	},
	show_article:function (event) {
		event.preventDefault();
		var article_id = $(event.currentTarget).data('article');
		var article_model = this.collection.get(article_id);
		Backbone.history.navigate("articles/"+article_id,true);
	}
});