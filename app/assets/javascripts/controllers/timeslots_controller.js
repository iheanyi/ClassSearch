// for more details see: http://emberjs.com/guides/controllers/

App.TimeslotsController = Ember.ArrayController.extend({
  sortProperties: ['daysOfWeek', 'startTime'],
  model_link: "timeslot.course",
  timeslots: function() {
    var search_text = this.get('search');
    var array = [];
/*    if(this.get('search')) {
     return search_text.length >= 3 ? this.get('filteredContent') : this;
    } else {
     return this;
    }*/

    return this.get('search') ? this.get('filteredContent'): this
  }.property('search', 'filteredContent'),
  filteredContent: function() {
    var search = this.get('search').toLowerCase();


    return this.filter(function(timeslot) {
      var timeslot_text = timeslot.get("formatTimeSlot");
      var search_time = timeslot_text.replace(/ /g, '');
      return timeslot.get('daysOfWeek').toLowerCase().indexOf(search) != -1 || timeslot.get('formatTimeSlot').toLowerCase().indexOf(search) != -1 || search_time.toLowerCase().indexOf(search) != -1
    });
  }.property('search', 'this.@each.daysOfWeek', 'this.@each.formatTimeSlot', 'this.@each.startTime', 'this.@each.endTime'),
});
