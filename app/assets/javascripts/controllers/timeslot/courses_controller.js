// for more details see: http://emberjs.com/guides/controllers/

App.TimeslotCoursesController = Ember.ArrayController.extend(App.CourseFiltering, {
  sortProperties: ['courseNum', 'title'],
  model_link: "timeslot.course",
});
