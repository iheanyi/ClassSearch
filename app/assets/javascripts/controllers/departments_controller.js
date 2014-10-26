// for more details see: http://emberjs.com/guides/controllers/

App.DepartmentsController = Ember.ArrayController.extend({
  sortProperties: ['name'],

  departments: function() {
    return this.get('search') ? this.get('filteredContent') : this
  }.property('search', 'filteredContent'),

  filteredContent: function() {
    var search = this.get('search').toLowerCase();
    return this.filter(function(department) {
      return department.get('name').toLowerCase().indexOf(search) != -1 || department.get('tag').toLowerCase().indexOf(search) != -1
    });
  }.property('search', 'this.@each.name', 'this.@each.tag')
});
