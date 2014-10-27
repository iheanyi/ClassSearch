// for more details see: http://emberjs.com/guides/controllers/

App.AttributeCoursesController = Ember.ArrayController.extend(App.CourseFiltering, {
    sortProperties: ['courseNum', 'title'],
    model_link: "attribute.course",
});
