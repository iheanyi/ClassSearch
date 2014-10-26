// for more details see: http://emberjs.com/guides/controllers/

App.CourseController = Ember.ObjectController.extend({
  sortedSections: function() {
    return this.get('sections').sortBy('sectionNum')
  }.property('sections.@each.sectionNum')
});
