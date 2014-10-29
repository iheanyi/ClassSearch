// For more information see: http://emberjs.com/guides/routing/

App.CourseRoute = Ember.Route.extend({
  actions: {
    reload: function() {
      console.log("Reload action called.");
      this.controller.get('model').reload();
    }
  },
  model: function(params) {
    console.log("Course Model Function called.");
    return this.store.find('course', params.id);
  },
  afterModel: function(model) {
    this._super(model);

    console.log("After model entered.");
    console.log(model);
    //return model.get('sections');

    //return this.store.find('course', model.id);
    return  model.reload();
    //return model.reload();
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    //console.log("In SetupController for Course.");
    //console.log(model);
    //controller.set("model", model);
  },
});
