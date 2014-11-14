// for more details see: http://emberjs.com/guides/models/defining-models/

App.Timeslot = DS.Model.extend({
  startTime: DS.attr('date'),
  endTime: DS.attr('date'),
  daysOfWeek: DS.attr('string'),
  courses: DS.hasMany('course', {async: true}),
  formatTimeSlot: function() {
    start = this.get('startTime');
    end = this.get('endTime');
    days = this.get('daysOfWeek');
    if(this.get('daysOfWeek') != 'TBA') {
      if (moment(start).isValid()) {
        return days + " " + moment(start).format("h:mmA") + ' - ' + moment(end).format("h:mmA");
      } else {
        return days + " " + "Time TBD";
      }
    } else {
      return days;
    }
  }.property('startTime', 'endTime'),
/*  timeslot-slug: Ember.computed('startTime', 'endTime', 'daysOfWeek', function() {
    start = this.get('startTime');
    end = this.get('endTime');
    days = this.get('daysOfWeek');
    var slug = this.get('id');
    if(this.get('daysOfWeek') != 'TBA') {
      if (moment(start).isValid()) {
        slug = days + " " + moment(start).format("h:mmA") + ' - ' + moment(end).format("h:mmA");
      } else {
        slug = days + " " + "Time TBD";
      }
    } else {
      slug = days;
      //return days;
    }

    slug = str.replace(/\s/g, slug);

    console.log(slug);
    return slug;
  }),*/
});
