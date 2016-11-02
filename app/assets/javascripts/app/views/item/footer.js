App.Views.footermview = Marionette.ItemView.extend({
	template: JST["app/templates/footer"],
    events:{
		"click #new_article":'new',
		'click #index':'index'
	},
	new:function (event) {
		event.preventDefault();
		Backbone.history.navigate("/articles/new",true);
	},
	index:function(event) {
		event.preventDefault();
		Backbone.history.navigate("/articles/",true);
	}
});