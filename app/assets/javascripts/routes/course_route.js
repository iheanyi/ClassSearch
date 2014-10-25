// For more information see: http://emberjs.com/guides/routing/

App.CourseRoute = Ember.Route.extend({
  model: function(params) {
    console.log("Course route called.");
    return this.store.find('course', params.id);
  }
});
