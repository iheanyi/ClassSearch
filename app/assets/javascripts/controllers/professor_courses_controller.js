// for more details see: http://emberjs.com/guides/controllers/

App.ProfessorCoursesController = Ember.ArrayController.extend(App.CourseFiltering, {
  sortProperties: ['courseNum', 'title'],
  model_link: "professor.course",
});
