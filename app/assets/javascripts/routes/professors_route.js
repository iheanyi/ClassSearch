// For more information see: http://emberjs.com/guides/routing/

App.ProfessorsRoute = Ember.Route.extend({
  model: function() { return this.store.find('professor')},
/*  renderTemplate: function() {
    this.render('professors', {
      outlet: "model_outlet",
      controller: "professors",
    })
  }*/

});
