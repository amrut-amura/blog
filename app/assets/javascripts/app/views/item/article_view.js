App.Views.articleitemview = Marionette.ItemView.extend({
	template: JST["app/templates/article"],
    initialize: function() {
        this.listenTo(this.model, "change", this.render);
    }
});