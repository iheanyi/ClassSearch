// For more information see: http://emberjs.com/guides/routing/

App.DepartmentCoursesRoute = Ember.Route.extend({

  model: function(params) {
        console.log(params);
        console.log(params.id);
        console.log(params.tag);
        return this.modelFor('department').get('courses');
  },

});
