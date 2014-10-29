// For more information see: http://emberjs.com/guides/routing/

App.CourseRoute = Ember.Route.extend({
  model: function(params) {
    console.log("Course Model Function called.");
    return this.store.find('course', params.id);
  },
  afterModel: function(model) {
    this._super(model);
    console.log("After model entered in Course Route.");

    if(!model.isReloading && model.get('sections').content.content.length == 0) {
      return model.reload();
    } else {
      console.log("Model is reloading or does not need to be reloaded.")
    }
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    //console.log("In SetupController for Course.");
    //console.log(model);
    //controller.set("model", model);
  },
});
