// For more information see: http://emberjs.com/guides/routing/

App.DepartmentCourseRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params);
    console.log("Department Course Route called.");
    return this.store.find('course', params.id).then(function(c) {
      c.get('attributes');
      NProgress.done();
      return c;
    });
  },
  actions: {
    loading: function() {
      NProgress.start();

      return true;
    }
  }

/*  setupController: function(controller, model) {
    console.log("Department Controller Setup.");
    console.log(model);
    console.log(model.courses);
    controller.set("model", model);
  }*/
});
