// for more details see: http://emberjs.com/guides/controllers/

App.DepartmentController = Ember.Controller.extend({
  _courses: function() {
    console.log("In the filter.");
    courses = this.get('courses');
    return this.get('search') ? this.get('filteredContent') : this.courses
  }.property('search', 'filteredContent'),

  filteredContent: function() {
    var search = this.get('search').toLowerCase();
    return this.courses.filter(function(course) {
      return course.get('title').toLowerCase().indexOf(search) != -1 || course.get('courseNum').toLowerCase().indexOf(search) != -1
    });
  }.property('search', 'this.courses.@each.title', 'this.courses.@each.courseNum')
});
