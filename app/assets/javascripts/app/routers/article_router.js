App.Routers.articlerouter = Marionette.AppRouter.extend({
	appRoutes:{
		'articles':'index',
		'article/:id':'show',
		'':'index'
	}
});