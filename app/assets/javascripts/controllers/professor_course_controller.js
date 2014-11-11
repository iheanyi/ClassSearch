// for more details see: http://emberjs.com/guides/controllers/

App.ProfessorCourseController = Ember.ObjectController.extend(App.AgendaMixin, {
  needs: ['professor', 'professors'],
  professor: Ember.computed.alias("controllers.professor.content"),
  prof_sections: Ember.computed.alias("controllers.professor.content.section"),
  sortedSections: function() {
    console.log("Sorting");
    //console.log(this.controllerFor('professor'));
    //console.log(professor);
    professor = this.get('professor');
    console.log(professor.get('sections'));
    prof_sects = professor.get('prof_sections');
    prof_id = professor.get('id');
    sects = this.get('sections');
    //return this.get('sections').filterBy("professor", professor);
    var new_filtered = sects.filter(function(item) {
      item_prof = item.get('professor').get('id');
      console.log(item_prof == prof_id);
      return item_prof == prof_id;
    });
    return new_filtered;
    //return sections.filter('professor_id', professor.id);
  }.property("sections.@each.professor_id", "professor", 'sections.@each.professor'),
});
