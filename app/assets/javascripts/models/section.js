// for more details see: http://emberjs.com/guides/models/defining-models/

App.Section = DS.Model.extend({
  sectionNum: DS.attr('number'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date'),
  openSeats: DS.attr('number'),
  maxSeats: DS.attr('number'),
  daysOfWeek: DS.attr('string'),
  location: DS.attr('string'),
  professor: DS.belongsTo('professor', {async: true, embedded: 'always'}),
  professorFullName: function() {
    professor = this.get('professor');
    //console.log(professor);
    if(professor.firstName == "TBA") {
      return "TBA"
    } else {
      return professor.firstName + professor.lastName;
    }
  }.property('professor'),
  progressBar: function() {
    return Ember.String.htmlSafe('')
  },
  widthStyle: function() {
    open_seats = this.get('openSeats');
    max_seats = this.get('maxSeats');
    percentage = ((max_seats - open_seats) / max_seats) * 100;
    return 'width:' + percentage + '%;';
  }.property('openSeats', 'maxSeats'),
  getWidth: function() {
    open_seats = this.get('openSeats');
    max_seats = this.get('maxSeats');
    percentage = ((max_seats - open_seats) / max_seats) * 100;
    return Ember.String.htmlSafe("width:" + percentage + "%;");
  }.property('openSeats', 'maxSeats'),
  formatTimeSlot: function() {
    start = this.get('startTime');
    end = this.get('endTime');
    if(this.get('daysOfWeek') != 'TBA') {
      return moment(start).format("h:mmA") + ' - ' + moment(end).format("h:mmA");
    } else {
      return " ";
    }
  }.property('startTime', 'endTime'),
});
