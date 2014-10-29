// For more information see: http://emberjs.com/guides/routing/

App.ProfessorCourseRoute = Ember.Route.extend({
  model: function(params) {
    console.log("In Professor Course Route model.");
    return this.store.find('course', params.id);
  },
});
