// For more information see: http://emberjs.com/guides/routing/

App.DepartmentRoute = Ember.Route.extend({
  model: function(params) {
    console.log("Department Route called.");
    return this.store.find('department', params.id);
  },
/*  setupController: function(controller, model) {
    console.log("Department Controller Setup.");
    //console.log(model);
    //console.log(model.courses);
    console.log(controller);
    controller.set("model", model);
  }*/
});
