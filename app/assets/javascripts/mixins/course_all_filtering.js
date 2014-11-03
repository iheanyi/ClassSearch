App.CourseAllFiltering = Ember.Mixin.create({
    courses: function() {
      console.log(this);
      console.log("Showing courses!");
      var array = [];
      var search_text = this.get('search');
       if(this.get('search')) {
        return search_text.length >= 3 ? this.get('filteredContent') : array;
       } else {
        return array;
       }

      //return this.get('search') ? this.get('filteredContent') : []
    }.property('search', 'filteredContent'),

    filteredContent: function() {
      var search = this.get('search').toLowerCase();
      return this.filter(function(course) {
        return course.get('title').toLowerCase().indexOf(search) != -1 || course.get('courseNum').toLowerCase().indexOf(search) != -1
      });
    }.property('search', 'this.courses.@each.title', 'this.courses.@each.courseNum')
})