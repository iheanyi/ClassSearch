// For more information see: http://emberjs.com/guides/routing/

App.ProfessorsRoute = Ember.Route.extend({
  model: function() {

    return this.store.find('professor').then(function(response) {
      NProgress.done();
      return response;
    });

},

actions: {
  loading: function() {
    NProgress.start();
    return true;
  }
}
/*  renderTemplate: function() {
    this.render('professors', {
      outlet: "model_outlet",
      controller: "professors",
    })
  }*/

});
