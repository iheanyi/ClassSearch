// for more details see: http://emberjs.com/guides/views/

App.DepartmentItemView = Ember.View.extend({
  templateName: 'department_item',
  mouseEnter: function(evt) {
      hovered_dept = this.get('department');
      dept_courses = hovered_dept.get('courses');
      courses_length = dept_courses.content.content.length;
      if (courses_length == 0 && !hovered_dept.isReloading) {
        hovered_dept.reload();
      } else {

      }
  },
});
