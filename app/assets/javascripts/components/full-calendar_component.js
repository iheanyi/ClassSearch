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
      defaultDate: "2000-01-03",
      header: {
        left: 'title',
        center: '',
        right: ''
      },
      titleFormat: '[Agenda View]',
      columnFormat: {
        week: 'dddd'
      },
      defaultView: 'agendaWeek'
    });
  }).on("didInsertElement"),
  actions: {
    addEvent: function() {
      var newEvent = {title: this.eventTitle, start: this.newEvent, allDay: false}
      this.theEvents.pushObject(newEvent);
      this.$("#calendar").fullCalendar('renderEvent', newEvent, true);
    }
  }
});
