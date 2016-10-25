App.Views.articlesformview = Marionette.ItemView.extend({
	template: JST["app/templates/article_form"],
	tagName: 'div',
	ui: {  // 1
    title: '#title',
    form: 'form',
    text: '#text',
    addBtn: '#article_submit'
 	 },
  triggers: {
    'submit form': 'submit:form'
  }
});