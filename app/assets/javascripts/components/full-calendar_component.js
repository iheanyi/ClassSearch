// for more details see: http://emberjs.com/guides/components/

App.FullCalendarComponent = Ember.Component.extend({
  newEvent: "",
  eventTitle: "",
  classNames: ['ag-component'],
  events: [],
  _initializeCalendar: (function() {
    console.log(this);
    return $("#calendar").fullCalendar({
      events: this.theEvents,
      weekends: true,
      minTime: "08:00:00",
      maxTime: "21:00:00",
      allDaySlot: false,
      allDayText: 'TBA',
      defaultDate: "2000-01-03",
      header: {
        left: '',
        center: '',
        right: ''
      },
      titleFormat: '[Agenda View]',
      columnFormat: {
        week: 'dddd'
      },
      defaultView: 'agendaWeek',
      eventClick: function(event, jsEvent, view) {
        console.log(event);
      }
    });
  }).on("didInsertElement"),
  actions: {
    addEvent: function() {
      var newEvent = {title: this.eventTitle, start: this.newEvent, allDay: false}
      this.theEvents.pushObject(newEvent);
      this.$("#calendar").fullCalendar('renderEvent', newEvent, true);
    },
    removeSection: function(selected) {
      console.log("Removing course!");
      console.log("selected");
      console.log(selected);
      console.log(this);
      this.sendAction('action', selected);

      new_events = _.reject(this.theEvents, function(item) {
        return item.section_id == selected.sectionID;
      });

      console.log("Events");
      console.log(new_events);

      new_sects = _.reject(this.sectionsList, function(item) {
        return item.sectionID == selected.sectionID;
      });

      console.log("Sections");
      console.log(new_sects);
      this.theEvents = new_events;
      this.sectionsList = new_sects;

      console.log(this);
      //this.$("#calendar").fullCalendar('rerenderEvents');
      this.rerender();
      //ag_events = this.theEvents;
    }
  }
});
