// For more information see: http://emberjs.com/guides/routing/

App.ProfessorRoute = Ember.Route.extend({
  model: function(params) {
    console.log("Professor Route called.");
    return this.find('professor', params.id);
  },

  setupController: function(controller, model) {
    controller.set("model", model);
  },

  serialize: function(model) {
    var first_name = model.get('firstName');
    var last_name = model.get('lastName');
    var custom_slug = first_name + '-' + last_name;
    return { prof_slug: custom_slug }
  }
});
