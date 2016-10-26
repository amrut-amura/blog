App.Models.articlemodel = Backbone.Model.extend({
	urlRoot: "/articles",
	 initialize: function() {
        this.listenTo(this.model, "change", this.render);
    },
	parse: function(data){
		return data;
	}
});