// for more details see: http://emberjs.com/guides/controllers/

App.ProfessorCoursesController = Ember.ArrayController.extend(App.CourseFiltering, {
  model_link: "professor.course",
});
