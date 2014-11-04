// For more information see: http://emberjs.com/guides/routing/

App.AttributesRoute = Ember.Route.extend({
  model: function() {
    console.log("Attributes route called.");
    return this.store.find('attribute').then(function(response) {
      NProgress.done();
      return response;
    });
  },

  actions: {
    loading: function() {

      NProgress.start();

      return true;
    }
  }
});
