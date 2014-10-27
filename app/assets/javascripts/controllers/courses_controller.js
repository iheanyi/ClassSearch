// for more details see: http://emberjs.com/guides/controllers/

App.CoursesController = Ember.ArrayController.extend(App.CourseFiltering, {
  sortProperties: ['courseNum', 'courseTitle'],
  model_link: "course",
});
