// for more details see: http://emberjs.com/guides/controllers/

App.UsersNewController = Ember.Controller.extend({
    actions: {
      createUser: function() {
        console.log("Create user.");
        var self = this;
        console.log(self);
        var fields = {
          email: self.email,
          password: self.password,
          password_confirmation: self.password_confirmation,
        }

        console.log(fields);
        var user = this.store.createRecord('user', fields);
        user.save().then(function(response) {
          console.log(response);
          self.transitionToRoute('departments');
        }, function(response) {
          console.log(response.errors);
          console.log(response.errors);
          //this.set('showError', true);
          self.set('errors', response.errors);
          self.set('showError', true);
          //set('errors', response.errors);
        });

      },

      submit: function() {
        console.log("Submit called.");
        var self = this;
        console.log(this);
        console.log(this.get('email'));
        console.log(this.get('password'));
        console.log(this.get('password_confirmation'));
      }
    }
/*  create: function() {
    this.store.commit();
  }*/
});
