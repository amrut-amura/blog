App.Controllers.articlecontroller = Marionette.Object.extend({
	initialize:function(argument) {
		var self = this;
		console.log("model is initialized");

		// self.articlecollection = new App.Collections.article();

		App.on("create",function(article){
			self.create(article);
		}),
		App.on("edit",function(article_id){
			self.edit(article_id);
		}),
		App.on("delete",function(article){
			self.delete(article);
		})
	},
	

	index:function (options) {
		console.log("in the index page");
		layout = new App.Layouts.main();
		layout.render();

		self.articlecollection = new App.Collections.article();
		self.articlecollection.fetch().then(function(){
			layout.getRegion('article_list').show(new App.Views.articleslistview({
				template: JST["app/templates/article_list"],
				collection: self.articlecollection
			}));
			layout.getRegion('new').show(new App.Views.articlesformview());
		});
	},
	create:function(article){
		var article_to_save = article;
		article_to_save.save({},{
			success:function(){
				self.articlecollection.add(article_to_save);
				console.log("added article");
			},
			error:function(){
				console.log("error while adding article");
			}
		});
	},
	edit:function(article_id) {
		event.preventDefault();
		var article_model = new App.Models.articlemodel({id: article_id});
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
	delete:function(article){
		var article_to_destroy = article;
		article_to_destroy.destroy().done(function(response){
			self.articlecollection.remove(article_to_destroy);
			console.log("deletion");
		});
	}	
});