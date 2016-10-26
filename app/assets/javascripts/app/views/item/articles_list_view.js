App.Views.articleslistview = Marionette.ItemView.extend({
	triggers: {
		"click #article":"show_article",
	},
	events:{
		"click #edit_article":"edit_article",
		"click #delete_article":"delete_article"
	},
	edit_article:function(event) {
		event.preventDefault();
		var article_id = $(event.currentTarget).data('article');
		// debugger;
		var article_model = new App.Models.articlemodel({id: parseInt(article_id,10)});
		article_model.fetch().done(function(response){
				var view = new App.Views.articleeditview({
					template: JST["app/templates/article_edit"],
					model:article_model
				});
				$("#new").html(view.render().el);
			console.log(response);
			console.log("view is rendered");
		});
	},
	delete_article:function(event){
		event.preventDefault();
		// debugger;
		var article_id = $(event.currentTarget).data('article');
		var article_model = new App.Models.articlemodel({id: parseInt(article_id,10)});
		article_model.destroy().done(function(response){
			var article_list = new App.Views.articleslistview({
					template: JST["app/templates/article_list"],
					collection: articlecollection
				});
			$("article_list").html(article_list.render().el);
			console.log("deletion");
		});
	}	
});