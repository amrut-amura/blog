App.Controllers.articlecontroller = Marionette.Object.extend({
	initialize:function(argument) {
		console.log("model is initialized");
	},
	index:function (options) {
		console.log("in the index page");
		var articlecollection = new App.Collections.article();
		articlecollection.fetch().then(function(){
			console.log(articlecollection);
			console.log(JST["article_list"]);
			var view = new App.Views.articleslistview({
				template: JST["app/templates/article_list"],
				collection: articlecollection
			});
			console.log(view);
			$('body').append(view.render().el);
		});
		console.log(articlecollection);
	},
	show:function(id){
		// debugger;
		console.log("i am in show");
		article = new App.Models.articlemodel({id:id});
		article.fetch(id).then(function(response){
			console.log(response);
			console.log(this);
			var view = new App.Views.articleitemview({
				template: JST["app/templates/article"],
				model: article
			});
			$('body').append(view.render().el);
		});
	}
});