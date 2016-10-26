App.Views.articlesformview = Marionette.ItemView.extend({
	template: JST["app/templates/article_form"],
	tagName: 'div',
	
  triggers: {
    'submit form': 'submit:form'
  }
});