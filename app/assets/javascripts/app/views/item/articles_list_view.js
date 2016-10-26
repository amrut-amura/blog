App.Views.articleslistview = Marionette.ItemView.extend({
	// triggers: {
	// 	"click #article":"show_article",
	// },
	events:{
		"click #edit_article":"edit_article",
		"click #delete_article":"delete_article"
	},
	edit_article:function(event) {
		event.preventDefault();
		var article_id = $(event.currentTarget).data('article');
		App.trigger("edit",article_id);
	},
	delete_article:function(event){
		event.preventDefault();
		// debugger;
		var article_id = $(event.currentTarget).data('article');
		var article_model = new App.Models.articlemodel({id: parseInt(article_id,10)});
		App.trigger("delete",article_model);
	}	
});