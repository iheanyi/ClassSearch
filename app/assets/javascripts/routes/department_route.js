// For more information see: http://emberjs.com/guides/routing/

App.DepartmentRoute = Ember.Route.extend({
  model: function(params) {
    console.log("Department Route called.");
    return this.store.find('department', params.id);
  },

});
