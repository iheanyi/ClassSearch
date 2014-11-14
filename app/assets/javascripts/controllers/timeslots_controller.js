// for more details see: http://emberjs.com/guides/controllers/

App.TimeslotsController = Ember.ArrayController.extend({
  sortProperties: ['daysOfWeek', 'startTime'],
  model_link: "timeslot.course",
  timeslots: function() {
    return this.get('search') ? this.get('filteredContent'): this
  }.property('search', 'filteredContent'),
  filteredContent: function() {
    var search = this.get('search').toLowerCase();
    return this.filter(function(timeslot) {
      return timeslot.get('daysOfWeek').toLowerCase().indexOf(search) != -1 || timeslot.get('formatTimeSlot').toLowerCase().indexOf(search) != -1
    });
  }.property('search', 'this.@each.daysOfWeek', 'this.@each.formatTimeSlot'),
});
