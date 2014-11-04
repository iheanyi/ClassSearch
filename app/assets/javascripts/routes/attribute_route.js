// For more information see: http://emberjs.com/guides/routing/

App.AttributeRoute = Ember.Route.extend({
  model: function(params) {
    console.log("Attribute route called.");
    return this.store.find('attribute', params.id).then(function(response) {
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
