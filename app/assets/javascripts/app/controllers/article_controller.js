App.Controllers.articlecontroller = Marionette.Object.extend({
	initialize:function(argument) {
		self = this;
		console.log("model is initialized");
	},
	index:function (options) {
		console.log("in the index page");
		layout = new App.Layouts.main();
		layout.render();

		articlecollection = new App.Collections.article();
		articlecollection.fetch().then(function(){
			layout.getRegion('main').show(new App.Views.articleslistview({
				template: JST["app/templates/article_list"],
				collection: articlecollection
			}));
			layout.getRegion('footer').show(new App.Views.footermview());
		});
	},
	new:function(argument) {
		layout.getRegion('main').show(new App.Views.articlesformview());
	},
	
	edit:function(id) {
		// debugger;
		var article_model = new App.Models.articlemodel({id: id});
		article_model.fetch().done(function(response){
				layout.getRegion('main').show(new App.Views.articleeditview({
					template: JST["app/templates/article_edit"],
					model:article_model
				}));
		});
	},
	show:function(id) {
		var article_model = new App.Models.articlemodel({id:id});
		article_model.fetch().done(function (return_model,response) {
			debugger;
			layout.getRegion('main').show(new App.Views.articleshowview({
				model:return_model
			}));
		})
	}
});