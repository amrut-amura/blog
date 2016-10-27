App.Models.articlemodel = Backbone.Model.extend({
	urlRoot: "/articles",
	
	parse: function(data){
		return data;
	}
});