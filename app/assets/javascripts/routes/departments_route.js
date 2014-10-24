// For more information see: http://emberjs.com/guides/routing/

App.DepartmentsRoute = Ember.Route.extend({
  model: function() { return this.store.find('department')}
});
