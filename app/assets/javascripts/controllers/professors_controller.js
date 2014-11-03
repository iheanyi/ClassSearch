// for more details see: http://emberjs.com/guides/controllers/

App.ProfessorsController = Ember.ArrayController.extend({
  sortProperties: ['firstName', 'lastName'],
  selectedProfessor: '',
  professors: function() {
    var array = [];
    return this.get('search') ? this.get('filteredContent') : array;
  }.property('search', 'filteredContent'),
  filteredContent: function() {
    var search = this.get('search').toLowerCase();
    console.log("Filtering content");
    console.log(search);
    console.log(this);
    return this.filter(function(professor) {
      return professor.get('firstName').toLowerCase().indexOf(search) != -1 || professor.get('lastName').toLowerCase().indexOf(search) != -1
    });
  }.property('search', 'this.@each.firstName', 'this.@each.lastName')
});
