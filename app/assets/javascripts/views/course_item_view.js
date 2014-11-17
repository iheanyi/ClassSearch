// for more details see: http://emberjs.com/guides/views/

App.CourseItemView = Ember.View.extend({
  templateName: 'course_item',
  mouseEnter: function(evt) {

      hovered_course = this.get('course');
      course_sections = hovered_course.get('sections');
      sects_length = course_sections.content.content.length;
     // console.log(hovered_course.isReloading);
     //console.log(hovered_course.sections);
      if (sects_length == 0 && !hovered_course.isReloading) {
        console.log("Reloading!");
        hovered_course.reload();
      }

      //console.log(sections_array.length);
      //console.log(sections_array.length);
      //if(hovered_course.get('sections'));
  },
  mouseLeave: function(evt) {
  }
  //
});
