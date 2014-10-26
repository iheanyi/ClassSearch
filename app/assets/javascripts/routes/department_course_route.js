// For more information see: http://emberjs.com/guides/routing/

App.DepartmentCourseRoute = Ember.Route.extend({
  model: function(params) {

    console.log("Department Route called.");
    return this.store.find('course', params.id).then(function(c) {
      c.get('attributes');
    });
  },

/*  setupController: function(controller, model) {
    console.log("Department Controller Setup.");
    console.log(model);
    console.log(model.courses);
    controller.set("model", model);
  }*/
});
