App.AgendaMixin = Ember.Mixin.create({
  needs: ['agenda'],
  currentAgenda: Ember.computed.alias('controllers.agenda'),
/*  ag_events: Ember.computed.alias('controllers.agenda.info.events'),*/
  section_ids: Ember.computed.alias('controllers.agenda.sectionIDs'),
  actions: {
    addSection: function(section) {
      ag_events = this.get('currentAgenda.info.events');
      section_ids = this.get('currentAgenda.sectionIDs');
      new_event = section.get('eventFormat');
      new_event_array = ag_events.concat(section.get('eventFormat'));
      section_ids.push(section.id);
      sect_list = this.get('currentAgenda.sections_list');
      sect_list.push(section.get("courseFormat"));
      section.set('inAgenda', true);

      this.set('currentAgenda.info.events', new_event_array);
      this.set('currentAgenda.sectionIDs', section_ids);
      this.set('currentAgenda.sections_list', sect_list);

    },

    removeSection: function(section) {
      // Find sections within the new event array that possess the same ID as the section and remove them, then update currentAgenda events with them!
      // Also for the Section, set inAgenda to false!
      ag_events = this.get('currentAgenda.info.events');
      sect_list = this.get('currentAgenda.sections_list', sect_list);
      console.log("Information Removed.");
      console.log(this.get('currentAgenda'));
      console.log(ag_events);

      new_events = _.reject(ag_events, function(item) {
        console.log("FILTERING");
        console.log(item);
        console.log(section);
        console.log(section.get('id') == item.section_id);
        return section.get('id') == item.section_id;
      });

      console.log(sect_list);
      new_sects = _.reject(sect_list, function(item) {
        console.log("SECT");
        console.log(item);
        return item.sectionID == section.get('id')
      });

      console.log(new_events);
      section.set('inAgenda', false);
      this.set('currentAgenda.info.events', new_events);
      this.set('currentAgenda.sections_list', new_sects);
    }
  }
})