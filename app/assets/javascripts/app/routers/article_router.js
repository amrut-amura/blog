App.Routers.articlerouter = Marionette.AppRouter.extend({
	appRoutes:{
		'articles/':'index',
		'articles/new':'new',
		'articles/:id/edit':'edit',
		'articles/:id':'show',
		'*default':'index'
	}
});