// for more details see: http://emberjs.com/guides/controllers/

App.AgendaController = Ember.ObjectController.extend({
  info: {
    events: []
  },

  sections_list: [],
  sectionIDs: [],

  actions: {
    removeCourse: function(selected) {
      current_events = this.get("info.events");
      current_sects = this.get("sections_list");
      console.log("Currently Selected: ");
      console.log(selected);
      new_events = _.reject(current_events, function(item) {
        console.log(item);
        return item.section_id == selected.sectionID;
      });

      new_sects = _.reject(current_sects, function(item) {
        console.log(item);
        return item.sectionID == selected.sectionID;
      });

      console.log("New Array");
      console.log(new_events);
      console.log(new_sects);
      selected.sect.set("inAgenda", false);
      this.set("info.events", new_events);
      this.set("sections_list", new_sects);
      $("#calendar").fullCalendar('rerenderEvents');
      $("#calendar").fullCalendar('refetchEvents');
      console.log($("#calendar"));
    }
  }
});
