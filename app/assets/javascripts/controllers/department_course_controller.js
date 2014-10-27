// for more details see: http://emberjs.com/guides/controllers/

App.DepartmentCourseController = Ember.ObjectController.extend({
  model_link: function() {
    return "department.course";
  },
  sortedSections: function() {
    return this.get('sections').sortBy('sectionNum')
  }.property('sections.@each.sectionNum')
});
