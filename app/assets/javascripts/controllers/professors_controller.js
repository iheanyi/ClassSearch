// for more details see: http://emberjs.com/guides/controllers/

App.ProfessorsController = Ember.ArrayController.extend({
  sortProperties: ['firstName', 'lastName'],

  professors: function() {
    return this.get('search') ? this.get('filteredContent') : this
  }.property('search', 'filteredContent'),

  filteredContent: function() {
    var search = this.get('search').toLowerCase();
    return this.filter(function(professor) {
      return professor.get('firstName').toLowerCase().indexOf(search) != -1 || professor.get('lastName').toLowerCase().indexOf(search) != -1
    });
  }.property('search', 'this.@each.firstName', 'this.@each.lastName')
});
