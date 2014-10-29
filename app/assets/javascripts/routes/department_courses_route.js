// For more information see: http://emberjs.com/guides/routing/

App.DepartmentCoursesRoute = Ember.Route.extend({
  model: function(params) {
        console.log("Department Courses Route called.");
        var department_model = this.modelFor('department');
        department_model.reload().then(function(response) {
          department_model.get('courses');
        });
        return department_model.get('courses');
  },

});
