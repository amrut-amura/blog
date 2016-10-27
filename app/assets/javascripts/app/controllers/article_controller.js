App.Controllers.articlecontroller = Marionette.Object.extend({
	initialize:function(argument) {
		self = this;
		console.log("model is initialized");

		App.on("create",function(article){
			self.create(article);
		}),
		App.on("edit",function(article_id){
			self.edit(article_id);
		}),
		App.on("update",function(article){
			self.update(article);
		}),
		App.on("delete_article",function(article){
			self.delete_article(article);
		}),
		App.on("show",function (article) {
			self.show(article);
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
			success:function(model,response,options){
				// debugger;
				self.articlecollection.add(model);
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
				layout.getRegion('new').show(new App.Views.articleeditview({
					template: JST["app/templates/article_edit"],
					model:article_model
				}));
		});
	},
	update:function(article) {
		article.save({},{
			success:function (options) {
				self.articlecollection.push(article,{merge:true});
				layout.getRegion('new').show(new App.Views.articlesformview());
				console.log("updated");
			},
			error:function (options) {
				console.log("error while updating article");
			}
		})
	},
	delete_article:function(article){
		var article_to_delete = article;
		article_to_delete.id = article.get("id");
		article_to_delete.destroy({},{
			success:function (model,response,options) {
				self.articlecollection.remove(model);
			},
			error:function (argument) {
				console.log("error while deleting artice");
			}
		});
	},
	show:function (article) {
		layout.addRegion("show","#show");
		layout.getRegion("show").show(new App.Views.article_show_view({
			model:article
		}));
	}
});