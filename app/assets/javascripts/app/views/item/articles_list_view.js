App.Views.articleslistview = Marionette.ItemView.extend({
	events:{
		"click #article": "show_article"
	},
	show_article:function(event) {
		event.preventDefault();
		var article = $(event.currentTarget).data('article');
		var controller = new App.Controllers.articlecontroller()
		App.trigger(controller.show(article)); 
	}
});