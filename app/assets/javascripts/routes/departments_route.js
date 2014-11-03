// For more information see: http://emberjs.com/guides/routing/

App.DepartmentsRoute = Ember.Route.extend({
  model: function() {
    console.log("Departments Route called.");
    return this.store.find('department')
  },
  exit: function() {
    console.log("Exited route!");
    this.set('search', '')
  }.property('search')
});
