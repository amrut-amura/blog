App.Routers.articlerouter = Marionette.AppRouter.extend({
	appRoutes:{
		'articles':'index',
		'articles/:id':'show',
		'':'index'
	}
});