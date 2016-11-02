App.Layouts.main = Mn.LayoutView.extend({
	template: JST["app/templates/layouts/main"],
	regions:{
		"main":"#main",
		'footer':'#footer'
	},
	el:'body'
	
});