// For more information see: http://emberjs.com/guides/routing/

App.ProfessorRoute = Ember.Route.extend({
  model: function(params) {
    return this.find('professor', params.id);
  },

  setupController: function(controller, model) {
    controller.set("model", model);
  }
});
