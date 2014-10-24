// for more details see: http://emberjs.com/guides/models/defining-models/

App.Course = DS.Model.extend({
  title: DS.attr('string'),
  courseNum: DS.attr('string'),
  credits: DS.attr('number'),
  sectionsCount: DS.attr('number'),
  courseDescription: DS.attr('string'),
  department: DS.belongsTo('department')
});
