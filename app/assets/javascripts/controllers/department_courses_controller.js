// for more details see: http://emberjs.com/guides/controllers/

App.DepartmentCoursesController = Ember.ArrayController.extend(App.CourseFiltering, {
  sortProperties: ['courseNum', 'title'],
  model_link: "department.course",
});
