// For more information see: http://emberjs.com/guides/routing/

App.CoursesRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params.tag);
    return (params.department_id) ? this.store.find('department', params.department_id) : '';
  }
});
