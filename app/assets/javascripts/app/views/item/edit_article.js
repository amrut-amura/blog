App.Views.articleeditview = Marionette.ItemView.extend({
	events:{
		"click #article_update":"update_article"
	},
	update_article:function (event) {
		event.preventDefault();
		var title = $("#title").val();
		var text = $("#text").val();
		this.model.set({title:title,text:text});
		// debugger;
		App.trigger("update",this.model);
	}
})