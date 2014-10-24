// for more details see: http://emberjs.com/guides/controllers/

App.CoursesController = Ember.ArrayController.extend({
  sortProperties: ['course_num', 'course_title']

});
