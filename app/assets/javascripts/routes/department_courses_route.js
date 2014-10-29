// For more information see: http://emberjs.com/guides/routing/

App.DepartmentCoursesRoute = Ember.Route.extend({
  model: function(params) {
        console.log("Department Courses Route called.");
        var department_model = this.modelFor('department');
/*        department_model.reload().then(function(response) {
          department_model.get('courses');
        });
*/      /*
        if(!model.isReloading && model.get('sections').content.content.length == 0) {
          return model.reload();
        } else {
          console.log("Model is reloading or does not need to be reloaded.")
        }*/
        return department_model.get('courses');
  },

});
