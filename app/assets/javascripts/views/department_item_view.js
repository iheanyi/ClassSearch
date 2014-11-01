// for more details see: http://emberjs.com/guides/views/

App.DepartmentItemView = Ember.View.extend({
  templateName: 'department_item',
  mouseEnter: function(evt) {
      hovered_dept = this.get('department');
      dept_courses = hovered_dept.get('courses');
      courses_length = dept_courses.content.content.length;
      if (courses_length == 0 && !hovered_dept.isReloading) {
        console.log("Reloading model.");
        hovered_dept.reload();
      } else {
        console.log("Courses have already been preloaded.");
        console.log(hovered_dept.id);
        console.log(dept_courses);
        console.log(hovered_dept.get('courses'));
      }
  },
});
