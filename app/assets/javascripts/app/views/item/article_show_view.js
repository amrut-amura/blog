App.Views.article_show_view = Marionette.ItemView.extend({
	initialize: function() {
        this.listenTo(this.model, "change", this.render);
    },
	template: JST["app/templates/article_show"]
})