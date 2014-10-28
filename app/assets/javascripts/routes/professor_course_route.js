// For more information see: http://emberjs.com/guides/routing/

App.ProfessorCourseRoute = Ember.Route.extend({
  model: function(params) {
    console.log("In Professor Course Route model.");
    return this.store.find('course', params.id);
  },
  setupController: function(controller, model) {
    console.log("In setupController of Professor Course");
    console.log(model);
    console.log(this.modelFor('professor'));

/*    model.reload().then(function(response) {
      console.log(response);
      var sections = model.get('sections');
      console.log(sections);
      //controller.set("model", model);

    });*/
    //  this.store.find('model')
    //
    controller.set("model", model);

  }
});
