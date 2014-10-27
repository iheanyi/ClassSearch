// For more information see: http://emberjs.com/guides/routing/

App.AttributeCoursesRoute = Ember.Route.extend({
  model: function(params) {
    console.log("Attribute Courses Route called.");
    return this.modelFor('attribute').get('courses');
  }

});
