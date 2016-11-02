App.Views.articlesformview = Marionette.ItemView.extend({
	template: JST["app/templates/article_form"],
    events: {
        'click #article_submit': "add_article"
    },
    behaviors:{
        main:{
            behaviorClass: App.Behavior.main
        }
    },
    add_article:function (event) {
    	event.preventDefault();
    	var title = $("#title").val();
    	var text = $("#text").val();
    	var article_model = new App.Models.articlemodel({
    		title:title,
    		text:text
    	});
    	article_model.save({},{
         success:function(model,response,options){
             articlecollection.add(model);
             Backbone.history.navigate("",true);
         },
         error:function(options,errors){
                 article.errors = errors.responseJSON;
             console.log(errors);
         }
     });
    }
});