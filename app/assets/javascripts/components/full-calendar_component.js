// for more details see: http://emberjs.com/guides/components/

App.FullCalendarComponent = Ember.Component.extend({
  newEvent: "",
  eventTitle: "",

  _initializeCalendar: (function() {
    return $("#calendar").fullCalendar({
      events: this.theEvents,
      weekends: false,
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
        alert(event);
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
    removeEvent: function() {
      ag_events = this.theEvents;
    }
  }
});
