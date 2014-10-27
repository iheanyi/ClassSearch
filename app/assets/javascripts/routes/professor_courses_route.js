// For more information see: http://emberjs.com/guides/routing/

App.ProfessorCoursesRoute = Ember.Route.extend({
model: function(params) {
  console.log("Professor Courses Route called.");
  return this.modelFor('professor').get('courses');
}
});
