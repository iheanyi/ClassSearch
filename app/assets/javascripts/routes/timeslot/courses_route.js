// For more information see: http://emberjs.com/guides/routing/

App.TimeslotCoursesRoute = Ember.Route.extend({
  model: function() {
    console.log("Route yo.");
    console.log(this);
    console.log(this.modelFor("timeslot"));
    var timeslot = this.modelFor("timeslot");
    timeslot.reload().then(function(response) {
      console.log("Model reloaded!");
      console.log(response);
      console.log(response.get('courses'));

    });
    console.log(timeslot.get("courses"));
    return this.modelFor("timeslot").get('courses');
  }
});
