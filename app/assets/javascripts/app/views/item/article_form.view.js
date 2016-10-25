App.Views.articlesformview = Marionette.ItemView.extend({
	template: JST["app/templates/article_form"],
	regions:{
		'new':'#new',
		'article_list':'#article_list'
	},
	events:{
		"click #article-submit":"create_article"
	},
	create_article:function(event) {
		event.preventDefault();
		debugger;
		var article_model = new App.Models.articlemodel({
			title: this.$el.find("#title").val(),
			text:this.$el.find("#text").val()
		});
		article_model.save().success(function(response){
			console.log("data has been saved"+response);
		});
	}
});