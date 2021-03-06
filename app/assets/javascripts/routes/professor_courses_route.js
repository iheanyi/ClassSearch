// For more information see: http://emberjs.com/guides/routing/

App.ProfessorCoursesRoute = Ember.Route.extend({
  model: function(params) {
    console.log("Professor Courses Route called.");
    var professor_model = this.modelFor('professor');
    this.controllerFor('professor')
    console.log(professor_model);
    professor_model.reload().then(function(response){
      console.log(response);
      NProgress.done();
      var courses = professor_model.get('courses');
      //return courses;
    });
    return professor_model.get('courses');
  },
  actions: {
    loading: function() {
      NProgress.start();
      return true;
    }
  }
});
