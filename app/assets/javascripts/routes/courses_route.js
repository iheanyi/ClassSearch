// For more information see: http://emberjs.com/guides/routing/

App.CoursesRoute = Ember.Route.extend({
  model: function() {
    console.log("Course Route called.");
    return this.store.find('course');
  }
});
