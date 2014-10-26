// for more details see: http://emberjs.com/guides/models/defining-models/

App.Professor = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  sections: DS.hasMany('section', {async: true}),
  courses: DS.hasMany('course', {async: true}),
  sectionsCount: DS.attr('number'),
  coursesCount: DS.attr('number'),
  fullName: function() {
    return this.get('firstName') + ' '  + this.get('lastName');
  }.property('firstName', 'lastName'),
});
