// for more details see: http://emberjs.com/guides/models/defining-models/

App.Section = DS.Model.extend({
  sectionNum: DS.attr('number'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date'),
  openSeats: DS.attr('number'),
  maxSeats: DS.attr('number'),
  daysOfWeek: DS.attr('string'),
  location: DS.attr('string'),
  professor: DS.belongsTo('professor', {async: true}),
  course: DS.belongsTo('course', {embedded: 'always'}),
  crn: DS.attr('number'),
  inAgenda: false,
  courseFormat: Ember.computed('course', 'sectionNum', 'professor', function() {
    course = this.get('course');
    professor = this.get('professor');
    section = this;

    return {
      course_title: course.get("title"),
      professor_name: course.get("fullName"),
      sectionNum: this.get('sectionNum'),
      sectionID: this.get('id'),
      sect: this
    }
  }),
  eventFormat: Ember.computed('startTime', 'crn', 'endTime', 'sectionNum', 'course', 'professor', 'daysOfWeek', function() {
    course = this.get('course');
    professor = this.get('professor');
    section = this;
    events = [];
    if(this.get('daysOfWeek').indexOf("M") > -1) {
      new_event =     {
            title: course.get("title"), start: moment(section.get('startTime')).add(2, 'days'), end: moment(section.get('endTime')).add(2, 'days'), description: course.get('description'), section_id: section.get('id'), sect: section}
      events.push(new_event);
    }

    if(this.get('daysOfWeek').indexOf("T") > -1) {
      new_event =     {
            title: course.get("title"), start: moment(section.get('startTime')).add(3, 'days'), end: moment(section.get('endTime')).add(3, 'days'), description: course.get('description'), section_id: section.get('id'), sect: section}
      events.push(new_event);
    }

    if(this.get('daysOfWeek').indexOf("W") > -1) {
      new_event =     {
            title: course.get("title"), start: moment(section.get('startTime')).add(4, 'days'), end: moment(section.get('endTime')).add(4, 'days'), description: course.get('description'), section_id: section.get('id'), sect: section}
      events.push(new_event);
    }

    if(this.get('daysOfWeek').indexOf("R") > -1) {
      new_event =     {
            title: course.get("title"), start: moment(section.get('startTime')).add(5, 'days'), end: moment(section.get('endTime')).add(5, 'days'), description: course.get('description'), section_id: section.get('id'), sect: section}
      events.push(new_event);
    }

    if(this.get('daysOfWeek').indexOf("F") > -1) {
      new_event =     {
            title: course.get("title"), start: moment(section.get('startTime')).add(6, 'days'), end: moment(section.get('endTime')).add(6, 'days'), description: course.get('description'), section_id: section.get('id')}
      events.push(new_event);
    }

    console.log(events);
    return events;
  }),
  professorFullName: function() {
    professor = this.get('professor');
    console.log("Professor Full Name Helper");
    console.log(professor);
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
