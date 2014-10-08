var apiURL = 'http://localhost:3000/api/departments.json'
var courseURL = 'http://localhost:3000/api/departments'
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
    custom_course: [],
    sections: [],
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
      self = this;
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
      console.log(dept.tag);
      app.courses = dept.courses;
      this.fetchCourseData(dept.tag);
      $('.course-container').show();
    },

    fetchCourseData: function(tag) {
      var xhr = new XMLHttpRequest();
      self = this;
      xhr.open('GET', courseURL + '/' + tag + '/courses.json');
      xhr.onload = function() {
        app.current_courses = JSON.parse(xhr.responseText);
        app.courses = app.current_courses;
        console.log(app.custom_courses);
        console.log("Loaded");
        console.log(app.courses);
      }

      xhr.send();


    },

    loadSections: function(course) {
      course.preventDefault;
      console.log(course.$data);
      app.selected_course = course.$data;
      app.sections = course.sections;
      $('.section-container').show();
    }
  }
});

$(document).ready(function(){
  $(document).foundation();
});
