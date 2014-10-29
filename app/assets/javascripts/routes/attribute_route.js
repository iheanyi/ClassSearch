// For more information see: http://emberjs.com/guides/routing/

App.AttributeRoute = Ember.Route.extend({
  model: function(params) {
    console.log("Attribute route called.");
    return this.store.find('attribute', params.id);
  }
});
