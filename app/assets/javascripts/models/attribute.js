// for more details see: http://emberjs.com/guides/models/defining-models/

App.Attribute = DS.Model.extend({
  tag: DS.attr('string'),
  name: DS.attr('string'),
  courses: DS.hasMany('courses', {async: true, embedded: 'always'})
});
