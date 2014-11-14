// For more information see: http://emberjs.com/guides/routing/

App.TimeslotsRoute = Ember.Route.extend({
  model: function() {
    console.log("In the Timeslots Controller.");
    return this.store.find('timeslot');
  },

});
