// for more details see: http://emberjs.com/guides/controllers/

App.DepartmentCourseController = Ember.ObjectController.extend(App.SectionSortable, {
  needs: ['agenda'],
  currentAgenda: Ember.computed.alias('controllers.agenda.info'),
  model_link: function() {
    return "department.course";
  },
  sortedSections: function() {
    return this.get('sections').sortBy('sectionNum')
  }.property('sections.@each.sectionNum'),
  actions: {
    addSection: function(section) {
      ag_events = this.get('currentAgenda.events');
      new_event = section.get('eventFormat');
      console.log(ag_events);
      console.log(new_event);
      new_event_array = ag_events.concat(section.get('eventFormat'));
      this.set('currentAgenda.events', new_event_array);
      console.log(this.get('currentAgenda'));
      console.log(section);
    }
  }
});
