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
			var form_view = new App.Views.articlesformview();
			console.log(view);
			$('body').append(view.render().el);
			$('#article-form').html(form_view.render().el);
		});
		console.log(articlecollection);
	},
	show:function(id){
		console.log("i am in show");
		alert(id);
		var article_data = new App.Models.articlemodel({id:id});
		debugger;
		article_data.fetch().done(function(response){
			console.log(response);
			var data_view = new App.Views.articleitemview({
				template: JST["app/templates/article"],
				model: article_data
			});
			$('body').html(data_view.render().el);
		});
	}
});