// For more information see: http://emberjs.com/guides/routing/

App.DepartmentCoursesRoute = Ember.Route.extend({

  model: function(params) {
        console.log(params);
        console.log(params.id);
        console.log(params.tag);
        console.log("Department Courses Route called.");
        console.log(this.modelFor('department').get('courses'));
        return this.modelFor('department').get('courses');
  },

});
