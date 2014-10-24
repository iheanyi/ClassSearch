// For more information see: http://emberjs.com/guides/routing/

App.DepartmentRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('department', params.id).then(function(response) {
      console.log("Got a response!");
      console.log(response);
    });
  },
  setupController: function(controller, model) {
    console.log(model);
    console.log(model.courses);
    controller.set("model", model);
  }
/*  setupController: function(controller, model) {
    console.log(model.id);
    console.log("SETTING UP");
    console.log(this);
    //var dept = this.store.find('department', model.get('id'));
    //console.log(dept);
    //var courses = model.get('courses')
    this.get('courses');
    model.get('courses');
    console.log(model);
    controller.set("model", model);
  },*/
/*  model: function(params) {
    console.log(params);
    console.log("LOGGING");
    console.log(this.store.find('department', params.tag));
    var courses = this.store.find('department', params.id).get('courses');
    return this.store.find('department', params.tag);
  }*/
});
