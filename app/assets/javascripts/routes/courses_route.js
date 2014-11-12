// For more information see: http://emberjs.com/guides/routing/

App.CoursesRoute = Ember.Route.extend({
  model: function() {
    console.log("Courses Route called.");
    //NProgress.done();
    return this.store.find('course').then(function(response) {
      //NProgress.done();
      NProgress.done();
      return response;
    });
  },
  actions: {
    loading: function() {
      console.log("Loading courses.");
      //NProgress.start();
      NProgress.done();
      return true;
    }
  }
});
