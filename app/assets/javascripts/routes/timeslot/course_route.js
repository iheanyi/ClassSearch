// For more information see: http://emberjs.com/guides/routing/

App.TimeslotCourseRoute = Ember.Route.extend({
  model: function(params) {
    console.log("In the model.");

    var course_model = this.modelFor('course');
    console.log(course_model);

    course_model.reload().then(function(response) {
      console.log("Course model reloaded.");
    });

    return course_model;
  }
});
