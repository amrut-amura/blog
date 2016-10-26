App.Views.articleslistview = Marionette.ItemView.extend({
	events:{
		"click #edit_article":"edit_article",
		"click #delete_article":"delete_article"
	},
	edit_article:function(event) {
		event.preventDefault();
		// debugger;
		var article_id = $(event.currentTarget).data('article');
		App.trigger("edit",article_id);
	},
	delete_article:function(event){
		event.preventDefault();
		var article_id = $(event.currentTarget).data('article');
		var article_model = this.collection.get(article_id);
		debugger;
		App.trigger("delete_article",article_model);
	}
});