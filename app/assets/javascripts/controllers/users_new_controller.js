// for more details see: http://emberjs.com/guides/controllers/

App.UsersNewController = Ember.ObjectController.extend({
  create: function() {
    this.store.commit();
  }
});
