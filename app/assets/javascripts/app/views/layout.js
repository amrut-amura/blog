App.Layouts.main = Mn.LayoutView.extend({
	template: JST["app/templates/layouts/main"],
	regions:{
		'new': '#new',
		'article_list':'#article_list'
	},
	el:'body'
});