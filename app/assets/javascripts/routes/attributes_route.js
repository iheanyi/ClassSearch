// For more information see: http://emberjs.com/guides/routing/

App.AttributesRoute = Ember.Route.extend({
  model: function() {
    console.log("Attributes route called.");
    return this.store.find('attribute');
  }
});
