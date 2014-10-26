// for more details see: http://emberjs.com/guides/models/defining-models/
App.Department = DS.Model.extend({
  name: DS.attr('string'),
  tag: DS.attr('string'),
  courses: DS.hasMany('courses', {async: true})
});
