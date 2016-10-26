App.Views.articleeditview = Marionette.ItemView.extend({
	events:{
		"click #article_update":"update_article"
	},
	update_article:function (event) {
		event.preventDefault();
		var article_id = $("#article_id").val();
		var article_model = new App.Models.articlemodel({id:article_id});
		var title = $("#title").val();
		var text = $("#text").val();
		article_model.title = title;
		article_model.text = text;
		debugger;
		article_model.save({},{
			success:function(){
				console.log("article is updated");
				// var article_model =  articlecollection.find(article_model.id);
				articlecollection.add(article_model);
				debugger;
				layout.getRegion('article_list').show(new App.Views.articleslistview({
					template: JST["app/templates/article_list"],
					collection: articlecollection
				}));
			},
			error:function(){
				console.log("error is updating article");
			}
		})
	}
})