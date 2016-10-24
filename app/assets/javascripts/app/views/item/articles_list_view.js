App.Views.articleslistview = Marionette.ItemView.extend({
	events:{
		'click #article': 'display'
	},
	display:function(event){
		debugger;
		alert("hi"+$(event.currentTarget).data('article'));
	}
});