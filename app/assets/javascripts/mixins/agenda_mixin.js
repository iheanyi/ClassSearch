App.AgendaMixin = Ember.Mixin.create({
  needs: ['agenda'],
  currentAgenda: Ember.computed.alias('controllers.agenda'),
  ag_events: Ember.computed.alias('currentAgenda.info.events'),
  section_ids: Ember.computed.alias('currentAgenda.sectionIDs'),
  actions: {
    addSection: function(section) {
      ag_events = this.get('currentAgenda.info.events');
      section_ids = this.get('currentAgenda.sectionIDs');
      if (_.contains(section_ids, section.id)) {
        console.log("Already in the agenda!");
      } else {
        new_event = section.get('eventFormat');
        new_event_array = ag_events.concat(section.get('eventFormat'));
        section_ids.push(section.id);
        //new_section_ids = section_ids.concat([section.id]);
        this.set('currentAgenda.info.events', new_event_array);
        this.set('currentAgenda.sectionIDs', section_ids);

      }

    }
  }
})