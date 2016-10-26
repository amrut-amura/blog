App.Layouts.main = Mn.LayoutView.extend({
	template: JST["app/templates/layouts/main"],
	regions:{
		'new': '#new',
		'article_list':'#article_list'
	},
	el:'body',
	childEvents:{
		"submit:form":"create_article"
		},

	create_article:function(childview,event) {
		var article_model = new App.Models.articlemodel({
			title:childview.ui.title.val(),
			text:childview.ui.text.val()
		});
		article_model.save().success(function(response){
			console.log("data has been saved"+response);
		});
	}
});