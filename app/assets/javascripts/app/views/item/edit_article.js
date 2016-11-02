App.Views.articleeditview = Marionette.ItemView.extend({
	events:{
		"click #article_update":"update_article"
	},
	update_article:function (event) {
		event.preventDefault();
		var title = $("#title").val();
		var text = $("#text").val();
		this.model.set({title:title,text:text});
		var article_model = this.model;
		article_model.save({},{
			success:function (model,options) {
				 Backbone.history.navigate("/articles/"+model.id,true);
				console.log("updated");
			},
			error:function (options) {
				console.log("error while updating article");
			}
		})
	}
})