// for more details see: http://emberjs.com/guides/controllers/

App.CoursesController = Ember.ArrayController.extend(App.CourseFiltering, {
  sortProperties: ['courseNum', 'courseTitle'],
  model_link: "course",
  arrayContentDidChange: function(start, removed, added) {
    console.log("Array content changed.");
    console.log(start + " " + removed + " " + added);
  },
});
