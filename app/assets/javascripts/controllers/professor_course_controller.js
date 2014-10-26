// for more details see: http://emberjs.com/guides/controllers/

App.ProfessorCourseController = Ember.Controller.extend({
  sortedSections: function() {
    return this.get('sections').sortBy('sectionNum');
  }.property('sections.@each.sectionNum'),
  needs: ['professor'],
});
