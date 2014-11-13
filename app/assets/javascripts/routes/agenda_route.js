// For more information see: http://emberjs.com/guides/routing/

App.AgendaRoute = Ember.Route.extend({
  model: function() {
    console.log("In the model.");
    control = this.controllerFor("agenda");
    console.log(this.controllerFor("agenda").get('info.events'));
    console.log(control);
    return {
      events: Ember.A(this.controllerFor("agenda").get('info.events')),
      sections_list: Ember.A(this.controllerFor("agenda").get('sections_list')),
    }
  },
  actions: {

  }
});
