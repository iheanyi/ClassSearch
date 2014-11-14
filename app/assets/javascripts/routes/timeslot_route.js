// For more information see: http://emberjs.com/guides/routing/

App.TimeslotRoute = Ember.Route.extend({
  model: function(params) {
    console.log("Timeslot Route called.");
    console.log(params);
    return this.store.find('timeslot', params.id).then(function(response) {
      this.reload();
      return response;
    });
  },
});
