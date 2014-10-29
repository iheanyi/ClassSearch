// For more information see: http://emberjs.com/guides/routing/

App.AttributeCoursesRoute = Ember.Route.extend({
  model: function(params) {
    console.log("Attribute Courses Route called.");
    var attribute_model = this.modelFor('attribute');
    attribute_model.reload().then(function(response) {
      var courses = attribute_model.get('courses');
    })
    return attribute_model.get('courses');
  }

});
