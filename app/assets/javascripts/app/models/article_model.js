App.Models.articlemodel = Backbone.Model.extend({
	url: "/articles",
	intialize: function (argument) {
		console.log("model is intialized");
	},

	parse: function(data){
		return data;
	}
});