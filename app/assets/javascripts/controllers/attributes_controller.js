// for more details see: http://emberjs.com/guides/controllers/

App.AttributesController = Ember.ArrayController.extend({
  sortProperties: ['name', 'tag'],
  attributes: function() {
    return this.get('search') ? this.get('filteredContent') : this
  }.property('search', 'filteredContent'),

  filteredContent: function() {
    var search = this.get('search').toLowerCase();
    return this.filter(function(attribute) {
      return attribute.get('name').toLowerCase().indexOf(search) != -1 || attribute.get('tag').toLowerCase().indexOf(search) != -1
    });
  }.property('search', 'this.@each.name', 'this.@each.tag')
});
