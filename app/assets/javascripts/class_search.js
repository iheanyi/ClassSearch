var apiURL = 'http://localhost:3000/api/departments.json'
var app = new Vue({
  el: '#app',

  filters: {

  },

  created: function() {
    self.courses = [];
    self.selected_course = {};
    self.selected_course.title = 'nothing';
    self.selected_course_name = 'Nothing';
    self.selected_course_credits = 3;
    //self.selected_course = null;
    this.fetchDeptData();
  },

  data: {
    courses: [],
    departments: [],
    selected_course: {
      title: '',
    },
    selected_course_name: 'Nothing',
    selected_course_credits: 3,
    sections: [],
    selected_course_description: 'This is just a boilerplate response for some description, this will be dynamically updated as I get more information and whatnot, so bear with me, this feature is still under construction, you know?',
  },

  methods: {
    fetchDeptData: function() {
      var xhr = new XMLHttpRequest(),
        self = this
      xhr.open('GET', apiURL);
      xhr.onload = function() {
        app.departments = JSON.parse(xhr.responseText);
      }
      xhr.send();
    },

    loadCourses: function(dept) {
      dept.preventDefault;
      //console.log(dept);
      //console.log(dept.courses);
      $('.dept-active').removeClass('dept-active');
      $(this).addClass('dept-active');
      console.log(dept);
      app.courses = dept.courses;
      $('.course-container').show();
    },

    loadSections: function(course) {
      course.preventDefault;
      console.log(course);
      app.selected_course = course;
      app.selected_course.title = course.title;
      app.selected_course_name = course.title;
      console.log(course.title);
      console.log(app.selected_course.title);
      console.log("selected");
      $('.section-container').show();
    }
  }
});

$(document).ready(function(){
  $(document).foundation();
});
