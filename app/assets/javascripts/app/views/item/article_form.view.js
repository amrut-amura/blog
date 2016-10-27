App.Views.articlesformview = Marionette.ItemView.extend({
	template: JST["app/templates/article_form"],
	
  
  	initialize: function() {
        this.listenTo(this.model, "change", this.render);
    },
    events: {
        'click #article_submit': "add_article"
    },
    add_article:function (event) {
    	event.preventDefault();
    	var title = $("#title").val();
    	var text = $("#text").val();
    	var article_model = new App.Models.articlemodel({
    		title:title,
    		text:text
    	});
    	App.trigger("create",article_model);
    }
});