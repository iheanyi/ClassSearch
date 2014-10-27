App.CourseFiltering = Ember.Mixin.create({
    courses: function() {
      return this.get('search') ? this.get('filteredContent') : this
    }.property('search', 'filteredContent'),

    filteredContent: function() {
      var search = this.get('search').toLowerCase();
      return this.filter(function(course) {
        return course.get('title').toLowerCase().indexOf(search) != -1 || course.get('courseNum').toLowerCase().indexOf(search) != -1
      });
    }.property('search', 'this.courses.@each.title', 'this.courses.@each.courseNum')
})